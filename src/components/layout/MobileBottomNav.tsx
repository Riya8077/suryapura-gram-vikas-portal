"use client";

import { Home, LayoutGrid, Landmark, User } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-green-100 bg-white md:hidden">
      <div className="flex items-center justify-around py-3">
        
        <button className="flex flex-col items-center gap-1 text-green-700">
          <Home size={20} />
          <span className="text-[10px]">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <LayoutGrid size={20} />
          <span className="text-[10px]">Services</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <Landmark size={20} />
          <span className="text-[10px]">Panchayat</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <User size={20} />
          <span className="text-[10px]">Profile</span>
        </button>
      </div>
    </div>
  );
}