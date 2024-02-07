"use client";
import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import ProductItem from "./ProductItem";

const productList = [
  {
    id: "1",
    image: "/images/gallery/1.jpg",
  },
  {
    id: "2",
    image: "/images/gallery/2.jpg",
  },
  {
    id: "3",
    image: "/images/gallery/3.jpg",
  },
  {
    id: "4",
    image: "/images/gallery/4.jpg",
  },
  {
    id: "5",
    image: "/images/gallery/5.jpg",
  },
  {
    id: "6",
    image: "/images/gallery/6.jpg",
  },
  {
    id: "7",
    image: "/images/gallery/7.jpg",
  },
  {
    id: "8",
    image: "/images/gallery/8.jpg",
  },
];
const sortList = [
  {
    id: "most_popular",
    value: "Most Popular",
  },
  {
    id: "less_popular",
    value: "Less Popular",
  },
];
export default function Products({products, setSortQuery}:{
  products: Product[],
  setSortQuery: any
}) {
  const [isActive, setIsActive] = useState<any>(false);

  return (
    <div className="product">
      <div className="product__head">
        <h2 className="sm">Our Products</h2>
        <div className="productFilter">
          <h6>Store By :</h6>
          <CustomSelect
            list={sortList}
            selected={sortList[0]}
            onChange={(value: any) => {
              setSortQuery(value.id);
            }}
          />
        </div>
      </div>
      <div className="product__inner">
        {products.map((item: Product) => {
          return <ProductItem data={item}  isActive={isActive} setIsActive={setIsActive} key={item._id} />;
        })}
      </div>
    </div>
  );
}
