"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative w-[220px] h-[220px] xl:w-[360px] xl:h-[360px]"
      >
        {/* imagem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className="w-[218px] h-[218px] xl:w-[358px] xl:h-[358px] mix-blend-lighten absolute inset-0 m-auto"
        >
          <Image
            src="/assets/img-teste.png"
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[220px] xl:w-[360px] h-[220px] xl:h-[360px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <motion.circle
            key="circle-animation"
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 2 92 72",
                "4 250 22 22",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;