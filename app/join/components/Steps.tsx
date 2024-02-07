import React from "react";

export default function Steps() {
  return (
    <section className="steps">
      <div className="auto__container sm">
        <div className="steps__inner">
          <div className="steps__inner-title">
            <h2 className="big">Let your Beauty set you Free</h2>
            <p>Become the hero of your product’s story…</p>
          </div>
          <div className="steps__inner-row">
            <div className="steps__inner-line">
              <img src="/images/join/steps-line.svg" alt="" />
            </div>
            <div className="stepsItem">
              <div className="stepsItem__bg">
                <img src="/images/join/step-bg.png" alt="" />
                <img
                  className="dark"
                  src="/images/join/step-bg-hover.png"
                  alt=""
                />
              </div>
              <div className="stepsItem__inner">
                <h2 className="sm">Step 1</h2>
                <p>Publish a promotional product image to tell your story</p>
              </div>
            </div>
            <div className="stepsItem">
              <div className="stepsItem__bg">
                <img src="/images/join/step-bg.png" alt="" />
                <img
                  className="dark"
                  src="/images/join/step-bg-hover.png"
                  alt=""
                />
              </div>
              <div className="stepsItem__inner">
                <h2 className="sm">Step 2</h2>
                <p>Engage with an audience who resonate with your ideas</p>
              </div>
            </div>
            <div className="stepsItem">
              <div className="stepsItem__bg">
                <img src="/images/join/step-bg.png" alt="" />
                <img
                  className="dark"
                  src="/images/join/step-bg-hover.png"
                  alt=""
                />
              </div>
              <div className="stepsItem__inner">
                <h2 className="sm">Step 3</h2>
                <p>
                  Elevate your beauty score and unlock the power of storytelling
                </p>
              </div>
            </div>
          </div>
          <div className="steps__inner-foot">
            <p>
              Telling a compelling story allows you to validate new creative
              ideas and enhance your social status. <br /> We’re the only place
              to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
