import React, { useState } from "react";

interface AsideProps {
  active: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "services", label: "Services" },
  { name: "portfolio", label: "Portfolio" },
  { name: "contact", label: "Contact" },
];

export default function Aside({ active, onNavigate }: AsideProps) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleAside() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <aside
        className={`fixed top-0 h-full w-[300px] bg-black p-8 flex flex-col items-center justify-start z-10 transition-all duration-300 ${
          isOpen ? "left-0" : "-left-[270px]"
        }`}
      >
        {/* Logo */}
        <div className="relative top-5 left-4 text-3xl font-bold uppercase text-white tracking-widest">
          <a href="#home" className="relative inline-block text-white" onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
            if (window.innerWidth < 1200) toggleAside();
          }}>
            Beza
            <span className="font-clicker-script text-lg ml-1">wit</span>
            {/* Adjust border positioning: moved 10px away from edges */}
            <span className="absolute w-5 h-5 border-b-4 border-l-4 border-red-500 bottom-[-10px] left-[-10px]"></span>
            <span className="absolute w-5 h-5 border-t-4 border-r-4 border-red-500 top-[-10px] right-[-10px]"></span>
          </a>
        </div>

        {/* Nav List */}
        <nav className="mt-16 w-full">
          <ul>
            {navItems.map(({ name, label }) => (
              <li key={name} className="mb-5">
                <a
                  href={`#${name}`}
                  className={`block text-white text-lg font-semibold px-4 py-2 border-b border-gray-600 transition-colors duration-300 ${
                    active === name ? "text-red-500" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(name);
                    if (window.innerWidth < 1200) {
                      toggleAside();
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Nav Toggle Button */}
      <button
        onClick={toggleAside}
        aria-label="Toggle navigation"
        className="fixed top-5 left-5 w-12 h-10 rounded-md bg-black border border-gray-700 flex items-center justify-center cursor-pointer z-20"
      >
        {/* Hamburger Icon */}
        <div className="relative w-6 h-4">
          <span
            className={`absolute block h-0.5 w-6 bg-red-500 rounded transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-1.5" : "top-0"
            }`}
          ></span>
          <span
            className={`absolute block h-0.5 w-6 bg-red-500 rounded transition-opacity duration-300 ease-in-out top-2 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block h-0.5 w-6 bg-red-500 rounded transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-1.5" : "top-4"
            }`}
          ></span>
        </div>
      </button>
    </>
  );
}
