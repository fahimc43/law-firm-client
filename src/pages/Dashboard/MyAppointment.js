import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";

function MyAppointment() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["myAppointment", navigate], () =>
    fetch(`http://localhost:5000/booking?client=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  const appointments = data;

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
