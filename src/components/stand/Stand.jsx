import React from "react";
import { motion } from "framer-motion";
import "./Stand.scss";
import Cup from "../../assets/mobile/image-stand-out.jpg";
import CupDesktop from "../../assets/desktop/image-stand-out.jpg";

export default function Stand() {
  const variants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };
  return (
    <section className="section_stand">
      <motion.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
        viewport={{ once: true }}
      >
        <source srcSet={CupDesktop} media="(min-width: 500px)" />
        <img src={Cup} alt="image cup" />
      </motion.picture>
      <motion.div
        className="stand_text"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a href="#">Learn more</a>
      </motion.div>
    </section>
  );
}
