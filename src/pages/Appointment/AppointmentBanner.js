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

//     <div className="hero min-h-screen">
//     <div className="hero-content flex-col lg:flex-row-reverse">
//       <div className="text-center lg:text-left px-10">
//         <h1 className="text-5xl font-bold">
//           Appointments available upon request
//         </h1>
//         <p className="py-6 text-lg">
//           We prefer doing to talking (except in court), we take the bull by
//           the horns and give you clear and practical advice. Personal, to
//           the point and in plain language. Any questions? Feel free to
//           select your schedule.
//         </p>
//       </div>
//       <div className=" px-10">
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <div className="card-body">
//             <DayPicker
//               styles={{
//                 caption: { color: "#c18f59" },
//               }}
//               modifiersClassNames={{
//                 selected: "my-selected",
//                 today: "my-today",
//               }}
//               mode="single"
//               selected={date}
//               onSelect={setDate}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
