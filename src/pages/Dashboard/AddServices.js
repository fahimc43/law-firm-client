import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import servicesData from "../../data/servicesData";

function AddServices() {
  const serviceSlots = servicesData[0].slots;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const selectData = {
      name: data.serviceName,
      slots: data.slot,
    };

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(selectData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          toast.success(`Yas 📌 your data is set Successfully`);
          navigate("/dashboard/manageService");
        }
      });
  };

  return (
    <div>
      <div>
        <h2 className=" text-2xl text-primary font-bold my-6">Add Service</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" md:grid md:grid-cols-2 md:gap-32 md:mx-16">
          <div className=" mb-5">
            <div className=" border bg-secondary rounded-lg">
              <h4 className=" text-lg font-semibold my-3 text-white mx-4">
                Select Regular Service
              </h4>
            </div>
            <select
              {...register("serviceName")}
              className="select w-full max-w-xs mx-3 my-3"
            >
              {servicesData.map((s, index) => (
                <option key={index} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <div className=" border bg-secondary rounded-lg">
              <h4 className=" text-lg font-semibold my-3 text-white mx-4">
                Select Time Slot
              </h4>
            </div>
            <div className="flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-auto max-h-64 mx-3 divide-y divide-secondary">
              {serviceSlots.map((slot) => (
                <label className="cursor-pointer label justify-start gap-5">
                  <input
                    type="checkbox"
                    value={slot}
                    {...register("slot")}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">{slot}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center mb-20 mt-6">
          <input
            type="submit"
            className="btn btn-primary text-white w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
}

export default AddServices;
