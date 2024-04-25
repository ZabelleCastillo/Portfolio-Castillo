// import * as React from 'react';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Belle2_photo from '../assets/Belle2_photo.jpg';
import Belle1_photo from '../assets/Belle1_photo.jpg';
import bg2 from '../assets/BG/ss_unsplash.jpg';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Slide} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import {Helmet} from "react-helmet";
////////////////////////////////////////
const background = {
  backgroundImage: `url(${bg2})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height:"330px",
  //width:"100vw",
};
//////////////////////////////////////////////////
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
}));
/////////////////////////////////////////////////
const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  }));

export default function Experiences() {
  const [over, setOver] = useState(false);
///////////////////////////////////////////
  const [checkedSlide, setCheckedSlide] = useState(false);
  useEffect(() => {
    setCheckedSlide(true);
  }, []);
/////////////////////////////////////////////

  return (
    <>
     <Helmet>
        <title> Portfolio | Experiences </title>
        <meta name="Experiences" content="Experiences" />
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
                      <Grid item xs={5}>
                            <div
                            onMouseEnter={() => setOver(true)}
                            onMouseLeave={() => setOver(false)}
                            >
                              <center>
                                             <img     
                                                alt="image_belle"                                         
                                                src={over ? Belle2_photo : Belle1_photo }
                                                style={{
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
                            <Typography>
                              <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'white'}}>
                                Get to know more
                              </Box>   
                            </Typography>

                            <Typography>
                              <Box sx={{ fontWeight: 'none', fontSize: 20, m: 0, color:'white', letterSpacing: 6, fontFamily: 'Monospace' }}>
                                About my Experiences
                              </Box>   
                            </Typography>
                            </center>                    
                        </Item>
                        <br/>
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)'}}>                        
                                <Typography
                                  className="typographyText"
                                  sx={{ "&:hover": { color: "#d9ff00" } }}
                                >
                                    { <WorkIcon/>}
                                   Software Test Engineer
                                </Typography>  
                            <br />
                                <Typography
                                    className="typographyText"
                                    sx={{ "&:hover": { color: "#d9ff00" } }}
                                >
                                    {<SchoolIcon/>} Bachelor of Science in Information Technology
                                </Typography>   
                            <br /> 
                                <Typography
                                    className="typographyText"
                                    sx={{ "&:hover": { color: "#d9ff00" } }}
                                >
                                    {<EmailIcon/>} jessabellecastillo1993@yahoo.com
                                </Typography> 
                            <br />  
                                <Typography
                                    className="typographyText"
                                    sx={{ "&:hover": { color: "#d9ff00" } }}
                                >
                                    {<PhoneIcon/>} +639-39-716-9774
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
                                    //   () => window.open('/Skills', '_blank', 'noopener')
                                    // }
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
                              <Typography 
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                                 {<WorkIcon/>}   Associate Software Test Engr.  
                              </Typography>
                              
                              <Typography
                               fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                               sx={{ "&:hover": { color: "#d9ff00" } }} >
                                {<CalendarMonthIcon/>} May 23, 2023 – March 23, 2024                             
                              </Typography>
                              
                              <Typography
                               fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<BusinessIcon/>} Gothong Southern Shipping Lines, Inc.
                              </Typography>
                                <Typography>
                                  <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                    <span
                                     fontWeight='none' fontSize= '16' m= '0' color='blue' 
                                    > Job responsibilities: </span> In my role as a software test engineer, my primary job responsibilities involve designing, implementing,
                                    and executing test plans, alongside identifying, reporting, and tracking defects to guarantee that 
                                    software products meet or surpass customer expectations.
                                  </Box>  
                                </Typography>
                            <hr/>
                            <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                            {<WorkIcon/>} Outsourcing Agent
                            </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<CalendarMonthIcon/>} January 2023 – April 2023 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<BusinessIcon/>} MMS Placement Int’l, Inc.
                              </Typography>
                              <Typography>
                              <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                Job responsibilities: As an outsourcing agent, my job responsibilities primarily revolve around the management of outsourcing
                                services. This entails coordinating with overseas workers, ensuring adherence to contractual agreements, 
                                and providing general support to enhance the activities and profitability of the company.        
                              </Box>
                               </Typography>
                            <hr/>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Self-Employed 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} March 2020 – September 2022
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Sogod BellyChon
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                Job responsibilities: As a self-employed individual, my job responsibilities encompass developing menus and service packages, 
                                coordinating meal delivery, as well as managing event schedules and food preparation timelines.
                                </Box>
                              </Typography>
                            <hr />     
                              <Typography
                                  fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                  sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Company Secretary 
                              </Typography>                      
                              <Typography
                                  fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                  sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} August 2017 – February 2020
                              </Typography>
                              <Typography
                                  fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                  sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>}   WilHer Construction
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                  Job responsibilities: My job responsibilities as a Construction Secretary include answering phones, filing, 
                                  copying, ordering supplies, sorting mail, relaying messages, composing correspondence, 
                                  and performing various other administrative tasks essential to business operations.
                                </Box>
                              </Typography>
                            <hr />
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Call Analyst 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} June 2015 – July 2017
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>}  Humanatic
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                  Job responsibilities: My job responsibilities entail assisting clients in reviewing their calls, 
                                  followed by the provision of analytical reports. This valuable data serves to 
                                  enhance customer service and sales performance.
                                </Box>
                              </Typography>
                            <hr />
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Intern 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} July 2014 – October 2014
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Metro Ormoc Community Cooperative – OCCCI  
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                Job responsibilities: My primary responsibilities encompass updating account records and reviewing loan files.
                                </Box>
                               </Typography>
                            <hr />   
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Intern
                              </Typography>                         
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} June 2014 – July 2014
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Oxior Incorporated
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                  Job responsibilities: My responsibilities include meticulously invoicing data into the system, 
                                  systematically storing it within the database, and conducting manual testing of the software to 
                                  identify any potential bugs or defects.
                                </Box>
                              </Typography>
                            <hr />
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Sale Associate 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} April 2014 – June 2014
                              </Typography>                           
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color='#002E4E' 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Gaisano Capital
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                  Job responsibilities: Facilitates sales by actively engaging customers, employing 
                                  suggestive selling techniques, and imparting comprehensive product knowledge. 
                                  Extends a warm welcome to customers and courteously assists them in addressing 
                                  inquiries. Guides customers by escorting them to relevant merchandise racks and 
                                  service counters.
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
