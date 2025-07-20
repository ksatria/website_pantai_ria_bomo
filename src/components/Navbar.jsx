"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            className="h-10 md:h-12"
            alt="Pantai Bomo Logo"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible md:transition-none 
    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
    absolute top-full left-0 w-full bg-white md:static md:block md:w-auto md:max-h-full md:opacity-100`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center p-4 md:p-0 text-sm font-medium">
            {[
              { href: "#home", label: "Home" },
              { href: "#fasilitas", label: "Fasilitas" },
              { href: "#galeri", label: "Galeri" },
              { href: "#layanan", label: "Layanan" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 px-3 text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
