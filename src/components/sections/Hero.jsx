import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const Hero = () => {
  // 1. Create a reference to the video element
  const videoRef = useRef(null);

  // 2. Slow down the playback rate when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      // 0.5 is half-speed. You can adjust this to 0.4 or 0.6 to find your sweet spot
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section className="relative flex items-center min-h-screen pt-24 pb-12 overflow-hidden bg-black select-none">
      {/* ── BACKGROUND VIDEO ───────────────────────────────────────── */}
      <video
        ref={videoRef} // 3. Link the ref to the element
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      >
        <source src="./src/assets/lastv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle CRT scan-lines overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(255,255,255,0.15) 1px,rgba(255,255,255,0.15) 2px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* ── CONTENT ─────────────────────────────────────────────────── */}
      <div className="relative z-10 grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-12 w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Tagline */}
          <motion.p
            {...fadeUp(0)}
            className="uppercase text-blood tracking-[6px] text-xs font-heading mb-4"
          >
            A PSYCHOLOGICAL BRUTALIST REVELATION
          </motion.p>

          {/* Main Title */}
          <motion.h1 {...fadeUp(0.1)} className="leading-none mb-5">
            <span className="block text-white font-heading text-3xl md:text-5xl tracking-wider">
              THE DIRTY
            </span>
            <span className="block text-blood font-heading text-5xl md:text-7xl tracking-tighter my-1 leading-none font-bold text-glow">
              F*CKING TRUTH
            </span>
            <span className="block text-white font-heading text-2xl md:text-4xl tracking-widest pl-1">
              ABOUT LYING
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.2)}
            className="max-w-lg mt-3 text-sm md:text-base text-zinc-400 font-body leading-relaxed"
          >
            A relentless psychological autopsy of human deception. From social
            masks to toxic self-delusion, this book cuts through the comfortable
            fabric of our everyday lies.
          </motion.p>

          {/* Star Rating */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-3 mt-6">
            <div className="flex text-blood">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <Star key={i} fill="currentColor" size={13} stroke="none" />
                ))}
            </div>
            <div className="text-xs font-heading tracking-widest text-zinc-500">
              4.9 STARS • NOT FOR THE FRAGILE
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://amazon.com/dp/YOURASIN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-heading tracking-widest bg-blood hover:bg-red-700 text-white transition-all duration-300 rounded-[2px] shadow-[0_0_25px_rgba(204,0,0,0.3)] hover:shadow-[0_0_35px_rgba(204,0,0,0.5)] hover:-translate-y-0.5 transform"
            >
              BUY ON KINDLE
            </a>
            <a
              href="#preview"
              className="px-6 py-3 text-sm font-heading tracking-widest border border-white/20 hover:border-white text-white hover:bg-white/5 transition-all duration-300 rounded-[2px] hover:-translate-y-0.5 transform"
            >
              READ PREVIEW
            </a>
          </motion.div>

          {/* Author Credit */}
          <motion.div
            {...fadeUp(0.5)}
            className="mt-6 text-zinc-600 font-heading tracking-[6px] text-[10px]"
          >
            BY AUTHOR KGA
          </motion.div>
        </div>

        {/* Right Column — 3D CSS Book Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center py-6 relative"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
