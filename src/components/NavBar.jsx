import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Services", path: "/service" },
    { name: "Their Stories", path: "#" },
    { name: "Our Story", path: "#" },
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 px-10 py-6 flex justify-between items-center z-50">

      {/* LOGO */}
      <h1 className="text-4xl font-bold text-black">
        <span className="text-[#e8613f] font-[GreatVibes] text-5xl">V</span> Films
      </h1>

      {/* NAV RIGHT (Hamburger + Sliding Menu) */}
      <div className="relative">

        {/* HAMBURGER / CANCEL BUTTON */}
        <button
          className="flex flex-col justify-center gap-[6px] w-9 h-9 cursor-pointer relative z-[70]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`h-[3px] w-full bg-[#102C36] transition-all duration-300 
                ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          ></span>
          <span
            className={`h-[3px] w-full bg-[#102C36] transition-all duration-300
                ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-[3px] w-full bg-[#102C36] transition-all duration-300
                ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          ></span>
        </button>

        {/* SLIDING SMALL NAV MENU (comes from right of hamburger) */}
        <div
          className={`absolute top-1/2 right-12 -translate-y-1/2 text-black px-6 py-1 rounded-xl shadow
            transition-all duration-500 origin-right
            ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          <nav className="flex flex-row items-center gap-6 whitespace-nowrap">
            {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-orange-600 transition-all"
            >
              {item.name}
            </Link>
            ))}

            <button className="bg-[#e8613f] text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
              Let’s Talk →
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
