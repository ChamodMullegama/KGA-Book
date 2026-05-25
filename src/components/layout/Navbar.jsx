import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold tracking-wider text-blood hover:text-white transition"
        >
          KGA
        </a>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-8 text-sm font-medium tracking-widest uppercase md:flex">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition"
          >
            THE BOOK
          </a>
          <a
            href="#chapters"
            className="text-gray-300 hover:text-white transition"
          >
            INSIDE
          </a>
          <a
            href="#author"
            className="text-gray-300 hover:text-white transition"
          >
            AUTHOR
          </a>
          <a
            href="#reviews"
            className="text-gray-300 hover:text-white transition"
          >
            REVIEWS
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition">
            FAQ
          </a>
        </div>

        {/* Buy Now Button */}
        <a
          href="#buy"
          className="hidden md:inline-block px-8 py-3 text-sm font-semibold tracking-widest bg-blood hover:bg-red-700 text-white transition duration-300 rounded-xl"
        >
          BUY NOW
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${
          open
            ? "max-h-[400px] py-8 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-lg font-medium tracking-widest uppercase">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            THE BOOK
          </a>
          <a
            href="#chapters"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            INSIDE
          </a>
          <a
            href="#author"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            AUTHOR
          </a>
          <a
            href="#reviews"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            REVIEWS
          </a>
          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            FAQ
          </a>

          <a
            href="#buy"
            onClick={() => setOpen(false)}
            className="mt-4 px-12 py-3 bg-blood text-white rounded-xl font-semibold"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
