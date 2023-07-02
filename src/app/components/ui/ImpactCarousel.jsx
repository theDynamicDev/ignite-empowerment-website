'use client'
import {useState, useRef, useEffect} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Slider from 'react-slick'
import {Text} from '@nextui-org/react'
// Sample data
const events = [
  {
    id: 1,
    imgSrc: '/public/images/college-ready.png',
    summary:
      ' lorem ipsum okw dfadfnh ahop h haowhf oagahguh hfaghaoghapoifghpaoihg apwouhg apoghaghoighhgaeaiughaiuh  gahifuh asfoihfhoi hfodsihf oahahaoihf aop',
    date: 'Event 1 date...',
  },
  {
    id: 2,
    imgSrc: '/public/images/flame-black-bg.png',
    summary:
      ' lorem ipsum okw dfadfnh ahop h haowhf oagahguh hfaghaoghapoifghpaoihg apwouhg apoghaghoighhgaeaiughaiuh  gahifuh asfoihfhoi hfodsihf oahahaoihf aop',
    date: 'Event 1 date...',
  },
  {
    id: 3,
    imgSrc: '/public/images/college-ready.png',
    summary:
      ' lorem ipsum okw dfadfnh ahop h haowhf oagahguh hfaghaoghapoifghpaoihg apwouhg apoghaghoighhgaeaiughaiuh  gahifuh asfoihfhoi hfodsihf oahahaoihf aop',
    date: 'Event 1 date...',
  },
  {
    id: 4,
    imgSrc: '/public/images/hero3.png',
    summary:
      ' lorem ipsum okw dfadfnh ahop h haowhf oagahguh hfaghaoghapoifghpaoihg apwouhg apoghaghoighhgaeaiughaiuh  gahifuh asfoihfhoi hfodsihf oahahaoihf aop',
    date: 'Event 1 date...',
  },

  // ...
]

export default function ImpactCarousel() {
  const sliderRef = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    useCSS: true,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="relative mx-auto px-auto flex-auto flex-col w-screen overflow-hidden justify-center content-center items-center z-20">
      <Text
        css={{
          textGradient: '45deg, $red700 -70%, $yellow600 40%, $green600 60%, $cyan500 100%',
        }}
        weight="bold"
        className="  mb-20 text-4xl flex-auto justify-center flex flex-row items-center text-center   md:left-20  md:text-5xl text-white  md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray "
      >
        <span className="">EVENTS</span>
      </Text>
      <div>
        <div className="absolute md:flex-row justify-center items-center h-[600px] max-h-[545px] md:min-h-[600px] md:max-h-[600px] lg:h-[60vh] w-screen bottom-[105px] rotate-1  shadow-lg -z-10 bg-cyan-400/80" />
        <Slider
          ref={sliderRef}
          {...settings}
          className=" md:items-start max-h-[800px]  min-w-full hover:overflow-visible w-screen flex-auto md:mx-auto  pb-3 pt-4 px-4 bg-yellow-300/70 shadow-lg items-center justify-center"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/0 md:px-auto md:mx-auto hover:rotate-2  hover:z-30 rounded-lg md:min-w-[305px]   flex-auto overflow-hidden justify-center shadow-lg md:shadow-none items-center "
            >
              <div className="rounded-lg object-cover  flex flex-col max-h-[500px]  md:px-5 justify-center self-center container px-2 items-center overflow-hidden  transform hover:scale-105 transition-transform duration-200 ease-in-out">
                <Image
                  src={event.imgSrc}
                  alt="Event image"
                  width={500}
                  height={300}
                  className=" max-h-[200px] md:min-h-[275px]  lg:max-h-[200px] max-w-xl w-full  object-cover rounded-md  drop-shadow-lg "
                />
                <div className="px-4 bg-white rounded-lg flex-col max-h-xl flex justify-evenly py-4 max-w-xl">
                  <div className="font-bold text-xl flex flex-col overflow-hidden items-start justify-evenly mb-2">
                    {' '}
                    Event{' '}
                    <span className="flex justify-start items-start text-sm font-light">
                      {' '}
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-700 overflow-hidden overflow-y-scroll relative text-base">
                    {event.summary}
                  </p>
                  <div className="flex-row flex justify-start self-start pt-4">
                    <button className=" hover:bg-green-500 hover:text-yellow-300 text-cyan-500 leading-5 tracking-wide font-bold py-2 px-4 rounded">
                      Learn More...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex  py-11 justify-evenly items-between  px-3 text-xl ">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="prev-arrow  text-orange-400/90 hover:text-cyan-400 font-semibold rounded-full tracking-wide leading-10 justify-around items-center flex flex-row py-2 px-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" flex mr-3 animate-pulse text-green-500 justify-center items-center w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          Previous
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="next-arrow   text-orange-400/90 hover:text-cyan-400 font-semibold rounded-full tracking-wide leading-10 justify-evenly items-center flex flex-row py-2 px-5"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" flex ml-3 animate-pulse text-green-500 justify-center items-center w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
