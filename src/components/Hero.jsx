import React from "react";

//the arguments in the fuctions are called PROPS here because the value is being passed from the parent(app.jsx) to child(Hero.jsx).
// when {} is used it is destructuring the props. there can be default value for the props too when you assign a value to the destructured arguments
const Hero = ({ title = "Become a React Dev", subtitle }) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
