import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Gunakan threshold kecil (misal 10px) agar segera aktif saat user mulai scroll
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showBg = scrolled || isMobileMenuOpen;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-99 transition-all duration-300
        ${showBg ? 'bg-white/50 backdrop-blur-sm shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]' : 'bg-transparent'}
      `}
    >
      <nav className="min-h-14 sm:min-h-16 md:min-h-20 flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <h1 className="text-xl sm:text-2xl font-semibold text-primary cursor-pointer transition-all duration-300 hover:scale-110">
          <Link to="/">H'okky</Link>
        </h1>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-8 lg:gap-12 xl:gap-16 text-primary font-semibold text-sm lg:text-base">
          <li className="relative group">
            <Link to="/" className="transition-colors duration-300">
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/tentang-kami" className="transition-colors duration-300">
              Tentang Kami
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/layanan" className="transition-colors duration-300">
              Layanan
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/portfolio" className="transition-colors duration-300">
              Portfolio
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-5 sm:w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-5 sm:w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-5 sm:w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/50 backdrop-blur-lg border-t border-white/40 shadow-inner">
          <ul className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 text-primary">
            <li className="cursor-pointer text-sm sm:text-base transition-all duration-300 hover:translate-x-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li className="cursor-pointer text-sm sm:text-base transition-all duration-300 hover:translate-x-2">
              <Link to="/tentang-kami" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
            </li>
            <li className="cursor-pointer text-sm sm:text-base transition-all duration-300 hover:translate-x-2">
              <Link to="/layanan" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
            </li>
            <li className="cursor-pointer text-sm sm:text-base transition-all duration-300 hover:translate-x-2">
              <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
