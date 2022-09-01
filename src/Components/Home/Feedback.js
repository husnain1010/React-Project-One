import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import '../Style/Home/Feedback.scss'
import commas from '../Images/commas.png';
import rating from '../Images/Rating.svg';
import elips from '../Images/elips.svg';
import Slider from "react-slick";

const slide=[
{
  image1:commas,
  image2: rating,
  textpara:" There are many variations of passages of Lorem Ipsum available, but  the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable. If you are going to use a passage of Lorem.",
  image3: elips,
  name1: "Awlad Hossain",
  designe:"UI Designer"

},
{
  image1:commas,
  image2: rating,
  textpara:" There are many variations of passages of Lorem Ipsum available, but  the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly  believable. If you are going to use a passage of Lorem.",
  image3: elips,
  name1: "Awlad Hossain",
  designe:"UI Designer"

},
{
  image1:commas,
  image2: rating,
  textpara:" There are many variations of passages of Lorem Ipsum available, but  the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
  image3: elips,
  name1: "Awlad Hossain",
  designe:"UI Designer"

},
{
  image1:commas,
  image2: rating,
  textpara:" There are many variations of passages of Lorem Ipsum available, but  the  majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
  image3: elips,
  name1: "Awlad Hossain",
  designe:"UI Designer"

},

]




const Feedback = () => {

  var settings = {
    
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
         
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      
      {
        breakpoint: 600,
        settings: {
         
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1
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
   
    <Container  className="container Slider2" >
    <Box className="feedback" sx={{mt:{lg:10 ,md:10, sm:5, xs:5}}}>
    <Typography variant='h3' className="pop"  sx={{color: "#1D1D1D",fontWeight:600,fontSize:{lg:45,md:45 ,sm:45 ,xs:20}}}>
     Some Students Feedback
     </Typography>
     <Typography variant='h6' className="pop" sx={{color: "#777777",fontWeight:400,fontSize:{lg:16, md:16, sm:16, xs:14},mt:4,lineHeight:2}}>
     It is a long established fact that a reader will be distracted by the readable  <br></br>content of a page when looking at its layout.
     </Typography>
    </Box>
      
    <div className='settingsilk'>
    
       
        <Slider {...settings}>
        {slide.map((valuess)=>(
          <div>
          <Box className="boder" sx={{py:3}}>
          <Box className="padding">

         
          <Box className="rating1">
            <Box>
            <img src={valuess.image1} alt="Logo" />
            </Box>
            <Box>
            <img src={valuess.image2} alt="Logo" />
            </Box>
          </Box>
          <Box className="pop" sx={{color: "#777777",fontWeight:400,fontSize:16, my:5, lineHeight:2}}>
         {valuess.textpara}
          </Box>
          <Box className="elips" >
            <Box>
            <img src={valuess.image3} alt="Logo" />
            </Box>
            <Box>
              <Typography variant='h5' className="pop" sx={{color: "#4A4A4A",fontWeight:600,fontSize:18,ml:4}}>
              {valuess. name1}
              </Typography>
              <Typography variant='h6' className="pop" sx={{color: "#777777",fontWeight:400,fontSize:16,ml:4}}>
            {valuess.designe}
              </Typography>
            </Box>
          </Box>
          </Box>
          </Box>
          </div>
        ))}
         
        </Slider>
      </div>
   
    
    </Container>
  )
}

export default Feedback