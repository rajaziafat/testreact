import React from "react";

export default function Place({ setModal }: { setModal: any }) {
  return (
    <section className="place">
      <div className="auto__container sm">
        <div className="place__inner">
          <div className="place__inner-bg">
            <div className="place__inner-line">
              <img src="/images/join/place/line.svg" alt="" />
            </div>
            <div className="place__inner-shape">
              <img src="/images/join/shape.svg" alt="" />
            </div>
          </div>
          <div className="place__inner-image">
            <img src="/images/join/place/place-image.png" alt="" />
            <div className="place__inner-line">
              <img src="/images/join/place/line.svg" alt="" />
            </div>
          </div>
          <div className="place__inner-content">
            <h2 className="big">The only place to narrate your product…</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a
              href="#"
              onClick={() => setModal("signup")}
              className="button primary sm"
            >
              JOIN US NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
