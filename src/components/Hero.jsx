import React from "react";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/1600x900?nature')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore the Beauty of Nature
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the wonders of the natural world
        </p>
        <button className="px-6 py-3 bg-green-500 rounded-lg text-white hover:bg-green-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
