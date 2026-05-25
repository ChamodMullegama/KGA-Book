import { motion } from 'framer-motion';

const Quotes = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center select-none border-t border-zinc-900">
      {/* Deep Red Atmospheric Radial Blur Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blood/10 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
        
        {/* Top Ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-4 mb-10"
        >
          <div className="w-16 h-[2px] bg-blood" />
          <div className="w-2.5 h-2.5 bg-blood transform rotate-45" />
          <div className="w-16 h-[2px] bg-blood" />
        </motion.div>

        {/* The Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl italic font-body text-white leading-tight font-normal"
        >
          "Lying makes life heavier."
        </motion.blockquote>

        {/* Bottom Ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center gap-4 mt-10"
        >
          <div className="w-16 h-[2px] bg-blood" />
          <div className="w-2.5 h-2.5 bg-blood transform rotate-45" />
          <div className="w-16 h-[2px] bg-blood" />
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;