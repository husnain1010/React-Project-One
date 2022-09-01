import React from "react";
import { Container } from "@mui/system";

import { Typography, Grid, Box } from "@mui/material";
import "../Style/Home/Question.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const question = [
  {
    heading: "What other services are you compatible with?",
    para: " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the. ",
  },
  {
    heading: "I have a technical i need resolved, who do i email?",
    para: " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the. ",
  },
  {
    heading: "What other services are you compatible with?",
    para: " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the. ",
  },
  {
    heading: "What other services are you compatible with?",
    para: " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the. ",
  },
];

const Question = () => {
  return (
    <Container className="container">
      <Grid container>
        <Grid item xs={12}>
          <Box className="hu" sx={{ mt: { lg: 10, md: 10, sm: 8, xs: 6 } }}>
            <Typography
              variant="h3"
              className="pop"
              sx={{
                color: "#1D1D1D",
                fontSize: { lg: 45, md: 45, sm: 45, xs: 20 },
                fontWeight: 600,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              className="pop"
              sx={{
                color: "#777777",
                fontSize: { lg: 16, md: 16, sm: 16, xs: 14 },
                fontWeight: 400,
                my: { lg: 8, md: 6, sm: 4, xs: 3 },
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable <br></br> content of a page when looking at its
              layout.
            </Typography>
            <Box className="accordionset">
              {question.map((values) => (
                <Accordion className="hum" sx={{ mt: 2 }}>
                  <AccordionSummary
                    className="according1"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className="pop according_heading"
                      sx={{ color: "#4A4A4A" }}
                    >
                      {values.heading}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      className="pop"
                      sx={{ color: "#777777", fontSize: 16, fontWeight: 400 }}
                    >
                      {values.para}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Question;
