import React from "react";
import { motion } from "framer-motion";
import "./GraphicDesign.scss";
import Cherry from "../../assets/mobile/image-graphic-design.jpg";
import CherryDesktop from "../../assets/desktop/image-graphic-design.jpg";
export default function GraphicDesign() {
  const variants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  return (
    <section className="section_graphic">
      <motion.picture
        className="picture_graphic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
        viewport={{ once: true }}
      >
        <source srcSet={CherryDesktop} media="(min-width: 500px)" />
        <img src={Cherry} alt="imagem de um ovo" />
      </motion.picture>
      <motion.div
        className="graphic_text"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <h2>Graphic Design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </motion.div>
    </section>
  );
}
