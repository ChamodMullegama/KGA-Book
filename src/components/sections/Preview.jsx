import { motion } from "framer-motion";

const previews = [
  {
    num: "01",
    title: "THE GENESIS OF DECEIT",
    desc: "A raw look at why human children learn to manipulate before they can even speak full sentences.",
  },
  {
    num: "02",
    title: "THE SILENT CONTRACTS",
    desc: "The unspoken agreements we sign with our partners, parents, and friends to lie to each other for peace.",
  },
  {
    num: "03",
    title: "THE AUDIT OF THE SELF",
    desc: "A brutal, step-by-step diagnostic worksheet designed to collapse your own personal mythology.",
  },
];

const Preview = () => {
  return (
    <section
      id="preview"
      className="py-24 bg-black relative select-none border-t border-zinc-900 overflow-hidden"
    >
      {/* Background Red Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blood/10 blur-3xl -z-10" />

      <div className="max-w-7xl px-6 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Column - Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 flex justify-center items-center py-6"
          >
            <div className="relative group">
              <img
                src="https://picsum.photos/id/1015/600/800"
                alt="Book Preview"
                className="w-full max-w-[380px] rounded-2xl shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -inset-6 bg-blood/20 blur-3xl -z-10 rounded-3xl" />

              <div className="absolute -top-4 -right-4 bg-black border border-blood text-blood text-xs font-bold tracking-widest px-5 py-2 rounded-full">
                SAMPLE
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Header Title - Smaller */}
            <h2 className="leading-tight mb-6">
              <span className="block text-white font-heading text-3xl md:text-5xl tracking-widest">
                OPEN THE BOOK.
              </span>
              <span className="block text-blood font-heading text-4xl md:text-6xl tracking-tighter font-bold text-glow mt-1">
                READ THE FIRST CUT.
              </span>
            </h2>

            {/* Subtitle - Smaller */}
            <p className="text-zinc-400 font-body text-base md:text-lg leading-relaxed max-w-xl mb-10">
              First taste of the writing — get inside the first chapter, feel
              the rhythm of the text, and understand exactly why this book hits
              so hard.
            </p>

            {/* Chapter Previews - Smaller Text */}
            <div className="space-y-6 mb-10">
              {previews.map((prev, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 pb-6 border-b border-zinc-900 last:border-b-0"
                >
                  <div className="text-xl font-heading text-blood font-bold tracking-widest pt-1 shrink-0">
                    {prev.num}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading tracking-wider text-white mb-2">
                      {prev.title}
                    </h3>
                    <p className="text-sm md:text-base font-body text-zinc-500 leading-relaxed">
                      {prev.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#buy"
              className="w-full sm:w-fit text-center px-10 py-5 text-lg font-heading tracking-widest bg-blood hover:bg-red-700 text-white transition-all duration-300 rounded-xl"
            >
              READ SAMPLE CHAPTER
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
