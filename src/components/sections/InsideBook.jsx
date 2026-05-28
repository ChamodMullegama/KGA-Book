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
    <section id="chapters" className="relative py-24 bg-black border-t select-none border-zinc-900">
      {/* Side Ambient Light */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[600px] glow-blob opacity-20 -z-10" />

      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Heading and Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-start lg:col-span-5 lg:sticky lg:top-28 h-fit"
          >
            <div className="text-zinc-600 font-heading tracking-[6px] text-sm mb-3">
              TABLE OF CONTENTS
            </div>
            <h2 className="mb-6 text-4xl tracking-widest text-white md:text-6xl font-heading">
              EIGHT CHAPTERS.
            </h2>
            <h3 className="mb-6 text-2xl italic font-bold leading-tight tracking-wider md:text-3xl font-heading text-blood text-glow">
              A precise anatomical dissection of the words we use to hide.
            </h3>
            <p className="max-w-md text-lg leading-relaxed text-zinc-400 font-body">
              Each chapter acts as a scalpel, cutting away another layer of conversational defense. Read them sequentially, or skip to the ones you fear the most.
            </p>
          </motion.div>

          {/* Right Column: Two-Column Chapter List */}
          <div className="grid gap-6 lg:col-span-7 md:grid-cols-2">
            {chapters.map((chap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col justify-between p-6 transition-all duration-300 border rounded-none bg-zinc-950/70 border-zinc-800 hover:border-blood/50 hover:bg-black"
              >
                <div>
                  {/* Chapter Number */}
                  <div className="mb-3 text-2xl font-semibold tracking-widest font-heading text-blood">
                    {chap.num}.
                  </div>
                  {/* Chapter Title */}
                  <h4 className="mb-2 text-xl leading-snug tracking-wider text-white font-heading">
                    {chap.title}
                  </h4>
                </div>
                {/* Chapter Description */}
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 font-body">
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