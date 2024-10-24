import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./headerSocials";
import US from "../../assets/US.png";
import log from "../../assets/new1log.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import ImageSwiper from "../ImageSwiper/ImageSwiper";

const header = () => {
  return (
    <header>
      <motion.div
        variants={fadeIn("left", 0.9)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.9 }}
        className="top"
      >
        <img src={log} alt="" />
      </motion.div>
      <div className="container header__container">
        <h1>Izzy Tech Team | </h1> <h5>Bringing the change</h5>
        <h5>We're:</h5>
        <h5 className="text-light">System Developers</h5>
        <CTA />
        <HeaderSocials />
      <ImageSwiper/>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
