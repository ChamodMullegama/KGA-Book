import { motion } from 'framer-motion';

const ClosingQuote = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center select-none border-t border-zinc-900">
      {/* Deep Blood Red Atmospheric Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blood/15 rounded-full blur-[140px] -z-10" />

      <div className="relative z-10 max-w-6xl px-6 mx-auto text-center flex flex-col items-center">
        
        {/* Very Large Centered Bold Italic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 font-heading tracking-widest text-3xl md:text-5xl lg:text-6xl text-white italic font-bold leading-tight uppercase"
        >
          <span className="block mb-2 text-zinc-100">THE HARDEST LIES TO DESTROY ARE THE ONES</span>
          <span className="block text-blood text-glow leading-normal text-4xl md:text-6xl lg:text-7xl font-black">
            INSIDE YOUR OWN HEAD.
          </span>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#buy"
            className="inline-block px-12 py-5 text-lg md:text-xl font-heading tracking-widest text-white bg-blood hover:bg-red-700 transition-all duration-300 rounded-[2px] shadow-[0_0_40px_rgba(204,0,0,0.4)] hover:shadow-[0_0_50px_rgba(204,0,0,0.6)] transform hover:-translate-y-1"
          >
            BUY THE BOOK NOW →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ClosingQuote;
