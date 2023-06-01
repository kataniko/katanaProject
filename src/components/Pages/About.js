import React, { useState } from 'react';
import { Container, Box, Typography, Grid } from "@mui/material";
import styled, { css } from 'styled-components';
import Divider from '@mui/material/Divider';
import Section1P2 from '../Pages/Section1P2';




const RotatingSVG = styled('img')(({ theme }) => ({
    width: '1100px',
    height: '1100px',
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
                <Container sx={{ backgroundColor: "#000613", width: "100vw", height: "100vh", textAlign: "center" }}>
                    <Box sx={{ height: "70vh",  backgroundImage: `url(${process.env.PUBLIC_URL}/graficcircles.svg)`,backgroundPosition: "center top", backgroundSize: "fill", backgroundRepeat: "no-repeat", transform:"translate(0%,-50%" }}>
                        <Typography style={{ fontWeight: 300 }} sx={{ textAlign: "center", color: "white", display: "flex", flexDirection: "column", fontFamily: "Jura", fontSize: 28, height: "100%", justifyContent: "Center", transform: "translate(1%,5%)" }}>
                            About the <StyledTypography style={{ fontWeight: 300 }} id='main' isHovered={hoveredWord === 'AI-ON-DEMAND'} sx={{ marginTop: 1, fontSize: 80, fontFamily: "Jura" }}>AI-ON-DEMAND</StyledTypography> <Typography style={{ fontWeight: 300 }} sx={{ fontFamily: "Jura", fontSize: 28, }}>Platform</Typography>
                        </Typography>
                    </Box>
                    <StyledLogo2
                        src={process.env.PUBLIC_URL + '/setas2.svg'}
                        alt="logo2"
                        loading="lazy"
                        onMouseEnter={() => handleImageHover(process.env.PUBLIC_URL + '/setas2.svg', 'AI-ON-DEMAND')}
                        onMouseLeave={handleImageLeave}
                    />
                </Container>

                <Container sx={{ height: "500vh", backgroundColor: "#000613" }}>
                    <Container sx={{
                        width: "100vw",
                        height: "100vh",
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize:"fill",
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
                                    sx={{ color: "blue", display: "inline", fontSize: { xs: "25px", md: "40px" } }}
                                    onMouseEnter={() => handleImageHover(process.env.PUBLIC_URL + '/meta.png', 'RESEARCH')}
                                    onMouseLeave={handleImageLeave}
                                >
                                    <img style={{ marginRight: 10, borderRadius: 10, height: 25 }} src={process.env.PUBLIC_URL + '/img1.svg'} />
                                    RESEARCH
                                </StyledTypography>{' '}
                                and{' '}
                                <StyledTypography className='main'
                                    isHovered={hoveredWord === 'INNOVATION'}
                                    sx={{ color: "blue", display: "inline", fontSize: { xs: "25px", md: 40 }, borderRadius: 10 }}
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


                    <Box sx={{ maxWidth: "1000px", height: "10%", border: 1, margin: 0, backgroundColor: "#00182E", borderRadius: 10, marginTop: { xs: 40, md: 10 }, margin: "auto" }}>
                    </Box>

                    <Box>
                        <Section1P2 />
                    </Box>

                </Container >

            </Box>
        </>
    );
}

export default About;
