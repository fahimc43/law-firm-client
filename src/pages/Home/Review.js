import React from "react";

function Review(props) {
  const { author, country, review, img } = props.reviewItem;
  return (
    <div className="card bg-base-100 shadow-xl lg:max-w-lg">
      <div className="card-body">
        <p className="text-start text-lg">{review}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-8">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="text-start">
            <h4 className="text-lg font-semibold">{author}</h4>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
