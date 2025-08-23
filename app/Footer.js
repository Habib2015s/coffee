"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-r from-[#1C0F0A] via-[#3C1F0F] to-[#5C2D1F] text-white py-20">
      
      {/* Blobs پس زمینه متحرک */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl absolute -top-32 -left-32 animate-pulse"></div>
        <div className="w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl absolute -bottom-20 right-10 animate-pulse"></div>
        <div className="w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl absolute top-1/3 left-1/2 animate-ping opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between gap-12">
        
        {/* لوگو و توضیح کوتاه */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">CoffeeHouse</h2>
          <p className="text-[#F8E4BE] text-sm md:text-base">
            Discover the finest coffee blends from around the world. Join our
            community and get exclusive offers every week!
          </p>
        </div>

        {/* لینک‌ها با افکت hover */}
        <div className="flex-1 flex justify-between gap-10">
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              {["Home","Menu","Shop","Blog"].map((link, i) => (
                <li key={i} className="relative overflow-hidden group cursor-pointer text-white">
                  <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-30 blur-md transition-all"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors">{link}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {["About Us","Careers","Contact"].map((link, i) => (
                <li key={i} className="relative overflow-hidden group cursor-pointer text-white">
                  <span className="absolute inset-0 bg-[#F8E4BE] opacity-0 group-hover:opacity-30 blur-md transition-all"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* فرم ایمیل + آیکون‌ها */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#F8E4BE] via-[#F8E4BE] text-black to-[#3C2D2B] font-semibold rounded-md hover:scale-110 hover:shadow-lg transition-transform">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4 text-2xl text-[#F8E4BE]">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <Icon key={i} className="hover:text-[#F8E4BE] hover:scale-125 transition-transform cursor-pointer"/>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#F8E4BE]/20 pt-6 text-center text-sm text-[#F8E4BE]/80">
        © 2025 CoffeeHouse. All rights reserved.
      </div>
    </footer>
  );
}
