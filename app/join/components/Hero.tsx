import React from "react";

export default function Hero({ setModal }: { setModal: any }) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="/images/join/hero/hero-bg.png" alt="" />
        <div className="hero__bg-wave">
          <img src="/images/join/hero/wave.png" alt="" />
        </div>
      </div>
      <div className="auto__container sm">
        <div className="hero__inner">
          <div className="hero__inner-content">
            <h1>
              What Happens when You Showcase your Products and share the Story
              that Brought them to life?
            </h1>
            <p className="big">The only place to narrate your product…</p>
            <a href="#" onClick={()=>setModal("signup")} className="button primary">
              JOIN US NOW!
            </a>
          </div>
          <div className="hero__inner-row">
            <div className="heroImage">
              <div className="heroImage__icon">
                <img src="/images/join/hero/glasses.png" alt="" />
              </div>
              <div className="heroImage__inner">
                <img src="/images/join/hero/1.jpg" alt="" />
              </div>
            </div>
            <div className="heroImage sm">
              <div className="heroImage__icon">
                <img src="/images/join/hero/lipstick.png" alt="" />
              </div>
              <div className="heroImage__inner">
                <img src="/images/join/hero/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
