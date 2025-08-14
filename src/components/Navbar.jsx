"use client";
import { useState, useEffect } from "react";
import { navbar_translations } from "@/utils/navbar_translations";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = navbar_translations[language];

  // Highlight menu aktif
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "#home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(false); 

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setShowNavbar(true);
      }, 300); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const menuItems = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#fasilitas", label: "fasilitas" },
    { href: "#galeri", label: "galeri" },
    { href: "#layanan", label: "layanan" },
    { href: "#aktifitas", label: "aktifitas" },
    { href: "#pengurus", label: "pengurus" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <nav
      className={`bg-white fixed w-full top-0 left-0 z-50 shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm"
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <a href="#home" className="flex items-center space-x-3">
            <img
              src="/images/logo-pantai-ria-bomo.png"
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
              {menuItems.map(({ href, label }) => (
                <motion.li
                  key={href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={href}
                    className={`block py-2 px-3 transition-colors duration-300 ${
                      activeSection === href
                        ? "text-[#D35F1C] font-semibold"
                        : "text-gray-700 hover:text-[#D35F1C]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t[label]}
                  </a>
                </motion.li>
              ))}

              <li className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen((prev) => !prev)}
                  className="flex items-center gap-2 py-2 px-3 text-gray-700 hover:text-blue-500 rounded-lg"
                >
                  🌐 {t.lang}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="static md:absolute right-0 mt-2 min-w-[180px] z-50 bg-white rounded-lg shadow-sm border border-gray-100"
                    >
                      <ul className="py-2 font-medium">
                        <li
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setLangOpen(false);
                            setLanguage("id");
                          }}
                        >
                          <span className="mr-2">🇮🇩</span> Bahasa Indonesia
                        </li>
                        <li
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setLangOpen(false);
                            setLanguage("en");
                          }}
                        >
                          <span className="mr-2">🇺🇸</span> English
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </nav>
  );
}
