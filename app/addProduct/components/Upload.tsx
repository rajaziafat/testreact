import { readFile } from "@/app/components/FileReader";
import { imageIcon } from "@/app/components/SVG";
import React, { DragEvent, useState } from "react";

export default function Upload({
  form,
  updateForm,
}: {
  form: any;
  updateForm: any;
}) {
  const [isOver, setIsOver] = useState(false);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    previewImage(e.target.files[0]);
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    previewImage(e.dataTransfer.files[0]);
  };
  const onLoad = (resultImage: any, imageFile: any) => {
    updateForm({
      image: resultImage,
      imageFile,
    });
  };
  const previewImage = (file: any) => {
    if (file) {
      readFile({
        file: file,
        onLoad: (result: any) => onLoad(result, file),
      });
    }
  };
  return (
    <div
      className="upload"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" multiple={false} onChange={inputChange} />

      <div
        className="upload__inner"
        style={{
          backgroundColor: isOver ? "#fff" : "fff6f5",
        }}
      >
        {form.image ? (
          <div className="upload__image">
            <img src={form.image} alt="" />
          </div>
        ) : (
          <div className="upload__content">
            <div className="upload__icon">{imageIcon}</div>
            <h2 className="sm">Add Product Image</h2>
            <h4>Press here and add to image</h4>
          </div>
        )}
      </div>
    </div>
  );
}
