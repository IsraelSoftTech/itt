import React from 'react'
import './team.css'

import Team1 from '../../assets/team 1.png'
import Team2 from '../../assets/team 2.png'
import Team3 from '../../assets/team 3.png'
import Team4 from '../../assets/team 4.png'
import Test1 from '../../assets/Test 1.png'

// import swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide  } from 'swiper/react';
//Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


const team = () => {
  return (
    <section id="team">
<h5>Our Competent Team</h5>
      <h2>Team Profile</h2>
      <Swiper className="container teams__container"
      //Modules
      modules={[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetween={40}
            navigation
            pagination={{clickable:true}}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper')}>
      
        
        <SwiperSlide className="team">
          <div className="team__avatar">
            <img src={Team1} alt="" />
            </div>
           <h5 client__name>Takoh Israel M.</h5>
           <small className='team__review'>Founder</small>
           <p>Full Stack Developer</p>
          
        </SwiperSlide>
        <SwiperSlide className="team">
          <div className="team__avatar">
            <img src={Team2} alt="" />
            </div>
           <h5 client__name>Loic N.</h5>
           <small className='team__review'>Technical Adviser</small>
           <p>Full Stack Developer</p>
          
        </SwiperSlide>

        <SwiperSlide className="team">
          <div className="team__avatar">
            <img src={Test1} alt="" />
            </div>
           <h5 client__name>Bafon Precious</h5>
           <small className='team__review'>System Architech</small>
           <p>Full Stack Developer</p>
          
        </SwiperSlide>

        <SwiperSlide className="team">
          <div className="team__avatar">
            <img src={Team3} alt="" />
            </div>
           <h5 client__name>Tagha Wilfred</h5>
           <small className='team__review'>Project Consultant</small>
           <p>Database Analyst</p>
          
        </SwiperSlide>
        <SwiperSlide className="team">
          <div className="team__avatar">
            <img src={Team4} alt="" />
            </div>
           <h5 client__name>Forjong Gaston T.</h5>
           <small className='team__review'>Project Manager</small>
           <p>Network and Security Engineer</p>
          
        </SwiperSlide>
        <SwiperSlide className="team">
          <div className="team__avatar">
            <img src={Test1} alt="" />
            </div>
           <h5 client__name>A.Chazy</h5>
           <small className='team__review'>Asst.Project Manager</small>
           <p>UI/UX Designer/Data Scientist</p>
          
        </SwiperSlide>
       
        </Swiper>

    </section>
  )
}

export default team