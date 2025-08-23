"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1C0F0A] to-[#3C1F0F] text-white py-16 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl absolute -top-32 -left-32"></div>
        <div className="w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl absolute -bottom-20 right-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">CoffeeHouse</h2>
          <p className="text-[#F8E4BE]">
            Discover the finest coffee blends from around the world. Join our
            community and get exclusive offers every week!
          </p>
        </div>

        <div className="flex-1 flex justify-between">
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Menu</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Shop</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 transition cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Careers</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <div className="flex gap-2">
           
            <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4 text-xl text-[#F8E4BE]">
            <FaFacebookF className="hover:text-yellow-400 transition cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 transition cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 transition cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-[#F8E4BE]/20 pt-6 text-center text-sm text-[#F8E4BE]/80">
        © 2025 CoffeeHouse. All rights reserved.
      </div>
    </footer>
  );
}
