import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MarketStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center px-4 py-12 text-[#2600FC] bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]"
    >
      {/* Floating Light Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFFFFF55] to-transparent blur-3xl opacity-30" />

      {/* Title */}
      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-4xl font-bold mb-8 text-center tracking-wide"
      >
        The Market
      </motion.h2>

      {/* Stats Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-6 text-white text-lg font-semibold w-full max-w-xl"
      >
        {[
          {
            title: "MSME's using computers",
            value: "› 77 lakhs",
            gradient: "from-[#FF6B6B] to-[#FFD166]",
          },
          {
            title: "Percentage",
            value: "› 83 %",
            gradient: "from-[#06D6A0] to-[#118AB2]",
          },
          {
            title: "Total MSME's in India",
            value: "› 6.30 crore",
            gradient: "from-[#3A86FF] to-[#8338EC]",
          },
          {
            title: "Access to mobile phones",
            value: "› 5.3 crore",
            gradient: "from-[#FF006E] to-[#FB5607]",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="p-6 rounded-2xl text-center relative transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-90 rounded-2xl`}
            />
            <div className="relative z-10">
              <p className="text-sm opacity-90 font-medium">{stat.title}</p>
              <p className="text-3xl font-extrabold mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="my-6"
      >
        <svg
          width="80"
          height="50"
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M10 10 C 30 50, 50 10, 70 40"
            stroke="#2600FC"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5 }}
          />
          <motion.path
            d="M67 37 L75 40 L67 43"
            stroke="#2600FC"
            strokeWidth="3"
            fill="none"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Section Below */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-4xl font-bold mb-4"
      >
        What are we on?
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-white/30 text-[#2600FC] text-lg px-8 py-6 rounded-2xl shadow-lg max-w-lg text-center backdrop-blur-lg"
      >
        We are on a mission to reach this <strong>83% MSME’s</strong> —{" "}
        approximately <strong>5.3 crore</strong> micro, small, and medium
        enterprises with our streamlined, smooth, dynamic application. It helps
        in managing their inventory, billing, expenses, and much more.
      </motion.div>
    </section>
  );
};

export default MarketStats;
