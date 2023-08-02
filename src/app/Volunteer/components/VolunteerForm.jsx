'use client'
import React, {useState} from 'react'
import {useForm} from '@formspree/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import './form.css'
import classNames from '../../../lib/classNames'
import Link from 'next/link'

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

export default function VolunteerForm() {
  const [state, handleSubmit] = useForm('xvojzvel')
  const [selectedState, setSelectedState] = useState('')

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
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
            Your Submission was Successful!{' '}
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
        'bg-cyan-100/70',
        'z-20'
      )}
    >
      <div className=" flex w-full relative max-w-6xl flex-col justify-center md:flex-wrap z-20">
        <div className="container  max-w-6xl  flex flex-col items-center justify-center">
          <h2 className="form-titles mb-3 text-xl font-bold md:flex">Volunteer Positions</h2>
          <div className="drop-shadow-sm ">
            <div className="mb-5 grid appearance-none grid-flow-row grid-rows-3  gap-2 rounded-lg border border-slate-100/60 px-2 py-5 font-medium outline-none drop-shadow-md text-shadow-md focus:shadow-outline-blue">
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="board_Member"
                  name="position"
                  value="Board Member"
                  className=" mr-1 border outline-none drop-shadow-sm focus:border-blue-500 focus:shadow-outline-blue "
                />
                <label htmlFor="Board Member"> Board Member</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="committee"
                  name="position"
                  value="Committee"
                  className="mr-1 border outline-none drop-shadow-sm focus:border-blue-500  focus:shadow-outline-blue"
                />
                <label htmlFor="Committee"> Committee</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="program_Assistant"
                  name="position"
                  value="Program Assistant"
                  className="mr-1 border outline-none drop-shadow-sm focus:border-blue-500  focus:shadow-outline-blue"
                />
                <label htmlFor="Program Assistant"> Program Assistant</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="fund_Raising"
                  name="position"
                  value="Fund Raising"
                  className=" mr-1 border outline-none drop-shadow-sm focus:border-blue-500 focus:shadow-outline-blue "
                />
                <label htmlFor="Fund Raising"> Fund Raising</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="office_Assistant"
                  name="position"
                  value="Office Assistant"
                  className="mr-1 border outline-none drop-shadow-sm focus:border-blue-500  focus:shadow-outline-blue"
                />
                <label htmlFor="Office Assistant"> Office Assistant</label>
              </div>
              <div className=" mr-3 rounded px-2">
                <input
                  type="checkbox"
                  id="event_Planner"
                  name="position"
                  value="Event Planner"
                  className="mr-1 border outline-none drop-shadow-sm focus:border-blue-500  focus:shadow-outline-blue"
                />
                <label htmlFor="Event Planner"> Event Planner</label>
              </div>
            </div>
          </div>
        </div>

        <div className="md:my-5 md:flex md:w-full md:max-w-6xl md:flex-row md:items-start  md:justify-center">
          <div className="my-2 md:flex md:w-screen md:max-w-md md:flex-col md:justify-between">
            <h2 className="form-titles mb-4 text-xl font-bold md:flex md:justify-start">
              Volunteer Information
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
        </div>
        <div className="container md:my-5 md:flex md:w-full md:max-w-6xl md:flex-col md:items-center  md:justify-start">
          <div className="md:flex md:max-w-2xl md:flex-col  md:items-center md:justify-between">
            <div className="my-4  ">
              <h2 className="form-titles mb-4 text-xl font-bold md:flex md:justify-start">
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
                
                className="focus:shadow-outline w-screen max-w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-none focus:border-blue-500 focus:shadow-outline-blue focus:outline-none md:max-w-lg"
              />
            </div>
            <div className="flex w-screen max-w-full md:max-w-scrren flex-row md:flex md:justify-center">
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
            <h1 className="form-titles my-5 text-xl font-bold"> Terms and Conditions </h1>
            <p className="w-full max-w-3xl rounded bg-white/80 p-5">
              Please confirm that you understand that by submitting this form you are agreeing to
              the terms and conditions of the program. If you would like to know more before
              proceeding then please click{' '}
              <Link
                href="https://www.ignite-empowerment.org/contact"
                className="text-blue-500 underline"
              >
                here
              </Link>{' '}
              to contact us for more info...
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
            <label htmlFor="agree" className="text-lg font-semibold">
              {' '}
              I HAVE READ THE TERMS AND CONDITIONS AND I AGREE{' '}
            </label>
          </div>
        </div>

        <div className=" flex justify-center md:mb-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="focus:shadow-outline mt-3 w-full max-w-xs rounded bg-green-500 px-3 py-3 font-bold text-white hover:bg-green-700 focus:outline-none"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  )
}
