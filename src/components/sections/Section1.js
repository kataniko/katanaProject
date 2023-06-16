import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Button, Card, CardContent, Grid, Container } from '@mui/material';
import Typewriter from 'typewriter-effect';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';


const Section1 = () => {



  const SectionOneContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '200vh',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: "#000613"
  }));

  const CircleBackground = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '34%',
    transform: 'translate(-50%, -30%)',
    width: '1200px',
    height: '1200px',
    display: 'flex',
    alignItems: 'center',
  }));

  const RotatingSVG = styled('video')(({ theme }) => ({
    width: '1800px',
    height: '1800px',
    [theme.breakpoints.down('sm')]: {
      width: '1350px',
    },
  }));

  const RotatingSVG2 = styled('img')(({ theme }) => ({
    width: '220px',
    height: '550px',
  }));

  const SVGbox = styled(Box)(({ theme }) => ({
    transform: "translate(45%,65%)",
    position: 'absolute',
    height: '870px',
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: '#ffffff',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: 'center',
    transform: "translate(0%,35%)",
    [theme.breakpoints.down('sm')]: {
      transform: "translate(0%,25%)"
    }
  }));

  const ProductTypography = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    maxWidth: '100%',
  }));

  const ExploreProductTypography = styled(Typography)(({ theme }) => ({
    border: '0.5px solid gray',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,
  }));

  const TypewriterWrapper = styled('div')(({ theme }) => ({
    fontSize: 60,
    marginTop: '5px',
    background: 'radial-gradient(circle, #0047BB 50%, rgba(0, 0, 0, 1) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontFamily: "Jura",
    fontWeight: "light",

  }));

  const shineAnimation = keyframes`
  0% {
    background-position: 0px;
  }
  50% {
    background-position: 600px;
  }
  100% {
    background-position: 1200px;
  }
  `;
  const TypewriterEffect = () => {
    return (

      <TypewriterWrapper>
        <Typewriter
          options={{
            strings: ['Innovation', 'AI research'],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </TypewriterWrapper>
    );
  }

  const ProductTypography2 = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    maxWidth: '100%',
    marginTop: 35,

  }));

  const ExploreProductTypography2 = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
  }));

  const GlowingButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    '&:hover': { backgroundColor: 'yellow', color: "#41B6E6" },
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'Jura',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#41B6E6',
    overflow: 'hidden',
    marginTop: 40,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-30%',
      left: '-7%',
      width: '200%',
      height: '200%',
      borderRadius: '150%',
      background: `radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2) 80%)`,
      boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.4)',
      transform: 'translate(-20%, 80%)',
      zIndex: 1,
    },
  }));


  return (

    <SectionOneContainer >

      <CircleBackground>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}>
          <RotatingSVG autoPlay loop src={process.env.PUBLIC_URL + '/home-hero.webm'} alt="Rotating SVG" />
        </motion.div>
      </CircleBackground>

      <Title>
        <ProductTypography>
          <ExploreProductTypography>
            <motion.div initial={{ opacity: 0, scale: 0.5, z: -100 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              transition={{ duration: 2 }}>
              <Typography sx={{ marginLeft: 1.5, fontFamily: 'Jura', fontSize: 14, color: "white" }}>
                AI made in Europe
              </Typography>
            </motion.div>

            <div
              style={{
                width: '1px',
                height: '10px',
                backgroundColor: '#ffffff',
                margin: '0 10px',
              }}
            />

            <motion.div initial={{ opacity: 0, scale: 0.5, z: -100 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              transition={{ duration: 2.2 }}>
              <Typography sx={{
                marginRight: 1.5, backgroundImage: 'linear-gradient(to right, #0047BB 0, yellow 60%, #0047BB 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                fontFamily: "Jura", fontSize: 17
              }}>Explore <ArrowForwardIcon sx={{ fontSize: 13, color: "yellow" }} /> </Typography>
            </motion.div>
          </ExploreProductTypography>
        </ProductTypography>

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}>
          <Typography sx={{ fontSize: 22, fontFamily: "Jura", marginTop: "5%", color: "darkgray" }}>A community-driven channel empowering</Typography>
        </motion.div>


        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.8 }}>
          <TypewriterEffect
          />
        </motion.div>


        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}>
          <Typography sx={{ textAlign: "center", color: "#FFFFFF", fontSize: 15, opacity: "70%", marginTop: "1%", fontFamily: "Jura" }}>
            Knowledge and services for the community
          </Typography>
        </motion.div>


        <ProductTypography2>
          <ExploreProductTypography2>
            <GlowingButton sx={{ padding: 2, borderRadius: 10, fontSize: 12, fontFamily: "Jura", fontWeight: "bold", color: "white", backgroundColor: "#0047BB" }}>Know More <AddOutlinedIcon sx={{ fontSize: 12 }} /></GlowingButton>
          </ExploreProductTypography2>
        </ProductTypography2>

      </Title>


      <Box sx={{ backgroundColor: "transparent", width: "100vw", height: "85vh", transform: "translate(0%,100%)", position: "absolute" }}>

        <Grid sx={{ marginTop: 5 }} container spacing={0} >

          <Grid xs={12} md={6}>

            <Container sx={{ display: "flex", justifyContent: "center" }}>

              <Card elevation={0} sx={{ backgroundColor: { xs: "#000613", md: "transparent" }, position: "absolute", boxShadow: "0px -40px 50px #000613" }}>

                <CardContent className="carta reveal fade-left" sx={{ paddingTop: 4, width: { md: "400px", xs: "100vw" }, height: "541px", paddingLeft: { xs: 5, md: 0 } }}>

                  <Typography sx={{
                    backgroundImage: 'linear-gradient(to right, #0047BB 0, yellow 10%, #0047BB 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `${shineAnimation} 10s infinite linear`,
                    fontFamily: "Jura", fontSize: 20, fontWeight: "bold"
                  }}>
                    What is the AIOD
                  </Typography>

                  <Typography sx={{ color: "white", fontFamily: "Jura", fontSize: "54px" }}>How it works</Typography>
                  <Typography sx={{ color: "darkgray", fontFamily: "Jura", letterSpacing: 3 }}>Build/Acess cutting-edge<br />AI technology</Typography>
                  <Typography sx={{ color: "darkgray", fontFamily: "Jura", maxWidth: "380px", maxHeight: "255px", fontSize: {xs:16,md:18}, marginTop: 2, fontWeight: 400 }}>We provide a framework to an open source platform instanciate new platforms that allow you to get access to the latest information on AI and Robotics from the community.We also aggregate services from latest European (or not) research to be accessible and exploited/used and extended.We follow european principles to democratize AI for everyone and make it fair.</Typography>
                  <GlowingButton>Know More</GlowingButton>
                </CardContent>

              </Card>

            </Container>
          </Grid>

          <Grid className="reveal fade-right" sx={{ zIndex: 10 }} xs={12} sm={6} md={6}>

            <Grid container spacing={0} sx={{ marginTop: { xs: 64, md: 2, lg: 1 }, marginLeft: { xs: 2 } }}>

              <Grid xs={6} md={5}>

                <Card sx={{ backgroundColor: "grey", borderRadius: 5, width: { xs: "165px", md: "330px" }, height: { xs: "144px", md: "300px" }, transform: { xs: "translate(20%,70%)", md: "translate(0%,60%)" } }}>

                  <CardContent >


                  </CardContent>

                </Card>

              </Grid>

              <Grid xs={6} md={5}>

                <Card sx={{ backgroundColor: "grey", borderRadius: 5, width: { xs: "165px", md: "330px" }, height: { xs: "144px", md: "300px" } }}>
                </Card>

                <Card sx={{ backgroundColor: "grey", borderRadius: 5, width: { xs: "165px", md: "330px" }, height: { xs: "200px", md: "400px" }, marginTop: "24px", }}>
                </Card>

              </Grid>

              <Grid xs={12} md={2}>

                <Card sx={{ backgroundColor: "grey", borderRadius: 5, width: "100px", height: "300px", marginTop: "24px", transform: "translate(0%,50%)", display: { xs: "none" } }}>

                  <CardContent >

                  </CardContent>

                </Card>

              </Grid>


            </Grid>


          </Grid>

        </Grid>

      </Box>
    </SectionOneContainer>

  );
};

export default Section1;
