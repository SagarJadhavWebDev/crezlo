"use client";
import { InputHTMLAttributes, useRef, useState } from "react";
import { X, RotateCcw } from "lucide-react";
import { FormFieldWrapper } from "./FormFieldWrapper";

type FileItem = {
  id: string;
  file: File;
  progress: number;
  status: "pending" | "uploading" | "success" | "error";
};

export type MultiFileUploaderProps   = {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  required?: boolean;
  onUpload?: (
    file: File,
    onProgress: (progress: number) => void
  ) => Promise<void>;
} & InputHTMLAttributes<HTMLInputElement>;

export function MultiFileUploader({
  label,
  tooltip,
  supportingText,
  error,
  success,
  required,
  onUpload,
  ...props
}: MultiFileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFilesAdded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []).map((file) => ({
      id: `${file.name}-${Date.now()}`,
      file,
      progress: 0,
      status: "pending" as const,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    newFiles.forEach(uploadFile);
  };

  const uploadFile = async (fileItem: FileItem) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileItem.id ? { ...f, status: "uploading", progress: 0 } : f
      )
    );

    try {
      await onUpload?.(fileItem.file, (progress) => {
        setFiles((prev) =>
          prev.map((f) => (f.id === fileItem.id ? { ...f, progress } : f))
        );
      });

      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileItem.id ? { ...f, status: "success", progress: 100 } : f
        )
      );
    } catch (err) {
      setFiles((prev) =>
        prev.map((f) => (f.id === fileItem.id ? { ...f, status: "error" } : f))
      );
    }
  };

  const handleRemove = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleRetry = (fileItem: FileItem) => {
    uploadFile(fileItem);
  };

  return (
    <FormFieldWrapper
      label={label}
      tooltip={tooltip}
      required={required}
      error={error}
      success={success}
      supportingText={supportingText}
    >
      <div className="space-y-2">
        <input
          type="file"
         
          ref={fileInputRef}
          onChange={handleFilesAdded}
          className="hidden"
          {...props}
        />
        <input
          //   type="file"
          onClick={() => fileInputRef.current?.click()}
          className=" form-input w-full rounded-lg focus:ring-violet-500 border-gray-300   cursor-pointer"
          placeholder="Select file"
          readOnly={true}
        />

        <ul className="space-y-1">
          {files.map((fileItem) => (
            <li
              key={fileItem.id}
              className="bg-gray-100 dark:bg-gray-800 p-1 px-2 rounded-md flex items-center justify-between"
            >
              <div className="flex-1 pr-4">
                <div className="font-medium text-sm">{fileItem.file.name}</div>
                <div className="text-xs text-gray-500">
                  {(fileItem.file.size / 1024).toFixed(2)} KB
                </div>

                {fileItem.status === "uploading" && (
                  <div className="w-full h-1.5 bg-gray-300 rounded mt-2">
                    <div
                      className={`h-1.5 rounded ${"bg-indigo-500"}`}
                      style={{ width: `${fileItem.progress}%` }}
                    />
                  </div>
                )}
                <div
                  className={`text-xs mt-1 text-gray-500  ${
                    fileItem.status === "error"
                      ? "text-red-500"
                      : fileItem.status === "success"
                      ? "text-green-500"
                      : "text-indigo-400"
                  }
                          `}
                >
                  {fileItem.status === "uploading" && "Uploading..."}
                  {/* {fileItem.status === "success" && "Uploaded successfully"} */}
                  {fileItem.status === "error" && "Upload failed"}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {fileItem.status === "error" && (
                  <button
                    className="text-yellow-500 hover:text-yellow-600"
                    onClick={() => handleRetry(fileItem)}
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleRemove(fileItem.id)}
                >
                  <X size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </FormFieldWrapper>
  );
}
