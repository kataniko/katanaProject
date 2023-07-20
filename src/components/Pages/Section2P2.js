import React from 'react'
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import styled, { css } from 'styled-components';
import Divider from '@mui/material/Divider';
import Placard from '../Placard';
import { motion } from "framer-motion"


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


const Section2 = () => {
  return (

    <>
  
      <Container>
        
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>January 2019 December 2021</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>First iteration of the AI-on-Demand platform was developed under the leadership of the AI4EU project (ICT26-2019).
            The platform consists of the two subsystems CMS/Homepage and AI4EU Experiments integrated with EU-Login Single Sign On (SSO).</Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>

    

      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>January 2021 | December 2023</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>Six supporting projects (ICT49-2020) AI4Copernicus, AIPLAN4EU, DIH4AI,
            I-NERGY, BONSAPPS and STAIRWAI were funded under the EU’s Horizon 2020 programme to define and develop new innovative services for the platform.
          </Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>

    

      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>September 2020 | August 2024</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>Four Networks of Excellence (ICT48-2020) ELISE, TAILOR, AI4Media and HUMANEAI NET, supported by the Coordination and Support Action VISION, are being funded under the Horizon 2020 programme, to further enrich the platform with the outputs of their activities. </Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>


      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>July 2022 | June 2025</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>The Coordination and Support Action project AI4Europe is being funded under the Horizon Europe program, to further advance the technical development of the platform and develop a supporting community to create additional value for the AI research community. </Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>


      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>July 2022 | June 2025</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>The Coordination and Support Action project ADRA-e, funded in the same call as AI4Europe, is supporting the AI, Data and Robotics Association and Partnership to create the conditions for a sustainable European ecosystem.</Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>


      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>September 2022 | August 2025</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>Networks of Excellence ELSA and euROBIN are being funded under the Horizon 2020 programme, to further enrich the platform with the outputs of their activities.</Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>


      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>November 2022 | July 2023</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>40 projects are receiving funding under the Horizon Europe programme to strongly contribute to the platform, developing new services, knowledge and tools to be deployed through the platform. </Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>


      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={process.env.PUBLIC_URL + '/history1.svg'} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="contained" sx={{ padding: 2, backgroundColor: "blue", margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 2 }}>January 2019 December 2021</Button>
          <Typography sx={{ color: "white", margin: "auto", textAlign: "center", width: { xs: 300, md: 817 }, height: 225, fontFamily: "Jura", fontSize: { xs: 17, md: 30 }, mt: 2 }}>HumanE-AI.Net contributes the new feature "Jupyter-Connect", which automatically deploys an AI model along with connecting Jupyter-Lab to the playground.</Typography>
          <Button variant="outlined" sx={{ padding: 1, margin: "auto", borderRadius: 5, fontFamily: "Jura", marginTop: 5, color: "grey", borderColor: "grey" }}>skip</Button>
        </Box>
      </Container>

    </>
  )
}

export default Section2