import React from "react";
import library from "../../image/library.png";

function Consultation() {
  return (
    <div className="mb-16">
      <div
        className="hero min-h-[600px]"
        style={{ backgroundImage: `url(${library})` }}
      >
        <div className="hero-content">
          <div className="max-w-xl">
            <div className=" text-center text-slate-50">
              <h2 className="mb-5 text-5xl font-bold">Free Consultation</h2>
              <p className="mb-5">
                Law is complicate matter. It can cause you a big problem if you
                ignore it. Let us help you!
              </p>
            </div>
            <form className=" space-y-5">
              <div className=" space-y-5">
                <div className=" grid lg:grid-cols-2 gap-5">
                  <label className="input-group input-group-lg">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="Type your name"
                      className="input w-full"
                    />
                  </label>
                  <label className="input-group input-group-lg">
                    <span>Phone</span>
                    <input
                      type="text"
                      placeholder="Type phone number"
                      className="input w-full"
                    />
                  </label>
                </div>
                <div className=" grid lg:grid-cols-2 gap-5">
                  <label className="input-group">
                    <span>Case</span>
                    <select className="select w-52">
                      <option disabled>Legal Topics</option>
                      <option>Corporate Law</option>
                      <option>Criminal Law</option>
                      <option>Personal Injury</option>
                    </select>
                  </label>
                  <label className="input-group input-group-lg">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="Type you email address"
                      className="input w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <label className="input-group input-group-vertical">
                  <span>Message</span>
                  <textarea
                    className="textarea w-full"
                    placeholder="Enter your legal problem"
                  ></textarea>
                </label>
                <button className="btn btn-block bg-primary hover:bg-secondary text-white">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
