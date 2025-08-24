"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PriceCurves() {
  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const renderItem = (item) => {
    const isActive = isMobile ? clickedId === item.id : hoveredId === item.id;

    return (
      <div
        key={item.id}
        className={`group flex flex-col items-center transition-all duration-300 cursor-pointer ${
          !isMobile && hoveredId && hoveredId !== item.id ? 'opacity-30 blur-sm' : 'opacity-100 blur-0'
        }`}
        onMouseEnter={() => !isMobile && setHoveredId(item.id)}
        onMouseLeave={() => !isMobile && setHoveredId(null)}
        onClick={() => isMobile && setClickedId(clickedId === item.id ? null : item.id)}
      >
        <img src={item.img} alt={item.alt} className="mb-2 w-20 sm:w-auto" />
        <img
          src={item.subImg}
          alt=""
          className={`transition-all duration-300 h-5 ${isActive ? "h-8" : ""}`}
        />
        {/* انیمیشن برای موبایل */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center mt-2 max-w-[140px]"
            >
              <span className="text-lg sm:text-2xl font-bold text-[#F8E4BE]">{item.price}</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#F8E4BE] mt-1">{item.desc}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="p-6 sm:p-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20">
        
        {/* ستون چپ */}
        <div className="flex flex-col gap-8 sm:gap-10 justify-center order-2 lg:order-1">
          {leftItems.map(renderItem)}
        </div>

        {/* عکس وسط */}
        <div className="order-1 lg:order-2">
          <img 
            src="Popularmenu Img.png" 
            className="w-[250px] sm:w-[350px] lg:w-[500px] mx-auto" 
            alt="Popular Menu" 
          />
        </div>

        {/* ستون راست */}
        <div className="flex flex-col gap-8 sm:gap-10 justify-center order-3">
          {rightItems.map(renderItem)}
        </div>
      </div>
    </div>
  );
}
