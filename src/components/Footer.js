import React from 'react'
import { Container, Box, Grid, Button, Typography, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (


        <Box sx={{ backgroundColor: "#000613", height: { xs: "100vh", md: "70vh" }, margin: 0, padding: 0 }}>
            <Box className="reveal fade-bottom" sx={{
                maxWidth: 1324, height: { xs: 660, md: 400 }, background: "linear-gradient(288.18deg, #41B6E6 -19.23%, #0047BB 37.9%, #003399 100%)",
                borderRadius: 10, display: "flex", flexDirection: "column", margin: "auto", p: { xs: 4, md: 0 }
            }}>

                <Grid sx={{ display: "flex", justifyContent: "center", margin: "auto" }} container>

                    <Grid xs={12} md={4} sx={{ paddingLeft: { xs: 0, md: 10 }, pt: {xs:0, md:2}, display: "flex", flexDirection: "column", width: "100%" }}>
                        <Box sx={{ display: { xs: "flex" }, flexDirection: { md: "column" } }}>
                            <img style={{ width: 150, marginTop: 0 }} src={process.env.PUBLIC_URL + '/logoheader.svg'} alt='hihihi' />

                            <Box sx={{ display: { xs: "none", md: "initial" } }}>
                                <img style={{ width: 80, marginTop: 50 }} src={process.env.PUBLIC_URL + '/europe.svg'} alt='hihihi' />
                            </Box>

                            <Button sx={{ fontFamily: "Jura", fontWeight: 600, padding: 1, borderRadius: 10, backgroundColor: "#41B6E6", mt: { xs: 3, md: 8 }, width: { xs: "170px", md: "208px" }, fontSize: "12px", ml: { xs: 5, md: 0 } }}>Operating Disclaimer</Button>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={4} sx={{ padding: 2, display: "flex", flexDirection: "column", paddingLeft: { xs: 0, md: 0 }, mt: { xs: 3, md: 0 } }}>
                        <Typography sx={{ fontFamily: "Jura", mt: 1, color: "yellow", fontSize: { xs: 14, md: 20 } }}>SUBSCRIBE</Typography>

                        <Typography sx={{ fontFamily: "Jura", mt: { xs: 1, md: 1 }, color: "darkgrey" }}>Stay current with all the things AIoD</Typography>

                        <Box sx={{ display: "flex" }}>
                            <TextField  variant="outlined" sx={{ mt: { xs: 2, md: 5 }, color: "white", position: { xs: "absolute", md: "unset" }, width: "60%" }} />

                            <Button sx={{ padding: 2, borderRadius: 10, backgroundColor: "yellow", transform: { xs: "translate(150%,0%)", md: "translate(-30%,0%)" }, mt: { xs: 2, md: 5 }, ml: 2, fontSize: 12 }}>Subscribe <SendIcon sx={{ ml: 1 }} /></Button>

                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "initial" }, mt: { xs: 3, md: 0 } }}>

                            <Box sx={{ display: "flex", mt: 3 }}><TwitterIcon sx={{ color: "darkgrey", mr: 1 }} /> <YouTubeIcon sx={{ color: "darkgrey" }} /></Box>

                            <Button variant='outlined' sx={{ width: "180px", borderRadius: 10, fontWeight: 700, fontFamily: "Jura", p: 2, color: "yellow", fontSize: 12, borderColor: "yellow", mt: { md: 3, xs: 1 }, ml: { md: 0, xs: 3 } }}>About the projects</Button>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={4} sx={{ padding: 3, display: "flex", flexDirection: "column", paddingLeft: { xs: 0, md: 0 } }}>
                        <Typography sx={{ fontFamily: "Jura", mt: 0, color: "yellow" }}>CONTACT US</Typography>
                        <Typography sx={{ fontFamily: "Jura", mt: 2, color: "darkgrey" }}>  <Typography sx={{ mr: 2, display: "inline", color: "white" }}>Email</Typography> info@aiod.com</Typography>
                        <Typography sx={{ fontFamily: "Jura", mt: 2, color: "darkgrey" }}><Typography sx={{ mr: 2, display: "inline", color: "white" }}>Tel</Typography>  info@aiod.com</Typography>

                        <Typography sx={{ fontFamily: "Jura", mt: 2, color: "yellow" }}>CONTACT US</Typography>

                        <Typography sx={{ color: "white", fontFamily: "Jura", mt: 1 }}>Stay current wLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Typography>
                        <Button sx={{ padding: 2, borderRadius: 10, backgroundColor: "#41B6E6", mt: 2, fontSize: 12, fontFamily: "Jura", fontWeight: 600 }} >Dont see your product? Click Here</Button>
                    </Grid>
                </Grid>
            </Box>

            <Container >
                <Typography className="reveal fade-left" sx={{ color: "darkgrey", fontFamily: "Jura", mt: 4 }}>Privacy Policy  |  Responsible Disclosure  |  Terms of use</Typography>
                <Typography className="reveal fade-left" sx={{ color: "darkgrey", fontFamily: "Jura", mt: 4 }}>©2023 All Rights Reserved AIoD</Typography>
                <Box className="reveal fade-right" sx={{ display: "flex", justifyContent: "end" }}>
                    <img src={process.env.PUBLIC_URL + '/frameLOBA.svg'} />

                </Box>
            </Container>

        </Box>

    )
}

export default Footer