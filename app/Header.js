"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = ["Home", "Menu", "Service", "Product", "Blog", "Contact"];

  return (
    <div
      className="w-full min-h-screen bg-contain bg-no-repeat bg-right relative"
      style={{ backgroundImage: "url('/HERO.png')" }}
    >
      <Script
        src="https://cdn.lordicon.com/ritcuqlt.js"
        strategy="beforeInteractive"
      />

      {/* هدر بالا */}
      <div className="w-full flex flex-row justify-between items-center p-4 md:p-6 z-20 relative">
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
          <motion.button
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden md:block bg-[#DFC39D] cursor-pointer hover:bg-black transition text-white text-lg px-2 py-4 rounded-b-[90%] shadow-lg"
          >
            Home
          </motion.button>

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

      {/* منوی موبایل با دکمه بستن */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-[#1a1a1a] z-30 flex flex-col items-center py-10 gap-8 shadow-lg"
          >
            {/* دکمه بستن */}
            <button
              className="self-end mr-6 text-white text-3xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>

            {menuItems.map((item, i) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="cursor-pointer hover:text-[#DFC39D] text-white text-2xl font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* بخش وسط هدر */}
     <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-20 md:mt-20 px-4 md:px-20 z-20 relative">
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    className="flex-1 flex flex-col items-center md:items-start gap-4 mt-24 md:mt-0" // <--- mt-24 برای موبایل
  >
    <img
      src="./elza coffee.png"
      className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[400px]"
      alt="Elza Coffee"
    />
    <p className="text-center md:text-left text-[#DABB9E] font-bold text-lg sm:text-xl md:text-2xl">
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
