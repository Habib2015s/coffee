"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentBox() {
  const [activeIndex, setActiveIndex] = useState(0);

  const texts = [
    "Eliza is an online coffee store that offers the widest selection of specialty coffees and teas ",
    "From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically ",
    "Sourced products to tantalize any customers palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals ",
  ];

  return (
    <div className="max-w-5xl w-full mx-auto mt-10 relative px-4">
      {/* تیتر روی بوردر (بیرون باکس) */}
      <div className="absolute -top-6 right-6 z-20">
        <img
          src="./our story.png"
          alt="Our Story"
          className="w-32 sm:w-40 md:w-48"
        />
      </div>

      {/* باکس محتوا */}
      <div className="relative p-4 sm:p-6 flex flex-col md:flex-row bg-gradient-to-r from-[#0F090A] via-[#0C0708] to-[#744F40] shadow-lg rounded-2xl overflow-hidden">
        
        {/* ستون عکس بالا در موبایل / سمت چپ در دسکتاپ */}
        <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src="./Image-ourstory.png"
            alt="Slide"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-[250px] md:h-[250px] object-cover rounded-lg"
          />
        </div>

        {/* ستون متن پایین در موبایل / سمت راست در دسکتاپ */}
        <div className="flex-1 flex items-center justify-center px-2 sm:px-6 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <p className="text-base sm:text-lg font-semibold m-2 text-white leading-relaxed">
                {texts[activeIndex]}
              </p>

              {activeIndex === 0 && (
                <button
                  onClick={() => setActiveIndex(1)}
                  className="hover:scale-110 cursor-pointer mt-3 px-4 py-2 text-sm font-medium text-white bg-[#DFC39D] rounded-md hover:bg-[#c9aa78] transition"
                >
                  More
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* دایره‌ها بیرون باکس */}
      <div className="flex justify-center gap-3 mt-4">
        {texts.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
              activeIndex === index ? "bg-[#DFC39D]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
