import { motion } from 'framer-motion';
import { 
  Ghost, 
  EyeOff, 
  Fingerprint, 
  Sliders, 
  HeartCrack, 
  ShieldAlert, 
  Skull, 
  User, 
  Globe 
} from 'lucide-react';

const topics = [
  {
    icon: Ghost,
    title: "SOCIAL MASKS",
    desc: "The exhausting theater of characters we play just to remain tolerated."
  },
  {
    icon: EyeOff,
    title: "SELF-DECEPTION",
    desc: "The elaborate internal propaganda designed to protect our fragile egos."
  },
  {
    icon: Fingerprint,
    title: "BODY LANGUAGE",
    desc: "How micro-expressions and posture betray your deeply guarded secrets."
  },
  {
    icon: Sliders,
    title: "MANIPULATION",
    desc: "The subtle levers, gaslights, and games used to steer human action."
  },
  {
    icon: HeartCrack,
    title: "LIES IN RELATIONSHIPS",
    desc: "The quiet compromises and unspoken truths that slowly hollow out love."
  },
  {
    icon: ShieldAlert,
    title: "EMOTIONAL TRUTH",
    desc: "What remains when self-serving narratives are aggressively stripped away."
  },
  {
    icon: Skull,
    title: "HUMAN DECEPTION",
    desc: "The raw evolutionary mechanics behind our genetic drive to mislead."
  },
  {
    icon: User,
    title: "TRUTH VS IDENTITY",
    desc: "The brutal collision between who we actually are and who we pretend to be."
  },
  {
    icon: Globe,
    title: "CULTURAL LIES",
    desc: "Mass-scale illusions sold as tradition, patriotism, and social norms."
  }
];

const AboutBook = () => {
  return (
    <section id="about" className="py-16 bg-black relative overflow-hidden select-none border-t border-zinc-900">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-blob opacity-20 -z-10" />

      <div className="max-w-7xl px-6 mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl tracking-widest font-heading mb-3 text-white">
            A BOOK ABOUT <span className="text-blood font-bold text-glow">EVERYTHING</span>
          </h2>
          <p className="text-xl md:text-2xl tracking-widest font-heading text-white">
            WE PRETEND NOT TO KNOW.
          </p>
          <p className="max-w-xl mx-auto mt-4 text-zinc-400 font-body text-sm md:text-base leading-relaxed">
            We are all liars. The only difference is some of us are brave enough to admit it, dismantle it, and face the absolute fallout.
          </p>
        </motion.div>

        {/* 3x3 Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic, i) => {
            const IconComponent = topic.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-zinc-950/80 border border-zinc-800 p-6 hover:border-blood/50 transition-all duration-300 rounded-none group hover:bg-black"
              >
                {/* Icon */}
                <div className="text-blood mb-4 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
                
                {/* Label */}
                <h3 className="text-base md:text-lg font-heading tracking-widest text-white mb-2">
                  {topic.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-500 font-body text-sm group-hover:text-zinc-400 transition-colors leading-relaxed">
                  {topic.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutBook;