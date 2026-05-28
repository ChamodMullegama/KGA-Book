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
      className="relative py-24 overflow-hidden bg-black border-t select-none border-zinc-900"
    >
      {/* Background Red Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blood/10 blur-3xl -z-10" />

      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Column - Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center justify-center py-6 lg:col-span-5"
          >
            <div className="relative group">
              <img
                src="./src/assets/bookcover.png"
                alt="Book Preview"
                className="duration-500 border shadow-2xl ansition-transform w border-white/10 group-hover:scale-105"
              />
              <div className="absolute -inset-6 bg-blood/20 blur-3xl -z-10 rounded-3xl" />

              <div className="absolute px-5 py-2 text-xs font-bold tracking-widest bg-black border rounded-full -top-4 -right-4 border-blood text-blood">
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
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Header Title - Smaller */}
            <h2 className="mb-6 leading-tight">
              <span className="block text-3xl tracking-widest text-white font-heading md:text-5xl">
                OPEN THE BOOK.
              </span>
              <span className="block mt-1 text-4xl font-bold tracking-tighter text-blood font-heading md:text-6xl text-glow">
                READ THE FIRST CUT.
              </span>
            </h2>

            {/* Subtitle - Smaller */}
            <p className="max-w-xl mb-10 text-base leading-relaxed text-zinc-400 font-body md:text-lg">
              First taste of the writing — get inside the first chapter, feel
              the rhythm of the text, and understand exactly why this book hits
              so hard.
            </p>

            {/* Chapter Previews - Smaller Text */}
            <div className="mb-10 space-y-6">
              {previews.map((prev, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 pb-6 border-b border-zinc-900 last:border-b-0"
                >
                  <div className="pt-1 text-xl font-bold tracking-widest font-heading text-blood shrink-0">
                    {prev.num}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg tracking-wider text-white md:text-xl font-heading">
                      {prev.title}
                    </h3>
                    <p className="text-sm leading-relaxed md:text-base font-body text-zinc-500">
                      {prev.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#buy"
              className="w-full px-10 py-5 text-lg tracking-widest text-center text-white transition-all duration-300 sm:w-fit font-heading bg-blood hover:bg-red-700 rounded-xl"
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
