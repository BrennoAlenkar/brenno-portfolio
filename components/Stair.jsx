"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0 },
  exit: { scaleY: [0, 1] },
};

const reverseIndex = (index, total = 6) => total - index - 1;

const Stairs = () => {
  return (
    <div>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          style={{
            left: `${(index / 6) * 100}%`,
            width: `${100 / 6}%`,
            transformOrigin: "top",
          }}
          className="absolute h-full bg-white"
        />
      ))}
    </div>
  );
};

export default Stairs;