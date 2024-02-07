import React, { useState } from "react";
import PostItem from "./PostItem";
import { postList } from "@/app/components/Modul";

interface PostProps {
  products: Product[]
}

export default function Post({ products }: PostProps) {
  const [isActive, setIsActive] = useState<any>(false);
  
  return (
    <div className="post__row">
      {products.length ? products.map((item, index) => {
        return (
          <PostItem
            data={item}
            key={index}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      }) : <span>No products have been created yet!</span>
    }
    </div>
  );
}
