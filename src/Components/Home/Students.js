import { Container, Typography,Grid, Button } from '@mui/material'
import { Box, fontWeight } from '@mui/system'
import React from 'react'
import '../Style/Home/Student.scss'
import Student from '../Images/p1.svg';
import Student1 from '../Images/p2.svg';
import Student2 from '../Images/p3.svg';
import Student3 from '../Images/p4.svg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

const Studentss=[
  {
    imges:Student,
    name:"Awlad Hossain",
    Design:" UI/UX Designer"
  },
  {
    imges:Student1,
    name:"Jannatul Islam",
    Design:"Motion Design"
  },
  {
    imges:Student2,
    name:"Imran Hossain",
    Design:"Graphic Designer"
  },
  {
    imges:Student3,
    name:"Nishi Akter",
    Design:"Web Developer"
  }

]


const Students = () => {
  return (
    
    
      <Container className='container' sx={{mt:{lg:20 ,xs:5}}}>
         <Box>
         <Typography variant='h3' className='pop student_heading' sx={{fontSize:{lg:45,md:45, sm:45, xs:20}, fontWeight:600 ,color: '#1D1D1D',lineHeight:1.4}}>
         Meet Our Successfull <br></br> Students
         </Typography>
         
         </Box>
         <Box>
            <Typography variant='h6' className='pop student-para' sx={{ fontSize:{lg:16,md:16, sm:16, xs:14},color: '#777777',fontWeight:400,pt:3,lineHeight:1.8}}>
            It is a long established fact that a reader will be distracted by the <br></br> readable content of a page when looking at its layout.
            </Typography>
         </Box>

           <Box>
           <Grid container spacing={2} sx={{mt:5}}>
           {Studentss.map((valu)=>(
            <Grid item xs={12} sm={6} md={6} lg={3}>
   
   <Card sx={{ }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={valu.imges}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className='student_name' component="div" sx={{ fontSize:20,fontWeight:600,color:'#4A4A4A',pt:3, pl:{lg:2,md:3 ,sm:1.5 ,xs:0}}}>
           {valu.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='student_d' sx={{ fontSize:16,fontWeight:400,color:'#777777' ,pb:3,pt:1,pl:{lg:2,md:3 ,sm:1.5 ,xs:0}}}>
           {valu.Design}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
  </Grid>

           ))}
  
 
 
  
</Grid>


    <Box className="viewallbtn" sx={{mt:6}}>
    <Button variant="contained" className='pop viewbgcolor' sx={{px:4,py:1.5,fontSize:20,fontWeight:600}}>
    View All
</Button>
    </Box>
           </Box>

      </Container>
      

    
  )
}

export default Students