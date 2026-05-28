import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

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
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Circular Scroll to Top Button - Red */}
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center text-white transition-all duration-200 border rounded-full shadow-2xl bg-blood hover:bg-red-700 w-14 h-14 shadow-blood/40 border-white/10 hover:scale-110 active:scale-95"
        aria-label="Scroll back to top"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default FloatingButton;