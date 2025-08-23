"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function OfferBox() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[1100px] relative">
        {/* تیتر روی بوردر (بیرون باکس) */}
        <div className="absolute -top-6 right-10 z-20">
          <img src="./offer.png" alt="Offer" />
        </div>

        {/* باکس اصلی */}
        <div className="relative p-10 flex bg-gradient-to-r from-[#0F090A] via-[#0C0708] to-[#744F40] shadow-lg rounded-2xl overflow-hidden items-center gap-10">
          {/* بخش متن و دکمه */}
          <div className="flex-1 flex flex-col ">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-5xl font-semibold text-[#F8E4BE]">
                  up to 50% off
                </p>
                <p className="text-[#F8E4BE] m-2">
                  At our cafe, we take pride in providing our customers with the
                  best coffee around. Our carefully-selected coffees come from
                  some of the most renowned coffee growing regions in the world,
                  ensuring that each cup is unrivaled in flavor and freshness.
                </p>
                {/* دکمه */}
                <button className="relative w-48 mt-5 px-4 py-2 text-sm text-[#F7E1BC] bg-[#3C2D2B] font-semibold rounded-md border-2 border-[#F7E1BC] hover:scale-105 transition-transform">
                  Shop Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* بخش تصویر سمت راست */}
          <div className="flex-shrink-0 w-[400px] flex justify-center">
            <img
              src="./Proefpakket_page-0003 2 (no bg).png"
              className="max-w-full max-h-[300px] object-contain"
              alt="Product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
