import React from "react";
const infoList = [
  {
    id: "1",
    number: "304K",
    title: "followers",
  },
  {
    id: "2",
    number: "814k",
    title: "Views",
  },
  {
    id: "3",
    number: "1,792 k",
    title: "Likes Products",
  },
  {
    id: "4",
    number: "1,792 k",
    title: "Likes Persons",
  },
  {
    id: "5",
    number: "70%",
    title: "Beauty Rate",
  },
];
export default function Info({user}:{ user: any}) {
  return (
    <div className="info">
      <div className="info__inner">
        <div className="infoItem">
          <h2 className="sm">{user.followers}</h2>
          <h3>followers</h3>
        </div>
        <div className="infoItem">
          <h2 className="sm">{user.viewCount}</h2>
          <h3>Views</h3>
        </div>
        <div className="infoItem">
          <h2 className="sm">{user.likedProducts}</h2>
          <h3>Likes Products</h3>
        </div>
        <div className="infoItem">
          <h2 className="sm">{user.likedPeople}</h2>
          <h3>Likes Persons</h3>
        </div>
        <div className="infoItem">
          <h2 className="sm">{user.likedPeople}%</h2>
          <h3>Beauty Rate</h3>
        </div>
      </div>
    </div>
  );
}