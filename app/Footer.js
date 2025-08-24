"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-r from-[#1C0F0A] via-[#3C1F0F] to-[#5C2D1F] text-white py-16 md:py-20">
      
      {/* Blobs پس زمینه */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl absolute -top-24 -left-24 animate-pulse opacity-30"></div>
        <div className="w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl absolute -bottom-16 right-8 animate-pulse opacity-30"></div>
        <div className="w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl absolute top-1/3 left-1/2 animate-ping opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between gap-12">

        {/* لوگو و توضیح کوتاه */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-3xl font-bold mb-3 text-[#F8E4BE]">CoffeeHouse</h2>
          <p className="text-[#F8E4BE] text-sm md:text-base max-w-sm">
            Discover the finest coffee blends from around the world. Join our community and get exclusive offers every week!
          </p>
        </motion.div>

        {/* لینک‌ها */}
        <motion.div
          className="flex-1 flex flex-col sm:flex-row justify-center md:justify-between gap-10 mt-6 md:mt-0 text-center md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="mb-4 sm:mb-0">
            <h3 className="font-semibold text-[#F8E4BE] text-3xl mb-2">Explore</h3>
            <ul className="space-y-2">
              {["Home","Menu","Shop","Blog"].map((link, i) => (
                <li key={i} className="cursor-pointer text-white hover:text-yellow-400 transition-colors">{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#F8E4BE] text-3xl mb-2">Company</h3>
            <ul className="space-y-2">
              {["About Us","Careers","Contact"].map((link, i) => (
                <li key={i} className="cursor-pointer text-white hover:text-yellow-400 transition-colors">{link}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* فرم ایمیل + آیکون‌ها */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="font-semibold mb-3 text-lg">Subscribe</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-center px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#F8E4BE] w-full sm:w-auto"
            />
            <button className="px-4 py-2 w-full sm:w-auto mt-2 sm:mt-0 bg-gradient-to-r from-[#F8E4BE] via-[#F8E4BE] to-[#3C2D2B] font-semibold rounded-md hover:scale-105 hover:shadow-lg transition-transform">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl text-[#F8E4BE]">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.div key={i} variants={fadeUp} custom={0.1*i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Icon className="hover:text-yellow-400 hover:scale-125 transition-transform cursor-pointer"/>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 border-t border-[#F8E4BE]/20 pt-6 text-center text-sm text-[#F8E4BE]/80"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        © 2025 CoffeeHouse. All rights reserved.
      </motion.div>
    </footer>
  );
}
