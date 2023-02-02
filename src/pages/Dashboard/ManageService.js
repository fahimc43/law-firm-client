import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ConfirmationModal from "./ConfirmationModal";

function ManageService() {
  const [deletingService, setDeletingService] = useState(null);
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("service", () =>
    fetch("http://localhost:5000/service", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const closeModal = () => {
    setDeletingService(null);
  };

  const successAction = (deleteItem) => {
    console.log(deleteItem);
    fetch(`http://localhost:5000/service/${deleteItem._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDeletingService(null);
        refetch();
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className=" text-2xl text-primary font-bold my-6">Manage Service</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Total Slots</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{s.name}</td>
                <td>{s.slots.length}</td>
                <td>
                  <label
                    onClick={() => setDeletingService(s)}
                    htmlFor="confirm-modal"
                    className="btn btn-sm"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingService && (
        <ConfirmationModal
          closeModal={closeModal}
          deletingService={deletingService}
          modalData={successAction}
        ></ConfirmationModal>
      )}
    </div>
  );
}

export default ManageService;
