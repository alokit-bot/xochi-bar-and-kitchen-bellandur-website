import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Star } from "lucide-react";
import { XOCHI, NAV_LINKS } from "../../data/xochi";

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <button
          data-testid="wordmark-home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#FDFBF7] group-hover:text-[#FF9F1C] transition-colors duration-300">
            XOCHI
          </span>
          <span className="hidden sm:inline-block w-px h-6 bg-white/20" />
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.35em] text-[#A1A1AA] pt-1">
            Bar &amp; Kitchen
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              data-testid={`nav-${link.label.toLowerCase()}`}
              onClick={() => handleNav(link.href)}
              className="relative text-sm uppercase tracking-widest text-[#A1A1AA] hover:text-[#FDFBF7] transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#FF9F1C] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="header-reserve-btn"
            onClick={() => handleNav("#visit")}
            className="hidden sm:inline-flex items-center rounded-full bg-[#FF9F1C] px-6 py-2.5 text-sm font-semibold text-[#0A0B0E] hover:bg-[#EAA028] hover:shadow-[0_0_25px_rgba(255,159,28,0.45)] hover:-translate-y-0.5 transition-[background-color,box-shadow,transform] duration-300"
          >
            Reserve a Table
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[#FDFBF7] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => handleNav(link.href)}
                  className="text-left font-display text-2xl text-[#FDFBF7]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 text-[#FF9F1C] pt-2">
                <Star size={16} fill="#FF9F1C" />
                <span className="text-sm text-[#A1A1AA]">
                  {XOCHI.rating} on Google
                </span>
              </div>
              <button
                data-testid="mobile-reserve-btn"
                onClick={() => handleNav("#visit")}
                className="mt-2 rounded-full bg-[#FF9F1C] px-6 py-3 text-sm font-semibold text-[#0A0B0E]"
              >
                Reserve a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
