import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/izzy-cert.png'
import IMG2 from '../../assets/izzy-fly1.png'
import IMG3 from '../../assets/izzy-fly2.png'
import IMG4 from '../../assets/izzy-fly3.png'
import IMG5 from '../../assets/izzy-fly4.png'
import IMG6 from '../../assets/ITA-LOG.png'
import IMG7 from '../../assets/fly5.jpg'
import IMG8 from '../../assets/fly6.jpg'

const portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>Our Training Programs</h5>
    <h2>Izzy Tech Academy</h2>
    <div className="portfolio__item-cta">
          <a href="https://docs.google.com/document/d/1Jc26oQRRP6AdJ6bv6Z_MZJMtro7GIkUnVB37Cn3SKlA/edit?usp=drivesdk" className='btn' target='_blank'>Know More</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSced7eipnDcp5X4WOF6q2SWZ37_wzRUjXGTJNrD8OywX0f06w/viewform?usp=pp_url" className='btn btn-primary' target='_blank'>Register</a>  
          </div>
    <div className="portfolio__container">

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG7} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG8} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
         </div>
      </article>

    </div>
   </section>
  )
}

export default portfolio