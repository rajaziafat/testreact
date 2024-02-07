"use client";

import React, { useState } from "react";
import Upload from "./components/Upload";
import { chevronLeft, tickIcon } from "../components/SVG";
import More from "./components/More";
import General from "./components/General";
import Link from "next/link";
import useProduct from "@/lib/hooks/useProduct";
import { motion } from "framer-motion";

const reqList = [
  {
    id: "1",
    text: "Only images that include a person or part of a person merged with a product are accepted.",
  },
  {
    id: "2",
    text: "Respect the property of other people.",
  },
  {
    id: "3",
    text: "No overly erotic images will be accepted.",
  },
  {
    id: "4",
    text: "Only high-quality images will be accepted in 9:16 format with a minimum resolution of 2160x3840 pixels. With good lighting.",
  },
];

export default function AddProductPage() {
  const { isLoading, create,  form, setForm } = useProduct();

  const updateForm = (data: any) => {
    setForm((form: any) => ({ ...form, ...data }));
  };

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
      <div className="addProduct">
        <div className="auto__container">
          <div className="addProduct__inner">
            <div className="upload__row">
              <Upload form={form} updateForm={updateForm} />
              <div className="upload__list">
                {reqList.map((item: any, index: number) => {
                  return (
                    <div className="upload__list-item" key={index}>
                      {tickIcon} {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
            <More />
            <General 
              form={form}
              updateForm={updateForm}
              isLoading={isLoading}
              handleCreateProduct={create} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
