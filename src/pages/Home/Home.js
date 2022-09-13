import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ClientsSay from "./ClientsSay";
import Info from "./Info";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <ClientsSay />
    </div>
  );
}

export default Home;
