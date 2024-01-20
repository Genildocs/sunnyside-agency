import * as React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import Header from "./components/header/Header";
import Transform from "./components/transform/Transform";
import Stand from "./components/stand/Stand";
import GraphicDesign from "./components/graphicDesign/GraphicDesign";
import Photography from "./components/photography/Photography";
import Testimonials from "./components/testimonials/Testimonials";
import Picture from "./components/picture/Picture";
import Footer from "./components/footer/Footer";

export default function App() {
  const mobile = !useMediaQuery("only screen and (min-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1023px)"
  );
  const desktop = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <motion.div className={`${desktop ? " systemGrid_Desktop " : " "} `}>
      <Header desktop={desktop} />
      <Transform />
      <Stand />
      <GraphicDesign />
      <Photography />
      <Testimonials />
      <Picture />
      <Footer />
    </motion.div>
  );
}
