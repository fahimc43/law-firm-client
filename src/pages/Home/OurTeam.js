import React from "react";
import people1 from "../../image/Emma.png";
import people2 from "../../image/Jodan.png";
import people3 from "../../image/Nathaniel.png";
import people4 from "../../image/Melanie.png";
import TeamCard from "./TeamCard";

const teamData = [
  {
    id: 1,
    img: people1,
    name: "Anna Torpey",
    title: "HEAD OF LEARNING",
    detail:
      "With extensive experience Anna advise top national and international companies.",
  },
  {
    id: 2,
    img: people2,
    name: "Michael Holway",
    title: "SENIOR ASSOCIATE",
    detail:
      "Founding Partner of Law firm and heads the Corporate & Commercial Practice Group.",
  },
  {
    id: 3,
    img: people3,
    name: "Jonathan Kane",
    title: "PARTNER",
    detail:
      "Advises clients in high-profile energy projects related to the development of new energy.",
  },
  {
    id: 4,
    img: people4,
    name: "Mark Johnson",
    title: "ASSOCIATE",
    detail:
      "An independent attorney at law, as a member of the Dispute Resolution Practice Group.",
  },
];

function OurTeam() {
  return (
    <div className="min-h-screen py-20 px-10">
      <div className="flex flex-col justify-center items-center">
        <h6 className="uppercase font-bold text-sm text-primary">Who we Are</h6>
        <h2 className="font-bold text-4xl py-5">Our team</h2>
        <p className="text-md text-center mb-5">
          Renowned for the quality of work of the lawyers, our team provide{" "}
          <br /> best legal advice under competitive terms.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {teamData.map((item) => (
          <TeamCard key={item.id} teamItem={item} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
