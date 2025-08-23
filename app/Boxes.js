"use client";
import React from "react";

export default function Boxes() {
  const items = [
    { img: "./Frame (1).png", title: "Coffee Beans" },
    { img: "./Frame (2).png", title: "Espresso" },
    { img: "./icon 1.png", title: "French Press" },
    { img: "./icon 3.png", title: "Latte Art" },
    { img: "./icon 4.png", title: "Accessories" },
  ];

  return (
    <div className="text-center m-16">
      <img src="./services.png" className="mx-auto" />

      <div className="w-full flex justify-center gap-6 mt-10">
        {items.map((item, index) => (
          <div key={index} className="w-40 flex flex-col items-center">
            <div
              className="flex-col
                w-40 h-40 bg-[#54372B] rounded-t-full flex items-center justify-center 
                shadow-md overflow-hidden 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
            <p className="mt-3 text-center text-sm font-medium text-[#F8E4BE]">
              {item.title}
            </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
