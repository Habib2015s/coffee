"use client"
import React, { useState } from 'react';

export default function PriceCurves() {
  const [hoveredId, setHoveredId] = useState(null);

  const leftItems = [
    { id: 'latte', img: "./latte.png", subImg: "./Vector 4.png", alt: "Latte", price: "180 $", desc: "A delicious latte with creamy foam and fresh coffee aroma" },
    { id: 'mocha', img: "./mocha.png", subImg: "./Vector 4.png", alt: "Mocha", price: "200 $", desc: "Mocha with rich chocolate and smooth milk-coffee blend" },
    { id: 'cappuccino', img: "./cappuccino.png", subImg: "./Vector 4.png", alt: "Cappuccino", price: "220 $", desc: "Classic cappuccino with soft, silky milk foam" },
    { id: 'caramel', img: "./caramel.png", subImg: "./Vector 4.png", alt: "Caramel", price: "210 $", desc: "Sweet caramel coffee with freshly brewed espresso" },
  ];

  const rightItems = [
    { id: 'chocolate', img: "./chocolate.png", subImg: "./Vector 4.png", alt: "Chocolate", price: "190 $", desc: "Rich hot chocolate, perfect for cold days" },
    { id: 'doppio', img: "./doppio.png", subImg: "./Vector 4.png", alt: "Doppio", price: "230 $", desc: "Double shot espresso with intense coffee flavor" },
    { id: 'doublees', img: "./double es.png", subImg: "./Vector 4.png", alt: "Double Espresso", price: "250 $", desc: "Strong and bold double espresso for true coffee lovers" },
    { id: 'espresso', img: "./espersso.png", subImg: "./Vector 4.png", alt: "Espresso", price: "180 $", desc: "Classic single shot espresso with rich aroma" },
  ];

  const renderItem = (item) => (
    <div
      key={item.id}
      className={`group flex flex-col items-center transition-all duration-300 ${
        hoveredId && hoveredId !== item.id ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'
      }`}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <img src={item.img} alt={item.alt} className="mb-2" />
      <img
        src={item.subImg}
        alt=""
        className="transition-all duration-300 h-5 group-hover:h-8"
      />
      <div className="flex flex-col items-center text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[140px]">
        <span className="text-2xl font-bold text-[#F8E4BE]">{item.price}</span>
        <span className="text-xs font-bold text-[#F8E4BE] mt-1">{item.desc}</span>
      </div>
    </div>
  );

  return (
    <div className="p-10">
      <div className="flex justify-center gap-20">
        <div className="flex flex-col gap-10 justify-center">
          {leftItems.map(renderItem)}
        </div>

        <div>
          <img src="Popularmenu Img.png" className="w-[500px]" alt="Popular Menu" />
        </div>

        <div className="flex flex-col gap-10 justify-center">
          {rightItems.map(renderItem)}
        </div>
      </div>
    </div>
  );
}
