"use client";

import { motion } from "framer-motion";
import React from "react";

interface SlideDownProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
const SlideDown: React.FC<SlideDownProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // start higher for more dramatic slide
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5, // slightly longer for smoother motion
        ease: "easeOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


export default SlideDown;
