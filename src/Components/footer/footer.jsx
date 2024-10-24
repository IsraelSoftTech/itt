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
import { Link } from 'react-router-dom'

const footer = () => {
  const toggleMenu = () => {
    
  }


  return (
  <motion.footer
  variants={fadeIn("up",0.3)}
  initial="hidden"
  whileInView='show'
  viewport={{once: false, amount: 0.7}}
  
  >
    <a href = "#" className='footer__logo'>IZZY TECH TEAM</a>
    <ul className='permaLinks'>
    <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/team" onClick={toggleMenu}>Team</Link>
        <Link to="/experience" onClick={toggleMenu}>Experience</Link>
        <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>

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