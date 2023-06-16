import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { motion } from "framer-motion"


import "swiper/css";
import "swiper/css/pagination";
import "../../sections/Carousel/swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // if you're using navigation buttons
import "../../sections/Carousel/swiper.css"; // or the correct path to the swiper.css file


import { Pagination } from "swiper";

const CustomPagination = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
}));

const CustomPaginationItem = styled(Typography)(({ theme }) => ({
    color: "#FFED00",
    cursor: "pointer",
}));



export default function App() {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };

    const handlePaginationItemClick = (index) => {
        // Handle pagination item click event
        console.log(`Clicked pagination item ${index}`);
    };


    const data2 = [
        { id: 0, description: " AIoD SW of the Platform and API accessible. Distribute the platform." },
        { id: 1, description: "Fairness projects will provide services on AI fairness for the platform" },
        { id: 2, description: "Innovation services for AIoD - ICT 49before end 2023" },
        { id: 3, description: "Eurobin NoE working now on Eurocore!" },
        { id: 4, description: "AI doctoral academy to be united with the AIoD here " },
    ];

    const pagi = [
        { id: 0, description: " AIoD SW of the Platform and API accessible. Distribute the platform." },
        { id: 1, description: "Fairness projects will provide services on AI fairness for the platform" },
        { id: 2, description: "Innovation services for AIoD - ICT 49before end 2023" },
        { id: 3, description: "Eurobin NoE working now on Eurocore!" },
        { id: 4, description: "AI doctoral academy to be united with the AIoD here " },
    ];




    return (

        <>
            <Swiper pagination={pagination}
                modules={[Pagination]} className="mySwiper">
                {data2.map((user) => (
                    <SwiperSlide key={user.id}>
                        <Card className="reveal fade-right" elevation={0} sx={{ width: "100vw", height: "70vh", backgroundColor: "transparent" }}>
                            <CardContent sx={{ width: "100%" }}>
                                <Grid container sx={{ marginTop: 2 }}>
                                    <Grid xs={12} md={6} order={{ xs: 2, md: 1 }}>
                                        <Typography variant="h3" sx={{ marginTop: 3, fontFamily: "Jura", color: "white", fontSize: "34px", fontWeight: "light", width: { md: "550px", xs: "auto" }, height: "88px", textAlign: "initial" }}>
                                            {user.description}
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: "gray", marginTop: { xs: 10, md: 7 }, fontFamily: "Jura", fontWeight: "light", width: "auto", maxWidth: "550px", textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Typography>
                                    </Grid>
                                    <Grid xs={12} md={6} order={{ xs: 1, md: 2 }}>
                                        <Box sx={{ backgroundColor: "grey", height: { xs: 190, md: 400 }, borderRadius: 10, marginRight: 2, mt: { xs: 5 } }}></Box>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
}