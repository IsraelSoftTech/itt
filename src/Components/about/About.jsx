import React from "react";
import "./About.css";
import abt from "../../assets/flyabout.png";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { PiStudent } from "react-icons/pi";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>
      <div className="container about__container">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="about__us"
        >
          <div className="about__us-image">
            <img src={abt} alt="" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="about__content"
        >
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <PiStudent className="about__icon" />
              <h5>Trainees/Students</h5>
              <small>100+</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            <h5>Our Vision</h5>
            Izzy Tech is a software engineering company consisting a team of
            software engineeers who work together in order to offer excellent
            and fast tech services to clients. Izzy Tech Team offers a number of
            high demanding tech services like sales of quality computers,
            graphic design and printing, software and hardware maintenance,
            website developement, mobile app development,artificial intelligence
            etc. Our main office is located in Bamenda, Commercial
            Avenue,Opposite Afriland First bank. We have our branch offices in
            Yaounde at Poste de Centrale and in Buea,Opposite the Molyko
            Stadium. Our team is made of well trained and competent engineers
            with good mastries in their respective fields.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
