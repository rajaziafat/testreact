"use client";

import React, { useState } from "react";
import Post from "./components/Post";
import useHome from "@/lib/hooks/useHome";
import Loader from "../components/Loader";

export default function Home() {
  const { products, isLoading } = useHome();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 1;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      document.getElementById("header")?.classList.remove("active");
    }
    if (isRightSwipe) {
      document.getElementById("header")?.classList.add("active");
    }
  };

  return (
    <div className="post">
      <div className="auto__container">
        <div
          className="post__inner"
          id="scrollable"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >{isLoading ? <Loader /> : <Post products={products} />}
        </div>
      </div>
    </div>
  );
}
