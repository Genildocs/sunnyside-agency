import React from "react";
import { motion } from "framer-motion";
import "./Transform.scss";
import Eagle from "../../assets/mobile/image-transform.jpg";
import EagleDesktop from "../../assets/desktop/image-transform.jpg";
export default function Transform() {
  const variants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };
  return (
    <section className="section_transform">
      <motion.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
        viewport={{ once: true }}
      >
        <source srcSet={EagleDesktop} media="(min-width: 500px)" />
        <img src={Eagle} alt="imagem de um ovo" />
      </motion.picture>
      <motion.div
        className="transform_text"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="#">Learn more</a>
      </motion.div>
    </section>
  );
}
