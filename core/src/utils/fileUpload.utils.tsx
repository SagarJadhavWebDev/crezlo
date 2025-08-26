import {
  S3Client,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { envConstants } from "../constants";

// Environment variables
const ACCOUNT_ID = envConstants.R2.ACCOUNT_ID;
const S3_BUCKET = envConstants.R2.BUCKET;
const ACCESS_KEY = envConstants.R2.KEY_ID;
const SECRET_KEY = envConstants.R2.SECRET_KEY;

const input = {
  // PutBucketCorsRequest
  Bucket: S3_BUCKET, // required
  CORSConfiguration: {
    CORSRules: [
      {
        AllowedHeaders: ["*"],
        AllowedMethods: ["PUT", "POST", "HEAD", "GET"],
        AllowedOrigins: ["http://localhost:3000"],
        ExposeHeaders: [],
        MaxAgeSeconds: 3000,
      },
    ],
  },
};

// Configure S3 client for Cloudflare R2
const s3Client = new S3Client({
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  region: "auto", // Cloudflare R2 doesn't use regions, but required by SDK
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, // hashedSecretKey,
  },
  // @ts-ignore
  signatureVersion: "v4",
});

const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB per chunk

// Function to create file chunks
const createChunks = (file: File): Blob[] => {
  if (!(file instanceof File)) {
    throw new Error("Invalid file object provided");
  }
  const chunks: Blob[] = [];
  let currentByte = 0;

  while (currentByte < file.size) {
    const chunk = file.slice(currentByte, currentByte + CHUNK_SIZE);
    chunks.push(chunk);
    currentByte += CHUNK_SIZE;
  }
  return chunks;
};

export const uploadFileInChunks = async (
  file: File,
  fileName: string,
  fileType: string,
  uniqueFileKey: string,
  setProgress: (progress: Record<string, number>) => void,
  folderName: string = new Date(Date.now()).toLocaleDateString("en-GB")
): Promise<string> => {
  const chunks = createChunks(file);
  console.log("Starting upload to bucket:", S3_BUCKET);
  const uploadId = await initiateMultipartUpload(fileName, fileType, folderName, file);
  const uploadPromises = chunks.map((chunk, index) =>
    uploadChunk(uploadId, chunk, index + 1, fileName, folderName).then((part) => {
      const progress = Math.round(((index + 1) / chunks.length) * 100);
      setProgress({ [uniqueFileKey]: progress });
      return part;
    })
  );

  try {
    const parts = await Promise.all(uploadPromises);
    const result = await completeMultipartUpload(uploadId, parts, fileName, folderName);
    setProgress({ [uniqueFileKey]: 100 });
    return result;
  } catch (error) {
    console.error("Upload failed:", error);
    await abortMultipartUpload(uploadId, fileName, folderName);
    throw error;
  }
};

// Initiate multipart upload
const initiateMultipartUpload = async (fileName: string, fileType: string, folderName: string, file: any): Promise<string> => {
  
  const command = new CreateMultipartUploadCommand({
    Bucket: S3_BUCKET,
    Key: `${folderName}${fileName}`,
    ContentType: fileType,
    ACL: "public-read",
    ...input.CORSConfiguration,
  });
  try {
    const response = await s3Client.send(command);
    if (!response.UploadId) {
      throw new Error("UploadId not returned from R2");
    }
    return response.UploadId;
  } catch (error) {
    console.error("Failed to initiate multipart upload:", error);
    throw error;
  }
};

// Upload a single chunk
const uploadChunk = async (
  uploadId: string,
  chunk: Blob,
  partNumber: number,
  fileName: string,
  folderName: string
): Promise<{ ETag: string; PartNumber: number }> => {
  const chunkArrayBuffer = await chunk.arrayBuffer();
  const chunkUint8Array = new Uint8Array(chunkArrayBuffer);

  const command = new UploadPartCommand({
    Bucket: S3_BUCKET,
    Key: `${folderName}${fileName}`,
    PartNumber: partNumber,
    UploadId: uploadId,
    Body: chunkUint8Array,
    ...input.CORSConfiguration,
  });

  try {
    const response = await s3Client.send(command);
    if (!response.ETag) {
      throw new Error(`No ETag returned for part ${partNumber}`);
    }
    return {
      ETag: response.ETag,
      PartNumber: partNumber,
    };
  } catch (error) {
    console.error(`Failed to upload part ${partNumber}:`, error);
    throw error;
  }
};

// Complete multipart upload
const completeMultipartUpload = async (
  uploadId: string,
  parts: { ETag: string; PartNumber: number }[],
  fileName: string,
  folderName: string
): Promise<string> => {
  const sortedParts = parts.sort((a, b) => a.PartNumber - b.PartNumber);
  const command = new CompleteMultipartUploadCommand({
    Bucket: S3_BUCKET,
    Key: `${folderName}${fileName}`,
    UploadId: uploadId,
    MultipartUpload: { Parts: sortedParts },
    ...input.CORSConfiguration,
  });

  try {
    const response = await s3Client.send(command);
    if (!response.Key) {
      throw new Error("No Key returned after completing upload");
    }
    return response.Key;
  } catch (error) {
    console.error("Failed to complete multipart upload:", error);
    throw error;
  }
};

// Abort multipart upload
const abortMultipartUpload = async (uploadId: string, fileName: string, folderName: string): Promise<void> => {
  const command = new AbortMultipartUploadCommand({
    Bucket: S3_BUCKET,
    Key: `${folderName}${fileName}`,
    UploadId: uploadId,
    ...input.CORSConfiguration,
  });

  try {
    await s3Client.send(command);
  } catch (error) {
    console.error("Failed to abort multipart upload:", error);
    throw error;
  }
};

// Delete file
export const deleteFile = async (filepath: string, onProgress?: (progress: any) => void): Promise<{ ETag?: string }> => {
  const command = new DeleteObjectCommand({
    Bucket: S3_BUCKET,
    Key: filepath,
    ...input.CORSConfiguration,
  });

  try {
    const response = await s3Client.send(command);
    // Optionally call onProgress if provided
    if (onProgress) {
      onProgress({ loaded: 1, total: 1 });
    }
    return { ETag: response.DeleteMarker?.toString() };
  } catch (error) {
    console.error("Failed to delete file:", error);
    throw error;
  }
};
