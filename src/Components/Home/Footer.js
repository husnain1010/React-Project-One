import React from 'react'
import '../Style/Home/Footer.scss'
import {Container } from "@mui/system";
import { Box, Typography } from '@mui/material';
import fb from '../Images/fb.svg';
import twitter from '../Images/twitter.svg';
import linkin from '../Images/linkin.svg';
import tiktok from '../Images/tiktok.svg';


const Footer = () => {
  return (
  <Box className='footbg' sx={{py:{lg:12 ,md:12 ,sm:10 ,xs:7} ,mt:10}}>
    <Container className="container">
         <Box className='footerset'>
        <Typography variant='h3' className='pop' sx={{color:' #FFFFFF', py:3, fontSize:40, fontWeight:600 }}>
        Pro Edu
        </Typography>
        <Typography variant='h6'  className='pop' sx={{color:' #FFFFFF',fontSize:16, fontWeight:400}}>
        Office 41, Zawaya Buildin, Ghala Muscat,<br></br> 
Sultanate of Oman
        </Typography>
        <Typography variant='h6'  className='pop' sx={{color:' #FFFFFF',fontSize:16, fontWeight:400}}>
        Privacy Ploicy  |   Terms of use
        </Typography>
        <Box sx={{mt:5}}  >
        <img src={fb} alt="Logo" />
        <img src={twitter} alt="Logo" className="icon"/>
        <img src={linkin} alt="Logo" className="icon"/>
        <img src={tiktok} alt="Logo"  className="icon"/>
        </Box>
        </Box>
       
   
    </Container>
    </Box>
    
  )
}

export default Footer