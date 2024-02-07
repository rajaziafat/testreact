import { linktrIcon, tickIcon } from "@/app/components/SVG";
import { BASE_URL } from "@/lib/api";
import useProduct from "@/lib/hooks/useProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function General({user}:{user: any}) {
  const {follow} = useProduct();
  
  return (
    <div className="general">
      <div className="general__inner">
        <div className="general__inner-image">
          <Image src={`${BASE_URL}${user.avatar}`} fill alt="" />
        </div>
        <div className="general__inner-content">
          <div className="general__inner-text">
            <h2>{user.username} {tickIcon}</h2>
            <p>
              {user.description}
            </p>
            <Link href="">{linktrIcon} {user.productLink}</Link>
          </div>
          <button type="button" className="button light" onClick={
            () => follow(user.id)
          }>
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
}
