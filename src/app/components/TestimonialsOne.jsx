import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialsCard from "./TestimonialsCard";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay, Pagination]);

import testimonials1 from "public/images/testi-1-1.jpg";
import testimonials2 from "public/images/testi-1-2.jpg";

const TestimonialsOneData = [
  {
    image: testimonials1,
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.",
    name: "Christine Eve"
  },
  {
    image: testimonials2,
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.",
    name: "Mildred Rodriguez"
  }
];
const TestimonialsOne = () => {
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#testimonials-carousel-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  };
  return (
    <section className="testi-carousel-wrapper">
      <div className="overlay"></div>
      <div className="thm-container">
        <Swiper className="testi-carousel" {...carouselOptions}>
          {TestimonialsOneData.map((post, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard data={post} />
            </SwiperSlide>
          ))}
          <div
            className="swiper-pagination"
            id="testimonials-carousel-pagination"
          ></div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsOne;
