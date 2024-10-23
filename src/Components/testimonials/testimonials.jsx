import React from 'react'
import './testimonials.css'
import Test1 from '../../assets/Test 1.png'


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
           <img src={Test1} alt=""/>
            </div>
           <h5 client__name>Ngwa Henry</h5>
           <small className='client__review'>Izzy Tech Team built for our institution a University web application. I like the system beacuse its user friendly, very efficient and reliable,(Cameroon,Buea).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
            </div>
           <h5 client__name>Nchontu Hylda</h5>
           <small className='client__review'>Izzy Tech Team built for me a restuarant application.My clients say they like visiting my restaurant because this application gives them a good customer service experience,(Cameroon,Bamenda).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
             </div>
           <h5 client__name>MPASAT</h5>
           <small className='client__review'>Izzy Tech Team built for MPASAT a full school database management system that manages all students',teachers' and administrator's data.,(Cameroon,Bamenda).</small>
         
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
            </div>
           <h5 client__name>Orock James Ndi</h5>
           <small className='client__review'>Izzy Tech Team built for me an E-learning web application. Now, I can teach students from the comfort of my room,(Cameroon,Douala).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
            </div>
           <h5 client__name>Takui Fred K.</h5>
           <small className='client__review'>Izzy Tech Team is my company's brand designer. I have been consuming their products for the past 3 years. I want to say their designs are professional,(Cameroon,Yaounde).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
             </div>
           <h5 client__name>Nguh Edwin Y.</h5>
           <small className='client__review'>Izzy Tech Team supplies all my electronic gadgets with long term guarantees,(Cameroon,Limbe).</small>
         
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
            </div>
           <h5 client__name>Tachi Calif T.</h5>
           <small className='client__review'>Izzy Tech Team built for my school an ID Card Generation system.Now, producing our students' ID Cards has become very simple.,(Cameroon,Ndop).</small>
          
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
          <img src={Test1} alt=""/>
             </div>
           <h5 client__name>Leinyuy Karine Tita</h5>
           <small className='client__review'>Izzy Tech Team does quality designs and printing for all my commands of posters, flyers,T-shirts,mogs,banners etc ,(Cameroon,Bamenda).</small>
         
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials