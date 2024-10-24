import React from "react";
import Slider from "react-slick"; // Correct Slider import

// Importing local images
import image1 from '../../assets/US.png';
import image2 from '../../assets/fly5.jpg';
import image3 from '../../assets/fly6.jpg';
import image4 from '../../assets/ai.png';
import image5 from '../../assets/auto.png';
import image6 from '../../assets/contact.png';

const ImageSwiper = () => {
  // Array of imported images
  const images = [image1, image2, image3,image4, image5, image6];

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="image-swiper" style={{ width: "60%", margin: "20px auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
             
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSwiper;