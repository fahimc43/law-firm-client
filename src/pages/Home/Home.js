import React from "react";
import Footer from "../Shared/Footer";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ClientsSay from "./ClientsSay";
import Consultation from "./Consultation";
import Info from "./Info";
import OurTeam from "./OurTeam";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <ClientsSay />
      <Consultation />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default Home;
