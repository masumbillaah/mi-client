import { Button, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';
import "./Footer.css"
const Footer = () => {

  return (
    <Box className="footerStyle">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <List>
              <Typography variant="h6" sx={{ textAlign: "left", ml: 2 }}>
                {" "}
                <Box
                  sx={{
                    color: "var(--color)",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  |{" "}
                </Box>{" "}
                Menu
              </Typography>
              <ListItem className="footer-links"> Home</ListItem>
              <ListItem className="footer-links"> Reviews</ListItem>
              <ListItem className="footer-links"> Contact Us</ListItem>
              <ListItem className="footer-links"> Products</ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "left", ml: 2 }}>
              {" "}
              <Box
                sx={{
                  color: "var(--color)",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                {" "}
                |{" "}
              </Box>{" "}
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "left", ml: 2, my: 2 }}
            >
              1515 N Main St, Monticello, United States
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "left", ml: 2 }}>
              Call Us: +15745838179
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "left", ml: 2, mt: 3 }}>
              {" "}
              <Box
                sx={{
                  color: "var(--color)",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                {" "}
                |{" "}
              </Box>{" "}
              Social Media Links
            </Typography>
            <Box sx={{ ml: 2, mt: 3 }}>
              <a
                target="blank"
                href="https://www.facebook.com/masumbillaah1/"
              >
                <RiFacebookFill className="footer-icons" />
              </a>
              <a target="blank" href="https://www.instagram.com/masum.msm1/">
                <AiFillInstagram className="footer-icons" />
              </a>
              <a target="blank" href="https://github.com/masumbillaah">
                <AiOutlineGithub className="footer-icons" />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <input
                type="text"
                className="subscribe"
                placeholder="Subscribe "
              />
              <Button
                variant="contained"
                sx={{ background: "var(--button-bg)" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;