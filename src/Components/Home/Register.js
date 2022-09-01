import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "../Style/Home/Register.scss";

const Register = () => {
  return (
    <div>
      <Container className="container">
        <Grid
          container
          className="backgblue"
          sx={{ py: { lg: 10, sm: 7, xs: 5 }, mt: { lg: 13, xs: 8 } }}
        >
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Box className="readttojoin">
              <Typography
                variant="h3"
                className="ready pop"
                sx={{ px: 10, fontSize: 45, fontWeight: 600 }}
              >
                Ready to join?
              </Typography>
              <Typography
                variant="h6"
                className="pop ready-para"
                sx={{
                  px: { lg: 10, md: 10, sm: 10, xs: 3 },
                  mt: 3,
                  fontSize: 16,
                  fontWeight: 400,
                  color: " #F4F4F4",
                  lineHeight: 2,
                }}
              >
                It is a long established fact that a reader will be distracted
                by the <br></br> readable content of a page when looking at its
                layout.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box className="regbtnnn">
              <Button
                className="regbtn pop"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: 20,
                  fontWeight: 600,
                  mt: { lg: 6, md: 6, sm: 6, xs: 3 },
                }}
              >
                Register Now
              </Button>
              <Button
                className="reg2 pop"
                sx={{ py: 1.5, px: 4, fontSize: 20, fontWeight: 600, mt: 6 }}
              >
                Register
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
