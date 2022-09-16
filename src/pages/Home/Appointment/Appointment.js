import React from "react";
import Footer from "../../Shared/Footer";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { useState } from "react";

function Appointment() {
  const [date, setDate] = useState(new Date());

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

  return (
    <div className="">
      <style>{css}</style>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Appointments available upon request
            </h1>
            <p className="py-6">
              We prefer doing to talking (except in court), we take the bull by
              the horns and give you clear and practical advice. Personal, to
              the point and in plain language. Any questions? Feel free to
              select your schedule.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <DayPicker
                styles={{
                  caption: { color: "#c18f59" },
                }}
                modifiersClassNames={{
                  selected: "my-selected",
                  today: "my-today",
                  caption: "my-caption",
                }}
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Appointment;
