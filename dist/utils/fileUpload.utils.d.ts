export declare const uploadFileInChunks: (file: File, fileName: string, fileType: string, uniqueFileKey: string, setProgress: (progress: Record<string, number>) => void, folderName?: string) => Promise<string>;
export declare const deleteFile: (filepath: string, onProgress?: (progress: any) => void) => Promise<{
    ETag?: string;
}>;
