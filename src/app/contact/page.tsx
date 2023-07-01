'use client'
import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {Text} from '@nextui-org/react'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:sam-monroe@ignite-empowerment.org?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`
  }

  return (
    <motion.div className=" h-screen w-full flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-7xl  px-auto bg-gray-700 justify-evenly mx-auto items-center">
      <h3 className=" z-20 flex  justify-center w-full">
        <Text
          css={{
            textGradient: '90deg, $red700 -70%, $yellow600 30%, $green600 60%, $cyan500 100%',
          }}
          weight="bold"
          className=" absolute top-10 uppercase  font-bold text-4xl  md:top-20 max-w-32  md:flex-col -z-40 flex text-center bottom-20 md:bottom-0  md:text-5xl text-white items-start tracking-wide leading-10 indent-2 drop-shadow-xl"
        >
          <span className=""> CONTACT US </span>
        </Text>
      </h3>

      <div className="flex flex-col md:space-y-10 mt-10 space-y-9 mb-2">
        <h4 className=" text-4xl text-cyan-400 font-semibold text-center ">
          DONT JUST LOOK{' '}
          <span className="decoration-[#ff6835]/50 underline text-yellow-400 animate-pulse">
            {' '}
            MAKE AN IMPACT.{' '}
          </span>
        </h4>
        <div className="flex justify-center pr-3.5 items-center flex-col md:space-y-10 space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-6 w-6 text-blue-500 animate-pulse " />
            <p className="text-2xl text-white"> +1234567890 </p>
          </div>
          {/* <div className= "flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-6 w-6 text-purple-500 animate-bounce " />
            <p className="text-2xl"> +1234567890 </p>

            </div> */}
          <div className="flex items-center md:space-x-5 ml-2 justify-center">
            <EnvelopeIcon className="h-6 w-6  mr-6 text-green-500 animate-pulse " />
            <p className="text-xl text-white"> info@ignite-empowerment.org </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex space-y-2 mr-5 md:w-fit mx-auto w-[90vw] flex-col"
        >
          <div className=" flex flex-col space-y-2 sm:w-[90vw] space-x-0 md:space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              type="text"
              className=" contactInput "
            />
            <input
              {...register('email')}
              placeholder="Email"
              type="email"
              className="contactInput "
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            type="text"
            className="contactInput "
          />
          <textarea {...register('message')} placeholder="Message" className="contactInput " />
          <button
            type="submit"
            className="bg-teal-400/60 py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactMe
