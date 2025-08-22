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
      <div className="w-2xl m-20">

        <img src="./elza coffee.png" />
        <p className="text-[#DABB9E] font-bold text-2xl ">Todays good mood is sponsored by coffee<br/> search for your coffee now</p>
        <button className="mt-5 hover:scale-110 transition cursor-pointer relative px-1 py-3 text-[#F7E1BC] font-semibold rounded-lg overflow-hidden">
  <span className="absolute inset-0 rounded-md p-[1px]  bg-gradient-to-r from-[#E0A872] via-[#F8E4BE] to-[#E0A872]"></span>
  <span className="relative bg-[#3C2D2B] rounded-md px-6 py-3">
    Shop Now
  </span>
</button>

      </div>

      
    </div>
  );
}
