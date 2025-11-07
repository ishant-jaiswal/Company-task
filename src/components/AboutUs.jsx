import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative min-h-screen bg-[#fff5f0] text-gray-800 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16">

      {/* ===== BACKGROUND TEXT ===== */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 text-[3rem] sm:text-[6rem] md:text-[8rem] font-serif text-orange-600 select-none pointer-events-none leading-none text-center">
        <span>TED • CocaCola • ARION</span>
      </div>

      {/* ===== HEADING ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-xl sm:text-2xl md:text-3xl font-serif mt-24 sm:mt-28"
      >
        A montage of familiar faces and names.
      </motion.h2>

      {/* ===== SUBTEXT ===== */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-4 text-gray-700 max-w-lg sm:max-w-xl leading-relaxed text-sm sm:text-base"
      >
        Some stories come from the biggest names.
        <br />
        Others begin with bold, rising voices.
        <br />
        We've been fortunate to walk alongside both — listening, creating, and
        building stories that matter.
      </motion.p>

      {/* ===== NUMBERS SECTION ===== */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
        {[
          { number: "85+", label: "Projects" },
          { number: "50+", label: "Happy Clients" },
          { number: "10+", label: "Experts Team" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -6, rotate: -2, transition: { duration: 0.3 } }}
            className="bg-[#fff8f3] shadow-md w-28 h-28 sm:w-32 sm:h-32 flex flex-col justify-center items-center rounded-md hover:shadow-lg transition-all"
          >
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              {item.number}
            </span>
            <span className="text-xs sm:text-sm text-orange-600 mt-1">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ===== QUOTE SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-xl sm:max-w-2xl mt-16 text-gray-800 italic font-serif leading-relaxed text-lg sm:text-xl md:text-2xl px-4"
      >
        Every project is more than just a brief —<br />
        it’s a new chapter waiting to be written.<br />
        <span className="text-orange-600">
          Together, we’ve crafted tales that inspire, connect, and endure.
        </span>
      </motion.div>

      {/* ===== DECORATIVE SUN ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="120"
          fill="none"
          viewBox="0 0 300 120"
        >
          <circle cx="150" cy="120" r="60" stroke="#e4572e" strokeWidth="2" />
          <path
            d="M0 120 Q150 30 300 120 Z"
            fill="#e4572e"
            fillOpacity="0.3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
