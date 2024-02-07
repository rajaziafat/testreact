"use client";

import React, {useEffect, useState} from "react";
import PostItem from "@/app/(home)/components/PostItem";
import { postList } from "@/app/components/Modul";
import Link from "next/link";
import { chevronLeft } from "@/app/components/SVG";

export default async function Page({ params }: { params: { id: string } }) {
  const [isActive, setIsActive] = useState<any>(false);
  const [itemData, setItemData] = useState<any>(null);
  
  useEffect(() => {
    if (params.id) {
      setItemData(postList.filter((item: any) => item.id === params.id)[0]);
    }
  }, [params.id]);

  return (
    <div className="centered">
      <div className="auto__container">
        <div className="centered__inner">
          <Link className="back" href="/">
            {chevronLeft}
          </Link>
          {itemData && (
            <PostItem
              {...itemData}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          )}
        </div>
      </div>
    </div>
  );
}
