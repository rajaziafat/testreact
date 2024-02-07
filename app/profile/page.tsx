"use client";

import React from "react";
import Side from "./components/Side";
import Main from "./components/Main";
import { chevronLeft } from "../components/SVG";
import Link from "next/link";
import { motion } from "framer-motion";
import useProfile from "@/lib/hooks/useProfile";


export default function Profile() {
  const {form, updateForm, isLoading, updateProfile} = useProfile();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <div className="upHeader">
        <div className="auto__container">
          <div className="upHeader__inner">
            <Link href="/" className="back">
              {chevronLeft}
            </Link>
            <Link href="/" className="upHeader__inner-logo">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="auto__container">
          <div className="profile__inner">
            <Side form={form} updateForm={updateForm} isLoading={isLoading} />
            <Main form={form} updateForm={updateForm} isLoading={isLoading} updateProfile={updateProfile} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
