import React from "react";
import { motion } from "framer-motion";
import "./Picture.scss";
import MilkImg from "../../assets/mobile/image-gallery-milkbottles.jpg";
import MilkImgDesktop from "../../assets/desktop/image-gallery-milkbottles.jpg";
import ConeImg from "../../assets/mobile/image-gallery-cone.jpg";
import ConeImgDesktop from "../../assets/desktop/image-gallery-cone.jpg";
import SugarImg from "../../assets/mobile/image-gallery-sugar-cubes.jpg";
import SugarImgDesktop from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import OrangeImg from "../../assets/mobile/image-gallery-orange.jpg";
import OrangeImgDesktop from "../../assets/desktop/image-gallery-orange.jpg";

export default function Picture() {
  const variants = {
    hidden: { scale: 0, opacity: 0.5 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.9 } },
  };
  return (
    <section className="picture">
      <motion.picture
        className="picture_milk"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <source srcSet={MilkImgDesktop} media="(min-width: 500px)" />
        <img
          className="picture_image"
          src={MilkImg}
          alt="image of milk bottles"
        />
      </motion.picture>
      <motion.picture
        className="picture_cone"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <source srcSet={ConeImgDesktop} media="(min-width: 500px)" />
        <img className="picture_image" src={ConeImg} alt="image of a cone" />
      </motion.picture>
      <motion.picture
        className="picture_sugar"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <source srcSet={SugarImgDesktop} media="(min-width: 500px)" />
        <img
          className="picture_image"
          src={SugarImg}
          alt="image of sugar cubes"
        />
      </motion.picture>
      <motion.picture
        className="picture_orange"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        <source srcSet={OrangeImgDesktop} media="(min-width: 500px)" />
        <img
          className="picture_image"
          src={OrangeImg}
          alt="image of an orange"
        />
      </motion.picture>
    </section>
  );
}
