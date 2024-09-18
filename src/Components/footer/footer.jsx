import React from 'react'
import './footer.css'

import  { FaFacebookF } from 'react-icons/fa'
import  { FiInstagram } from 'react-icons/fi'
import  { FiTwitter } from 'react-icons/fi'


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { BsYoutube } from 'react-icons/bs'

const footer = () => {
  return (
  <motion.footer
  variants={fadeIn("up",0.3)}
  initial="hidden"
  whileInView='show'
  viewport={{once: false, amount: 0.7}}
  
  >
    <a href = "#" className='footer__logo'>IZZY TECH TEAM</a>
    <ul className='permaLinks'>
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Training</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#team">Teams</a></li>
<li><a href="#contact">Let's talk</a></li>
<li><a href="https://about.fb.com/news/category/technology-and-innovation/" target='_blank'>Worldwide Tech News/Updates</a></li>
    </ul>

    <div className="footer__socials">
      <a href = "https://www.facebook.com/takoh.israel">< FaFacebookF /></a>
      <a href = "https://www.instagram.com/israeltakoh?igsh=YzljYTk1ODg3Zg=="><FiInstagram /></a>
      <a href = "https://youtube.com/@takohisrael?si=II5DeGc-ZiACJ_Tr">< BsYoutube /></a>
    </div>

    <div className="footer__copyright">
      <small>
        &copy; IZZY TECH TEAM 2024. All Rights Reserved.
      </small>
    </div>
  </motion.footer>
  )
}

export default footer