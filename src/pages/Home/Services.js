import React from "react";
import {
  BriefcaseIcon,
  ChartPieIcon,
  TagIcon,
  CubeIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  ClockIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Service from "./Service";

const serviceData = [
  {
    id: 1,
    name: "ANTI-BRIBERY",
    icon: <BriefcaseIcon />,
    detail: "We prevent an occurrence by educating clients",
  },
  {
    id: 2,
    name: "CORRUPTION",
    icon: <ChartPieIcon />,
    detail: "Corruption faces widely dispersed headlines and damage",
  },
  {
    id: 3,
    name: "EMPLOYMENT",
    icon: <TagIcon />,
    detail: "From recruitment, cross-border and immigration issues",
  },
  {
    id: 4,
    name: "REAL ESTATE",
    icon: <CubeIcon />,
    detail: "Entire cycle of your complex real estate investment",
  },
  {
    id: 5,
    name: "TAX",
    icon: <ScaleIcon />,
    detail: "Advise on employment-related taxation and client’s risks",
  },
  {
    id: 6,
    name: "CORPORATE",
    icon: <ComputerDesktopIcon />,
    detail: "Legal services to multinational and domestic clients",
  },
  {
    id: 7,
    name: "COMPETITION",
    icon: <ClockIcon />,
    detail: "Antitrust, competition law compliance and regulation",
  },
  {
    id: 8,
    name: "BANKING",
    icon: <PresentationChartLineIcon />,
    detail: "Syndicated loan facilities and financial transactions",
  },
];

function Services() {
  return (
    <div className="min-h-screen pt-20 px-10">
      <div className="flex flex-col justify-center items-center">
        <h6 className="uppercase font-bold text-sm text-primary">what we do</h6>
        <h2 className="font-bold text-4xl py-5">Our Services</h2>
        <p className="text-md text-center">
          In order to ensure the quality of service in the field of corruption
          <br />
          practices, we have assembled an experienced team.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceData.map((data) => (
          <Service key={data.id} serviceDetail={data}>
            {data.icon}
          </Service>
        ))}
      </div>
    </div>
  );
}

export default Services;
