import React from "react";
import "./Title.scss";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <div className="header_title">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        we are creatives
      </motion.h1>
      <motion.svg
        width="36"
        height="114"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <g
          stroke="#FFF"
          strokeWidth="6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </motion.svg>
    </div>
  );
}
