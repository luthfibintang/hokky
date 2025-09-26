import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-99">
      <nav className="min-h-16 md:min-h-20 flex justify-between items-center px-4 md:px-20 lg:px-28 xl:px-36">
        <h1 className="text-2xl font-semibold text-primary">H'okky</h1>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-16 text-primary font-semibold">
          <li>
            <a href="/tentang-kami">Tentang Kami</a>
          </li>
          <li>
            <a href="/layanan">Layanan</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/kontak">Kontak</a>
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
        <div className="md:hidden bg-primary/10 backdrop-blur-lg border-t border-white/10">
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
