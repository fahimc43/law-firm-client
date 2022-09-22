import React from "react";

function AppointmentService({ service, setServiceItem }) {
  const { name, slots } = service;
  return (
    <div>
      <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className=" text-center">
            <h2 className=" text-xl font-bold">{name}</h2>
            <p className=" text-base">
              {slots.length ? (
                <span>{slots[0]}</span>
              ) : (
                <span className=" text-red-500">Try another date</span>
              )}
            </p>
            <p className=" text-base">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
          </div>
          <div className=" text-center">
            <label
              onClick={() => setServiceItem(service)}
              disabled={slots.length === 0}
              htmlFor="appointment-modal"
              className="btn btn-sm btn-primary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentService;
