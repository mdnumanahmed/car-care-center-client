import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="max-w-[80%] rounded-lg shadow-2xl" />
            <img src={parts} className="max-w-[50%] absolute top-1/2 right-5 rounded-lg shadow-2xl border-8 border-white" />
          </div>
          <div className="lg:w-1/2 space-y-5 p-8">
            <h3 className="text-3xl font-bold text-orange-700">About Us</h3>
            <h1 className="text-5xl font-bold pr-20">We are qualified & of experience in this field</h1>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
