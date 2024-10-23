import React from 'react'
import './Services.css'
import { BiCheck} from 'react-icons/bi'


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const Services = () => {
  return (
   <section id='services'>
    <h5>What We Offer</h5>
    <h2>Services</h2>
    <motion.div
     variants={fadeIn("up",0.3)}
     initial="hidden"
     whileInView='show'
     viewport={{once: false, amount: 0.7}}
    className='container services__container'>
      <article className="service">
        <div className="service__head">
          <h3>Sales of Quality Electronic Devices</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Laptops,desktops of all specifications.</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Printers,projectors,cameras</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Smart phones(Samsung,Pixels,iPhones ets).</p>
          </li>
        </ul>
      </article>
      {/*--End of Sales-*/}
      <article className="service">
        <div className="service__head">
          <h3>Software Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Website Development(Backend & Frontend)</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Mobile App Developement</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>DevOps Engineering</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Cloud Computing</p>
          </li>
         
        </ul>
      </article>
      {/*--End of Software Developent-*/}
      <article className="service">
        <div className="service__head">
          <h3>Other Services</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Software/Hardware Maintenance</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Basic Computing</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Data Analysis</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Penetration Testing and Ethical Hacking</p>
          </li>
          <li>
            <BiCheck className='service__head-icon'/>
            <p>Profesional Trainings in the above stacks</p>
          </li>
         
        </ul>
      </article>
      {/*--End of other services*/}
    </motion.div>
   </section>
  )
}

export default Services