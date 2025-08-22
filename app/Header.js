import React from "react";
import Script from "next/script";

export default function Header() {
  return (
    <div
      className="w-full h-screen bg-contain bg-no-repeat bg-right relative"
      style={{ backgroundImage: "url('/HERO.png')" }}
    >
      {/* اسکریپت لازم برای lord-icon */}
      <Script src="https://cdn.lordicon.com/ritcuqlt.js" strategy="beforeInteractive" />

      {/* هدر */}
      <div className="w-full flex justify-between items-center p-6">
        {/* سمت چپ: لوگو + آیکون‌ها */}
        <div className="flex items-center gap-6">
          <img src="/logo (1).png" className="h-12" alt="Logo" />

          <div className="flex gap-2">
            <lord-icon
              src="https://cdn.lordicon.com/bimokqfw.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "40px", height: "40px" }}
            />
            <lord-icon
              src="https://cdn.lordicon.com/cniwvohj.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>

        {/* سمت راست: منو + دکمه */}
        <div className="flex  gap-10">
          <button className="bg-[#DFC39D] cursor-pointer hover:bg-black transition text-white relative -top-6 text-lg  px-2 py-4 rounded-b-[90%] shadow-lg">
            Home
          </button>
          <p className="cursor-pointer hover:text-[#DFC39D]">Menu</p>
          <p className="cursor-pointer hover:text-[#DFC39D]">Service</p>
          <p className="cursor-pointer hover:text-[#DFC39D]">Product</p>
          <p className="cursor-pointer hover:text-[#DFC39D]">Blog</p>
          <p className="cursor-pointer hover:text-[#DFC39D]">Contact</p>
        </div>
      </div>
        <img src="./elza coffee.png" className="w-2xl m-20"/>

      
    </div>
  );
}
