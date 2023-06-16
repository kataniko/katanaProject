import React, { useState, } from 'react';
import {
  AppBar,
  Container,
  Box,
  Button,
  styled,
  MenuItem,
  Typography,
  IconButton,
  Popper,
  Card,
  CardContent,
  Grid,
  ClickAwayListener
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButton from '@mui/material/ToggleButton';
import { motion } from 'framer-motion';

// Create styled components MUI
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#000613',
  height: 140,
  zIndex: 1, // Decreased the z-index to allow the sidebar to appear above the header
  width: '100vw',
  boxShadow: '2px 2px 10px black',
}));

const StyledToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 140,
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: 2, // Increased the z-index to ensure the header appears above the sidebar
  width: '100vw',
}));

const StyledLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  zIndex: 2, // Increased the z-index to ensure the header appears above the sidebar
  padding: 0,
}));

const StyledLogo = styled('img')(({ theme }) => ({
  width: '150px',
  height: '75px',
}));

const StyledNavItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    color: 'yellow',
  },
  fontSize: 14,
  lineHeight: '24px',
  fontWeight: 600,
  fontFamily: 'Jura',
  transition: '1s',
  textTransform: 'none',
}));

const pages = ['About', 'oD Services', 'Develop'];


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [placement, setPlacement] = useState();
  const [placement2, setPlacement2] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open5 = Boolean(anchorEl3);
  const [selected, setSelected] = useState(false);
  const [selectedd, setSelectedd] = useState(false);
  const [selecteddd, setSelecteddd] = useState(false);
  const [selectedddd, setSelectedddd] = useState(false);
  const area = open ? 'simple-popover' : undefined;
  const area2 = open2 ? 'simple-popover' : undefined;
  const area3 = open3 ? 'simple-popover' : undefined;

  const [activeTab, setActiveTab] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };


  const handleClick2 = (newPlacement) => (event) => {
    setAnchorEl2(event.currentTarget);
    setOpen3((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };



  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    setSelected(null);
    setSelectedd(null);
    setSelecteddd(null);
    setSelectedddd(null);
  };
 
  // Define a state variable to track the layer open/close state
  const [isLayerOpen, setIsLayerOpen] = useState(false);

  // Function to handle click on navigation menu option
  const handleMenuOptionClick = () => {
    {
      selected == true ? setIsLayerOpen(true) : setIsLayerOpen(false)
    };
  };

  const handleMenuToggle = () => {

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledAppBar id='bar' position="static">
        <Menu
          width={'100vw'}
          pageWrapId="bar"
          outerContainerId="bar"
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        >
          {/* Menu items */}
          <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, scale: 0.9, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 2.2 }}>
              <StyledLogo src={process.env.PUBLIC_URL + '/logoheader.svg'} alt="logo" loading="lazy" />
            </motion.div>
          </Container>

          <MenuItem sx={{ mt: 10 }}>

            <Accordion elevation={0} sx={{ background: "transparent", border: 0 }}>
              <AccordionSummary sx={{ backgroundColor: "transparent" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Card sx={{ background: "transparent", width: "95%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>About</Typography>
                  </CardContent>
                </Card>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ background: "transparent", width: "90%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Accordion 1</Typography>
                  </CardContent>
                </Card>


              </AccordionDetails>

              <AccordionDetails>
                <Card sx={{ background: "transparent", width: "90%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Accordion 1</Typography>
                  </CardContent>
                </Card>


              </AccordionDetails>


            </Accordion>
          </MenuItem>

          <MenuItem>
            <Accordion elevation={0} sx={{ background: "transparent", border: 0 }}>
              <AccordionSummary sx={{ backgroundColor: "transparent" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Card sx={{ background: "transparent", width: "95%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>oD Services</Typography>
                  </CardContent>
                </Card>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ background: "transparent", width: "90%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Virtual Lab</Typography>
                  </CardContent>
                </Card>


              </AccordionDetails>

              <AccordionDetails>
                <Card sx={{ background: "transparent", width: "90%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Accordion 1</Typography>
                  </CardContent>
                </Card>

              </AccordionDetails>

            </Accordion>
          </MenuItem>

          <MenuItem>
            <Accordion elevation={0} sx={{ background: "transparent", border: 0 }}>
              <AccordionSummary sx={{ backgroundColor: "transparent" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Card sx={{ background: "transparent", width: "95%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Develop</Typography>
                  </CardContent>
                </Card>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ background: "transparent", width: "90%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Accordion 1</Typography>
                  </CardContent>
                </Card>


              </AccordionDetails>

              <AccordionDetails>
                <Card sx={{ background: "transparent", width: "90%" }}>
                  <CardContent>
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, color: "white" }}>Accordion 1</Typography>
                  </CardContent>
                </Card>

              </AccordionDetails>

            </Accordion>
          </MenuItem>
          {/* Add more menu items as needed */}
        </Menu>

        <StyledToolbar disableGutters>
          <motion.div initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 2.2 }}>
            <StyledLogoContainer>
              <Link to="/">
                <StyledLogo src={process.env.PUBLIC_URL + '/logotipologosvg.svg'} alt="logo" loading="lazy" />
              </Link>
            </StyledLogoContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2.2 }}>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1, ml: 10 }}>

              <Link style={{ textDecoration: "none" }} to="/About">
                <StyledNavItem >
                  <StyledButton sx={{ padding: 4, fontSize: '14px' }} >About</StyledButton>
                </StyledNavItem>
              </Link>

              <ClickAwayListener onClickAway={handleClose}>
                <StyledNavItem>
                  <StyledButton aria-describedby={area} sx={{ padding: 4, fontSize: '14px' }} onClick={(event) => handleClick(event)}>
                    oD Services
                  </StyledButton>

                  <Popper sx={{ zIndex: 10 }} id={area} open={open} anchorEl={anchorEl}>
                    <motion.div initial={{ opacity: 0, scale: 0.9, y: -100 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 1.5}}>
                      <Container sx={{ p: 2, bgcolor: '#0047BB', width: "100vw", height: "200px", mt: 2, borderRadius: 10 }}>
                        <Grid container>
                          <Grid md={3}>
                            <motion.div initial={{ opacity: 0, scale: 0.9, y: -50 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 1.5 }}>

                              <Card elevation={20} aria-describedby={area2} onClick={handleClick2('bottom-start')} sx={{
                                m: 2, height: "140px", backgroundColor: "transparent", borderRadius: 5, "&:hover": {
                                  border: 1,
                                  background: "rgba(255, 255, 255, 0.1)",
                                  transition: 2,
                                  borderColor: "yellow", // Change the background color on hover
                                  cursor: "pointer", // Add a pointer cursor on hover
                                },
                              }}>
                                <Link to="/Vlab">
                                  <ToggleButton sx={{ p: 0, height: "100%", border: selected ? "1px solid yellow" : "1px solid transparent", }}
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                      setSelected(!selected);
                                    }}

                                  >
                                    <CardContent >
                                      <Typography sx={{ fontFamily: "Jura", fontSize: 17, fontWeight: 500, textAlign: "left", color: selected ? "yellow" : "white" }}>
                                        Virtual Lab
                                      </Typography>
                                      <Typography sx={{ fontSize: 12, fontFamily: "Jura", fontWeight: 300, color: "white", mt: 1, width: "80%", textAlign: "left" }}>
                                        Tools for researchers. To experiment,
                                        to play, to explore datasets,
                                        ML, NLP.
                                      </Typography>
                                    </CardContent>
                                  </ToggleButton>
                                </Link>
                              </Card>
                            </motion.div>
                          </Grid>

                          <Grid md={3}>
                            <motion.div initial={{ opacity: 0, scale: 0.9, y: -50 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 1.5 }}>
                              <Card elevation={20} sx={{
                                m: 2, height: "140px", backgroundColor: "transparent", borderRadius: 5, "&:hover": {
                                  border: 1,
                                  background: "rgba(255, 255, 255, 0.1)",
                                  transition: 2,
                                  borderColor: "yellow", // Change the background color on hover
                                  cursor: "pointer", // Add a pointer cursor on hover
                                },
                              }}>
                                <ToggleButton sx={{ p: 0, height: "100%", border: selectedd ? "1px solid yellow" : "1px solid transparent", }}
                                  value="check"
                                  selected={selectedd}
                                  onChange={() => {
                                    setSelectedd(!selectedd);
                                  }}
                                >

                                  <CardContent>
                                    <Typography sx={{ color: "white", fontFamily: "Jura", fontSize: 17, fontWeight: 600, textAlign: "left", color: selectedd ? "yellow" : "white" }}>
                                      Innovation
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, fontFamily: "Jura", fontWeight: 300, color: "white", mt: 1, width: "81%", textAlign: "left" }}>
                                      More than 100 companies showcasing how AI helped them to bootstrap their busines
                                    </Typography>
                                  </CardContent>
                                </ToggleButton>
                              </Card>
                            </motion.div>
                          </Grid>
                          <Grid md={3}>
                            <motion.div initial={{ opacity: 0, scale: 0.9, y: -50 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 1.5 }}>
                              <Card elevation={20} sx={{
                                m: 2, height: "140px", backgroundColor: "transparent", borderRadius: 5, "&:hover": {
                                  border: 1,
                                  transition: 2,
                                  background: "rgba(255, 255, 255, 0.1)",
                                  borderColor: "yellow", // Change the background color on hover
                                  cursor: "pointer", // Add a pointer cursor on hover
                                },
                              }}>
                                <ToggleButton sx={{ p: 0, border: 0, height: "100%", border: selecteddd ? "1px solid yellow" : "1px solid transparent", }}
                                  value="check"
                                  selected={selecteddd}
                                  onChange={() => {
                                    setSelecteddd(!selecteddd);
                                  }}
                                >

                                  <CardContent>
                                    <Typography sx={{ color: selecteddd ? "yellow" : "white", fontFamily: "Jura", fontSize: 17, fontWeight: 500, textAlign: "left" }}>
                                      Community
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, fontFamily: "Jura", fontWeight: 300, color: "white", mt: 1, width: "81%", textAlign: "left" }}>
                                      Are you informed about the latest projects from the EC on AI and Robotics?
                                    </Typography>
                                  </CardContent>
                                </ToggleButton>
                              </Card>
                            </motion.div>
                          </Grid>

                          <Grid md={3}>
                            <motion.div initial={{ opacity: 0, scale: 0.9, y: -50 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 1.5 }}>
                              <Card elevation={20} sx={{
                                m: 2, height: "140px", backgroundColor: "transparent", borderRadius: 5, "&:hover": {
                                  border: 1,
                                  transition: 2,
                                  background: "rgba(255, 255, 255, 0.1)",
                                  borderColor: "yellow", // Change the background color on hover
                                  cursor: "pointer", // Add a pointer cursor on hover
                                },
                              }}>
                                <Link to="/">
                                  <ToggleButton sx={{ p: 0, border: 0, height: "100%", border: selectedddd ? "1px solid yellow" : "1px solid transparent", }}
                                    value="check"
                                    selected={selectedddd}
                                    onChange={() => {
                                      setSelectedddd(!selectedddd);
                                    }}
                                  >

                                    <CardContent>
                                      <Typography sx={{ color: selectedddd ? "yellow" : "white", fontFamily: "Jura", fontSize: 17, fontWeight: 500, textAlign: "left" }}>
                                        Robospot
                                      </Typography>
                                      <Typography sx={{ fontSize: 12, fontFamily: "Jura", fontWeight: 300, color: "white", mt: 1, width: "80%", textAlign: "left" }}>
                                        Tools for robotics people.
                                        Eurocore, OpenEase
                                      </Typography>
                                    </CardContent>
                                  </ToggleButton>
                                </Link>
                              </Card>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Container>
                    </motion.div>
                  </Popper>
                </StyledNavItem>
              </ClickAwayListener>

              <StyledNavItem >
                <StyledButton sx={{ padding: 4, fontSize: '14px' }} >Develop</StyledButton>
              </StyledNavItem>


            </Box>
          </motion.div>
          <Box sx={{ display: 'flex', alignItems: 'center', zIndex: 2 }}> {/* Increased the z-index to ensure the button appears above the sidebar */}
            <Box sx={{ display: { xs: 'flex', md: 'flex' }, width: { xs: 'auto', md: '200px' } }}>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, padding: 2 }}>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleMenuToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </StyledToolbar>
      </StyledAppBar >
    </>
  );
};

export default Header;
