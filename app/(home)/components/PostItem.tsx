import { eye, globeIcon, plusIcon, starIcon, userIcon } from "@/app/components/SVG";
import Link from "next/link";
import React, { useRef } from "react";
import Share from "./Share";
import Image from "next/image";
import { BASE_URL } from "@/lib/api";
import useProduct from "@/lib/hooks/useProduct";

export default function PostItem(props: {
  data: Product
  isActive: any;
  setIsActive: any;
}) {
  const wrapper = useRef<any>(null);

  const user = (typeof(props.data.userId) === "object") ? props.data.userId : {
    _id: "",
    avatar: "",
    username: "",
    productLink: ""
  }

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
            wrapper={wrapper}
            imageUrl={`${BASE_URL}${props.data.imageUrl}`}
            url={props.data.url}
            id={props.data._id}
            name={props.data.title}
          />
          {/* <button type="button" className="postItem__btn">
            <span>{shareIcon}</span>
            Share
          </button> */}
          <button type="button" className="postItem__btn" onClick={() => likePeople(user._id)}>
            <span>{userIcon}</span>
            Like Person
          </button>
          <button type="button" className="postItem__btn" onClick={() => follow(user._id)}>
            <span>{plusIcon}</span>
            Follow
          </button>
        </div>
        <div className="postItem__info">
          <div className="postItem__info-head">
            <div className="postItem__info-content">
              <div className="postItem__info-avatar">
                <img src={`${BASE_URL}${user.avatar}`} alt="avatar" />
              </div>
              <div className="postItem__info-gen">
                <h6 className="sm">
                  <Link href={`/user/${user._id}`}>{user.username}</Link> {user.username}
                </h6>
                <p className="sm">
                  {eye} {props.data.viewCount} Views
                </p>
              </div>
            </div>
            <div className="postItem__info-tags">
              <span>{props.data.price}$</span>
              <Link href={props.data.url} target="_blank">{globeIcon} Visit</Link>
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
