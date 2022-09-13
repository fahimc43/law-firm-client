import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../image/clock.png";
import marker from "../../image/marker.png";
import phone from "../../image/phone.png";

const infoData = [
  {
    id: 1,
    img: clock,
    bgColor: "bg-secondary",
    title: "Opening Hours",
    text: "Mon - Fri : 09:00-17:00",
  },
  {
    id: 2,
    img: marker,
    bgColor: "bg-primary",
    title: "Visit our location",
    text: "12th Wall Street NY CV564 Unites States",
  },
  {
    id: 3,
    img: phone,
    bgColor: "bg-secondary",
    title: "Contact us now",
    text: "(1)2345-2355-23",
  },
];

function Info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10">
      {infoData.map((data) => (
        <InfoCard key={data.id} info={data} />
      ))}
    </div>
  );
}

export default Info;
