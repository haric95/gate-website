"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinners/PropagateLoader";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

type TicketWidgetProps = { amount: number };

type Form = { email: string; mailingList: boolean; name: string };

export default ({ amount }: TicketWidgetProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async ({ email, mailingList, name }: Form) => {
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message!);
      setLoading(false);
      return;
    }

    if (mailingList) {
      await fetch("/api/mailing-list", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `https://gatheralltheelectronics.com/tickets/success?name=${name}&email=${email}`,
        receipt_email: email,
      },
    });

    if (error.message) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full p-8 border-2 border-[#369d06] bg-white inputoutline green">
      <p className="mb-4 text-black">Pay: £{amount.toFixed(2)}</p>
      {!clientSecret || !elements || !stripe ? (
        <div className="p-4 flex justify-center">
          <Spinner color="#369d06" />
        </div>
      ) : (
        <Formik
          initialValues={{ email: "", mailingList: false, name: "" }}
          validate={(values) => {
            const errors: { [key in keyof Form]?: string } = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Required";
            }

            return errors;
          }}
          onSubmit={handleSubmit}
          validateOnChange={touched}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-2 flex">
                <div className="w-full">
                  <p className="text-black">Full Name:</p>
                  <input
                    className={`bg-white text-black font-mono w-full ${errors.name ? "border-red-500" : "border-black"} border-2  p-2 ${errors.name && "red"}`}
                    style={{ maxWidth: "380px" }}
                    type="text"
                    name="name"
                    onChange={(e) => {
                      if (!touched) {
                        setTouched(true);
                      }
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Full Name"
                  />

                  <p className="text-[#d31f08]">
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex">
                <div className="w-full">
                  <p className="text-black">Email Address:</p>
                  <input
                    className={`bg-white text-black font-mono w-full ${errors.email ? "border-red-500" : "border-black"} border-2  p-2 ${errors.email && "red"}`}
                    style={{ maxWidth: "380px" }}
                    type="email"
                    name="email"
                    onChange={(e) => {
                      if (!touched) {
                        setTouched(true);
                      }
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email Address"
                  />

                  <p className="text-[#d31f08]">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
              </div>
              <button
                className="font-mono flex text-black items-center mb-8"
                type="button"
                onClick={() => {
                  setFieldValue("mailingList", !values.mailingList);
                }}
              >
                <input type="checkbox" className="w-0 h-0" />
                <div>
                  {values.mailingList ? (
                    <GrCheckboxSelected
                      color="#369d06"
                      height={"64px"}
                      width={"64px"}
                      className="mr-2"
                    />
                  ) : (
                    <GrCheckbox
                      color="#369d06"
                      height={"64px"}
                      width={"64px"}
                      className="mr-2"
                    />
                  )}
                </div>
                Sign up to our mailing list
              </button>
              <p className="text-black">Payment Details:</p>
              {clientSecret && (
                <div
                  className={`${errorMessage ? "border-red-500" : "border-black"} border-2 p-8`}
                >
                  <PaymentElement options={{}} />
                </div>
              )}
              {errorMessage && (
                <p className="text-red-500 mt-4">{errorMessage}</p>
              )}
              <button
                type="submit"
                className={`w-full bg-black text-white text-center mt-8 p-4 border-white border-2 ${loading && "animate-pulse pointer-events-none cursor-not-allowed"} ${!isValid && "pointer-events-none cursor-not-allowed bg-gray-500"}`}
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};
