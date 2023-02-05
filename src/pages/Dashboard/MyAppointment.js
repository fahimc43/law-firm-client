import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

function MyAppointment() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["myAppointment", navigate], () =>
    fetch(
      `https://law-firm-server-1.onrender.com/booking?client=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  const appointments = data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className=" text-2xl text-primary font-bold my-6">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((a, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.clientName}</td>
                <td>{a.serviceItem}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>${a.price}.00</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs">Pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <span className=" text-green-500 font-medium">PAID</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
