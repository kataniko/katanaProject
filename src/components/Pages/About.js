import React, { useState } from 'react';
import { Container, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { css } from 'styled-components';
import Divider from '@mui/material/Divider';
import Section1P2 from '../Pages/Section1P2';
import Section2P2 from '../Pages/Section2P2';
import { motion } from "framer-motion";


const RotatingSVG = styled('video')(({ theme }) => ({
    width: '1600px',
    height: '1600px',
    position: "absolute",
    top: -400,
    left: -200,
    [theme.breakpoints.down('sm')]: {
        width: '800px',
        top: -480,
        left:-350
    },

}));

const RotatingSVG2 = styled('img')(({ theme }) => ({

    position: "absolute",
    top: 10,
    right: 0,
    width:"45%",
    [theme.breakpoints.down('sm')]: {
        width: '350px',
        top:300,
        right:-50

    },

}));

const Type2 = styled(Typography)(({ theme }) => ({

}));

const StyledTypography = styled(Typography)(({ theme }) => css`
  background: linear-gradient(to right, rgba(0, 71, 187, 1), rgba(65, 182, 230, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ isHovered }) => (isHovered ? 'white' : 'transparent')};

`);


const StyledLogo2 = styled('img')(({ theme }) => ({
    position: "absolute",
    textAlign: "center",
    zIndex: 1,
    opacity: 1,
    transform: "translate(0%,-20%)",
    transition: "opacity 0.3s ease-in-out",
    "&:hover": {
        opacity: 0,
    }
}));


const About = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [hoveredWord, setHoveredWord] = useState('');

    const handleImageHover = (image, word) => {
        setBackgroundImage(image);
        setHoveredWord(word);
    };

    const handleImageLeave = () => {
        setBackgroundImage('');
        setHoveredWord('');
    };

    return (
        <>
            <Box sx={{ backgroundColor: "#000613" }}>
                <Box sx={{ backgroundColor: "#000613", width: "100vw", height: {md:"100vh",xs:"85vh"}, textAlign: "left" }}>
                    <RotatingSVG autoPlay loop src={process.env.PUBLIC_URL + '/home-hero.webm'} alt="Rotating SVG" />
                    <motion.div initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}>
                        <Box sx={{ height: {xs:"40vh", md:"60vh"}, transform: "translate(0%,-50%" }}>


                            <Typography style={{ fontWeight: 300 }} sx={{ textAlign: "left", color: "white", display: "flex", flexDirection: "column", fontFamily: "Jura", fontSize: {xs:20,md:28}, height: "100%", justifyContent: "Center", transform: {md:"translate(25%,0%)", xs:"translate(0%,5%)"} }}>
                                About the <StyledTypography style={{ fontWeight: 300 }} id='main' isHovered={hoveredWord === 'AI-ON-DEMAND'} sx={{ marginTop: 0, fontSize:{xs:50,md:80}, fontFamily: "Jura", width:{xs:160,md:320},}}>AI on Demand</StyledTypography> <Typography style={{ fontWeight: 300 }} sx={{ fontFamily: "Jura", fontSize: {xs:20,md:28}, }}>Platform</Typography>
                            </Typography>
                            <div>
                                <RotatingSVG2 src={process.env.PUBLIC_URL + '/about-banner.png'} />
                            </div>
                        </Box>

                    </motion.div>
                </Box>

                <Container sx={{ height: "1100vh", backgroundColor: "#000613" }}>
                    <Container sx={{
                        width: "100vw",
                        height: "100vh",
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "fill",
                        backgroundPosition: "right",
                        backgroundRepeat: "no-repeat",
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "column"
                        , justifyContent: "center",
                        paddingTop: { xs: 30, md: 0 }
                    }}>
                        <Box sx={{ maxWidth: "950px", margin: "auto", p: 1 }} >

                            <Typography style={{ fontWeight: 700 }} sx={{
                                color: (hoveredWord === 'RESEARCH' || hoveredWord === 'INNOVATION' || hoveredWord === 'SEAL OF QUALITY') ? "transparent" : "white",
                                fontSize: { xs: "25px", md: "40px" },
                                fontFamily: "Jura",
                                display: "inline",
                                textAlign: "left",
                                leadingTrim: "both",
                                lineHeight: "140%",
                            }}>
                                The ai-on-demand platform (aiod) is a community-driven channel designed to empower European{' '}
                                <StyledTypography className='main3'
                                    isHovered={hoveredWord === 'RESEARCH'}
                                    sx={{ display: "inline", fontSize: { xs: "25px", md: "40px" } }}
                                    onMouseEnter={() => handleImageHover(process.env.PUBLIC_URL + '/meta.png', 'RESEARCH')}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <img style={{ marginRight: 10, borderRadius: 10, height: 25 }} src={process.env.PUBLIC_URL + '/img1.svg'} />
                                    RESEARCH
                                </StyledTypography>{' '}
                                and{' '}
                                <StyledTypography className='main'
                                    isHovered={hoveredWord === 'INNOVATION'}
                                    sx={{display: "inline", fontSize: { xs: "25px", md: 40 }, borderRadius: 10 }}
                                    onMouseEnter={() => handleImageHover(process.env.PUBLIC_URL + '/shutter.png', 'INNOVATION')}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <img style={{ marginRight: 10, borderRadius: 10, height: 25 }} src={process.env.PUBLIC_URL + '/img2.svg'} />
                                    INNOVATION
                                </StyledTypography>{' '}
                                in artificial intelligence (AI), while ensuring the European{' '}
                                <StyledTypography id="main2"
                                    isHovered={hoveredWord === 'SEAL OF QUALITY'}
                                    sx={{ display: "inline", fontSize: { xs: "25px", md: "40px" } }}
                                    onMouseEnter={() => handleImageHover(process.env.PUBLIC_URL + '/shutter2.png', 'SEAL OF QUALITY')}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <img style={{ marginRight: 10, borderRadius: 10, height: 25 }} src={process.env.PUBLIC_URL + '/img3.svg'} />
                                    SEAL OF QUALITY
                                </StyledTypography>
                                , trustworthiness, and explainability.
                            </Typography>

                            <Grid container sx={{ marginTop: 3 }}>
                                <Grid xs={2} md={3}>

                                    <Divider sx={{ background: "rgba(0, 71, 187, 1)", height: "1px", marginTop: 8, marginRight: 4 }} />


                                </Grid>
                                <Grid xs={9} md={9}>

                                    <Typography sx={{ fontSize: "24px", fontFamily: "Jura", marginTop: 5, color: (hoveredWord === 'RESEARCH' || hoveredWord === 'INNOVATION' || hoveredWord === 'SEAL OF QUALITY') ? "transparent" : "grey", }}>
                                        Open and easily accessible, aiod facilitates knowledge sharing, research experimentation
                                        and development of state-of-the art solutions and technologies related with artificial intelligence.
                                    </Typography>
                                    <Typography sx={{ fontSize: "24px", fontFamily: "Jura", marginTop: 5, color: (hoveredWord === 'RESEARCH' || hoveredWord === 'INNOVATION' || hoveredWord === 'SEAL OF QUALITY') ? "transparent" : "white", }}>
                                        The aiod platform can be used by the community to:
                                    </Typography>

                                    <StyledTypography style={{ fontWeight: 700 }} sx={{ fontSize: { xs: "25px", md: "40px" }, fontFamily: "Jura", marginTop: 5, color: (hoveredWord === 'RESEARCH' || hoveredWord === 'INNOVATION' || hoveredWord === 'SEAL OF QUALITY') ? "transparent" : "" }}>
                                        Share ai-related knowledge , assets , services or tools.
                                    </StyledTypography>


                                </Grid>
                            </Grid>
                        </Box>
                    </Container>


                    <Box sx={{ maxWidth: "1000px", height: "200px", border: 1, margin: 0, backgroundColor: "#00182E", borderRadius: 10, marginTop: { xs: 40, md: 10 }, margin: "auto" }}>
                    </Box>

                    <Box>
                        <Section1P2 />
                    </Box>
                    <Box>
                        <Section2P2 />
                    </Box>

                </Container >

            </Box>
        </>
    );
}

export default About;
