/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import Nav from './Nav';
import Title from './Title';

export default function Header() {
  return (
    <motion.header>
      <div className="d-flex">
        <div>
          <img src="src/assets/logo.svg" alt="logo" />
        </div>
        <Nav />
      </div>
      <Title />
    </motion.header>
  );
}
