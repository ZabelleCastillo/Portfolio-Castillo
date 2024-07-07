import { useEffect, useState, useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import JB from '../assets/JB.png';
import { useNavigate } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import '../App.css'
import {Slide} from "@mui/material";
import Summary from "./Summary";
import { makeStyles } from '@mui/styles';
import { motion as m } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import {Helmet} from "react-helmet";
import { NavLink } from "react-router-dom";
import generatePDF from 'react-to-pdf'; //for generate pdf files
import QRCode from 'qrcode.react';
////////////////////////////////////////

//////////////////////////////////////////////////

/////////////////////////////////////////
const useStyles = makeStyles({
  button: {
    '&:hover': {
      borderRadius: 35,
      backgroundColor: '#0017FE',
      padding: '8px 16px',
      fontSize: '13px',
      color: 'yellow',
  },
}})

///////////////////////////////////////////

export default function Home(propsBackTop,propsElevate) {
  //const { toPDF, targetRef } = usePDF({filename: '../assets/PDF/STE_JBC.pdf'});
  //const targetRef = useRef(); //for generate pdf files
  const classes = useStyles()
 const navigate = useNavigate();

  /////////////////////////////////////

  ////////////////////////////////////////
  const [checkedSlide, setCheckedSlide] = useState(false);
  useEffect(() => {
    setCheckedSlide(true);
  }, []);
  ////////////////////////////////////

  ///////////////////////////////////
  return (
    <>
      <Helmet>
        <title> Portfolio | Landing Page </title>
        <meta name="LandingPage" content="Landing Page" />
      </Helmet>
       <Container sx={{padding: '5px'}}>
           
                <Box id="get-info-home"
                sx={{ flexGrow: 1, padding: '5px' }} >
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
                                          height: "40%",
                                          borderRadius: "60%",
                                          //backgroundColor:"white",
                                          //boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",
                                          //backgroundImage: "radial-gradient(#FFFFFF 35%, white 60%)",
                                          marginBottom: "-15px",
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
                                  marginTop= "6%"
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
                                                    color: "#002E4E",
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
                                                <m.div
                                                  initial={{opacity: 0}}
                                                  animate={{opacity:1}}
                                                  transition={{duration: 0.75, ease: "easeOut"}}
                                                >
                                                <Typography   style={{ fontSize: "18px", marginLeft:"25px"  }} >                     
                                                        <span
                                                        
                                                          style={{
                                                            fontWeight: "bold",
                                                            fontSize: "30px",
                                                            color: "#002E4E",
                                                            textAlign: "justify", 
                                                          }}
                                                        >
                                                          {" "}
                                                          Software Engineer
                                                      </span>
                                                        {/* , specializing in manual testing and API testing, with a forthcoming transition into 
                                                        automation testing. Additionally, I possess proficiency in coding and design, 
                                                        with a keen passion for crafting aesthetically pleasing front-end interfaces that 
                                                        deliver exceptional user experiences. */}
                                                        , specializing in Apigee. I am eagerly anticipating my 
                                                        upcoming project and am enthusiastic about building a 
                                                        remarkable project where I will also apply my software 
                                                        testing skills.
                                                  </Typography>   
                                                </m.div>          
                                          <Grid container direction="row"
                                              // container direction={{ xs: 'column', sm: 'row' }} 
                                              padding='5px'
                                              position = "relative"
                                              alignItems= "center"
                                              justifyContent= "center"
                                          >
                                              {/* <NavLink to="/Contact" > */}
                                                <Button className={classes.button} 
                                                onClick={()=> navigate("/Contact")}
                                                //onClick={event =>  window.location.href='/Contact'}
                                                sx={{ color: "#fff" }}
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                    }}
                                                  variant="contained">Let's talk
                                                </Button> &nbsp;                                  
                                                {/* </NavLink>    */}
                                                {/* <NavLink to="/Services" > */}
                                              <Button className={classes.button} 
                                              onClick={()=> navigate("/Services")}
                                               sx={{ color: "#fff" }}
                                                  style={{
                                                    borderRadius: 35,
                                                    backgroundColor: "#002E4E",
                                                    padding: "8px 16px",
                                                    fontSize: "13px",
                                                }}
                                                //onClick={event =>  window.location.href='/Services'}
                                                // onClick={()=> navigate("/Services")}
                                              variant="contained">Services
                                              </Button> &nbsp;
                                              {/* </NavLink> */}
                                              {/* <NavLink to="/Projects" > */}
                                              <Button className={classes.button} 
                                              onClick={()=> navigate("/Projects")}
                                                  style={{
                                                    borderRadius: 35,
                                                    backgroundColor: "#002E4E",
                                                    padding: "8px 16px",
                                                    fontSize: "13px",
                                                }}
                                                //onClick={event =>  window.location.href='/Projects'}
                                                //onClick={()=> navigate("/Projects")}
                                                sx={{ color: "#fff" }}
                                              variant="contained">Projects
                                              </Button>
                                              {/* </NavLink> */}
                                           </Grid>  

                                              <Grid container direction={{ xs: 'column', sm: 'row' }} padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"
                                              >
                                                  <Button className={classes.button}   
                                                   sx={{ color: "#fff" }}
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                        href={require("../assets/PDF/STE_JBC.pdf")} 
                                                      download="CV_JBC"
                                                      variant="contained"> Download CV </Button> 
                                                       {/* <br />
                                                  <div>                                            
                                                    <QRCode value="../assets/PDF/STE_JBC.pdf" 
                                                    href={require("../assets/PDF/STE_JBC.pdf")} 
                                                    download="CV_JBC"
                                                    />
                                                  </div> */}
                                                  {/* <div>
                                                    <button onClick={() => generatePDF(targetRef, {filename: '../assets/PDF/STE_JBC.pdf'})}>
                                                        Download PDF
                                                    </button>
                                                    <div ref={targetRef}>
                                                        Content to be included in the PDF
                                                    </div>
                                                  </div> */}
                                              </Grid>     

                                              <Grid container direction={{ xs: 'column', sm: 'row' }} padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"
                                              >
                                                   {
                                                    <Tooltip title="Scroll down">
                                                      <IconButton
                                                        style={{ color: '#002E4E'}}
                                                      >
                                                      <Scroll to="id-to-info" smooth={true}>                                                     
                                                        <ExpandCircleDownIcon
                                                          sx={{ "&:hover": { cursor: "pointer", color: "yellowgreen"} }}
                                                        />
                                                      </Scroll>
                                                      </IconButton>
                                                    </Tooltip> 
                                                    }
                                              </Grid>                
                                                <Grid container direction="row"
                                                    padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"                                                
                                                >  
                                               
                                                        <Tooltip title="Facebook">
                                                            <IconButton 
                                                            onClick={
                                                              () => window.open('https://www.facebook.com/yzabelletaylorjessbelle', '_blank', 'noopener')
                                                            }
                                                            style={{ color: 'blue'}}
                                                            >
                                                              <FacebookIcon                                               
                                                                    sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                              />
                                                            </IconButton>
                                                          </Tooltip>  

                                                  <Tooltip title="Github">
                                                    <IconButton
                                                    onClick={
                                                      () => window.open('https://github.com/ZabelleCastillo', '_blank', 'noopener')
                                                    }
                                                    style={{ color: 'black'}}
                                                    >
                                                      <GitHubIcon
                                                      sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                      />
                                                    </IconButton>
                                                  </Tooltip>    

                                                  <Tooltip title="LinkedIn">
                                                    <IconButton
                                                    onClick={
                                                      () => window.open('https://www.linkedin.com/in/jessa-belle-castillo-21a724134/', '_blank', 'noopener')
                                                    }
                                                    style={{ color: 'skyblue'}}
                                                    >
                                                      <LinkedInIcon
                                                        sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                      />
                                                    </IconButton>
                                                  </Tooltip>  
                                                                           
                                                  <Tooltip title="YouTube">
                                                    <IconButton
                                                     onClick={
                                                      () => window.open('https://www.youtube.com/@billyjesscastillo8025', '_blank', 'noopener')
                                                    }
                                                    style={{ color: 'red'}}
                                                    >
                                                       <YouTubeIcon
                                                       sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                      />
                                                    </IconButton>
                                                  </Tooltip>     
                                                </Grid>   
                                                                                                                                               
                                           </Grid>   
                                   </Slide>                              
                  </Grid>
               </Box>    
        </Container>

          <Summary/>                                         
                                      

    </>
  );
}
