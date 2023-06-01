import React from 'react'
import { Container, Box, Typography, Grid } from "@mui/material";
import styled, { css } from 'styled-components';
import Divider from '@mui/material/Divider';
import Placard from '../Placard';
import { motion } from 'framer-motion';

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
    <Container>
      <Typography sx={{ color: "white" }}>ASDASDA</Typography>
    </Container>
  )
}

export default Section2