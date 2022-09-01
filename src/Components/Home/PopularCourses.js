import { Box, Container, fontWeight, textAlign } from "@mui/system";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import "../Style/Home/PopularCourses.scss";
import landing from "../Images/Rectangle.svg";
import lan from "../Images/ab.svg";
import lapto from "../Images/abc.svg";
import lapt from "../Images/abcd.svg";
import lap from "../Images/abcde.svg";

function PopularCourses() {
  const [state, setstate] = useState(false);
  return (
    <Container className="container">
      <Box align="center" sx={{ pt: { lg: 10, md: 10, sm: 7, xs: 5 } }}>
        <Typography variant="h2" className=" discover pop">
          Discover Our Popular Courses
        </Typography>
      </Box>

      <Box align="center" sx={{ pt: { lg: 5, xs: 2 } }}>
        <Typography variant="h6" className="pop para" sx={{ maxWidth: "55%" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          spacing={3}
          sx={{ pt: { lg: 7, md: 4, xs: 2 }, display: "flex" }}
        >
          <Grid
            className="sumb"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={landing} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Typography variant="h1" className="pop headings">
                Fundamental Of UI/UX Design
              </Typography>
              <Typography className="pop para" variant="h6">
                Some quick example text to build on the card title and make up
                the bulk of the card.
              </Typography>
              <Typography variant="h6" className="price">
                Price 20$
              </Typography>
            </Box>
          </Grid>
          <Grid
            className="sumb"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={lan} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Typography variant="h1" className="pop headings">
                Javascript Basic to advanced
              </Typography>
              <Typography className="pop para" variant="h6">
                Some quick example text to build on the card title and make up
                the bulk of the card.
              </Typography>
              <Typography variant="h6" className="price">
                Price 20$
              </Typography>
            </Box>
          </Grid>
          <Grid
            className="sumb"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={lapto} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Typography variant="h1" className="pop headings">
                Fullstack Web Development
              </Typography>
              <Typography className="pop para" variant="h6">
                Some quick example text to build on the card title and make up
                the bulk of the card.
              </Typography>
              <Typography variant="h6" className="price">
                Price 20$
              </Typography>
            </Box>
          </Grid>

          <Grid
            className="sumb card-set1"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={lapt} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Box sx={{ pt: 6.5 }}>
                <Typography className="pop para" variant="h6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card.
                </Typography>
                <Typography variant="h6" className="price">
                  Price 20$
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            className="sumb card-set1"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={lap} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Typography variant="h1" className="pop headings">
                Photography Basic Rules
              </Typography>
              <Typography className="pop para" variant="h6">
                Some quick example text to build on the card title and make up
                the bulk of the card.
              </Typography>
              <Typography variant="h6" className="price">
                Price 20$
              </Typography>
            </Box>
          </Grid>
          <Grid
            className="sumb card-set1"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={landing} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Box sx={{ pt: 6.5 }}>
                <Typography className="pop para some" variant="h6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card.
                </Typography>
                <Typography variant="h6" className="price">
                  Price 20$
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {state && (
        <Grid
          container
          spacing={3}
          className="cardtop"
          sx={{ pt: { lg: 7, md: 4, xs: 2 }, display: "flex" }}
        >
          <Grid
            className="sumb"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={lapt} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Box sx={{ pt: 5 }}>
                <Typography className="pop para" variant="h6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card.
                </Typography>
                <Typography variant="h6" className="price">
                  Price 20$
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            className="sumb"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={lap} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Typography variant="h1" className="pop headings">
                Photography Basic Rules
              </Typography>
              <Typography className="pop para" variant="h6">
                Some quick example text to build on the card title and make up
                the bulk of the card.
              </Typography>
              <Typography variant="h6" className="price">
                Price 20$
              </Typography>
            </Box>
          </Grid>
          <Grid
            className="sumb"
            item
            xs={12}
            md={12}
            lg={6}
            sx={{ display: "flex" }}
          >
            <Box>
              <img src={landing} alt="images" className="img-fluid setimgsix" />
            </Box>
            <Box className="border">
              <Box sx={{ pt: 5 }}>
                <Typography className="pop para" variant="h6">
                  Some quick example text to build on the card title and make up
                  the bulk of the card.
                </Typography>
                <Typography variant="h6" className="price">
                  Price 20$
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
      <Grid item className="See-More-Courses">
        <Button
          variant="contained"
          color="primary"
          className="More-Courses-btn"
        >
          See More Courses
        </Button>
        <Button
          onClick={() => setstate(!state)}
          variant="contained"
          color="primary"
          className="view_all"
          sx={{ mt: 5 }}
        >
          {state === true ? "view less" : "View More"}
        </Button>
      </Grid>
    </Container>
  );
}

export default PopularCourses;
