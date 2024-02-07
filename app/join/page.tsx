"use client";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Brands from "./components/Brands";
import Master from "./components/Master";
import Place from "./components/Place";
import Proud from "./components/Proud";
import Steps from "./components/Steps";
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";
export default function Join() {
  const [modal, setModal] = useState<string | null>(null);
  return (
    <>
      <Header2 modal={modal} setModal={setModal} />
      <Hero setModal={setModal} />
      <Story setModal={setModal} />
      <Brands />
      <Master />
      <Place setModal={setModal} />
      <Steps />
      <Proud setModal={setModal} />
      <Footer2 />
    </>
  );
}
