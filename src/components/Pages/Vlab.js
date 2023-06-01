import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Button, Card, CardContent, Grid, Container, Divider } from '@mui/material';
import Typewriter from 'typewriter-effect';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { keyframes } from '@emotion/react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import HorizontalProgressBar from '../HorizontalProgressBar';
import { Pagination, Navigation } from "swiper";
import Spline from '@splinetool/react-spline';


const Vlab = ({ content }) => {

  const SectionOneContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '270vh',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: "#000613"
  }));

  const CircleBackground = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    width: '1100px',
    height: '1100px',
    display: 'flex',
    alignItems: 'center',
  }));

  const RotatingSVG = styled('img')(({ theme }) => ({
    width: '1100px',
    height: '1100px',
  }));

  const RotatingSVG2 = styled('img')(({ theme }) => ({
    width: '200px',
    height: '520px',
  }));

  const SVGbox = styled(Box)(({ theme }) => ({
    transform: "translate(0%,65%)",
    position: 'absolute',
    height: '870px',
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: '#ffffff',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: 'center',
    transform: "translate(0%,20%)"

  }));

  const ProductTypography = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    maxWidth: '100%',
  }));

  const ExploreProductTypography = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,
  }));

  const TypewriterWrapper = styled('div')(({ theme }) => ({
    fontSize: 30,
    fontFamily: "Jura"

  }));

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
background-position: 600px;
}
100% {
background-position: 1200px;
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


  const TypewriterEffect = () => {
    return (
      <TypewriterWrapper>
        <Typewriter
          options={{
            strings: ['Experiment', 'Play', 'Explore datasets'],
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

  const StyledTypography = styled(Typography)(({ theme }) => ({


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
        <RotatingSVG src={process.env.PUBLIC_URL + '/circles.svg'} alt="Rotating SVG" />
      </CircleBackground>

      <Title>
        <ProductTypography>
          <ExploreProductTypography>
            <img src={process.env.PUBLIC_URL + '/novo.svg'} />
          </ExploreProductTypography>
        </ProductTypography>

        <Typography sx={{ fontSize: 60, fontFamily: "Jura", color: "yellow" }}>Virtual Lab</Typography>

        <Typography sx={{ textAlign: "center", color: "#FFFFFF", fontSize: 18, opacity: "70%", marginTop: "1%", fontFamily: "Jura" }}>
          Tool for researchers to... <TypewriterEffect
          />
        </Typography>

      </Title>

      <SVGbox>
        <RotatingSVG2 src={process.env.PUBLIC_URL + '/co.svg'} alt="Rotating SVG" />
      </SVGbox>

      <Box sx={{ backgroundColor: "transparent", width: "100vw", height: "100vh", transform: "translate(0%,100%)", position: "absolute" }}>

        <Container sx={{ height: "100vh", backgroundColor: "#000613" }}>
          <Container sx={{
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column"
            , justifyContent: "center",
            paddingTop: { xs: 30, md: 0 }
          }}>
            <Box sx={{ maxWidth: "950px", margin: "auto", p: 1 }} >

              <Typography style={{ fontWeight: 700 }} sx={{
                color: "white",
                fontSize: { xs: "25px", md: "40px" },
                fontFamily: "Jura",
                display: "inline",
                textAlign: "left",
                leadingTrim: "both",
                lineHeight: "140%",
              }}>
                Aliquam malesuada, metus ut blandit semper, leo mauris sollicitudin sapien, non gravida libero lorem ac risus.
                Sed quis lectus vel elit posuere eleifend.Aliquam malesuada, metus ut blandit semper, leo mauris sollicitudin sapien.
              </Typography>

              <Grid container sx={{ marginTop: 1 }}>
                <Grid xs={2} md={3}>

                  <Divider sx={{ background: "rgba(0, 71, 187, 1)", height: "1px", marginTop: 8, marginRight: 4 }} />


                </Grid>
                <Grid xs={9} md={9}>

                  <Typography sx={{ fontSize: "24px", fontFamily: "Jura", marginTop: 5, color: "grey", }}>
                    Non gravida libero lorem ac risus. Sed quis lectus vel elit posuere eleifend.
                    Sed quis lectus vel elit posuere eleifend.Aliquam malesuada, metus ut blandit semper, leo mauris sollicitudin sapien.
                    Non gravida libero lorem ac risus. Sed quis lectus vel elit posuere eleifend.
                  </Typography>
                  <Typography sx={{ fontSize: "24px", fontFamily: "Jura", marginTop: 5, color: "white", }}>
                    The aiod platform can be used by the community to:
                  </Typography>

                  <StyledTypography style={{ fontWeight: 700 }} sx={{ fontSize: { xs: "25px", md: "40px" }, fontFamily: "Jura", marginTop: 5, color: "white" }}>
                    Share ai-related knowledge , assets , services or tools.
                  </StyledTypography>


                </Grid>
              </Grid>

            </Box>
          </Container>


        </Container>
        <Container>

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
                <Card sx={{ width: 400, height: 400, mt: { xs: 10, md: 5 }, background: "transparent", border: "1px solid darkgrey", mr: 3, borderRadius: 4, p: 0 }}>
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

        </Container>
      </Box>

    </SectionOneContainer>

  );
};

export default Vlab;
