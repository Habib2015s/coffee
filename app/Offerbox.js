"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function OfferBox() {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="w-full max-w-6xl relative">
        {/* تیتر روی بوردر */}
        <div className="absolute -top-6 right-6 sm:right-10 z-20">
          <img
            src="./offer.png"
            alt="Offer"
            className="w-28 sm:w-36 md:w-44 lg:w-52"
          />
        </div>

        {/* باکس اصلی */}
        <div
          className="
            relative p-6 sm:p-8 md:p-10 
            flex flex-col md:flex-row 
            bg-gradient-to-r from-[#0F090A] via-[#0C0708] to-[#744F40] 
            shadow-lg rounded-2xl overflow-hidden 
            items-center md:items-start gap-8 md:gap-10
          "
        >
          {/* بخش متن */}
          <div className="flex-1 flex flex-col text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F8E4BE]">
                  up to 50% off
                </p>
                <p className="text-[#F8E4BE] mt-3 text-sm sm:text-base leading-relaxed">
                  At our cafe, we take pride in providing our customers with the
                  best coffee around. Our carefully-selected coffees come from
                  some of the most renowned coffee growing regions in the world,
                  ensuring that each cup is unrivaled in flavor and freshness.
                </p>
                {/* دکمه */}
                <button
                  className="
                    relative w-40 sm:w-48 mt-5 px-4 py-2 
                    text-sm sm:text-base 
                    text-[#F7E1BC] bg-[#3C2D2B] 
                    font-semibold rounded-md 
                    border-2 border-[#F7E1BC] 
                    hover:scale-105 transition-transform
                  "
                >
                  Shop Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* بخش تصویر */}
          <motion.div
            className="flex-shrink-0 w-full md:w-[380px] flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="./Proefpakket_page-0003 2 (no bg).png"
              className="max-w-[220px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px] object-contain"
              alt="Product"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
