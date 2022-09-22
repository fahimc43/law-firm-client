import React from "react";
import JusticImg from "../../image/lady-justic.png";
import ButtonBox from "../Shared/ButtonBox";

function Banner() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mt-16">
          <div className="px-10">
            <img
              src={JusticImg}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>

          <div className="px-10">
            <h1 className="text-5xl font-bold">
              You Deserve The Best Defence Lawyers
            </h1>
            <p className="py-6">
              Maybe it won’t get that far, but those who care about these
              international law disputes think China and the U.S. are on a
              collision course because both sides hew closely to contradictory
              readings of international law.
            </p>
            <ButtonBox>Contact Now</ButtonBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
