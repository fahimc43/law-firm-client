import { format } from "date-fns";
import React from "react";
import { useQuery } from "react-query";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentService from "./AppointmentService";
import Loading from "../Shared/Loading";

function AvailableAppointment({ date }) {
  const [serviceItem, setServiceItem] = useState(null);

  const formattedDate = format(date, "PP");
  const { data, isLoading, refetch } = useQuery(
    ["available", formattedDate],
    () =>
      fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return <Loading />;
  }
  const services = data;
  return (
    <div className=" min-h-screen bg-[#f5ecf2]">
      <div className="pt-20 px-10">
        <h2 className=" text-4xl text-center font-bold mb-10">
          <span>Available Appointment on</span>{" "}
          <span className="text-primary">{format(date, "PP")}</span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.map((service) => (
            <AppointmentService
              key={service._id}
              service={service}
              setServiceItem={setServiceItem}
            />
          ))}
        </div>
        {serviceItem && (
          <AppointmentModal
            serviceItem={serviceItem}
            setServiceItem={setServiceItem}
            date={date}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
}

export default AvailableAppointment;
