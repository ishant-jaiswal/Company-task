import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/HomeBg.png"; // ✅ background image

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-gray-800 overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background overlay for contrast */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* ===== CONTENT ===== */}
      <div className="relative flex flex-col md:flex-row max-w-7xl w-full px-6 md:px-12 gap-10 md:gap-16 items-center justify-center z-10">
        
        {/* ===== LEFT: Logo & Title ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center justify-center flex-1 text-center md:text-left"
        >
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mt-[-60px] md:mt-[-90px]"
          >
            <span className="text-[#e8613f]">V</span> Films
          </motion.h1>
        </motion.div>

        {/* ===== RIGHT: Text Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col flex-1 justify-center items-center md:items-start text-center md:text-left"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-3xl md:text-4xl italic text-[#102C36]"
          >
            Varnan is where stories find
            <br />
            <span className="mt-2 inline-block">their voice and form</span>
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="mt-6 text-lg sm:text-xl text-[#e8613f] font-medium"
          >
            Films • Brands • Art
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
            className="mt-6 sm:mt-8 text-sm sm:text-[15px] leading-relaxed text-gray-800 max-w-md"
          >
            Since 2009, V has been telling stories — stories of people,
            their journeys, and the places that shape them. Some begin in
            polished boardrooms, others in humble village squares. But every
            story starts the same way — by listening with intention…
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
