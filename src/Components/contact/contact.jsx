import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";



const contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fyspv6p', 'template_k6zbiaf', form.current, {
        publicKey: 'auZcEI0aUCDptn2nz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 

  return (
   <section id='contact'>
    <h5>Get in Touch</h5>
   <h2>Contact Us</h2>
  <motion.div
   variants={fadeIn("right",0.3)}
   initial="hidden"
   whileInView='show'
   viewport={{once: false, amount: 0.7}}
  className='container contact__container'>
    <div className="contact__options">

      <article className="contact__option">
        < MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>takohizzytech@gmail.com</h5>
        <a href="mailto:@takohizzytech.com" target="_blank">Send a mail</a>
      </article>

      <article className="contact__option">
        < RiFacebookCircleFill className='contact__option-icon'/>
        <h4>Facebook</h4>
        <h5>IZZY TECH Team</h5>
        <a href="https://m.me/izzytechteam" target="_blank">Send a message</a>
      </article>

      <article className="contact__option">
        < BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>Let's chat 1/1</h5>
        <a href="https://api.whatsapp.com/send?+237675644383" target="_blank">Send a messgae</a>
      </article>
      
      </div>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Your Full Name' required />
      <input type="email" name="email" placeholder ="Your email" required />
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button type="submit" className='btn btn-primary'>Send Message</button>
    </form>
  

  </motion.div>

   </section>
  )
}

export default contact