"use client";
import React, { useState} from 'react';
import  {useForm} from '@formspree/react';
import SelectUSState from 'react-select-us-states';
import "./form.css"
const ChildForm = ({ index, onRemove }) => (
    <div className='flex flex-col justify-between items-start  my-4 md:flex-row md:justify-end md:mt-8 md:items-end'>
        
        <div className=" md:flex md:flex-col md:mx-5">
        <h3 className="font-extralight">Child - {index + 1}</h3>
        <label className="block text-sm font-bold my-2" htmlFor={`childName-${index}`}>Child Full Name</label>
      <input id={`childName-${index}`} type="text" name={`childName-${index}`} className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-[230px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
        </div>
     
     
        <div className=" md:flex md:flex-col md:mt-7 md:justify-center ">
      <label htmlFor={`childAge-${index}`} className="block text-sm font-bold my-2">Child Age</label>
      <input id={`childAge-${index}`} type="number" name={`childAge-${index}`} className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-full max-w-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
      <button type="button" className="mt-3   max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => onRemove(index)}>Remove Child</button>
    </div>
  );

  const USStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];
  
export default function ConsentForm() {

    const [children, setChildren] = useState([{}]);
    const [state, handleSubmit] = useForm('mayzrgda')
    const [selectedState, setSelectedState] = useState('');

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
      };
    
    const handleAddChild = () => setChildren([...children, {}]);
    const handleRemoveChild = (index) => {
      const newChildren = [...children];
      newChildren.splice(index, 1);
      setChildren(newChildren);
    };
  
    const setNewValue = (newValue) => {
        setSelectedState(newValue);
      };
    
    
    if (state.succeeded) {
        return <p>Your Registration was Successful!</p>;
    }

 
  
    return (
      
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="flex  px-7 flex-col justify-center h-full items-start md:items-center content-around w-full  lg:w-1/2">
            <div className="flex flex-col md:flex-wrap justify-center w-full max-w-[800px] ">
        <h2 className="form-titles font-bold text-xl mb-3">Programs of Interest</h2>
        <div className="grid grid-flow-row grid-rows-3 gap-2 py-5 drop-shadow-sm  px-2 w-48 mb-5 font-medium rounded-lg container appearance-none outline-none border hover:border-blue-500 focus:shadow-outline-blue">
        <div className=" px-2 rounded mr-3">
          <input type="checkbox" id="ignite" name="program" value="Ignite Institute"  className=" outline-none border focus:border-blue-500 focus:shadow-outline-blue drop-shadow-sm mr-1 "/>
          <label htmlFor="ignite">  Ignite Institute</label>
        </div>
        <div  className=" px-2 rounded mr-3" >
          <input type="checkbox" id="bookClub" name="program" value="Book Club" className="outline-none border focus:border-blue-500 focus:shadow-outline-blue drop-shadow-sm  mr-1" />
          <label htmlFor="bookClub">  Book Club</label>
        </div>
        <div className=" px-2 rounded mr-3" >
          <input type="checkbox" id="psst" name="program" value="PSST" className="outline-none border focus:border-blue-500 focus:shadow-outline-blue drop-shadow-sm  mr-1"/>
          <label htmlFor="psst">  PSST</label>
        </div>

        </div>
     
  
        <h2 className="form-titles font-bold text-xl mb-4">Registrant Information</h2>
        <div className="my-2 md:w-screen md:max-w-5xl md:flex-row md:flex md:justify-evenly md:relative md:items-start">
        <div className="my-2 md:flex md:flex-col md:w-1/2 md:justify-between">
            <div className='md:flex md:flex-row md:justify-between'>

        <div className="my-2">
          <label htmlFor="firstName" className="block text-sm font-bold mb-2">First Name</label>
          <input id="firstName" type="text" name="firstName" required className=" outline-none focus:border-blue-500 focus:shadow-outline-blue shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="my-2">
          <label htmlFor="lastName" className="block text-sm font-bold mb-2">Last Name</label>
          <input id="lastName" type="text" name="lastName" required className="shadow outline-none focus:border-blue-500 focus:shadow-outline-blue appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
        </div>

            </div>
  <div className="my-2 md:flex md:flex-row md:justify-between">
        <div className="my-4">
          <label htmlFor="emailAddress" className="block text-sm font-bold mb-2">Email Address</label>
          <input id="emailAddress" type="email" name="emailAddress" required className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4 md:my-4">
          <label htmlFor="phoneNumber" className="block text-sm font-bold mb-2 ">Phone Number</label>
          <input id="phoneNumber" placeholder="(444-444-4444)"type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-full max-w-sm  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        </div>
        </div>

        
        <div className=' md:flex md:justify-between flex-col md:w-1/2 md:items-start md:-mt-[50px] md:ml-12'>
        <h2 className=" form-titles font-bold text-xl mt-4 md:mt-0">Children</h2>
        {children.map((_, index) => (
          <ChildForm key={index} index={index}  onRemove={handleRemoveChild} />
        ))}
        <div className='md:flex md:justify-center md:relative md:w-full'>
        <button type="button" onClick={handleAddChild} className="my-3 flex md:justify-end md:content-center max-w-xs md:max-w-[118px] md:mr-4 md:w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Child</button>
        </div>
       

        </div>
        </div>
        <h2 className="font-bold text-xl my-4">Address</h2>
        <div className="md:flex md:flex-col md:items-center md:w-screen md:relative max-w-3xl">
        
        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-sm  font-bold mb-2">Street Address</label>
          <input id="streetAddress" type="text" name="streetAddress" required className="shadow max-w-xl appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-screen py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-sm  font-bold mb-2">Street Address 2</label>
          <input id="streetAddress" type="text" name="streetAddress" required className="shadow max-w-xl appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-screen py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
<div className='flex flex-row'>


        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-bold mb-2">City</label>
          <input id="city" type="text" name="city" required className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {/* <div className="mb-4 mx-5">
          <label htmlFor="state" className="block text-sm font-bold  mb-2">State/Province</label>
          <input id="state" type="text" name="state" required className="shadow appearance-none border rounded w-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div> */}
        <div className="mb-4 mx-5">
        <label htmlFor="state" className="block text-sm font-bold mb-2">State/Province</label>
        <select
        required
        id="state"
        className="select-state"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Select a state</option>
        {USStates.map((stateCode) => (
          <option key={stateCode} value={stateCode}>
            {stateCode}
          </option>
        ))}
      </select>
        {/* <select id="state" name="state" required className=" shadow appearance-none border rounded w-[160px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
          <option value="">Select a state</option>
          <SelectUSState className=" select-state" onChange={setNewValue}/>
        </select> */}
        <input type="hidden" name="selectedState" value={selectedState} />

      </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-sm font-bold mb-2">Zip/Postal Code</label>
          <input id="zip" type="text" name="zip" required className=" shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        </div>

</div>
<div className="flex relative md:my-5 justify-center">
        <button type="submit" disabled={state.submitting} className="mt-3 max-w-xs w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline">
          {state.submitting ? 'Registering...' : 'Register'}
        </button>
        </div>
        </div>
      </form>
    );
  }
  

