import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="mb-8 flex items-center shadow-lg border-gray-100 px-6 border relative rounded-md w-[90%] mx-auto justify-between">
      <div>
        <h2 className="text-4xl font-bold mb-2">Hello, Beautiful Human!</h2>
        <p className="text-gray-600">What do you want to do today?</p>
      </div>
      <div className="relative w-32 h-40">
        <img
          src="/banner.png"
          alt="Illustration of person with laptop"
          className="w-full  absolute top-9 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
