import React from "react";

export default function Proud({setModal}: {
  setModal: any
}) {
  return (
    <section className="proud" id="proud">
      <div className="proud__bg">
        <div className="proud__bg-shape">
          <img src="/images/join/shape.svg" alt="" />
        </div>
        <div className="proud__bg-shape right">
          <img src="/images/join/shape.svg" alt="" />
        </div>
      </div>
      <div className="auto__container sm">
        <div className="proud__inner">
          <h2 className="big">Proud to be Different</h2>
          <p>
            A generic ‘like’ doesn’t tell you enough — it’s too black and white.
          </p>
          <p>
            There are so many shades of gray in creative design, product
            selection, and personal branding. We combine them into compelling
            stories. <br /> It’s time you finally got to tell YOUR story.
          </p>
          <button className="button primary" onClick={() => {
              setModal("signup")}
            }
          >
            JOIN US NOW!
          </button>
        </div>
      </div>
    </section>
  );
}
