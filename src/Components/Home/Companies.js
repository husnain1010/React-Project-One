import React from 'react'
import '../Style/Home/Companies.scss'
import { Container, Typography  } from "@mui/material";
import Slider from "react-slick";
import logo from '../Images/Group (1).svg'; 
import log from '../Images/fedex-express-6 1.svg'; 
import lo from '../Images/Group.svg'; 
import l from '../Images/udem.svg'; 
import re from '../Images/grop.svg'; 
import reindeed from '../Images/udemy.svg'; 
import { Box } from '@mui/system';

const Companies = () => {
    var settin = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        
      
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Container className='container'>
    <Box className="disply-none-lider">

   
 <Typography variant='h3' className='pop trusted' sx={{mt:18,mb:10,color: "#1D1D1D",fontSize:45,fontWeight:600}}>
 Trusted by over 800+ companies
 </Typography>
 <div >
      
        <Slider {...settin}>
          <div>
          <img src={lo} alt="Logo" />
          </div>
          <div>
          <img src={l} alt="Logo" />
          </div>
          <div>
          <img src={log} alt="Logo" />
          </div>
          <div>
          <img src={re} alt="Logo" />
          </div>
          <div>
          <img src={logo} alt="Logo" />
          </div>
          <div>
          <img src={reindeed} alt="Logo" />
          </div>
          <div>
          <img src={logo} alt="Logo" />
          </div>
          <div>
          <img src={logo} alt="Logo" />
          </div>
        </Slider>
      </div>
      </Box>
    </Container>
    
  )
}

export default Companies