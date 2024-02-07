import { cancelIcon, tickIcon } from "@/app/components/SVG";
import React from "react";
const reqList = [
  {
    id: "1",
    image: "/images/more/1.jpg",
    status: true,
    text: "The image includes a product (the sweater) and a person.",
  },
  {
    id: "2",
    image: "/images/more/2.jpg",
    status: true,
    text: "It includes a portion of people and shows the result of a product (lipstick)",
  },
  {
    id: "3",
    image: "/images/more/3.jpg",
    status: true,
    text: "Shows a part of a person and a product (sandals)",
  },
  {
    id: "4",
    image: "/images/more/4.jpg",
    status: false,
    text: "Show only one product. The person or part of the person is missing.",
  },
  {
    id: "5",
    image: "/images/more/5.jpg",
    status: false,
    text: "Shows only one person but no products have been reported.",
  },
];
export default function More() {
  return (
    <div className="more">
      <h4>More</h4>

      <div className="more__inner">
        {reqList.map((item, index) => {
          return <MoreItem {...item} key={index} />;
        })}
      </div>
    </div>
  );
}
const MoreItem = (props: { image: string; status: boolean; text: string }) => {
  return (
    <div className="moreItem">
      <div className="moreItem__image">
        <img src={props.image} alt="" />
      </div>
      <div className="moreItem__content">
        {props.status ? (
          <div className="moreItem__status">{tickIcon} Image allowed</div>
        ) : (
          <div className="moreItem__status red">{cancelIcon} image not allowed</div>
        )}
        <p>{props.text}</p>
      </div>
    </div>
  );
};
