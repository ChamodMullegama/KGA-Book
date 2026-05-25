import { motion } from 'framer-motion';

const chapters = [
  {
    num: "01",
    title: "THE UNIVERSAL LANGUAGE OF LYING",
    desc: "How deception became the base dialect of the human species."
  },
  {
    num: "02",
    title: "TYPES OF LIES",
    desc: "From white compromises to black malice, cataloging our dishonest tools."
  },
  {
    num: "03",
    title: "THE PSYCHOLOGY OF LYING",
    desc: "The neurons and survival loops that trigger self-protection."
  },
  {
    num: "04",
    title: "SANS SOMEONE IS LYING",
    desc: "How to identify structural gaslighting and covert mental tricks."
  },
  {
    num: "05",
    title: "LIE DETECTION",
    desc: "Decoding micro-ticks, physical friction points, and conversational shifts."
  },
  {
    num: "06",
    title: "CULTURE AND LIES",
    desc: "How media, politics, and historical narratives commercialized dishonesty."
  },
  {
    num: "07",
    title: "THE COST OF LYING",
    desc: "The heavy psychological baggage of keeping multiple parallel truths active."
  },
  {
    num: "08",
    title: "THE POWER OF TRUTH",
    desc: "The terrifying, destructive, and ultimately freeing impact of pure candor."
  }
];

const InsideBook = () => {
  return (
    <section id="chapters" className="py-24 bg-black relative select-none border-t border-zinc-900">
      {/* Side Ambient Light */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[600px] glow-blob opacity-20 -z-10" />

      <div className="max-w-7xl px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Heading and Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 h-fit"
          >
            <div className="text-zinc-600 font-heading tracking-[6px] text-sm mb-3">
              TABLE OF CONTENTS
            </div>
            <h2 className="text-4xl md:text-6xl font-heading tracking-widest text-white mb-6">
              EIGHT CHAPTERS.
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading tracking-wider text-blood italic font-bold leading-tight text-glow mb-6">
              A precise anatomical dissection of the words we use to hide.
            </h3>
            <p className="text-zinc-400 font-body text-lg leading-relaxed max-w-md">
              Each chapter acts as a scalpel, cutting away another layer of conversational defense. Read them sequentially, or skip to the ones you fear the most.
            </p>
          </motion.div>

          {/* Right Column: Two-Column Chapter List */}
          <div className="lg:col-span-7 grid gap-6 md:grid-cols-2">
            {chapters.map((chap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-zinc-950/70 border border-zinc-800 p-6 rounded-none hover:border-blood/50 hover:bg-black transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Chapter Number */}
                  <div className="text-2xl font-heading tracking-widest text-blood mb-3 font-semibold">
                    {chap.num}.
                  </div>
                  {/* Chapter Title */}
                  <h4 className="text-xl font-heading tracking-wider text-white mb-2 leading-snug">
                    {chap.title}
                  </h4>
                </div>
                {/* Chapter Description */}
                <p className="text-zinc-500 font-body text-sm leading-relaxed mt-2">
                  {chap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideBook;