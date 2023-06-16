import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Card, CardContent, Grid,Button } from '@mui/material';
import { Component } from "react";
import VerticalCarousel from "../sections/Carousel/VerticalCarousel.js";
import { config } from "react-spring";
import { keyframes } from '@emotion/react';
import { motion, useScroll } from "framer-motion";



const Cards = styled(Card)(({ theme }) => ({
  width: 500,
  height: 560,
  backgroundColor: "#0A1121",
  boxShadow: "0px 0px 50px #000613",
  borderRadius: "20px",

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
  marginTop: "50px",
  marginRight:"auto",
  marginLeft:"auto",
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

const Svg = styled('img')(({ theme }) => ({
  width: "180px",
  height: "150px",

}));

const SVGTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  FontFamily: "Jura",
  marginTop: "5%",
  fontSize: 32,
  color: "#FFED00",
  lineWeight: 500,
  alignItems: "center",
  fontStyle: "regular",
}));


const SVGBox = styled(Typography)(({
  marginTop: 10,
  fontFamily: "Jura",
  fontStyle: "Normal",
  fontSize: 18,
  LineWeight: 400,
  lineHeight: "28px", color: "gray",
  textAlign: "center",
  marginRight: "10%",
  marginLeft: "10%"

}))

const shineAnimation = keyframes`
0% {
  background-position: 0px;
}
50% {
  background-position: 300px;
}
100% {
  background-position: 600px;
}
`;

const slides = [
  {
    key: 0,
    content: (
      <Cards >
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
            <Svg src={process.env.PUBLIC_URL + '/Vectorvector1.svg'} alt="Rotating SVG" />
          </Box>
          <SVGTitle>
            Virtual Lab
          </SVGTitle>
          <SVGBox >
            Tools for researchers. To experiment, to play, to explore datasets, ML, NLP.
          </SVGBox>
          <GlowingButton sx={{width:200}}>See More</GlowingButton>
        </CardContent>
      </Cards>
    )
  },
  {
    key: 1,
    content: (
      <Cards elevation={0} >
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
            <Svg src={process.env.PUBLIC_URL + '/Communitiesvector2.svg'} alt="Rotating SVG" />
          </Box>
          <SVGTitle>
            Community
          </SVGTitle>
          <SVGBox >
            Are you informed about the latest projects from the EC on AI and Robotics? Do you know the news about them? Events, conferences?
          </SVGBox>
          <GlowingButton sx={{width:200}}>See More</GlowingButton>
        </CardContent>
      </Cards>
    )
  },
  {
    key: 2,
    content: (
      <Cards elevation={0} >
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
            <Svg src={process.env.PUBLIC_URL + '/Innovationsvector3.svg'} alt="Rotating SVG" />
          </Box>
          <SVGTitle>
            Innovation
          </SVGTitle>
          <SVGBox >
            More than 100 companies showcasing how AI helped them to bootstrap their busines
          </SVGBox>
          <GlowingButton sx={{width:200,}}>See More</GlowingButton>
        </CardContent>
      </Cards>
    )
  },
  {
    key: 3,
    content: (
      <Cards elevation={0} >
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
            <Svg src={process.env.PUBLIC_URL + '/Robospotvector4.svg'} alt="Rotating SVG" />
          </Box>
          <SVGTitle>
            Robospot
          </SVGTitle>
          <SVGBox >
            Tools for robotics people. Eurocore,
            OpenEase
          </SVGBox>
          <GlowingButton sx={{width:200,}}>See More</GlowingButton>
        </CardContent>
      </Cards>
    )
  },
  {
    key: 4,
    content: (

      <Cards elevation={0} >
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
            <Svg src={process.env.PUBLIC_URL + '/Developer Toolsvector5.svg'} alt="Rotating SVG" />
          </Box>
          <SVGTitle>
            Developer tools
          </SVGTitle>
          <SVGBox >
            How to create on top of our API, instanciate a new platform node, or extend ANYTHING you want. You will find it there
          </SVGBox>
          <GlowingButton sx={{width:200}}>See More</GlowingButton>
        </CardContent>
      </Cards>

    )
  },
];


export default class Section2 extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: false,
    config: config.gentle
  };
 
  render() {
    return (
    
        
        < Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#000613", display: { xs: "none", sm: "inherit", md: "inherit" } }}>

          <Grid container >

            <Grid className="reveal fade-left" xs={12} md={6} >
              <VerticalCarousel
                slides={slides}
                offsetRadius={this.state.offsetRadius}
                showNavigation={this.state.showNavigation}
                animationConfig={this.state.config}
              />
            </Grid>

            <Grid sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "initial" }, marginTop: { xs: 0, md: 10 } }} xs={12} md={6} >

              <Box sx={{ width: "400px", textAlign: { xs: "center", md: "initial" } }}>
                <Card className="reveal fade-right" elevation={0} sx={{ backgroundColor: "transparent" }}>
                  <CardContent sx={{ paddingLeft: { xs: 0, md: 12 }, }}>
                    <Typography sx={{
                      backgroundImage: 'linear-gradient(to right, #0047BB 0, yellow 10%, #0047BB 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: `${shineAnimation} 3s infinite linear `,
                      fontFamily: "Jura", fontSize: 14, fontWeight: 700
                    }} >What are we Offering</Typography>
                    <Typography variant="h3" sx={{ fontFamily: "Jura", color: "white", fontSize: "54px", fontWeight: "light", width: { md: "232px", xs: "auto" }, height: "88px" }}>Featured Products</Typography>
                    <Typography variant="h6" sx={{ color: "gray", marginTop: 5, fontFamily: "Jura", fontWeight: "light", width: { xs: 300 } }}>The framework to have your own platform!have your own AIoD instance or customise it.</Typography>
                  </CardContent>
                </Card>
              </Box>

            </Grid>
          </Grid>
        </Box>
      

    );
  }
}
