/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import Nav from "./Nav";
import Title from "./Title";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header>
      <div className="d-flex">
        <div>
          <Logo open={open} />
        </div>
        <Nav open={open} setOpen={setOpen} />
      </div>
      <Title />
    </motion.header>
  );
}
