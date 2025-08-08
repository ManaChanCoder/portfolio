// src/components/shared/ScrollFade.js
import React from "react";
import { motion } from "framer-motion";
import { useInViewObserver } from "../custom_hook/useInViewObserver.js";

const ScrollFade = ({ children }) => {
  const { ref, isVisible } = useInViewObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
