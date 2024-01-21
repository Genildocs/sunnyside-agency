/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Nav.scss";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);
export default function Nav({ open, setOpen, desktop }) {
  const menu = ["About", "Services", "Projects", "Contact"];
  const variantsUl = {
    open: {
      opacity: 1,
      visibility: "visible",
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      visibility: "hidden",
      y: -30,
      transition: {
        visibility: { delay: 0.5 },
      },
    },
  };

  const variantsLI = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <motion.nav initial={false} animate={open ? "open" : "closed"}>
      <motion.ul variants={variantsUl}>
        {menu.map((item, index) => (
          <motion.li
            key={index}
            className="list_item"
            variants={desktop ? null : variantsLI}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#">{item}</a>
          </motion.li>
        ))}
      </motion.ul>
      {!desktop && (
        <button
          onClick={() => setOpen(!open)}
          className="btn_menu"
          id="menu_button"
          aria-label="Menu Button"
        >
          <svg width={23} height={23} viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />

            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      )}
    </motion.nav>
  );
}
