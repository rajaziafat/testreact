import React from "react";
import Details from "./Details";
import Password from "./Password";
import Delete from "./Delete";
import { instagramIcon } from "@/app/components/SVG";
import Link from "next/link";

export default function Main({
  form,
  updateForm,
  isLoading,
  updateProfile
}:{
  form: any,
  updateForm: any,
  isLoading: boolean,
  updateProfile: () => Promise<true | undefined>
}) {
  return (
    <div className="profileMain">
      <Link
        target="_blank"
        href="https://www.instagram.com/nicoinblack"
        className="header__inner-link insta"
      >
        {instagramIcon}
        Give Feedback
      </Link>
      <Details form={form} updateForm={updateForm} isLoading={isLoading} updateProfile={updateProfile} />
      <Password />
      <Delete />
    </div>
  );
}
