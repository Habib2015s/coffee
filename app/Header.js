"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // قفل کردن اسکرول هنگام باز بودن منو
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = ["Home", "Menu", "Service", "Product", "Blog", "Contact"];

  return (
    <div
      className="w-full min-h-screen bg-contain bg-no-repeat bg-right relative"
      style={{ backgroundImage: "url('/HERO.png')" }}
    >
      {/* اسکریپت lord-icon */}
      <Script
        src="https://cdn.lordicon.com/ritcuqlt.js"
        strategy="beforeInteractive"
      />

      {/* هدر بالای صفحه */}
      <div className="w-full flex flex-row justify-between items-center p-4 md:p-6 z-20 relative">
        {/* لوگو و آیکون‌ها */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row items-center gap-4 md:gap-6"
        >
          <img src="/logo (1).png" className="h-10 md:h-12" alt="Logo" />
          <div className="flex gap-2">
            <lord-icon
              src="https://cdn.lordicon.com/bimokqfw.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "28px", height: "28px" }}
            />
            <lord-icon
              src="https://cdn.lordicon.com/cniwvohj.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "28px", height: "28px" }}
            />
          </div>
        </motion.div>

        {/* منو + همبرگر */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* دکمه هوم دسکتاپ */}
          <motion.button
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden md:block bg-[#DFC39D] cursor-pointer hover:bg-black transition text-white text-lg px-2 py-4 rounded-b-[90%] shadow-lg"
          >
            Home
          </motion.button>

          {/* منوی دسکتاپ */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="hidden md:flex gap-4"
          >
            {menuItems.slice(1).map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-[#DFC39D] text-base whitespace-nowrap"
              >
                {item}
              </p>
            ))}
          </motion.div>

          {/* همبرگر موبایل */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 z-30 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* بک‌گراند تار */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-10"
            onClick={() => setMenuOpen(false)} // کلیک بیرون → بستن
          />
        )}
      </AnimatePresence>

      {/* منوی موبایل */}
     <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="md:hidden fixed top-0 left-0 w-full flex flex-col items-center gap-6 bg-[#1a1a1a] py-10 z-30 shadow-lg"
      onClick={(e) => e.stopPropagation()} // جلوگیری از بستن هنگام کلیک روی منو
    >
      {menuItems.map((item, i) => (
        <motion.p
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          className="cursor-pointer hover:text-[#DFC39D] text-white text-lg"
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </motion.p>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      {/* بخش وسط هدر */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-12 mt-8 md:mt-20 px-4 md:px-20 z-20 relative">
        {/* تصویر و متن هدر با انیمیشن */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex-1 flex flex-col items-center md:items-start gap-4"
        >
          <img
            src="./elza coffee.png"
            className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px]"
            alt="Elza Coffee"
          />
          <p className="text-center mt-20 md:text-left text-[#DABB9E] font-bold text-lg sm:text-xl md:text-2xl">
            Todays good mood is sponsored by coffee
            <br />
            Search for your coffee now
          </p>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-3 hover:scale-105 transition cursor-pointer relative px-1 py-2 text-[#F7E1BC] font-semibold rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-[#E0A872] via-[#F8E4BE] to-[#E0A872]"></span>
            <span className="relative bg-[#3C2D2B] rounded-md px-6 py-2">
              Shop Now
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
