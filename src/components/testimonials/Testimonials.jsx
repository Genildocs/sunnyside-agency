import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.scss";
import EmilyImg from "../../assets/image-emily.jpg";
import ThomasImg from "../../assets/image-thomas.jpg";
import JennImg from "../../assets/image-jennie.jpg";
export default function Testimonials() {
  const variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9 } },
  };
  return (
    <motion.section className="section_testimonials">
      <motion.h2
        className="title"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true }}
      >
        client testimonials
      </motion.h2>
      <motion.div className="divider d-flex">
        <motion.div
          className="director d-flex"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <img
            className="image_testimonials"
            src={EmilyImg}
            alt="image of a person"
          />
          <p className="text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <p className="name">Emily R.</p>
            <p className="job">Marketing Director</p>
          </div>
        </motion.div>
        <motion.div
          className="officer d-flex"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <img
            className="image_testimonials"
            src={ThomasImg}
            alt="image of a person"
          />
          <p className="text">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <p className="name">Thomas S.</p>
            <p className="job">Chief Operating Officer</p>
          </div>
        </motion.div>
        <motion.div
          className="owner d-flex"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <img
            className="image_testimonials"
            src={JennImg}
            alt="image of a person"
          />
          <p className="text">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <p className="name">Jennie F.</p>
            <p className="job">Business Owner</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
