import { growIcon, listenIcon, publishIcon } from "@/app/components/SVG";
import React from "react";

export default function Story({ setModal }: { setModal: any }) {
  return (
    <section className="story" id="story">
      <div className="story__line">
        <img src="/images/join/story-line.svg" alt="" />
      </div>
      <div className="auto__container sm">
        <div className="story__inner">
          <div className="story__inner-row">
            <div className="story__inner-col">
              <div className="storyItem">
                <div className="storyItem__icon">{publishIcon}</div>
                <h6>Publish</h6>
                <p className="sm">
                  Take your images live and put them in front of the eyes of a
                  global audience.
                </p>
              </div>
              <div className="storyItem">
                <div className="storyItem__icon">{listenIcon}</div>
                <h6>Listen</h6>
                <p className="sm">
                  Visitors can connect with you, rate your products, and even
                  like your personal branding.
                </p>
              </div>
            </div>
            <div className="story__inner-col">
              <div className="storyItem">
                <div className="storyItem__icon">{growIcon}</div>
                <h6>Grow</h6>
                <p className="sm">
                  See what happens when you showcase your products and
                  consistently grow in popularity.
                </p>
              </div>
            </div>
          </div>
          <div className="story__inner-content">
            <div className="circle"></div>
            <h2 className="big">
              Every product has a story waiting to be heard
            </h2>
            <p className="big">
              is the place to be when you want to showcase new products, build
              your personal popularity, and do it all with real authenticity.
              We’re built differently to everything else because we’re focused
              on telling stories. Here’s how it works:
            </p>
            <a
              href="#"
              onClick={() => setModal("signup")}
              className="button primary marginTop"
            >
              JOIN US NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
