import { Formik } from "formik";
import { useState } from "react";

type Form = { email: string };

type a = keyof Form;

export const EmailForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);
  const [responseError, setResponseError] = useState<string | null>(null);
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors: { [key in keyof Form]?: string } = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const response = await fetch("/api/mailing-list", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: values.email }),
        });
        if (response.status === 200) {
          setSubmitted(true);
        } else {
          // @ts-ignore
          const res = await response.json();
          console.log(res.message);
          setResponseError(res.message);
        }
      }}
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
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col">
          {!submitted ? (
            <>
              <p className="text-[16px] md:text-[24px] mb-4 text-center">
                Sign up to our mailing list to stay updated
              </p>
              <input
                className={`bg-black ${errors.email ? "border-red-500" : "border-white"} border-2 inputoutline p-2 ${errors.email && "red"}`}
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
                placeholder="email address"
              />

              <p className="text-[#d31f08]">
                {errors.email && touched.email && errors.email}
              </p>
              <p className="text-[#d31f08]">{responseError}</p>

              <button
                type="submit"
                className={`p-2 title textoutline clickable ${isSubmitting && "animate-pulse"}`}
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </>
          ) : (
            <p className="text-center">
              Thank you for signing up for our mailing list.
            </p>
          )}
        </form>
      )}
    </Formik>
  );
};
