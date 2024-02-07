"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { closeIcon } from "./SVG";

export default function Modal({
  setModal,
  modal,
  children,
}: {
  setModal: Dispatch<SetStateAction<any>>;
  modal: any;
  children: React.ReactNode;
}) {
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) setModal(false);
  };
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [modal]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className="modal"
      onClick={closeModal}
    >
      <div className="modal__inner">
        <div onClick={() => setModal(null)} className="modal__close">
          {closeIcon}
        </div>
        {children}
      </div>
    </motion.div>
  );
}
