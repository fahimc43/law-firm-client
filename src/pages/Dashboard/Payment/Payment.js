import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import BookingItem from "./BookingItem";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

function Payment() {
  let { id } = useParams();

  const { data, isLoading } = useQuery(["available", id], () =>
    fetch(`https://law-firm-server-1.onrender.com/booking/${id}`).then((res) =>
      res.json()
    )
  );
  const booking = data;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className=" text-2xl text-primary font-bold mt-6">
        Continue your Payment
      </h2>
      <div className="container flex flex-wrap px-5 py-2 mx-auto items-center">
        <div className="md:w-1/2 md:pr-10 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-primary">
          <BookingItem booking={booking} />
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default Payment;
