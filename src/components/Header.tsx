import React from "react";

export const Header = () => (
  <div className="flex flex-col items-center text-center py-6 px-4 bg-[#f6a626f0] shadow-inner">
    {/* Top Logo and Name Section */}
    <div className="flex flex-col items-center mb-2">
      {/* Based on the logo in the top left of the menu */}
      <div className="flex items-center  gap-2 bg-white/30 p-2 rounded-lg rounded-l-full md:rounded-l-lg">
        <img
          src="/chef.png"
          className="h-20 w-auto"
          alt="Golden Kitchen Logo"
        />

        <h1
          className="text-2xl md:text-5xl font-extrabold text-yellow-900 uppercase tracking-tight"
          style={{ fontFamily: "serif" }}
        >
          Golden Kitchen
        </h1>
      </div>
    </div>

    {/* Status Indicators (Based on the footer of the menu) */}
    <div className="flex gap-4 mb-2">
      <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        Bestseller
      </div>
      <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
        <img src="/chef-icon.png" alt="chef" className="h-3 w-3 invert" />
        Chef's Special
      </div>
    </div>

    {/* Contact & Delivery Section */}
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2 text-red-700">
        <span className="text-xs font-black uppercase tracking-widest">
          Home Delivery Available
        </span>
        <img src="delivers.png" alt="scooter" className="h-8" />
      </div>
      <p className="text-[#2d2a26] font-black text-lg md:text-3xl ">
        +91 6206983393
      </p>
      <div className=" bg-white/50 px-4  rounded border border-yellow-600/20">
        <p className="text-[#2d2a26] text-[10px] md:text-xs font-bold uppercase tracking-tight">
          Service Hours: 10:00 AM - 8:00 PM
        </p>
      </div>
    </div>
  </div>
);
