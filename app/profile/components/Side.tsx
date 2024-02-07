import React from "react";
import { readFile } from "@/app/components/FileReader";
import { editIcon, linktrIcon, tickIcon } from "@/app/components/SVG";
import Image from "next/image";
import Loader from "@/app/components/Loader";

export default function Side({form, updateForm, isLoading}:{
  form: any,
  updateForm: any
  isLoading: boolean
}) {

  const inputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    previewImage(e.target.files[0]);
  };

  const previewImage = (file: any) => {
    if (file) {
      readFile({
        file: file,
        onLoad: (result: any) => onLoad(result, file),
      });
    }
  };

  const onLoad = (resultImage: any, imageFile: any) => {
    updateForm({
      avatar: resultImage,
      imageFile
    });
  };

  return (
    <div className="profileSide">
    <div className="profileSide__avatar">
    {isLoading ? <Loader/>: <Image src={`${form.avatar}`} alt="" fill /> }
      <div className="profileSide__avatar-edit">
        {editIcon}
        <input type="file" multiple={false} onChange={inputChange} />
      </div>
    </div>
    <div className="profileSide__info">
      <div className="profileSide__name">
        <h2>{form.username}</h2> <span>{tickIcon}</span>
      </div>
      <a href="#" className="profileSide__link">
        {form.email}
      </a>
      <p>{form.description}</p>
      <a href="#" className="profileSide__linktr">
        {linktrIcon} {form.productLink}
      </a>
    </div>
  </div>
  );
}
