import React from "react";
import { toast } from "react-toastify";

function UserRow({ index, user, refetch }) {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://law-firm-server-1.onrender.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  const deleteUser = () => {
    fetch(`https://law-firm-server-1.onrender.com/users/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Yas user email 📌${email} is delete Successfully`);
        }
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
        {role === "admin" && (
          <button className="btn btn-xs btn-success">Already Admin</button>
        )}
      </td>
      <td>
        <button onClick={deleteUser} className="btn btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
