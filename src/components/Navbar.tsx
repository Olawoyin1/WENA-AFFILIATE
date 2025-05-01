import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full py-4 sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/98 shadow" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          {/* Desktop Navbar */}
          <div className="hidden cf font-extrabold md:flex justify-between items-center py-4">
            <Link to="/">WENA AFFILIATE</Link>
            <nav className="flex space-x-6 text-sm font-semibold sf uppercase">
              <Link to="/clothing" className="hover:text-[#F8B44F] transition ease-in">clothing</Link>
              <Link to="/products" className="hover:text-[#F8B44F] transition ease-in">products</Link>
              <Link to="/food" className="hover:text-[#F8B44F] transition ease-in">food</Link>
              <Link to="/travel" className="hover:text-[#F8B44F] transition ease-in">Travel</Link>
              <Link to="/services" className="hover:text-[#F8B44F] transition ease-in">Services</Link>
            </nav>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center py-4 text-black">
            <Link to="/" className="cf font-bold">WENA AFFILIATE</Link>
            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={26} /> : <HiOutlineMenuAlt4 size={26} />}
            </button>
          </div>
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 z-40 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end items-center px-4 py-4">
            <button onClick={toggleMenu}>
              <FiX size={26} />
            </button>
          </div>
          <div className="px-8 flex flex-col pt-8 space-y-6 text-lg sf  font-bold uppercase">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/clothing" onClick={toggleMenu}>clothing</Link>
            <Link to="/products" onClick={toggleMenu}>products</Link>
            <Link to="/food" onClick={toggleMenu}>food</Link>
            <Link to="/travel" onClick={toggleMenu}>travel</Link>
            <Link to="/services" onClick={toggleMenu}>services</Link>
          </div>
          <div className="absolute bottom-4 left-8">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} WENA AFFILIATE - All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </header>
    </>
  );
};

export default MainNavbar;
