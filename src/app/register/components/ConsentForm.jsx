"use client";
import React, { useState} from 'react';
import  {useForm} from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import "./form.css"
const ChildForm = ({ index, onRemove }) => (
    <div className='flex flex-col justify-between items-start max-w-[600px] relative my-4 md:flex-row md:justify-end md:mt-8 md:items-end'>
        
        <div className=" md:flex md:flex-col md:mx-5">
        <h3 className="font-extralight">Child - {index + 1}</h3>
        <label className="block text-sm font-bold my-2" htmlFor={`childName-${index}`}>Child Full Name</label>
      <input id={`childName-${index}`} type="text" name={`childName-${index}`} className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-[230px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
        </div>
     
     
        <div className=" md:flex md:flex-col md:mt-7 md:justify-center ">
      <label htmlFor={`childAge-${index}`} className="block text-sm font-bold my-2">Child Age</label>
      <input id={`childAge-${index}`} type="number" name={`childAge-${index}`} className="shadow appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-full max-w-[50px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
  <div className="mt-3 max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={() => onRemove(index)}>
    <FontAwesomeIcon icon={faTrash} />
  </div>
      {/* <button type="button" className="mt-3   max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => onRemove(index)}>Remove Child</button> */}
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
      
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="flex  p-5 mt-5 pt-10 rounded-2xl flex-col justify-center h-full bg-cyan-100/70 items-start md:items-center relative content-around w-screen max-w-screen-lg md:max">
            <div className="flex flex-col md:flex-wrap justify-center relative w-full max-w-6xl ">
                <div className= "md:justify-center  md:flex  md:flex-col md:items-center max-w-6xl container">
        <h2 className="form-titles font-bold text-xl mb-3 md:flex">Programs of Interest</h2>
        <div className= " ">
        <div className="grid grid-flow-row grid-rows-3 gap-2 py-5 drop-shadow-sm  px-2 w-48 mb-5 font-medium rounded-lg appearance-none outline-none border hover:border-blue-500 focus:shadow-outline-blue">
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
        </div>
        </div>
      
        <div className="my-2 md:w-full md:max-w-6xl md:flex-row md:flex md:justify-center md:relative  md:items-start">
        
        <div className="my-2 md:flex md:flex-col md:max-w-md md:w-screen md:justify-between">
        <h2 className="form-titles font-bold text-xl mb-4 md:flex md:justify-start">Registrant Information</h2>
            <div className='md:flex md:flex-row md:justify-between  md:max-w-2xl md:items-center'>
            
        <div className="my-2 md">
          <label htmlFor="firstName" className="block text-sm font-bold mb-2">First Name</label>
          <input id="firstName" type="text" name="firstName" required className=" outline-none focus:border-blue-500 focus:shadow-outline-blue shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="my-2">
          <label htmlFor="lastName" className="block text-sm font-bold mb-2">Last Name</label>
          <input id="lastName" type="text" name="lastName" required className="shadow outline-none focus:border-blue-500 focus:shadow-outline-blue appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
        </div>

            </div>
  <div className="my-2 md:flex md:flex-row md:justify-between ">
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

        
        <div className=' md:flex md:justify-between flex-col  md:items-start md:-mt-[0px] md:ml-4'>
        <h2 className=" form-titles font-bold text-xl mt-4 md:mt-0">Children</h2>
        {children.map((_, index) => (
          <ChildForm key={index} index={index}  onRemove={handleRemoveChild} />
        ))}
        <div className='md:flex md:justify-center md:relative md:w-full'>
        <button type="button" onClick={handleAddChild} className="my-3 flex md:justify-end md:content-center max-w-xs md:max-w-[118px] md:mr-4 md:w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Child</button>
        </div>
       

        </div>
        </div>
        <div className="my-5 flex flex-col items-center max-w-6xl justify-center">

            
       
        <div className="md:flex md:flex-col md:items-center md:w-full container">
       
        <div className="mb-4  ">
        <h2 className="font-bold text-xl  md:justify-center  md:flex md:flex-row  my-5">Address</h2>
          <label htmlFor="streetAddress" className="block text-sm  font-bold mb-2">Street Address</label>
          <input id="streetAddress" type="text" name="streetAddress" required className="shadow max-w-md md:max-w-lg appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-screen py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-sm  font-bold mb-2">Street Address 2</label>
          <input id="streetAddress" type="text" name="streetAddress" required className="shadow max-w-md md:max-w-lg appearance-none outline-none border focus:border-blue-500 focus:shadow-outline-blue rounded w-screen py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
<div className='flex flex-row w-screen max-w-md md:justify-start md:flex'>


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

        </div>
      
        <div className="my-5 flex flex-col items-center max-w-6xl justify-center">
            
            <div className="flex flex-col justify-start items-center">
            <h1 className="font-bold text-xl my-5"> Terms and Conditions </h1>
            <p className="w-full bg-white/80  max-w-3xl p-5 rounded">
            Attending an in-person or virtual Ignite Empowerment event or program, you maybe in an area of video, photography, and audio. By being a participant of the event or program you are consenting to video, photography, and audio recording, and its release, publication, or reproduction to be used for Ignite Empowerment’s marketing purpose, and advertising on website, social media, and printed material.
            </p>
                </div>
                <div className=" p-2 my-5 rounded mr-3">
          <input type="checkbox" required id="agree" name="program" value="agree"  className=" outline-none border focus:border-blue-500 focus:shadow-outline-blue drop-shadow-sm mr-1 "/>
          <label htmlFor="agree">  I HAVE READ THE TERMS AND CONDITIONS AND I AGREE </label>
        </div>
            </div>
       
        <div className="flex relative md:mb-10 justify-center">
        <button type="submit" disabled={state.submitting} className="mt-3 max-w-xs w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-3 rounded focus:outline-none focus:shadow-outline">
          {state.submitting ? 'Registering...' : 'Register'}
        </button>
        </div>
        </div>
      </form>
    );
  }
  

