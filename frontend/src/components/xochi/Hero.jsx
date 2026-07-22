import { motion } from "framer-motion";
import { Star, Phone, ArrowDown } from "lucide-react";
import { XOCHI, IMAGES } from "../../data/xochi";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-end overflow-hidden grain-overlay"
    >
      <img
        src={IMAGES.hero}
        alt="Atmospheric Pan-Asian dining interior at XOCHI Bar and Kitchen"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/70 to-[#0A0B0E]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E]/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-20 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md px-4 py-2 mb-7"
          data-testid="hero-rating-badge"
        >
          <Star size={16} fill="#FF9F1C" className="text-[#FF9F1C]" />
          <span className="text-sm font-medium text-[#FDFBF7]">
            {XOCHI.rating}
          </span>
          <span className="text-sm text-[#A1A1AA]">· Rated on Google</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#C87550] mb-5"
        >
          Pan-Asian Bar &amp; Kitchen · Bellandur
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-semibold text-[#FDFBF7] leading-[0.95] tracking-tight max-w-4xl text-5xl sm:text-7xl lg:text-8xl"
        >
          Pan-Asian nights,
          <br />
          <span className="text-gradient-amber italic">made for Bellandur</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-7 max-w-xl text-base sm:text-lg text-[#D4D4D8] leading-relaxed"
        >
          A cool eatery serving seafood, meat and vegetarian dishes, plus
          spirits and cocktails — set to a warm, low-lit atmosphere on the Outer
          Ring Road.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <button
            data-testid="hero-reserve-btn"
            onClick={() => scrollTo("#visit")}
            className="inline-flex items-center justify-center rounded-full bg-[#FF9F1C] px-8 py-4 text-base font-semibold text-[#0A0B0E] hover:bg-[#EAA028] hover:shadow-[0_0_35px_rgba(255,159,28,0.5)] hover:-translate-y-0.5 transition-[background-color,box-shadow,transform] duration-300"
          >
            Reserve a Table
          </button>
          <a
            data-testid="hero-call-btn"
            href={XOCHI.phoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-[#FDFBF7] hover:border-[#FF9F1C] hover:bg-white/10 hover:-translate-y-0.5 transition-[border-color,background-color,transform] duration-300"
          >
            <Phone size={18} />
            Call XOCHI
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-7 right-8 hidden lg:flex flex-col items-center gap-2 text-[#A1A1AA] z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
