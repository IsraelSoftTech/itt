import React from 'react'
import './testimonials.css'
import Test1 from '../../assets/team 1.png'
import Test2 from '../../assets/team 2.png'
import Test3 from '../../assets/team 3.png'
import Test4 from '../../assets/team 4.png'
import Test5 from '../../assets/team 5.png'
import Test6 from '../../assets/team 6.png'
import Test7 from '../../assets/team 7.png'
import Test8 from '../../assets/team 8.png'

// import swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide  } from 'swiper/react';
//Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';







const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>What our clients/trainees say</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      //Modules
      modules={[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetween={40}
            navigation
            pagination={{clickable:true}}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}>
      
        
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test1} alt="" />
            </div>
           <h5 client__name>John Paul</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test2} alt="" />
            </div>
           <h5 client__name>Adam Smith</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test3} alt="" />
             </div>
           <h5 client__name>Cliton Fred</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
         
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test4} alt="" />
            </div>
           <h5 client__name>Geraldine John</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test5} alt="" />
            </div>
           <h5 client__name>Pascaline Ndi</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test6} alt="" />
             </div>
           <h5 client__name>Nguh Edwin</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
         
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test7} alt="" />
            </div>
           <h5 client__name>Joseph Belt</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={Test8} alt="" />
             </div>
           <h5 client__name>Larry Tonny Doe</h5>
           <small className='client__review'>Izzy Tech Team built for me a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Nigeria).</small>
         
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials