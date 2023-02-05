import React from "react";

function BookingItem(props) {
  const { serviceItem, slot, date, clientEmail, phone, price } = props.booking;
  return (
    <>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            SERVICE
          </h2>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-primary w-5 h-5 flex-shrink-0 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="mt-1">{serviceItem}</p>
          </div>

          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            TIME SLOT
          </h2>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-primary w-5 h-5 flex-shrink-0 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="mt-1">{slot}</p>
          </div>

          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            BOOKING DATE
          </h2>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-primary w-5 h-5 flex-shrink-0 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="mt-1">{date}</p>
          </div>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-primary w-5 h-5 flex-shrink-0 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="text-indigo-500 leading-relaxed">{clientEmail}</p>
          </div>

          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-primary w-5 h-5 flex-shrink-0 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="leading-relaxed">{phone}</p>
          </div>

          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PRICE
          </h2>
          <div className="flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className=" text-primary w-5 h-5 flex-shrink-0 mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="leading-relaxed">${price}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingItem;
