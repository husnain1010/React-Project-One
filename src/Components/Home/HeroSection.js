import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../Images/girlimg.svg";
import img2 from "../Images/hero_mobile.svg";
import React from "react";
import "../Style/Home/HeroSection.scss";
import { Typography, Container, Button  } from "@mui/material";



const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main-img">
      <Container className="container">
        <Typography
          variant="h2"
          className="pop Get-start digital"
          
        >
          Get Started Digital <br></br> Learning
        </Typography>
        <Typography
          variant="h2"
          className="pop lg-none  Get-start1 digital1"
          
        >
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className="get-start-btn"
        >
          Get Started
        </Button>

        <Slider {...settings} className="slider1">
          <div className=" ">
            <img src={img} alt="slider" className="img-fluid sani" />
            <img src={img2} alt="slider" className="img-fluid san" />
          </div>
          <div>
            <img src={img} alt="slider"  className="img-fluid sani"/>
            <img src={img2} alt="slider" className="img-fluid san" />
          </div>
          <div>
            <img src={img} alt="slider" className="img-fluid sani" />
            <img src={img2} alt="slider" className="img-fluid san" />
          </div>
          <div>
            <img src={img} alt="slider"  className="img-fluid sani"/>
            <img src={img2} alt="slider" className="img-fluid san" />
          </div>
          <div>
            <img src={img} alt="slider"  className="img-fluid sani"/>  
            <img src={img2} alt="slider" className="img-fluid san" />
          </div>
          <div>
            <img src={img} alt="slider"  className="img-fluid sani"/>
            <img src={img2} alt="slider" className="img-fluid san" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default HeroSection;
