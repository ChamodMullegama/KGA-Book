import { motion } from 'framer-motion';

const Author = () => {
  return (
    <section id="author" className="relative py-20 overflow-hidden bg-black border-t select-none border-zinc-900">
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
            className="relative flex items-center justify-center"
          >
            {/* Red glow behind image */}
            <div className="absolute inset-0 bg-blood/5 blur-2xl -z-10" />

            {/* Photo Frame */}
            <div className="relative aspect-square w-full max-w-[420px] overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
              <img
                src="./src/assets/kgaimage.png"
                alt="KGA — Author"
                className="object-cover w-full h-full"
              />

              {/* Corner brackets */}
              <div className="absolute w-5 h-5 border-t-2 border-l-2 top-3 left-3 border-blood" />
              <div className="absolute w-5 h-5 border-t-2 border-r-2 top-3 right-3 border-blood" />
              <div className="absolute w-5 h-5 border-b-2 border-l-2 bottom-3 left-3 border-blood" />
              <div className="absolute w-5 h-5 border-b-2 border-r-2 bottom-3 right-3 border-blood" />

              {/* Bottom label */}
              <div className="absolute left-0 right-0 text-center bottom-5">
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
            <h2 className="mb-6 text-3xl leading-none tracking-widest text-white md:text-5xl font-heading">
              WORDS LIKE{' '}
              <span className="font-bold text-blood text-glow">SCALPEL CUTS.</span>
            </h2>

            {/* Pull Quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-lg space-y-5 text-base italic leading-relaxed mb-7 font-body text-zinc-300"
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

            {/* Social Media Icons - Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-6 mt-10"
            >
              <span className="text-xs tracking-widest font-heading text-zinc-500">CONNECT</span>
              
              <div className="flex items-center gap-5 text-2xl">
                {/* Twitter / X */}
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 text-zinc-400 hover:text-white"
                  title="Twitter / X"
                >
                  𝕏
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 text-zinc-400 hover:text-blood"
                  title="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 text-zinc-400 hover:text-blood"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Author;