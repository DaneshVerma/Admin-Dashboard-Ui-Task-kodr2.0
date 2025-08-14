import React from "react";
import { sidebarLinks } from "../data/sidebarLinks";

export default function Sidebar() {
  return (
    <nav className="p-6 space-y-4">
      {sidebarLinks.map(({ label, icon: Icon }) => (
        <a key={label} href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 transition">
          <Icon className="w-6 h-6" /> <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}