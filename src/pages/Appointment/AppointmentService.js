import React from "react";

function AppointmentService({ service, setServiceItem }) {
  const { name, slots, price } = service;
  return (
    <div>
      {/* <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className=" text-center">
            <h2 className=" text-xl font-bold">{name}</h2>
            <p className=" text-base">
              {slots.length ? (
                <>
                  <span>{slots[0]}</span>
                  <br />
                  <span>{slots.slice(-1)[0]}</span>
                </>
              ) : (
                <span className=" text-red-500">Try another date</span>
              )}
            </p>
            <p className=" text-base">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
            <p className=" text-lg font-semibold">Price: ${price}</p>
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
      </div> */}
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                  Open
                </span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none border-b-2 border-gray-200 pb-2 mb-2">
                  {slots.length}
                </span>
                <span className="text-gray-500 ">
                  {slots.length > 1 ? "Spaces" : "Space"}
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  {name}
                </h1>
                <div className="w-12 h-1 bg-secondary rounded mt-2"></div>
                <p className="leading-relaxed mb-5">
                  {slots.length && (
                    <>
                      <span>{slots[0]}</span>
                      <br />
                      <span>Since</span>
                      <br />
                      <span>{slots.slice(-1)[0]}</span>
                    </>
                  )}
                </p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${price}.00
                  </span>
                  <label
                    onClick={() => setServiceItem(service)}
                    disabled={slots.length === 0}
                    htmlFor="appointment-modal"
                    className="flex ml-auto text-white font-semibold bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-secondary rounded cursor-pointer"
                  >
                    Book Appointment
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentService;
