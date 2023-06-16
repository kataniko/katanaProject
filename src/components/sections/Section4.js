import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Card, CardContent, Container, Divider, Grid, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import HorizontalProgressBar from '../HorizontalProgressBar';
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./News.css"


// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';


const Section4 = () => {
    const SectionFourContainer = styled(Box)(({ theme }) => ({
        position: 'relative',
        height: '180vh',
        display: 'flex',
        width: "100vw",
        alignItems: 'center',
        backgroundColor: "#000613",
        margin: 0,
        flexDirection: "column"
    }));

    const GlowingButton = styled(Button)(({ theme }) => ({
        position: 'relative',
        '&:hover': { backgroundColor: "#41B6E6", color: 'yellow' },
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'Jura',
        fontWeight: '500',
        color: '#000613',
        backgroundColor: "yellow",
        overflow: 'hidden',
        marginTop: 10,
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

    const GlowingButton2 = styled(Button)(({ theme }) => ({
        position: 'absolute',
        '&:hover': { backgroundColor: "yellow", color: '#41B6E6' },
        borderRadius: 20,
        fontSize: 12,
        fontFamily: 'Jura',
        fontWeight: '500',
        color: 'white',
        backgroundColor: "#41B6E6",
        overflow: 'hidden',
        marginTop: 10,
        left: 10,
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

    SwiperCore.use([Autoplay]);

    const data = [
        {
            title: 'Title 1',
            image: `${process.env.PUBLIC_URL}/shutter.png`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        },
        {
            title: 'Title 2',
            image: `${process.env.PUBLIC_URL}/meta.png`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        },
        {
            title: 'Title 3',
            image: `${process.env.PUBLIC_URL}/shutter.png`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        },
        {
            title: 'Title 4',
            image: `${process.env.PUBLIC_URL}/meta.png`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        },
        {
            title: 'Title 5',
            image: `${process.env.PUBLIC_URL}/shutter.png`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        },
        {
            title: 'Title 6',
            image: `${process.env.PUBLIC_URL}/meta.png`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        },
    ];

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


    const swiperBreakpoints = {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
    };



    return (
        <SectionFourContainer>
            <Container sx={{ width: "100%", alignItems: "center", marginLeft: { xs: "0%", md: "10%" }, marginTop: { xs: 15, md: 15 } }}>
                <Typography className="reveal fade-left"
                    sx={{
                        color: '#0047BB',
                        fontSize: 14,
                        fontWeight: 'bold',
                        fontFamily: 'Jura',
                        letterSpacing: 2,
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        backgroundImage: 'linear-gradient(to right, #0047BB 0, yellow 10%, #0047BB 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: `${shineAnimation} 2s infinite linear`,
                      
                    }}
                >
                    SKIP FOR NEXT PHASE
                </Typography>
                <Box sx={{ width: "85vw" }}>
                    <Grid container>
                        <Grid className="reveal fade-left" xs={10}>
                            <Typography variant="h3" sx={{ fontFamily: "Jura", color: "white", fontSize: "54px", fontWeight: "light", height: "70px", textAlign: "initial" }}>News</Typography>
                        </Grid>
                        <Grid className="reveal fade-right" xs={2}>
                            <GlowingButton>See +</GlowingButton>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container>


                <Box sx={{ mt: 10 }}>
                    <Swiper
                        pagination={{
                            type: "custom",
                        }}
                        slidesPerView={3}
                        loop={true}
                        navigation={false}
                        modules={[Pagination, Navigation, Autoplay]}
                        breakpoints={swiperBreakpoints}
                        className="mySwiper2"
                        autoplay={{ delay: 3000 }}
                    >
                        {data.map((datas) => (
                            <SwiperSlide >
                                <Card className="reveal fade-bottom" sx={{ width: 400, height: 400, mt: { xs: 0, md: 5 }, background: "transparent", border: "1px solid darkgrey", mr: 3, borderRadius: 4, p: 0 }}>
                                    <CardContent>
                                        <Box>

                                            <img src={datas.image} />


                                            <Box sx={{ display: "flex", }}>

                                                <Typography>Play Video</Typography>

                                            </Box>
                                            <HorizontalProgressBar duration={2500} color="yellow" />
                                            <Box sx={{ position: "absolute", top: 280, textAlign: "left", p: 1 }}>
                                                <Typography sx={{ color: "white", fontFamily: "Jura", fontSize: 24, fontWeight: 700 }}>
                                                    {datas.title}
                                                </Typography>
                                                <Typography sx={{ color: "white", fontFamily: "Jura" }}>
                                                    {datas.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                    <img style={{ position: "absolute", zIndex: 200, marginTop: 50 }} src={process.env.PUBLIC_URL + '/robospot.png'}></img>
                    <Link style={{ display: "flex", justifyContent: "center" }} to="/About">
                        <GlowingButton sx={{ position: "absolute", marginTop: 76, zIndex: 300, padding: 1, fontSize: 20 }}>Go</GlowingButton>
                    </Link>

                    <motion.div style={{ position: "absolute", marginTop: "10%" }}
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    >
                        <Typography sx={{ fontFamily: "Jura", color: "grey", fontSize: { xs: "50px", md: "400px" }, fontWeight: 400, width: "100vw" }}>
                            About
                        </Typography>
                    </motion.div>
                </Box>
            </Container>
        </SectionFourContainer>
    )
}

export default Section4;
