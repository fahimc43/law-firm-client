import React from "react";
import appointmentImage from "../../image/appointment-bg.png";
import { DayPicker } from "react-day-picker";
import AnalogueClock from "react-analogue-clock";
import "react-day-picker/dist/style.css";

const css = `
.my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #c18f59;
    color: #c18f59;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #c18f59;
    color: #c18f59;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #c18f59;
  }
`;

const clockOptions = {
  baseColor: "#ffffff",
  borderColor: "#c18f59",
  borderWidth: 5,
  centerColor: "#3c3e6b",
  handColors: {
    hour: "#3c3e6b",
    minute: "#3c3e6b",
    second: "#3c3e6b",
  },
  notchColor: "#000000",
  numbersColor: "#000000",
  showNumbers: true,
  size: 300,
};

function AppointmentBanner({ date, setDate }) {
  return (
    <div>
      <style>{css}</style>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${appointmentImage})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40 mt-16">
          <div className="card w-full">
            <AnalogueClock {...clockOptions} />
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <DayPicker
              styles={{
                caption: { color: "#c18f59" },
              }}
              modifiersClassNames={{
                selected: "my-selected",
                today: "my-today",
              }}
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBanner;
