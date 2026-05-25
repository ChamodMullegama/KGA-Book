import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Buy = () => {
  return (
    <section id="buy" className="relative py-24 bg-black select-none border-t border-zinc-900 overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-blob opacity-20 -z-10" />

      <div className="max-w-7xl px-6 mx-auto relative">
        
        {/* Top Right Limited Badge */}
        <div className="absolute top-0 right-6 flex items-center justify-end select-none">
          <span className="bg-blood text-white text-[10px] md:text-xs font-heading tracking-[3px] px-4 py-2 font-bold rounded-[2px] shadow-[0_0_20px_rgba(204,0,0,0.3)] animate-pulse">
            LIMITED OFFER
          </span>
        </div>

        {/* Section Header */}
        <div className="mb-16 mt-6 md:mt-0 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="leading-tight"
          >
            <span className="text-white font-heading text-4xl md:text-6xl tracking-widest">OWN THE </span>
            <span className="text-blood font-heading text-5xl md:text-7xl tracking-tighter font-bold text-glow">UNCOMFORTABLE TRUTH.</span>
          </motion.h2>
          <p className="mt-4 text-zinc-400 font-body text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Acquire your copy today and begin the systematic disassembly of your comforting illusions. Available worldwide.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          
          {/* Card 1: Kindle Edition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 bg-zinc-950/80 border border-zinc-800 rounded-none hover:border-blood/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-heading tracking-[4px] text-zinc-500 mb-2">DIGITAL SHOWCASE</div>
              <h3 className="text-2xl font-heading tracking-widest text-white mb-6">KINDLE EDITION</h3>
              <div className="flex items-baseline text-white mb-8">
                <span className="text-4xl font-heading font-semibold text-blood">$</span>
                <span className="text-6xl font-heading font-bold tracking-tight">6.99</span>
                <span className="text-zinc-500 font-body text-sm ml-2">/ USD</span>
              </div>
              
              {/* Feature List */}
              <ul className="mb-12 space-y-4 font-body text-base text-zinc-400">
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>Instant Delivery via Amazon Whispernet</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>Fully readable on any phone, tablet, or Kindle device</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>Highlighting & clinical note sharing enabled</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>Lifetime access to digital corrections</span>
                </li>
              </ul>
            </div>

            <a
              href="https://amazon.com/dp/YOURASIN"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-base font-heading tracking-widest text-center text-white bg-blood hover:bg-red-700 transition duration-300 rounded-[2px] shadow-[0_0_20px_rgba(204,0,0,0.15)]"
            >
              BUY ON KINDLE
            </a>
          </motion.div>

          {/* Card 2: Paperback Edition (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 bg-zinc-950/80 border-2 border-blood rounded-none relative flex flex-col justify-between shadow-[0_0_50px_rgba(204,0,0,0.1)] hover:scale-[1.01] transition-transform duration-300"
          >
            <div>
              {/* Badge */}
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blood text-white text-[9px] font-heading tracking-[3px] px-3 py-1 font-bold">
                PHYSICAL ARTIFACT
              </div>

              <div className="text-xs font-heading tracking-[4px] text-zinc-500 mb-2">PREMIUM HARDWARE</div>
              <h3 className="text-2xl font-heading tracking-widest text-white mb-6">PAPERBACK</h3>
              <div className="flex items-baseline text-white mb-8">
                <span className="text-4xl font-heading font-semibold text-blood">$</span>
                <span className="text-6xl font-heading font-bold tracking-tight">18.99</span>
                <span className="text-zinc-500 font-body text-sm ml-2">/ USD</span>
              </div>
              
              {/* Feature List */}
              <ul className="mb-12 space-y-4 font-body text-base text-zinc-400">
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>323 Pages • High quality matte black finish cover</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>Premium editorial typeface on cream acid-free paper</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>Immediate worldwide shipping via Amazon Prime</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-blood shrink-0" size={16} />
                  <span>The tactile weight of raw unfiltered truth in hand</span>
                </li>
              </ul>
            </div>

            <a
              href="https://amazon.com/dp/YOURASIN"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-base font-heading tracking-widest text-center text-white bg-blood hover:bg-red-700 transition duration-300 rounded-[2px] shadow-[0_0_30px_rgba(204,0,0,0.3)]"
            >
              BUY PAPERBACK
            </a>
          </motion.div>

        </div>

        {/* Footnote */}
        <p className="mt-16 text-xs text-center text-zinc-700 font-body uppercase tracking-[2px]">
          Secure encryption • Worldwide distribution • Not for the emotionally fragile
        </p>
      </div>
    </section>
  );
};

export default Buy;