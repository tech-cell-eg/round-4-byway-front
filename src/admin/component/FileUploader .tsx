// components/FileUploader.tsx
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { ImageUp } from "lucide-react";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,

    accept: undefined,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className="leading-[40px] my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px] cursor-pointer transition hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        <div className="flex justify-center my-3">
          <ImageUp color="#0F172A" />
        </div>
        <h3 className="text-center text-[18px] text-black font-bold">
          {isDragActive ? (
            <span>put file here....</span>
          ) : (
            <>
              Drag and Drop files, or{" "}
              <span className="text-[#3B82F6]">Browse</span>
            </>
          )}
        </h3>
        <p className="text-center text-grey-900 font-[400] text-[14px]">
          Upload Thumbnail in JPEG, PNG, PDF, DOCX, etc.
        </p>
      </div>

      {file && (
        <div className="mt-4 max-w-3xl bg-white p-4 border border-gray-300 rounded-[15px]">
          <p className="text-gray-700 mb-2 font-semibold">📂 الملف المرفوع:</p>


          {file.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded Preview"
              className="max-h-64 rounded-md border mb-2"
            />
          )}

          <p className="text-gray-600">{file.name}</p>
        </div>
      )}
    </>
  );
};

export default FileUploader;
