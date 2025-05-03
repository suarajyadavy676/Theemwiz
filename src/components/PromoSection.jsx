import React from "react";

const PromoSection = () => {
  return (
    <div className="bg-[#201D36] px-4">
      <div className="bg-[#FDEDE8] rounded-lg flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 md:py-10">
        {/* Left Section */}
        <div className="w-full md:w-1/3 text-center -mt-20 md:text-left mb-6 md:mb-0">
          <div className="inline-block mb-3">
            <img
              src="/icon.png"
              alt="Icon"
              className="mx-auto md:mx-0"
            />
          </div>
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-1">
            Get Started
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-[#2C2C2C] mb-3">
            We Help Companies <br /> Move Faster
          </h2>
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition">
            Contact Us
          </button>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-1/3 text-center my-4 md:my-0">
          <img src="/block.png" alt="Chart" className="max-w-[300px] mx-auto" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 relative flex justify-center items-center -mt-20">
          {/* Background Path Image */}
          <img
            src="/Path.png"
            alt="Decorative Path"
            className="absolute max-h-[250px] md:max-h-[300px] object-contain z-0"
          />

          {/* Foreground Woman Image */}
          <img
            src="/woman-posing.png"
            alt="Professional Woman"
            className="relative z-10 max-h-[250px] md:max-h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
