import React from "react";

export default function Master() {
  return (
    <section className="master">
      <div className="master__bg">
        <div className="master__bg-item">
          <img src="/images/join/master/shape-1.svg" alt="" />
        </div>
        <div className="master__bg-item sm">
          <img src="/images/join/master/shape-2.svg" alt="" />
        </div>
      </div>
      <div className="auto__container sm">
        <div className="master__inner">
          <div className="master__inner-image">
            <img src="/images/join/master/master-image.png" alt="" />
          </div>
          <div className="master__inner-content">
            <h2 className="big">Master the art of Storytelling</h2>
            <p>
              People buy from people they like, so it’s time we gave you the
              tools to build a following that will never want to go anywhere
              else:
            </p>
            <ul>
              <li>
                Be Personal in the way you tell the brand story and provide
                thoughtful insights
              </li>
              <li>
                Be Unique and standout from the crowd thanks to feedback that
                truly resonates
              </li>
              <li>
                Be YOU and combine personal brand growth with the ability to
                build the future you want
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
