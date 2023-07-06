'use client'
import React, {useState} from 'react'
import {useForm} from '@formspree/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import './form.css'
import classNames from '../../../lib/classNames'
const ChildForm = ({index, onRemove}) => (
  <div className=" mb-4 flex max-w-[600px] flex-col items-start justify-between md:mt-8 md:flex-row md:items-end md:justify-end">
    <div className=" md:mx-5 md:flex md:flex-col">
      <h3 className="font-normal ">Child - {index + 1}</h3>
      <label className="my-2 block text-sm font-bold" htmlFor={`childName-${index}`}>
        Child Full Name
      </label>
      <input
        id={`childName-${index}`}
        type="text"
        name={`childName-${index}`}
        className="focus:shadow-outline w-[230px] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
      />
    </div>

    <div className=" md:mt-7 md:flex md:flex-col md:justify-center ">
      <label htmlFor={`childAge-${index}`} className="my-2 block text-sm font-bold">
        Child Age
      </label>
      <input
        id={`childAge-${index}`}
        type="number"
        name={`childAge-${index}`}
        className="focus:shadow-outline w-full max-w-[50px] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
      />
    </div>
    <div
      className="focus:shadow-outline mt-3 max-w-xs rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none "
      onClick={() => onRemove(index)}
    >
      <FontAwesomeIcon icon={faTrash} />
    </div>
    {/* <button type="button" className="mt-3   max-w-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => onRemove(index)}>Remove Child</button> */}
  </div>
)

const USStates = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
]

export default function ConsentForm() {
  const [children, setChildren] = useState([{}])
  const [state, handleSubmit] = useForm('mayzrgda')
  const [selectedState, setSelectedState] = useState('')

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
  }

  const handleAddChild = () => setChildren([...children, {}])
  const handleRemoveChild = (index) => {
    const newChildren = [...children]
    newChildren.splice(index, 1)
    setChildren(newChildren)
  }

  const setNewValue = (newValue) => {
    setSelectedState(newValue)
  }

  if (state.succeeded) {
    return (
      <div className="text-white relative bg-black/60 mx-auto h-[600px] w-full z-50 flex flex-col bg-center snap-center snap-mandatory content-center justify-center items-center text-3xl font-semi-bold leading-8 ">
        <div className="flex flex-col justify-around text-center h-[200px] w-full">
          <p className=" flex justify-center content-center  items-center mx-auto px-5 shadow-cyan-400 drop-shadow-lg">
            THANK YOU FOR MAKING AN IMPACT!
          </p>{' '}
          <p className="flex justify-center content-center items-center mx-auto px-5 shadow-cyan-400 drop-shadow-lg">
            {' '}
            Your Registration was Successful!{' '}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      encType="multipart/form-data"
      className={classNames(
        'h-full w-screen max-w-screen-lg',
        'my-5 rounded p-5 py-10',
        'flex flex-col content-around items-start justify-center',
        'md:items-center',
        'bg-cyan-100/80',
        'z-20'
      )}
    >
      <div className=" flex w-full max-w-6xl flex-col justify-center md:flex-wrap z-20">
        <div className="container  max-w-6xl  md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="form-titles mb-3 text-xl font-bold md:flex">Programs of Interest</h2>
          <div className=" ">
            <div className="mb-5 grid w-48 appearance-none grid-flow-row grid-rows-3  gap-2 rounded-lg border px-2 py-5 font-medium outline-none drop-shadow-sm hover:border-blue-500 focus:shadow-outline-blue">
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="ignite"
                  name="program"
                  value="Ignite Institute"
                  className=" mr-1 border outline-none drop-shadow-sm focus:border-blue-500 focus:shadow-outline-blue "
                />
                <label htmlFor="ignite"> Ignite Institute</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="bookClub"
                  name="program"
                  value="Book Club"
                  className="mr-1 border outline-none drop-shadow-sm focus:border-blue-500  focus:shadow-outline-blue"
                />
                <label htmlFor="bookClub"> Book Club</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="psst"
                  name="program"
                  value="PSST"
                  className="mr-1 border outline-none drop-shadow-sm focus:border-blue-500  focus:shadow-outline-blue"
                />
                <label htmlFor="psst"> PSST</label>
              </div>
            </div>
          </div>
        </div>

        <div className="md:my-5 md:flex md:w-full md:max-w-6xl md:flex-row md:items-start  md:justify-center">
          <div className="my-2 md:flex md:w-screen md:max-w-md md:flex-col md:justify-between">
            <h2 className="form-titles mb-4 text-xl font-bold md:flex md:justify-start">
              Registrant Information
            </h2>
            <div className="md:flex md:max-w-2xl md:flex-row  md:items-center md:justify-between">
              <div className="md my-2">
                <label htmlFor="firstName" className="mb-2 block text-sm font-bold">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  className=" focus:shadow-outline w-full max-w-xs appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
                />
              </div>
              <div className="my-2">
                <label htmlFor="lastName" className="mb-2 block text-sm font-bold">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  className="focus:shadow-outline w-full max-w-xs appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
                />
              </div>
            </div>
            <div className="my-2 md:flex md:flex-row md:justify-between ">
              <div className="my-4">
                <label htmlFor="emailAddress" className="mb-2 block text-sm font-bold">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="emailAddress"
                  required
                  className="focus:shadow-outline w-full max-w-sm appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
                />
              </div>

              <div className="mb-4 md:my-4">
                <label htmlFor="phoneNumber" className="mb-2 block text-sm font-bold ">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  placeholder="(123456789)"
                  type="tel"
                  name="phoneNumber"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  className="focus:shadow-outline w-full max-w-sm appearance-none rounded border px-3 py-2 leading-tight  text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className=" flex-col flex  md:flex-col md:mt-5 md:ml-4  md:items-start md:justify-between">
            <h2 className=" form-titles mt-4  text-xl font-bold md:mt-0">Children</h2>
            {children.map((_, index) => (
              <ChildForm key={index} index={index} onRemove={handleRemoveChild} />
            ))}
            <div className="md: md:flex md:w-full md:justify-center">
              <button
                type="button"
                onClick={handleAddChild}
                className="focus:shadow-outline my-3 flex max-w-xs rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none md:mr-4 md:w-full md:max-w-[118px] md:content-center md:justify-end"
              >
                Add Child
              </button>
            </div>
          </div>
        </div>
        <div className="my-5 flex max-w-6xl flex-col items-center justify-center">
          <div className="container md:flex md:w-full md:flex-col md:items-center">
            <div className="mb-4  ">
              <h2 className="my-5 text-xl  font-bold  md:flex md:flex-row  md:justify-center">
                Address
              </h2>
              <label htmlFor="streetAddress" className="mb-2 block  text-sm font-bold">
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                name="streetAddress"
                required
                className="focus:shadow-outline w-screen max-w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none md:max-w-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="streetAddress" className="mb-2 block  text-sm font-bold">
                Street Address 2
              </label>
              <input
                id="streetAddress"
                type="text"
                name="streetAddress"
                required
                className="focus:shadow-outline w-screen max-w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none md:max-w-lg"
              />
            </div>
            <div className="flex w-screen max-w-full flex-row md:flex md:justify-start">
              <div className="mb-4">
                <label htmlFor="city" className="mb-2 block text-sm font-bold">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  className="focus:shadow-outline w-full max-w-xs appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
                />
              </div>

              {/* <div className="mb-4 mx-5">
          <label htmlFor="state" className="block text-sm font-bold  mb-2">State/Province</label>
          <input id="state" type="text" name="state" required className="shadow appearance-none border rounded w-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div> */}
              <div className="mx-5 mb-4">
                <label htmlFor="state" className="mb-2 block text-sm font-bold">
                  State/Province
                </label>
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
                <label htmlFor="zip" className="mb-2 block text-sm font-bold">
                  Zip/Postal Code
                </label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  required
                  className=" focus:shadow-outline w-[130px] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 flex max-w-6xl flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-start">
            <h1 className="my-5 text-xl font-bold"> Terms and Conditions </h1>
            <p className="w-full max-w-3xl  rounded bg-white/80 p-5">
              Attending an in-person or virtual Ignite Empowerment event or program, you maybe in an
              area of video, photography, and audio. By being a participant of the event or program
              you are consenting to video, photography, and audio recording, and its release,
              publication, or reproduction to be used for Ignite Empowerment’s marketing purpose,
              and advertising on website, social media, and printed material.
            </p>
          </div>
          <div className=" my-5 mr-3 rounded p-2">
            <input
              type="checkbox"
              required
              id="agree"
              name="program"
              value="agree"
              className=" mr-1 border outline-none drop-shadow-sm focus:border-blue-500 focus:shadow-outline-blue "
            />
            <label htmlFor="agree"> I HAVE READ THE TERMS AND CONDITIONS AND I AGREE </label>
          </div>
        </div>

        <div className=" flex justify-center md:mb-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="focus:shadow-outline mt-3 w-full max-w-xs rounded bg-green-500 px-3 py-3 font-bold text-white hover:bg-green-700 focus:outline-none"
          >
            {state.submitting ? 'Registering...' : 'Register'}
          </button>
        </div>
      </div>
    </form>
  )
}
