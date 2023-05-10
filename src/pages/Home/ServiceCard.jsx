import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <p className="text-xl text-primary">Price: ${price}</p>
          <button className="btn btn-circle">
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
