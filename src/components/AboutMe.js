// import * as React from 'react';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Belle2_photo from '../assets/Belle2_photo.jpg';
import Belle1_photo from '../assets/Belle1_photo.jpg';
import bg1 from '../assets/BG/cg_unsplash.jpg';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Slide} from "@mui/material";
import { styled } from '@mui/material/styles';
import '../App.css';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import {Helmet} from "react-helmet";
////////////////////////////////////////
const background = {
  backgroundImage: `url(${bg1})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height:"330px",
  //width:"100vw",
};
//////////////////////////////////////////////////
const Item = styled(Paper)(({ theme }) => ({
   //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    // color: theme.palette.text.secondary,
    //pacity: 0.2,
    backgroundColor: 'transparent',
    //backgroundColor: 'rgba(0,0,0,.1)',
    zIndex: 2,
  }));
//////////////////////////////////////////////////
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   // ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'justify',
   // color: theme.palette.text.secondary,
   pacity: 0.2,
   //backgroundColor: 'transparent',
   zIndex: 2,
 }));

export default function AboutMe() {
  const [over, setOver] = useState(false);
  /////////////////////////////
  const [checkedSlide, setCheckedSlide] = useState(false);
  useEffect(() => {
    setCheckedSlide(true);
  }, []);

  return (
    <>
      <Helmet>
        <title> Portfolio | About </title>
        <meta name="About" content="About" />
      </Helmet>
      <CssBaseline />
      <div style={background}></div>
      <Container sx={{padding: '5px', marginTop: "-330px",}}>
        <Box 
        // sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%', margin: 'auto' }}>
        sx={{ flexGrow: 1, padding: '5px' }} >
            <Grid 
             direction={{ xs: 'column', sm: 'row' }}
                container rowSpacing={1} columnSpacing={{xs:4, sm:5,md:3}}
                alignItems= "center"
                justifyContent= "center"
                margin="auto" 
            >
              <Slide
                      direction="right"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
              >                  
                      <Grid item xs={5}
                      sx={{
                        width: "auto",
                      }}>
                            <div
                            // onMouseOver={() => setOver(true)}
                            // onMouseOut={() => setOver(false)}
                            onMouseEnter={() => setOver(true)}
                            onMouseLeave={() => setOver(false)}
                            >
                              <center>
                                           {/* src={aboutme} alt='Jess'   */}
                                            <img 
                                                alt="image_belle"                                                
                                                src={over ? Belle2_photo : Belle1_photo }
                                                style={{
                                                // opacity: over ? 1 : 0,
                                                width: "250px",
                                                height: "250px",
                                                boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                borderRadius: "50%",
                                              }}
                                            />   
                              </center>
                            </div>
                      </Grid>
                </Slide>

                <Slide
                      direction="left"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >  
                    <Grid item xs={7}>
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)'}}>
                            <center>
                            <Typography component="div">                               
                                  <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'white'}}>Get to know more</Box>
                            </Typography>

                            <Typography>
                                  <Box sx={{ fontWeight: 'none', fontSize: 20, m: 0, color:'white', letterSpacing: 6, fontFamily: 'Monospace' }}> About me</Box>
                            </Typography>
                            </center>                    
                        </Item>
                        <br/>
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)'}} >                                
                                  <Typography
                                    className="typographyText"
                                    //color="white"
                                    sx={{ "&:hover": { color: "#d9ff00" } }}
                                    >             
                                      <Box 
                                      //sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'white', //#002E4E}}
                                      > 
                                        {<WorkIcon/>} Software Engineer</Box>
                                  </Typography>  
                                  <br/>
                                  <Typography
                                   className="typographyText"
                                    // fontWeight='none'
                                    // m="0"
                                    // fontSize=".85em"
                                    // color="white"
                                     sx={{ "&:hover": { color: "#d9ff00" } }} >  
                                      <Box 
                                      // sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'white'}}
                                      >
                                      {<SchoolIcon/>} Bachelor of Science in Information Technology
                                      </Box>
                                  </Typography>    
                                  <br />
                                  <Typography
                                      className="typographyText"
                                      // fontWeight='none'
                                      // m="0"
                                      // fontSize=".85em"
                                      // color="white"
                                       sx={{ "&:hover": { color: "#d9ff00" } }}  >            
                                      <Box //sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'white',}}
                                      >
                                      {<EmailIcon/>} jessabellecastillo1993@yahoo.com
                                      </Box>
                                  </Typography>   
                                  <br />             
                                  <Typography
                                       className="typographyText"
                                      // fontWeight='none'
                                      // m="0"
                                      // fontSize=".85em"
                                      // color="white"
                                       sx={{ "&:hover": { color: "#d9ff00" } }} >                                    
                                      <Box //sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'white',}}
                                      >
                                      {<PhoneIcon/>} +639-39-716-9774
                                      </Box>
                                  </Typography>  
                                  <br />  
                              <Tooltip title="Kindly click to reveal a comprehensive display of my skills and experiences.">
                                <NavLink
                                  to="/Skills"
                                  //onClick={event =>  window.location.href='/About'}
                                  >
                                    <Typography
                                        className="typographyText"
                                        sx={{ "&:hover": { color: "#d9ff00", pointer: 'cursor' } }}
                                    
                                        // onClick={
                                        //   () => window.open('/Skills', '_blank', 'noopener')}
                                    >
                                      {<InfoIcon/>} Skill sets...
                                    </Typography> 
                                </NavLink>
                              </Tooltip>                 
                            </Item>
                    </Grid>
                </Slide>
                {/* <Grid item xs={6}>
                       
                </Grid> */}

                <Slide
                      direction="up"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >  
                      <Grid item xs={12}>
                          <Item2>
                              <Typography color="primary">
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  "Hello, I'm Jessa Belle, known as either Zabelle, Jess or Belle. Located in Minglanilla, 
                                  Cebu - 6064 PH. As a Software Engineer, I am currently focusing on Boomi which is using for 
                                  integration that involves API. 
                                  I worked as a Software Test Engineer in my previous job, my duties encompass utilizing Zentao 
                                  as a project management tool for reporting bugs, underscoring the pivotal role I play 
                                  in assuring the quality, functionality, and performance of software products before their launch.          
                                </Box>
                              </Typography>
                            <br />
                              <Typography color="primary">
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                    This involves hands-on interaction with the software and the execution of test scripts 
                                    to systematically identify and address bugs and errors, ensuring the software operates 
                                    as intended. Additionally, I am actively engaged in advancing my skills by practicing 
                                    API testing using Postman and gaining proficiency in automation testing.
                                </Box>                               
                              </Typography>
                              <br />
                              <Typography color="primary">
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  While my past involvement in software testing, web design and coding was not extensively pursued, I still retain 
                                  a passion for these areas. As a software engineer, this background proves advantageous as 
                                  it enables me to proficiently evaluate and confirm the responsiveness of front-end user interfaces. 
                                  This capability aligns with my responsibility to guarantee that each element meets the precise 
                                  expectations of end users.
                                </Box>  
                              </Typography>
                              <br />
                              <Typography  color="primary">
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                    Beyond my role as a Software Engineer, I find joy in various hobbies such as 
                                    working out, hiking, and indulging in motivational books. I'm passionate about sports 
                                    like basketball, badminton, jogging, lawn tennis, and billiards, and I also enjoy 
                                    coding.
                                </Box>                 
                              </Typography>
                              <br />
                              <Typography  color="primary">
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  With a diverse professional background, I've worked as an Outsourcing Agent, been 
                                  self-employed with Sogod BellyChon, and held roles such as Company Secretary, Call 
                                  Analyst, Intern, and Sales Associate, contributing to a rich and dynamic skill set."
                                </Box> 
                               </Typography>
                          </Item2>
                      </Grid>
                </Slide>
            </Grid>
    </Box>
      </Container>
      <CssBaseline />
    </>
  );
}
