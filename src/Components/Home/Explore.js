import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../Style/Home/Explore.scss";
import logo from "../Images/boy.svg";
import { Box, fontFamily, fontSize } from "@mui/system";

const Explore = () => {
  return (
    <div>
      <Container className="container" sx={{pt:{lg:15 , sm:8 ,xs:8} }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <img src={logo} alt="Logo" className="boylaptop img-fluid"/>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7} className="institue">
            <Typography
              variant="h2"
              className="institue-heading pop"
              sx={{ px: 10 }}
            >
              Explore The elearning Institute
            </Typography>
            <Typography
              variant="h2"
              className="institue-paragraph pop"
              sx={{ pt: 5, px: 10 }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure. <br></br> 
              <br></br>
              Anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined.
            </Typography>
            <Box className="number" sx={{ display: "flex", px: 10, pt: 7 }}>
            <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} lg={4}>
            <Box className="ONLINE">
                <Typography
                  variant="h3"
                  className="pop online_cours"
                
                >
                  3.2K+
                </Typography>
                <Typography
                  variant="h6"
                  className="pop number-para"
                  sx={{ fontSize: "20", fontWeight: "500", color: " #777777" }}
                >
                  Online Course
                </Typography>
              </Box>
  </Grid>
  <Grid item xs={6} sm={6} md={6} lg={4}>
              <Box className="ONLINE" >
                <Typography
                  variant="h3"
                  className="pop  online_cours"
               
                >
                  600+
                </Typography>
                <Typography
                  variant="h6"
                  className="pop number-para"
                  sx={{ fontSize: "20", fontWeight: "500", color: " #777777" }}
                >
                  Expert member
                </Typography>
              </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4}>
              <Box className="ONLINE">
                <Typography
                  variant="h3"
                  className="pop  online_cours"
                 
                >
                  1k+
                </Typography>
                <Typography
                  variant="h6"
                  className="pop number-para"
                  sx={{ fontSize: "20", fontWeight: "500", color: " #777777" }}
                >
                  Rating & Review
                </Typography>
              </Box>
              </Grid>
              </Grid>
            
            </Box>

            <Box className="Read-More-btn" sx={{ px: {lg:10,xs:2}, pt: 5 }}>
              <Button variant="contained" className="pop read_more" sx={{ px: 5, py: 1 ,fontSize:20, fontWeight:600,}}>
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Explore;
