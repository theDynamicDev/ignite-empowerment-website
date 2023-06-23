import React from "react";

const TestimonialsCard = ({ data }) => {
  const { image, content, name } = data;
  return (
    <div className="item single-testimonials">
      <div className="img-box">
        <img src={image} alt="Awesome Image" />
      </div>
      <div className="text-box">
        <h3>{content}</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
