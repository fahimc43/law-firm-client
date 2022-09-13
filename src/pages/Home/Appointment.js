import React from "react";
import columnPhoto from "../../image/bg-column.png";
import ButtonBox from "../Shared/ButtonBox";

function Appointment() {
  return (
    <div className="flex flex-col bg-secondary justify-center items-center mt-32 lg:flex-row px-10 py-10 space-y-4">
      <div className="flex-1">
        <img
          className="rounded-lg mt-[-80px] lg:mt-0"
          src={columnPhoto}
          alt=""
        />
      </div>
      <div className="flex-1 text-white space-y-4 ">
        <h2 className="text-xl">Appointment</h2>
        <h2 className="text-3xl font-semibold">Make an appointment Today</h2>
        <p>
          Since partnering with Law firm, we have maintained excellent organic
          rankings in the competitive market. Their responsive support team
          provides us with current recommendations.
        </p>
        <ButtonBox>Appointment</ButtonBox>
      </div>
    </div>
  );
}

export default Appointment;
