/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./Photography.scss";
import Orange from "../../assets/mobile/image-photography.jpg";
import OrangeDesktop from "../../assets/desktop/image-photography.jpg";
export default function Photography() {
  const variants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  return (
    <section className="section_photography">
      <motion.picture
        className="picture_photography"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
        viewport={{ once: true }}
      >
        <source srcSet={OrangeDesktop} media="(min-width: 500px)" />
        <img src={Orange} alt="image of an orange" />
      </motion.picture>
      <motion.div
        className="photography_text"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </motion.div>
    </section>
  );
}
