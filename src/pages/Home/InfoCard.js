import React from "react";

function InfoCard(props) {
  console.log(props.info);
  const { img, bgColor, title, text } = props.info;
  return (
    <div className={`card lg:card-side px-5 py-4 shadow-xl ${bgColor}`}>
      <figure>
        <img src={img} alt="Album" className="w-18 h-20" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
}

export default InfoCard;
