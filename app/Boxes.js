"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Boxes() {
  const items = [
    { img: "./Frame (1).png", title: "Coffee Beans" },
    { img: "./Frame (2).png", title: "Espresso" },
    { img: "./icon 1.png", title: "French Press" },
    { img: "./icon 3.png", title: "Latte Art" },
    { img: "./icon 4.png", title: "Accessories" },
  ];

  return (
    <div className="text-center px-4 py-12">
      {/* تیتر */}
      <motion.img
        src="./services.png"
        alt="Services"
        className="mx-auto w-40 sm:w-56 md:w-64"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* باکس‌ها */}
      <div
        className="
          grid gap-6 mt-10 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          justify-items-center
        "
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-36 sm:w-40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="
                w-36 h-36 sm:w-40 sm:h-40 
                bg-[#54372B] rounded-t-full flex items-center justify-center 
                shadow-md overflow-hidden 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm sm:text-base font-medium text-[#F8E4BE]">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
