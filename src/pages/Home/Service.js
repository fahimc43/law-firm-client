import React from "react";

function Service(props) {
  const { name, detail } = props.serviceDetail;
  return (
    <div>
      <div className="card lg:max-w-lg md:max-w-md sm:max-w-sm bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="h-16 w-16 hover:text-primary cursor-pointer">
            {props.children}
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title hover:text-primary cursor-pointer">
            {name}
          </h2>
          <p className="text-sm">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
