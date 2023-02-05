import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

function AllUsers() {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://law-firm-server-1.onrender.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className=" text-2xl text-primary font-bold my-6">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Service</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
