import { eye, globeIcon, plusIcon, starIcon, userIcon } from "@/app/components/SVG";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { BASE_URL } from "@/lib/api";
import useProduct from "@/lib/hooks/useProduct";
import Share from "@/app/(home)/components/Share";

export default function ProductItem(props: {
  data: Product
  isActive: any;
  setIsActive: any;
}) {
  const wrapper = useRef<any>(null);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!wrapper.current.contains(e.target)) {
      if (props.isActive === props.data._id) props.setIsActive(null);
      else {
        props.setIsActive(props.data._id);
      }
    }
  };

  const {likePeople, likeProduct, follow} = useProduct();
  
  return (
    <div
      className={"postItem " + (props.isActive === props.data._id ? "mobActive" : "")}
      onClick={onClick}
    >
      <div className="postItem__image">
        <Image className="postItem__image" src={`${BASE_URL}${props.data.imageUrl}`} alt="" width={400} height={800} />
      </div>
      <div className="postItem__inner">
        <div className="postItem__btns">
          <button type="button" className="postItem__btn" onClick={() => likeProduct(props.data._id)}>
            <span>{starIcon}</span>
            Like Product
          </button>
          <Share
            url={props.data.url}
            wrapper={wrapper}
            imageUrl={`${BASE_URL}${props.data.imageUrl}`}
            id={props.data._id}
            name={props.data.title}
          />
          {/* <button type="button" className="postItem__btn">
            <span>{shareIcon}</span>
            Share
          </button> */}
          <button type="button" className="postItem__btn" onClick={() => likePeople(props.data.userId.toString())}>
            <span>{userIcon}</span>
            Like Person
          </button>
          <button type="button" className="postItem__btn" onClick={() => follow(props.data.userId.toString())}>
            <span>{plusIcon}</span>
            Follow
          </button>
        </div>
        <div className="postItem__info">
          <div className="postItem__info-head">
            <div className="postItem__info-content">
              <div className="postItem__info-gen">
                <p className="sm">
                  {eye} {props.data.viewCount} Views
                </p>
              </div>
            </div>
            <div className="postItem__info-tags">
              <span>{props.data.price}$</span>
              <Link href={props.data.url}>{globeIcon} Visit</Link>
            </div>
          </div>
          <div className="postItem__info-body">
            <h4>{props.data.title}</h4>
            <p>{props.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
