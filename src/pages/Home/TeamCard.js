import React from "react";
import styles from "../../styles/teamCard.module.css";
import iconFb from "../../image/icons8-facebook.svg";
import iconInst from "../../image/icons8-instagram.svg";
import iconTwitt from "../../image/icons8-twitter.svg";

function TeamCard(props) {
  const { img, name, title, detail } = props.teamItem;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl rounded-none">
      <figure>
        <div className={styles.growImage}>
          <img src={img} alt="teamPeople" />
        </div>
      </figure>
      <div className="card-body">
        <h6 className=" font-light tracking-wider">{title}</h6>
        <a
          className="link link-hover underline-offset-4 decoration-2 decoration-primary"
          href="/"
        >
          <h3 className="card-title">{name}</h3>
        </a>

        <p>{detail}</p>
        <div className="card-actions justify-start">
          <img src={iconFb} alt="icon" />
          <img src={iconInst} alt="icon" />
          <img src={iconTwitt} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
