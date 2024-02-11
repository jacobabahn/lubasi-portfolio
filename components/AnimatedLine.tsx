"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedLine = () => {
  const lineVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { duration: 1.5 } },
  };

  return (
    <svg width="300" height="100" viewBox="0 0 300 100">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>

      <motion.path
        d="M 10 50 L 270 50"
        stroke="black"
        strokeWidth="3"
        fill="none"
        variants={lineVariants}
        initial="initial"
        animate="animate"
      />
      {/* <motion.path */}
      {/*   initial={{ opacity: 0 }} */}
      {/*   animate={{ opacity: 1 }} */}
      {/*   transition={{ duration: 0.5, delay: 1.2 }} */}
      {/*   d="M35 1L45 10L35 19Z" */}
      {/*   fill="black" */}
      {/* /> */}
    </svg>
  );
};

export default AnimatedLine;
