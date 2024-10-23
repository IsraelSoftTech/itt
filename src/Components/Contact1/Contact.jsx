import React from 'react'
import './Contact.css'
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'


import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8d4d5524-2be4-496f-af87-7b09072b3a96");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <section id='contact'>
      <h5>Contact Us</h5>
      <h2>Let's Talk</h2>
    <div className='contact'>
        <motion.form
          variants={fadeIn("right",0.3)}
          initial="hidden"
          whileInView='show'
          viewport={{once: false, amount: 0.7}}
        >
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information at the header or at the footer. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our students/clients and trainees.</p>
            <ul>
                <li><img src={mail_icon} alt="" />iminuifuong@gmail.com</li>
                <li><img src={phone_icon} alt="" />+237 675 644 383</li>
                <li><img src={location_icon} alt="" />Bamenda, Cameroon.</li>
            </ul>

        </div>
        </motion.form>
        <motion.div 
          variants={fadeIn("left",0.3)}
          initial="hidden"
          whileInView='show'
          viewport={{once: false, amount: 0.7}}
        className="contact-col">
            <form onSubmit={onSubmit} className='form1'>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Email</label>
                <input type='tel' name='phone' placeholder='Enter email' required/>
                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now </button>
            </form>
            <span>{result}</span>
            
        </motion.div>

    </div>
   </section>
  
  )
}

export default Contact