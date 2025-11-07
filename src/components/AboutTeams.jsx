import React from "react";
import { motion } from "framer-motion";
import StickyNote from "../assets/sticky-note.png";
import TeamSilhouettes from "../assets/team-silhouettes1.png";
import IndiaGate from "../assets/india-gate1.png";
import BgPattern from "../assets/BgPattern.png";

export default function AboutTeams() {
  return (
    <div className="relative w-full min-h-screen bg-[#fff9f5] overflow-hidden font-serif text-gray-800">
      {/* Background */}
      <div
        className="absolute inset-0 bg-repeat opacity-20"
        style={{
          backgroundImage: `url(${BgPattern})`,
          backgroundSize: "350px 350px",
        }}
      />


      {/* =====================
          DESKTOP VIEW
      ===================== */}
      <div className="hidden md:block relative w-full min-h-screen">
        {/* Sticky Note */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute"
          style={{
            top: "8%",
            left: "6%",
            width: "22vw",
            minWidth: 240,
          }}
        >
          <img src={StickyNote} alt="Sticky Note" className="w-full" />
        </motion.div>

        {/* Team Silhouettes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute"
          style={{
            top: "25%",
            left: "45%",
            width: "28vw",
            minWidth: 300,
            transform: "translateX(-10%)",
          }}
        >
          <img src={TeamSilhouettes} alt="Team Silhouettes" className="w-full" />
        </motion.div>

        {/* India Gate */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute"
          style={{
            top: "52%",
            left: "10%",
            width: "20vw",
            minWidth: 120,
          }}
        >
          <img src={IndiaGate} alt="India Gate" className="w-full" />
        </motion.div>

        {/* Bottom Text & Button */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute text-right"
          style={{
            bottom: "10%",
            right: "6%",
            maxWidth: "30vw",
            minWidth: 220,
          }}
        >
          <p className="text-lg md:text-xl mb-4">
            Take a closer look at the stories{" "}
            <span className="text-[#e65c32] font-semibold">V</span> bring to life.
          </p>
          <button className="bg-[#e65c32] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#cf4f27] transition duration-300">
            View Portfolio
          </button>
        </motion.div>
      </div>

      {/* =====================
          MOBILE / TABLET VIEW
      ===================== */}
      <div className="block md:hidden relative w-full">
        <div className="flex flex-col items-center justify-start pt-28 px-6 gap-6">
          <motion.img
            src={StickyNote}
            alt="Sticky Note"
            className="w-72 rotate-[-6deg] shadow-sm"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <motion.img
            src={TeamSilhouettes}
            alt="Team Silhouettes"
            className="w-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <motion.img
            src={IndiaGate}
            alt="India Gate"
            className="w-36"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <motion.p
            className="text-center text-base max-w-md text-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Take a closer look at the stories{" "}
            <span className="text-[#e65c32] font-semibold">V</span> bring to life.
          </motion.p>

          <motion.button
            className="bg-[#e65c32] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#cf4f27] transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            View Portfolio
          </motion.button>
        </div>
      </div>
    </div>
  );
}
