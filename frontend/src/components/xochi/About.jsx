import { motion } from "framer-motion";
import { Fish, Beef, Leaf, Martini } from "lucide-react";
import { XOCHI, IMAGES } from "../../data/xochi";

const OFFERINGS = [
  {
    key: "seafood",
    title: "Seafood",
    icon: Fish,
    img: IMAGES.seafood,
    text: "Ocean-fresh plates prepared in the Pan-Asian tradition.",
    span: "lg:col-span-8",
  },
  {
    key: "meat",
    title: "Meat",
    icon: Beef,
    img: IMAGES.meat,
    text: "Bold, slow-built flavours across our meat dishes.",
    span: "lg:col-span-4",
  },
  {
    key: "vegetarian",
    title: "Vegetarian",
    icon: Leaf,
    img: IMAGES.vegetarian,
    text: "Vibrant vegetarian dishes with depth and balance.",
    span: "lg:col-span-4",
  },
  {
    key: "cocktails",
    title: "Cocktails",
    icon: Martini,
    img: IMAGES.cocktails,
    text: "Spirits and cocktails to set the mood of the night.",
    span: "lg:col-span-8",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export const About = () => {
  return (
    <section
      data-testid="about-section"
      id="about"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-[#C87550] mb-5"
          >
            About XOCHI
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight"
          >
            A cool Pan-Asian eatery,{" "}
            <span className="text-[#A1A1AA] italic">
              serving seafood, meat and vegetarian dishes, plus spirits and
              cocktails.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {OFFERINGS.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.article
                key={o.key}
                data-testid={`offering-card-${o.key}`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 min-h-[300px] sm:min-h-[340px] ${o.span}`}
              >
                <img
                  src={o.img}
                  alt={`${o.title} at XOCHI Bar and Kitchen`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/40 to-transparent" />
                <div className="absolute inset-0 ring-0 ring-inset ring-[#FF9F1C]/0 group-hover:ring-1 group-hover:ring-[#FF9F1C]/40 transition-[box-shadow] duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-end p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-[#FF9F1C]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-medium text-[#FDFBF7]">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#D4D4D8] max-w-md">
                    {o.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
