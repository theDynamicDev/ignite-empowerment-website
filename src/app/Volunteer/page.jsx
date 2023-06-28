"use client";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ReactSignatureCanvas from "react-signature-canvas";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { Text } from "@nextui-org/react";
import classNames from "../../lib/classNames";

const VolunteerForm = () => {
  const [sigCanvas, setSigCanvas] = useState(null);
  const [signature, setSignature] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    secondaryPhone: "",
    email: "",
    address: "",
    secondaryAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    volunteerSelections: [],
    signature: "",
    date: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleClearSignature = () => {
    if (sigCanvas) {
      sigCanvas.clear();
      setSignature("");
    }
  };

  const handleSignature = () => {
    if (sigCanvas) {
      setSignature(sigCanvas.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

  const handleSubmit = (values) => {
    values.signature = signature;
  };

  return (
    <div
      className={classNames(
        "w-screen",
        "px-1 py-3 md:mt-32",
        "flex flex-col items-center justify-center"
      )}
    >
      <Text
        css={{
          textGradient: "45deg, $red700 -70%, $yellow600 40%, $green600 100%",
        }}
        weight="bold"
        className={classNames(
          "z-20",
          "mb-6",
          "flex flex-row items-center justify-center text-center",
          "indent-2 text-4xl leading-10 tracking-wide text-white",
          "md:shadow-gray md:items-center",
          "drop-shadow-lg"
        )}
      >
        <span className="">VOLUNTEER</span>
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className={classNames("w-full", "flex items-start justify-start")}
      >
        <Form
          className={classNames(
            "w-full md:max-w-5xl",
            "mx-auto px-4 py-3",
            "flex flex-col items-center justify-start",
            "rounded-lg",
            "bg-sky-300/30"
          )}
        >
          <div
            className={classNames(
              "container max-w-md",
              "flex flex-col justify-evenly"
            )}
          >
            <div
              className={classNames(
                "h-full w-full",
                "flex flex-col",
                "md:flex-row md:items-start md:justify-start"
              )}
            >
              <div
                className={classNames(
                  "w-full",
                  "py-1",
                  "flex  flex-col items-start justify-between",
                  "md:max-w-sm md:pr-3"
                )}
              >
                <label htmlFor="firstName" className="volunteer-label">
                  First Name
                </label>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className={classNames(
                    "container",
                    "px-4 py-2",
                    "rounded-md border border-gray-300"
                  )}
                />
              </div>
              <div
                className={classNames(
                  "w-full",
                  "py-1",
                  "flex  flex-col items-start justify-between",
                  "md:max-w-sm"
                )}
              >
                <label htmlFor="lastName" className="volunteer-label">
                  Last Name
                </label>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className={classNames(
                    "container",
                    "px-4 py-2",
                    "rounded border border-gray-300"
                  )}
                />
              </div>
            </div>

            <div
              className={classNames(
                "h-full w-full",
                "flex flex-col",
                "md:flex-row md:items-center md:justify-start"
              )}
            >
              <div
                className={classNames(
                  "w-full",
                  "py-1",
                  "flex  flex-col items-start justify-between",
                  "md:max-w-sm md:pr-3"
                )}
              >
                <label htmlFor="phone" className="volunteer-label">
                  Phone
                </label>
                <Field
                  id="phone"
                  name="phone"
                  placeholder="(555) 555-5555"
                  className="container rounded-md border border-gray-300 px-4 py-2"
                />
              </div>
              <div
                className={classNames(
                  "w-full",
                  "py-1",
                  "flex  flex-col items-start justify-between",
                  "md:max-w-sm"
                )}
              >
                <label htmlFor="secondaryPhone" className="volunteer-label">
                  Secondary Phone
                </label>
                <Field
                  id="secondaryPhone"
                  name="secondaryPhone"
                  placeholder="(555) 555-5555"
                  className="container rounded-md border border-gray-300 px-4 py-2"
                />
              </div>
            </div>

            <label htmlFor="email" className="volunteer-label">
              Email Address
            </label>
            <Field
              id="email"
              name="email"
              placeholder="john@doe.com"
              className="rounded border border-gray-300 px-4 py-2"
            />

            <label htmlFor="address" className="volunteer-label">
              Address
            </label>
            <Field
              id="address"
              name="address"
              placeholder="123 Main St"
              className="rounded border border-gray-300 px-4 py-2"
            />

            <label htmlFor="secondaryAddress" className="volunteer-label">
              Secondary Address
            </label>
            <Field
              id="secondaryAddress"
              name="secondaryAddress"
              placeholder="Apartment, Suite, etc."
              className="rounded border border-gray-300 px-4 py-2"
            />

            <div className="flex w-full py-2">
              <div className="mr-4 flex flex-1 flex-col">
                <label htmlFor="city" className="volunteer-label">
                  City
                </label>
                <Field
                  id="city"
                  name="city"
                  placeholder="City"
                  className="rounded border border-gray-300 px-4 py-2"
                />
              </div>
              <div className="flex max-w-[100px] flex-1 flex-col">
                <label htmlFor="state" className="volunteer-label">
                  State
                </label>
                <Field
                  id="state"
                  name="state"
                  placeholder="State"
                  className="rounded border border-gray-300 px-4 py-2"
                />
              </div>
            </div>

            <div className="mb-4 flex w-full flex-row justify-between">
              <div className="mr-4 flex flex-col">
                <label htmlFor="zipCode" className="volunteer-label">
                  Zip Code
                </label>
                <Field
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  className="container rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className=" mb-1 font-semibold text-orange-500 shadow-sm"
                >
                  Country
                </label>
                <CountryDropdown
                  id="country"
                  name="country"
                  style={{
                    height: 45,
                  }}
                  value={selectedCountry} // Use separate state variable
                  onChange={(value) => setSelectedCountry(value)}
                  className="max-w-[260px] rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
            </div>
            <div
              className={classNames(
                "w-full",
                "mb-4 p-2 py-3",
                "justify-bewteen flex flex-col items-start",
                "rounded-lg ",
                "border border-gray-300",
                "bg-white/60 shadow-lg"
              )}
            >
              <label
                htmlFor="volunteerSelections"
                className=" mb-1 font-semibold text-orange-500  shadow-sm"
              >
                Volunteer Selections
              </label>

              <div id="checkbox-group" className="mb-2">
                Please select the areas for which you would like to volunteer
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="volunteerSelections"
                    value="Board Member"
                    className="mr-2"
                  />
                  Board Member
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="volunteerSelections"
                    value="Committee"
                    className="mr-2"
                  />
                  Committee
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="volunteerSelections"
                    value="Program Assistant"
                    className="mr-2"
                  />
                  Program Assistant
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="volunteerSelections"
                    value="Fund Raiser"
                    className="mr-2"
                  />
                  Fund Raiser
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="volunteerSelections"
                    value="Office Assistant"
                    className="mr-2"
                  />
                  Office Assistant
                </label>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="volunteerSelections"
                    value="Event Planner"
                    className="mr-2"
                  />
                  Event Planner
                </label>
              </div>
            </div>
            <label
              htmlFor="signature"
              className=" mb-1  font-semibold text-orange-500"
            >
              Signature
            </label>
            <div className=" rounded-lg bg-white shadow-lg ">
              <ReactSignatureCanvas
                penColor="black"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: "sigCanvas",
                }}
                ref={(ref) => {
                  setSigCanvas(ref);
                }}
                onEnd={handleSignature}
                className="rounded border  border-gray-300  bg-cyan-300"
              />
            </div>
            <button
              type="button"
              onClick={handleClearSignature}
              className="mt-2 rounded bg-gray-200 px-4 py-2 text-gray-800"
            >
              Clear Signature
            </button>
            <label htmlFor="date" className="volunteer-label">
              Date
            </label>
            <Field
              id="date"
              name="date"
              type="date"
              className="rounded border border-gray-300 px-4 py-2"
            />

            <button
              type="submit"
              className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default VolunteerForm;
