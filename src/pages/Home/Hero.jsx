import React from "react";

const Hero = () => {
  return (
    <section className=" bg-gray-800  text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Welcome to
          <span className=" text-blue-700"> Household </span>
          service
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Your 100 problems but only one solution is Household service.
          So Let's Start with Household Service Ltd.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded  bg-blue-700  text-gray-100 hover:bg-gray-700 hover:text-blue-700">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded  text-gray-50  border-gray-700 hover:bg-blue-700 ">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
