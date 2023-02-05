import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";

function CheckoutForm({ booking }) {
  const { price, clientName, clientEmail, _id } = booking;
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [process, setProcess] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://law-firm-server-1.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcess(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setProcess(false);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setSuccess("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: clientName,
            email: clientEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcess(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Congrats! your payment completed");
      setTransactionId(paymentIntent.id);

      const payment = {
        price,
        transactionId: paymentIntent.id,
        email: clientEmail,
        bookingId: _id,
      };
      fetch("https://law-firm-server-1.onrender.com/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
            setProcess(false);
          }
        });
    }

    // console.log("paymentIntent", paymentIntent);
  };

  return (
    <>
      <div className=" bg-white py-4 px-4 rounded shadow-md">
        <h4 className="py-3 text-base font-medium">
          Input your Online Card Details..
        </h4>
        <div className=" bg-slate-600 text-yellow-50 px-3 py-1 mb-3">
          <p>Stripe test card detail...</p>
          <pre>Mastercard: 5555555555554444</pre>
          <pre>CVC: Any 3 digits</pre>
          <pre>Date: Any future date</pre>
        </div>
        <form onSubmit={handleSubmit}>
          <CardElement
            className=" py-3 px-1 rounded-lg border-2 border-primary"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className=" flex justify-end mt-6">
            <button
              className="btn btn-sm btn-primary text-white font-medium text-base px-6"
              type="submit"
              disabled={!stripe || !clientSecret || process}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>

      <p className=" text-red-600 text-center text-base font-normal">
        {cardError}
      </p>

      {success && (
        <>
          <div className=" text-center">
            <p className=" text-green-500">{success}</p>
            <p>Your TransactionId: {transactionId}</p>
          </div>
        </>
      )}
    </>
  );
}

export default CheckoutForm;
