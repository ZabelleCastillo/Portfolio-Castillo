import { useEffect, useState, cloneElement } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import JB from '../assets/JB.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import '../App.css'
import {Slide} from "@mui/material";
import Footer from './Footer.js';
import Summary from './Summary.js';

////////////////////////////////////////
function ScrollTop(propsBackTop) {
  const { children } = propsBackTop;
  const triggerBackTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    collapsedheight:50,
    timeout: 1000,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={triggerBackTop}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
//////////////////////////////////////////////////
function ElevationScroll(propsElevate) {
  const { children } = propsElevate;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const triggerElevate = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: triggerElevate ? 4 : 0,
  });
}
/////////////////////////////////////////

/////////////////////////////////////////
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Experiences', 'Projects', 'Acknowledgment', 'Services', 'Contact' ];
///////////////////////////////////////////

export default function TopBar(propsBackTop,propsElevate) {
  /////////////////////////////////////
  const [checkedSlide, setCheckedSlide] = useState(false);
  useEffect(() => {
    setCheckedSlide(true);
  }, []);
  ////////////////////////////////////

  const [mobileOpen, setMobileOpen] =useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JBC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  ///////////////////////////////////
  return (
    <>

      <CssBaseline />
      <ElevationScroll {...propsElevate}>
      <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                 
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                    JBC  
                  </Typography>

                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                      <Button key={item} sx={{ color: '#fff' }}>
                        {item}
                      </Button>
                    ))}
                  </Box>
            </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
                <nav>
                  <Drawer                 
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                  >
                    {drawer}
                  </Drawer>
                </nav>
       <Container sx={{padding: '5px'}}>
                <Box 
                sx={{ flexGrow: 1 }} >
                  <Grid container spacing={3}  columns={12}
                    direction={{ xs: 'column', sm: 'row' }}  
                  >
                      <Slide
                          direction="right"
                          in={checkedSlide}
                          {...(checkedSlide ? { timeout: 1000 } : {})}
                          collapsedheight={50}
                        >
                              <Grid item xs={6}>
                                  <div 
                                  // className="topbarTransition"
                                  >
                                      <img src={JB} alt='Zabelle' 
                                          style={{
                                          width: "100%",
                                          height: "auto",
                                          borderRadius: "60%",
                                          backgroundColor:"white",
                                          boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",
                                          backgroundImage: "radial-gradient(#FFFFFF 35%, white 60%)"
                                          }}
                                      />   
                                  </div> 
                              </Grid>
                          </Slide>

                          <Slide
                                      direction="left"
                                      in={checkedSlide}
                                      {...(checkedSlide ? { timeout: 1000 } : {})}
                                      collapsedheight={50}
                           >
                              <Grid item xs={6}
                                //  display="absolute"
                                  marginTop= "10%"
                                height= "100vh"
                                width= "100vw"
                              >                             
                                        <Typography 
                                        style={{ fontSize: "25px", marginLeft:"25px" }}
                                        >
                                                Hi, there! 👋 I'm
                                        </Typography> 
                        
                                            <Typography>
                                                <span
                                                  style={{
                                                    fontWeight: "bold",
                                                    fontSize: "30px",
                                                    color: "blue",
                                                    marginLeft:"25px" 
                                                  }}
                                                >
                                                  {" "}
                                                Jessa Belle Castillo,{" "}
                                                    </span>
                                                </Typography>
                                        
                                                <Typography style={{ fontSize: "18px", marginLeft:"25px" }}>            
                                                      presently fulfilling the role of a
                                                </Typography>
                                    
                                                <Typography style={{ fontSize: "18px", marginLeft:"25px"  }} >                     
                                                        <span
                                                          style={{
                                                            fontWeight: "bold",
                                                            fontSize: "30px",
                                                            color: "blue",
                                                            textAlign: "justify", 
                                                          }}
                                                        >
                                                          {" "}
                                                          Software Test Engineer
                                                      </span>
                                                        , specializing in manual testing and API testing, with a forthcoming transition into 
                                                        automation testing. Additionally, I possess proficiency in coding and design, 
                                                        with a keen passion for crafting aesthetically pleasing front-end interfaces that 
                                                        deliver exceptional user experiences.
                                                  </Typography>   
                                                          
                                     <br/>
                                          <Grid container direction="row"
                                              // container direction={{ xs: 'column', sm: 'row' }} 
                                              padding='5px'
                                              position = "relative"
                                              alignItems= "center"
                                              justifyContent= "center"
                                          >
                                              <Button variant="contained">Let's talk</Button> &nbsp;
                                              <Button variant="contained">Services</Button> &nbsp;
                                              <Button variant="contained">Projects</Button>
                                           </Grid>  

                                              <Grid container direction={{ xs: 'column', sm: 'row' }} padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"
                                                >
                                                  <Button variant="contained">Download CV</Button> 
                                              </Grid>     

                                              <Grid container direction={{ xs: 'column', sm: 'row' }} padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"
                                                >
                                                   {<ExpandCircleDownIcon/>}
                                              </Grid>                
                                                <Grid container direction="row"
                                                    padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"
                                                >                                  
                                                    <FacebookIcon/>
                                                    <GitHubIcon/>
                                                    <LinkedInIcon/>
                                                    <YouTubeIcon/>
                                                </Grid>   
                                                                                                                                               
                                           </Grid>   
                                   </Slide>                              
                  </Grid>
               </Box>
        </Container>
                                                     
                <ScrollTop {...propsBackTop}>
                  <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                  </Fab>
                </ScrollTop>          
          <Summary />
          <br /> <br /> <br />
        <Footer />                                                    

    </>
  );
}
