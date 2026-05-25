import { motion } from 'framer-motion';

const Author = () => {
  return (
    <section id="author" className="py-20 bg-black relative select-none border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-0 w-[350px] h-[350px] glow-blob opacity-15 -z-10" />

      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Column: Dark Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            {/* Red glow behind image */}
            <div className="absolute inset-0 bg-blood/5 blur-2xl -z-10" />

            {/* Photo Frame */}
            <div className="relative aspect-square w-full max-w-[420px] overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              {/* Dimmed grayscale portrait image */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="KGA — Author"
                className="w-full h-full object-cover"
                style={{
                  filter: 'grayscale(100%) brightness(0.25) contrast(1.1)',
                }}
              />

              {/* Red vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(204,0,0,0.15)]" />

              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-blood" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-blood" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-blood" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-blood" />

              {/* Bottom label */}
              <div className="absolute bottom-5 left-0 right-0 text-center">
                <div className="text-[9px] font-heading tracking-[5px] text-zinc-500 uppercase">
                  SUBJECT: KGA — AUTHOR
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Signature */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="text-zinc-600 font-heading tracking-[6px] text-xs mb-3">
              THE AUTHOR
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-heading tracking-widest leading-none text-white mb-6">
              WORDS LIKE{' '}
              <span className="text-blood text-glow font-bold">SCALPEL CUTS.</span>
            </h2>

            {/* Pull Quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-5 max-w-lg mb-7 font-body text-base italic text-zinc-300 leading-relaxed"
            >
              <p>
                "Deception is not a moral failing; it is our primary survival strategy. We construct masks because the raw truth of who we are is too sharp for civilized society to bear."
              </p>
              <p>
                "My pen does not write to soothe. It writes to amputate. It is only when you cut away the comfortable fabric of your social identity that you begin to live in reality."
              </p>
            </motion.div>

            {/* Red Line Divider */}
            <div className="w-20 h-[1px] bg-blood my-5" />

            {/* Signature */}
            <div className="font-heading tracking-[8px] text-xl text-blood font-bold">
              KGA
            </div>
            <div className="text-zinc-600 font-heading tracking-[3px] text-[10px] mt-1">
              AUTHOR OF THE DIRTY F*CKING TRUTH
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Author;