import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const experience = () => {
  return (
    <section id='experience'>
      

      <h5>Skills We Have</h5>
      <h2>Our Experience</h2>
      <motion.div 
       variants={fadeIn("down",0.3)}
       initial="hidden"
       whileInView='show'
       viewport={{once: false, amount: 0.7}}
      
      className="container experience__container">
        <div className="experience__frontend">
        <h3>Main Skills</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML,CSS,JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React,Angular,Vue</h4>
              <small className='text-light'>Experienced</small>  
            </div>
              </article>
            
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small> 
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>MySQL</h4>
              <small className='text-light'>Experienced</small> 
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Mobile App Devt</h4>
              <small className='text-light'>Experienced</small>
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Django</h4>
              <small className='text-light'>Experienced</small> 
              </div>
              </article>
        </div>
        </div>

       {/*--End of Frontend*/}

        <div className="experience__backend">

        <h3>Other Skills</h3>

          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Graphic Design and Printing</h4>
              <small className='text-light'>Experienced</small>  
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>Software/Hardware Maintenance</h4>
              <small className='text-light'>Experienced</small> 
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>DevOps Engineering</h4>
              <small className='text-light'>Experienced</small>  
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Cloud Computing</h4>
              <small className='text-light'>Experienced</small>
            </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Artificial Intelligence</h4>
              <small className='text-light'>Experienced</small>   
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Basic Computing</h4>
              <small className='text-light'>Experienced</small>   
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Network and Cyber Security</h4>
              <small className='text-light'>Experienced</small>   
              </div>
              </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Data Analysis</h4>
              <small className='text-light'>Experienced</small>   
              </div>
              </article>
        </div>
          
          </div>
     
      </motion.div>
    </section>
  )
}

export default experience