import React from 'react'
import { Container, Box, Typography, Grid } from "@mui/material";
import styled, { css } from 'styled-components';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import "../../App.css";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';




const StyledLogoContainer = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    zIndex: 2,
    padding: 0,
    transform: "translate(2.4%,-13.5%)",
    position: "absolute",
}));

const StyledTypography = styled(Typography)(({ theme }) => css`
background: linear-gradient(to right, rgba(0, 71, 187, 1), rgba(65, 182, 230, 1));
-webkit-background-clip: text;
  -webkit-text-fill-color: ${({ isHovered }) => (isHovered ? 'white' : 'transparent')};
`);

const steps = [
    {
        label: 'Select campaign settings',
        description: `Technically developing or deploying different components, services or tools.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },

    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];


const Section1 = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <Container sx={{ height: "100vh" }}>
            <Grid container sx={{ marginTop: 5 }}>
                <Grid xs={12} md={3} sx={{ display: { xs: "flex" }, justifyContent: { xs: "center" } }}>

                    <StyledTypography id='mini' sx={{ fontSize: "24px", fontFamily: "Jura", marginTop: 5 }}>
                        AIoD Mission
                    </StyledTypography>


                </Grid>
                <Grid xs={12} md={9} sx={{ display: { xs: "flex" }, flexDirection: "column", justifyContent: { xs: "center" } }}>

                    <Typography style={{ fontWeight: 400 }} sx={{ fontSize: { xs: 20, md: "24px" }, fontFamily: "Jura", marginTop: 5, color: "white", fontWeight: "300" }}>
                        To create a thriving european ai research ecosystem driven by ai excellence, through a channel that fosters collaboration,
                        reproducibility and experimentation, while maximising academic, social and industrial impact.
                    </Typography>

                    <StyledTypography sx={{ fontSize: "24px", fontFamily: "Jura", marginTop: 5 }}>
                        Why use AIoD ?
                    </StyledTypography>


                    <Typography style={{ fontWeight: 300 }} sx={{ fontSize: "20px", fontFamily: "Jura", marginTop: 5, color: "grey" }}>
                        Scientists, researchers and innovators often invest a lot of effort and time to identify trustworthy, high-quality datasets, algorithms, or even find efficient mechanisms to communicate,
                        cooperate, and engage with other peers in an open and transparent manner.
                    </Typography>


                    {/* SWIPER */}
                    <Box sx={{ backgroundColor: "grey", height: "300px", borderRadius: 10, marginTop: 5 }}>

                    </Box>

                    <Typography style={{ fontWeight: 300 }} sx={{ fontSize: "20px", fontFamily: "Jura", marginTop: 5, color: "grey" }}>
                        Aiod contributes to the success of the european ai strategy, providing a mechanism that unites the paradigm of ai research application and data,
                        while ensuring the european seal of quality, trustworthiness and explainability.

                    </Typography>

                </Grid>
            </Grid>

            <Container sx={{
                width: "100%", height: 1400, background: "linear-gradient(288.18deg, #41B6E6 -19.23%, #0047BB 37.9%, #003399 100%)",
                borderRadius: 10, marginTop: 10, display: "flex", flexDirection: "column"
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: { xs: 1, md: 10 }, paddingTop: { xs: 10, md: 15 }, paddingRight: { xs: 1, md: 10 }, }}>
                    <Typography style={{ fontWeight: 700 }} sx={{ color: "white", textAlign: "left", width: { xs: "100%", md: "80%" }, height: { xs: "120px", md: "200px" }, margin: "auto", fontSize: { xs: "35px", md: "60px" }, lineHeight: "120%", fontFamily: "Jura", textAlign: { xs: "left", md: "left" } }}>
                        AIoD benefits <br /> in a nutshell
                    </Typography>

                    <Typography style={{ fontWeight: 400 }} sx={{ color: "darkgrey", textAlign: "left", width: { xs: "100%", md: "80%" }, height: "200px", marginTop: { xs: 0, md: 3 }, margin: "auto", fontSize: { xs: 20, md: 30 }, lineHeight: "120%", fontFamily: "Jura", textAlign: { xs: "left", md: "left" } }}>
                        The whole AI community is invited to this platform, including AI researchers from academia and industry, students, SMEs,
                        Tech providers and EU funded projects, Digital Innovation Hubs and other EU bodies.
                    </Typography>

                    <Grid container sx={{ marginTop: { xs: 0, md: 5 } }}>
                        <Grid sx={{ height: "auto" }} xs={12} md={3}>


                            <Divider sx={{ background: "radial-gradient(50% 50% at 50% 50%, #FFED00 0%, #E1DEB3 100%)", height: "1px", marginTop: { xs: 3, md: 8 }, marginRight: 4 }} />



                        </Grid>
                        <Grid xs={12} md={9} sx={{ mt: { xs: 2, md: 0 } }}>


                            <Typography sx={{ fontSize: "20px", fontFamily: "Jura", marginTop: 5, color: "white", textAlign: { xs: "center", md: "left" } }}>
                                These target groups can <br />benefit
                                from the platform by:
                            </Typography>

                            <Box sx={{ maxWidth: 600, mt: 5 }}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel
                                                optional={
                                                    index === 4 ? (
                                                        <Typography sx={{ color: "white", fontFamily: "Jura", fontWeight: 700 }} variant="caption">Last step</Typography>
                                                    ) : null
                                                }
                                            >
                                                <Typography sx={{ fontSize: 20, color: "#41B6E6", fontFamily: "Jura", fontWeight: 700 }}>{step.label} </Typography>
                                            </StepLabel>
                                            <StepContent>
                                                <Typography sx={{ fontFamily: "Jura", color: "white", fontWeight: 300, fontSize: 15 }}>{step.description}</Typography>
                                                <Box sx={{ mb: 15 }}>
                                                    <div>
                                                        <Button
                                                            variant="outlined"
                                                            onClick={handleNext}
                                                            sx={{ mt: 3, mr: 1, color: "white", borderColor: "yellow", fontFamily: "Jura", fontWeight: 700 }}
                                                        >
                                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                        </Button>
                                                        <Button
                                                            disabled={index === 0}
                                                            onClick={handleBack}
                                                            sx={{ mt: 1, mr: 1, color: "white", fontFamily: "Jura", fontWeight: 700 }}
                                                        >
                                                            Back
                                                        </Button>
                                                    </div>
                                                </Box>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                                {activeStep === steps.length && (
                                    <Paper square elevation={0} sx={{ p: 3, backgroundColor: "transparent" }}>
                                        <Typography sx={{ fontFamily: "Jura", color: "white" }}>All steps completed - you&apos;re finished</Typography>
                                        <Button variant='outlined' onClick={handleReset} sx={{ mt: 1, mr: 1, borderColor: "yellow", color: "yellow", fontFamily: "Jura", fontWeight: 700 }}>
                                            Reset
                                        </Button>
                                    </Paper>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <motion.div style={{ position: "absolute" }}
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
                <Typography sx={{ fontFamily: "Jura", color: "grey", fontSize: { xs: "50px", md: "300px" }, fontWeight: 400, width: "100vw" }}>
                    Our History
                </Typography>
            </motion.div>

        </Container >
    )
}

export default Section1