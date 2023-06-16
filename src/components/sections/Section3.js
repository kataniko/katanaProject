import React from 'react'
import { Box, styled } from '@mui/system';
import { Typography, Container } from '@mui/material';
import Swiper from "../sections/Carousel/Swiper";
import { keyframes } from '@emotion/react';
import { motion, useScroll } from "framer-motion";


const Section3 = () => {
  const SectionThreeContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: "#000613",
    margin: 0,

  }));
  const shineAnimation = keyframes`
  0% {
    background-position: 0px;
  }
  50% {
    background-position: 110px;
  }
  100% {
    background-position: 220px;
  }
`;

  const { scrollYProgress } = useScroll();
  return (
    <SectionThreeContainer >

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Container className="reveal fade-left" sx={{ alignItems: "center", marginLeft: "10%", marginTop: { xs: 5, md: 0 } }}>

        <Typography sx={{
          backgroundImage: 'linear-gradient(to right, #0047BB 0, yellow 10%, #0047BB 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: `${shineAnimation} 2s infinite linear`, fontFamily: "Jura", textAlign: "left", fontSize: 14, fontWeight: "700", width: 220
        }} >WHAT IS COMING UP NEXT</Typography>
        <Typography variant="h3" sx={{ fontFamily: "Jura", color: "white", fontSize: "54px", fontWeight: "light", width: { md: "232px", xs: "auto" }, height: "70px", textAlign: "initial" }}>Highlights</Typography>
        <Typography variant="h6" sx={{ color: "gray", fontFamily: "Jura", fontWeight: "light", textAlign: "initial", marginTop: 0, fontSize: 30 }}>AloD Roadmap </Typography>

      </Container>

      
        <Swiper />
    
    </SectionThreeContainer>
  )
}

export default Section3