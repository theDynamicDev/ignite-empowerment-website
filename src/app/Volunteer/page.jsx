'use client';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import ReactSignatureCanvas from 'react-signature-canvas';
import { useState } from 'react';
import { CountryDropdown} from 'react-country-region-selector';
import { Text } from "@nextui-org/react";

const VolunteerForm = () => {
  const [sigCanvas, setSigCanvas] = useState(null);
  const [signature, setSignature] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    secondaryPhone: '',
    email: '',
    address: '',
    secondaryAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    volunteerSelections: [],
    signature: '',
    date: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleClearSignature = () => {
    if (sigCanvas) {
      sigCanvas.clear();
      setSignature('');
    }
  };

  const handleSignature = () => {
    if (sigCanvas) {
      setSignature(sigCanvas.getTrimmedCanvas().toDataURL('image/png'));
    }
  };

  const handleSubmit = (values) => {
    values.signature = signature;
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen px-1 p-1 overflow-y-auto max-w-sm shadow-xl   rounded-lg py-3  ">
         <Text
        css={{
          textGradient: "45deg, $red700 -70%, $yellow600 40%, $green600 100%",
        }}
        weight="bold"
        className="mb-6 text-4xl  justify-center flex flex-row items-center text-center text-white  md:items-center tracking-wide z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray"
      >
        <span className="">VOLUNTEER</span>
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className="flex  justify-start items-start overflow-hidden w-full max-w-md  "
      >
        <Form className="flex flex-col  justify-start items-start w-full overflow-hidden py-3 bg-sky-300/30 px-4 rounded-lg overflow-y-scroll max-w-md md:max-w-5xl mx-auto">
         
          <div className='flex justify-evenly container flex-col max-w-md'>
          <div className="flex flex-col md:flex-row  md:justify-start md:items-start h-full w-full">
            <div className="flex flex-col justify-between items-start py-1 w-full md:max-w-xs">
          <label htmlFor="firstName" className="text-md text-orange-500 shadow-sm font-semibold mb-1  ">
            First Name
          </label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="John"
            className="py-2 container px-4 border border-gray-300 rounded-md "
          />
  </div>
  <div className="flex flex-col justify-between items-start md:px-3 py-1 w-full md:max-w-sm">
          <label htmlFor="lastName" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Last Name
          </label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="py-2 px-4 container border border-gray-300 rounded"
          />
       
           </div>
</div>

<div className="flex flex-col md:flex-row  md:justify-start md:items-center h-full w-full">
<div className="flex flex-col justify-between items-start md:pr-3 py-1 w-full md:max-w-sm">
          <label htmlFor="phone" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Phone
          </label>
          <Field
            id="phone"
            name="phone"
            placeholder="(555) 555-5555"
            className="py-2 px-4 container border border-gray-300 rounded-md"
          />
</div>
<div className="flex flex-col justify-between items-start py-1 w-full md:max-w-sm">

          <label htmlFor="secondaryPhone" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Secondary Phone
          </label>
          <Field
            id="secondaryPhone"
            name="secondaryPhone"
            placeholder="(555) 555-5555"
            className="py-2 px-4 container border border-gray-300 rounded-md"
          />

</div>
</div>

          <label htmlFor="email" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Email Address
          </label>
          <Field
            id="email"
            name="email"
            placeholder="john@doe.com"
            className="py-2 px-4 border border-gray-300 rounded"
          />
<div className='flex flex-col w-full justify-bewteen max-w-sm items-start'>


          <label htmlFor="address" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Address
          </label>
          <Field
            id="address"
            name="address"
            placeholder="123 Main St"
            className="py-2 px-4 border border-gray-300 container max-w-sm rounded"
          />

          <label htmlFor="secondaryAddress" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Secondary Address
          </label>
          <Field
            id="secondaryAddress"
            name="secondaryAddress"
            placeholder="Apartment, Suite, etc."
            className="py-2 px-4 border border-gray-300 rounded"
          />
<div className='flex py-2 justify-evenly'>
<div className='flex flex-col mr-4 '>


          <label htmlFor="city" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            City
          </label>
          <Field
            id="city"
            name="city"
            placeholder="City"
            className="py-2 px-4 border border-gray-300 rounded"
          />
</div>
<div className='flex flex-col max-w-[100px] '>

          <label htmlFor="state" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            State
          </label>
          <Field
            id="state"
            name="state"
            placeholder="State"
            className="py-2 px-4 border border-gray-300 rounded"
          />
</div>
  

</div>
<div className='flex flex-row max-w-sm mb-4 '>
<div className='flex flex-col max-w-[150px] '>

          <label htmlFor="zipCode" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Zip Code
          </label>
          <Field
            id="zipCode"
            name="zipCode"
            placeholder="Zip Code"
            className="py-2 px-4 border border-gray-300 rounded-lg container mr-4 max-w-[200px]"
          />
  
</div>
          <div className='flex flex-col max-w-[100px] ml-4'>

          <label htmlFor="country" className="text-md text-orange-500 shadow-sm font-semibold mb-1 max-w-sm">
            Country
          </label>
          <CountryDropdown
            id="country"
            name="country"
            value={selectedCountry} // Use separate state variable
  onChange={(value) => setSelectedCountry(value)}
            className="py-2 px-4 border border-gray-300 rounded-lg  max-w-[200px]"
          />
  
</div>
</div>

</div>
</div>


          <div className='flex flex-col py-3 w-screen bg-white/60 rounded-lg justify-bewteen items-start shadow-lg max-w-xs p-2 mb-4 border-yellow-100 border'>
          <label htmlFor="volunteerSelections" className="text-md text-orange-500 shadow-sm font-semibold  mb-1">
            Volunteer Selections
          </label>

  
          <div id="checkbox-group" className="mb-2">
            Please select the areas htmlFor which you would like to volunteer
          </div>
          <div role="group" aria-labelledby="checkbox-group">
            <label className="flex items-center">
              <Field type="checkbox" name="volunteerSelections" value="Board Member" className="mr-2" />
              Board Member
            </label>
            <label className="flex items-center">
              <Field type="checkbox" name="volunteerSelections" value="Committee" className="mr-2" />
              Committee
            </label>
            <label className="flex items-center">
              <Field type="checkbox" name="volunteerSelections" value="Program Assistant" className="mr-2" />
              Program Assistant
            </label>
            <label className="flex items-center">
              <Field type="checkbox" name="volunteerSelections" value="Fund Raiser" className="mr-2" />
              Fund Raiser
            </label>
            <label className="flex items-center">
              <Field type="checkbox" name="volunteerSelections" value="Office Assistant" className="mr-2" />
              Office Assistant
            </label>
            <label className="flex items-center">
              <Field type="checkbox" name="volunteerSelections" value="Event Planner" className="mr-2" />
              Event Planner
            </label>
          </div>
</div>

          <label htmlFor="signature" className="text-md text-orange-500  font-semibold mb-1">
            Signature
          </label>
          <div className='bg-white rounded-lg shadow-lg max-w-[350px] '>
          <ReactSignatureCanvas
            penColor="black"
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            ref={(ref) => {
              setSigCanvas(ref);
            }}
            onEnd={handleSignature}
            className="border border-gray-300  bg-cyan-300  rounded"
          />
</div>
          <button
            type="button"
            onClick={handleClearSignature}
            className="py-2 px-4 bg-gray-200 text-gray-800 rounded mt-2"
          >
            Clear Signature
          </button>

          <label htmlFor="date" className="text-md text-orange-500 shadow-sm font-semibold mb-1">
            Date
          </label>
          <Field
            id="date"
            name="date"
            type="date"
            className="py-2 px-4 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white rounded mt-4"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default VolunteerForm;
