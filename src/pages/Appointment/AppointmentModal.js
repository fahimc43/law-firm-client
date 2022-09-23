import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

function AppointmentModal({ serviceItem, date, setServiceItem }) {
  const { _id, name, slots } = serviceItem;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      serviceItemId: _id,
      serviceItem: name,
      date: formattedDate,
      slot,
      clientName: user.displayName,
      clientEmail: user.email,
      phone: e.target.phone.value,
    };

    fetch("http://localhost:5000/api/v1/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Success") {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else if (data.status === "fail") {
          toast(
            `Already have and Appointment on, ${data?.booking?.date} at ${data?.booking?.slot}`
          );
        }
        console.log(data);
        setServiceItem(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold capitalize">
            Booking for: <span className="text-primary">{name}</span>
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="number"
              placeholder="Your phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
