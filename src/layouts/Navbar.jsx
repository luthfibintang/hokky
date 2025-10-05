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
      <nav className="min-h-16 md:min-h-20 flex justify-between items-center px-4 md:px-20 lg:px-28 xl:px-36">
        <h1 className="text-2xl font-semibold text-primary cursor-pointer"><Link to="/">H'okky</Link></h1>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-16 text-primary font-semibold">
          <li>
            <Link to="/tentang-kami">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/layanan">Layanan</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/50 backdrop-blur-lg border-t border-white/40 shadow-inner">
          <ul className="flex flex-col gap-4 p-6 text-primary">
            <li className="cursor-pointer text-sm">
              Tentang Kami
            </li>
            <li className="cursor-pointer text-sm">
              Layanan
            </li>
            <li className="cursor-pointer text-sm">
              Portfolio
            </li>
            <li className="cursor-pointer text-sm">
              Kontak
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
