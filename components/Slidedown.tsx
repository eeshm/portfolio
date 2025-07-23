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
      initial={{ opacity: 0, y: -50 }} // Slightly lower start for smoother appearance
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1, // Slightly increased duration for smoother transition
        ease: "easeOut",
        delay: delay,
        type: "spring", 
        stiffness: 50, 
        damping: 10,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideDown;
