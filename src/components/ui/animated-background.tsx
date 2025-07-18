"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10"
        style={{
          background: "var(--gradient-1)",
          filter: "blur(40px)",
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-15"
        style={{
          background: "var(--gradient-2)",
          filter: "blur(30px)",
        }}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/3 w-40 h-40 rounded-full opacity-8"
        style={{
          background: "var(--gradient-3)",
          filter: "blur(50px)",
        }}
        animate={{
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full opacity-12"
        style={{
          background: "var(--gradient-1)",
          filter: "blur(35px)",
        }}
        animate={{
          y: [25, -25, 25],
          x: [12, -12, 12],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Dynamic light rays */}
      <motion.div
        className="absolute top-0 left-1/2 w-1 h-full opacity-10"
        style={{
          background: "linear-gradient(to bottom, var(--gradient-1), transparent)",
          transform: "translateX(-50%) rotate(15deg)",
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scaleY: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/4 w-1 h-full opacity-8"
        style={{
          background: "linear-gradient(to bottom, var(--gradient-2), transparent)",
          transform: "rotate(-20deg)",
        }}
        animate={{
          opacity: [0.03, 0.12, 0.03],
          scaleY: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}