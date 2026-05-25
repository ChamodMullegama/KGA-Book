import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "IS THIS BOOK AVAILABLE WORLDWIDE?",
    a: "Yes. It is published globally via the Amazon Kindle Store and paperback distribution channels. You can order it from any Amazon marketplace (US, UK, Europe, Canada, Australia, India, and others) and get immediate access."
  },
  {
    q: "IS THERE A FREE PREVIEW?",
    a: "Yes. You can review the teaser sections on this website, or click the [READ SAMPLE CHAPTER] button to read the raw opening chapter. Additionally, you can use the 'Look Inside' feature directly on the Amazon book listing."
  },
  {
    q: "WHO SHOULD READ THIS BOOK?",
    a: "Anyone who is tired of the exhausting theater of social masks and fake diplomacy. If you are ready to dismantle your own self-delusion, analyze your relationship compromises, and audit your personal honesty, this book was written for you."
  },
  {
    q: "IS THIS BASED ON PSYCHOLOGY?",
    a: "Yes. The book merges evolutionary biology, clinical neurology, behavioral observation, and realistic philosophy. It dissects why the human brain evolved to prioritize self-preservation through micro-lies and deceptive loops."
  },
  {
    q: "IS THE LANGUAGE EXPLICIT?",
    a: "Yes. The book uses raw, clinical, and aggressive language. There is no comforting academic jargon, corporate code, or self-help sugarcoating. It is written to cut fast and deep like a scalpel."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black relative select-none border-t border-zinc-900 overflow-hidden">
      {/* Side Glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] glow-blob opacity-20 -z-10" />

      <div className="max-w-4xl px-6 mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="leading-tight mb-4">
            <span className="text-white font-heading text-4xl md:text-6xl tracking-widest font-normal">QUESTIONS. </span>
            <span className="text-blood font-heading text-5xl md:text-7xl tracking-tighter font-bold text-glow">HONESTLY.</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-zinc-400 font-body text-lg md:text-xl leading-relaxed">
            Unfiltered answers to the most common questions. No comfort. No deflection.
          </p>
        </motion.div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-zinc-800 bg-zinc-950/40"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 px-6 text-left transition duration-300 hover:bg-zinc-950 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-heading tracking-widest text-white group-hover:text-blood transition-colors">
                    {faq.q}
                  </span>
                  
                  {/* Expand Icon */}
                  <span 
                    className={`text-2xl font-bold font-heading text-blood select-none transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-6 text-zinc-400 font-body text-base leading-relaxed max-w-3xl border-t border-zinc-900/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;