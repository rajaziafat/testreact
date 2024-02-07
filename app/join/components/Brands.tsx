"use client"
import React, { useState } from "react";

export default function Brands() {
  const [tab, setTab] = useState("showcase");

  return (
    <section className="brands" id="brands">
      <div className="auto__container sm">
        <div className="brands__inner">
          <div className="brands__inner-content">
            <div className="circle"></div>
            <div className="brands__inner-title">
              <h2 className="big">Stories become personal brands</h2>
              <p>
                When you’re looking to showcase yourself on highly congested
                social platforms, you never really know if the traffic likes you
                or the product. We do things differently with real, authentic
                storytelling that’s all about sharing new creations with the
                world.
              </p>
            </div>
            <div className="brands__inner-tab">
              <div
                className={"brandsItem " + (tab === "showcase" ? "active" : "")}
                onClick={() => setTab("showcase")}
              >
                <h2 className="sm">Showcase A New Look</h2>
                <p>
                  Maybe it’s your own style refresh; or perhaps it’s the result
                  of a product partnership? You decide how you want to be seen…
                </p>
              </div>
              <div
                className={
                  "brandsItem " + (tab === "constantly" ? "active" : "")
                }
                onClick={() => setTab("constantly")}
              >
                <h2 className="sm">Constantly Grow Your Following</h2>
                <p>
                  Validating your personal style choices improves your social
                  status, grows your following, and gives you more power to
                  showcase new products.
                </p>
              </div>
            </div>
          </div>
          <div className="brands__inner-image-wrapper">
            <div className="brands__inner-image">
              <img src="/images/join/brands.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
