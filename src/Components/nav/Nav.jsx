import React from 'react'
import './nav.css'
import { AiOutlineDingtalk, AiOutlineHome, AiOutlineLaptop, AiOutlinePropertySafety, AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiPen } from 'react-icons/bi'
import { RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const nav = () => {


  return (
  
   <nav>
    <a href="#"><Link style={{textDecoration: 'none'}}  to='/'>Home</Link></a>
    <a href="#about"><Link style={{textDecoration: 'none'}}  to='/about'>About</Link></a>
    <a href="#services"><Link style={{textDecoration: 'none'}}  to='/services'>Services</Link></a>
    <a href="#team"><Link style={{textDecoration: 'none'}}  to='/team'>Team</Link></a>
    <a href="#experience"><Link style={{textDecoration: 'none'}}  to='/experience'>Experience</Link></a>
    <a href="#portfolio"><Link style={{textDecoration: 'none'}}  to='/portfolio'>Portfolio</Link></a>
    <a href="#testimonial"><Link style={{textDecoration: 'none'}}  to='/testimonials'>Testimonials</Link></a>
  
  
    <a href="#contact"><Link style={{textDecoration: 'none'}}  to='/contact'>Contact</Link></a>
   </nav>
  

  )
}

export default nav