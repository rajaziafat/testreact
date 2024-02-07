"use client";

import React from "react";
import General from "./components/General";
import Info from "./components/Info";
import Products from "./components/Products";
import { chevronLeft } from "../../components/SVG";
import Link from "next/link";
import { useParams } from "next/navigation";
import useUser from "@/lib/hooks/useUser";
import Loader from "@/app/components/Loader";

export default function User() {
  const { id } = useParams();
  const {isLoading, user, setSortQuery} = useUser(id as string);

  return (
    <div>
      {isLoading ? <Loader /> : 
      <div>
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
      <div className="user">
        <div className="auto__container">
          <div className="user__inner">
            <General user={user} />
            <Info user={user} />
            {user.products.length && <Products products={user.products} setSortQuery={setSortQuery} /> }
          </div>
        </div>
      </div>
      </div>
    }
    </div>
  );
}
