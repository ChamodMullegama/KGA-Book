import { useState, useEffect } from "react";
import { ArrowUp, ShoppingCart } from "lucide-react";

const FloatingButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 flex flex-col gap-3 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Buy Now Button */}
      <a
        href="#buy"
        className="bg-blood hover:bg-red-700 text-white px-5 py-3.5 rounded-[2px] font-heading tracking-widest text-base flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 duration-150 shadow-2xl shadow-blood/30"
      >
        <ShoppingCart size={18} />
        BUY NOW
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-black hover:bg-zinc-900 border border-white/20 text-white p-3.5 rounded-[2px] flex items-center justify-center transition-all hover:scale-105 active:scale-95 duration-150 shadow-xl"
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default FloatingButton;
