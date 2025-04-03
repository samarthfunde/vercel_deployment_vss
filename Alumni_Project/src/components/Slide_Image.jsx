import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slide_Image.css";
import bulbImage from "../assets/Slider_Img/Card/bulb.png"; // Background image

import img1 from "../assets/Slider_Img/Card/img1.jpg";
import img2 from "../assets/Slider_Img/Card/img2.jpg";
import img3 from "../assets/Slider_Img/Card/img3.jpg";
import img4 from "../assets/Slider_Img/Card/img4.jpg";
import img5 from "../assets/Slider_Img/Card/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className="image-slider" style={{ backgroundImage: `url(${bulbImage})` }}>
      <Slider {...settings} className="slider-container">
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlide;
