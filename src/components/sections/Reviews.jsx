import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    stars: 5,
    quote: "I couldn't sleep after the chapter on social contracts. It is like having your entire personality aggressively disassembled.",
    reviewer: "DANIEL K.",
    platform: "GOODREADS READERS"
  },
  {
    stars: 5,
    quote: "Aggressive, clinical, and absolutely true. A masterpiece of uncomfortable psychological audit.",
    reviewer: "DR. JULIAN CROWE",
    platform: "PSYCH QUARTERLY"
  },
  {
    stars: 4,
    quote: "It feels like getting punched in the throat by philosophy. I hated how much I saw myself in every single page.",
    reviewer: "MARCUS HALE",
    platform: "INDEPENDENT BOOK REVIEW"
  },
  {
    stars: 5,
    quote: "Brutally honest. It strips away the comforting lies we tell ourselves just to preserve our fragile egos.",
    reviewer: "SOPHIA LANG",
    platform: "LITERARY INSIGHTS"
  },
  {
    stars: 5,
    quote: "The author writes with a scalpel. You will either throw this book across the room or buy five copies for people you suspect.",
    reviewer: "SARAH J.",
    platform: "AMAZON VERIFIED"
  },
  {
    stars: 4,
    quote: "Unapologetically dark. A terrifying, highly detailed mirror held up to everyday human deception.",
    reviewer: "ETHAN VANCE",
    platform: "DEEP THOUGHTS SUBSTACK"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-black relative select-none border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] glow-blob opacity-20 -z-10" />

      <div className="max-w-7xl px-6 mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="leading-tight mb-4">
            <span className="text-white font-heading text-4xl md:text-6xl tracking-widest">THE REVIEWS ARE </span>
            <span className="text-blood font-heading text-5xl md:text-7xl tracking-tighter font-bold text-glow">VIOLENT.</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-zinc-400 font-body text-lg md:text-xl leading-relaxed">
            Readers and critics are either deeply offended or completely transformed. There is no safe middle ground.
          </p>
        </motion.div>

        {/* 6 Review Cards Grid (2 rows x 3 columns on desktop) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-none hover:border-blood/50 hover:bg-black transition-all duration-300 flex flex-col justify-between"
            >
              {/* Star Rating in Red */}
              <div className="flex text-blood mb-6">
                {Array(rev.stars).fill().map((_, idx) => (
                  <Star key={idx} fill="currentColor" size={14} stroke="none" />
                ))}
                {Array(5 - rev.stars).fill().map((_, idx) => (
                  <Star key={idx} size={14} className="text-zinc-800" strokeWidth={2} />
                ))}
              </div>

              {/* Review Quote Text */}
              <p className="text-zinc-300 font-body text-lg italic leading-relaxed mb-8">
                "{rev.quote}"
              </p>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-zinc-900 mt-auto">
                <div className="text-base font-heading tracking-widest text-blood font-semibold">
                  {rev.reviewer}
                </div>
                <div className="text-[10px] font-heading tracking-widest text-zinc-600 mt-1">
                  {rev.platform}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;