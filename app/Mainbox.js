"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentBox() {
  const [activeIndex, setActiveIndex] = useState(0);

  const texts = [
"Eliza is an online coffee store that offers the widest selection of specialty coffees and teas ", 
  "from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically ",
    "sourced products to tantalize any customers palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals ",
  ];

  return (
    <div className="w-[600px] mx-auto mt-10">
      {/* باکس محتوا */}
      <div className="p-6 flex bg-[#A8715C] shadow-lg rounded-2xl overflow-hidden">
        {/* ستون عکس ثابت */}
        <div className="flex-shrink-0 top-8 relative">
          <img
            src="./Image-ourstory.png"
            alt="Slide"
            className="w-[250px]  h-[250px] object-cover rounded-lg"
          />
        </div>

        {/* ستون متن متغیر */}
        <div className="flex-1 flex items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <p className="text-lg font-semibold text-white">{texts[activeIndex]}</p>

              {/* دکمه فقط روی اسلاید اول */}
              {activeIndex === 0 && (
                <button
                  onClick={() => setActiveIndex(1)}
                  className="mt-3 px-4 py-2 text-sm font-medium text-white bg-[#DFC39D] rounded-md hover:bg-[#c9aa78] transition"
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
            className={`w-4 h-4 rounded-full transition ${
              activeIndex === index ? "bg-[#DFC39D]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
