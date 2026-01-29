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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
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
    color: theme.palette.text.body1,
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
                                   Software Engineer
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
                              <br />
                              <Tooltip title="Check out my progress on Skillsoft training modules.">
                                  <Typography
                                    className="typographyText"
                                    sx={{ "&:hover": { color: "#d9ff00", cursor: 'pointer' } }} // Fixed pointer typo
                                    component="a"
                                    href="https://skillsoft.digitalbadges.skillsoft.com/profile/jessabellecastillo296151/wallet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >                                   
                                      {<WorkspacePremiumIcon/>} Skillsoft 
                                  </Typography>              
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
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                                 {<WorkIcon/>}  Software Engineer  
                              </Typography>

                             <Typography
                               fontWeight='none' fontSize= '16' m= '0' color="primary"
                               sx={{ "&:hover": { color: "#d9ff00" } }} >
                                {<CalendarMonthIcon/>} June 24, 2024 – current                           
                              </Typography>
                              
                              <Typography
                               fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<BusinessIcon/>} Accenture
                              </Typography>
                                <Typography>
                                  <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                    <p>
                                      <strong>Job responsibilities: </strong> As a Software Engineer, my job responsibilities encompass both back-end and front-end development across multiple platforms. 
                                      From August 2024 to August 2025, I worked extensively with Boomi for API integration. Initially, our main goal was to migrate data from TIBCO to Boomi, ensuring 
                                      seamless transition and minimal disruption to business operations. My responsibilities included designing and implementing end-to-end integration solutions using 
                                      the Boomi platform, developing workflows, connectors, and APIs to ensure smooth data exchange between systems. I tested integrations to verify alignment with business 
                                      requirements, debugged and troubleshooted issues to optimize performance, and collaborated with cross-functional teams—including business analysts and solution architects—to 
                                      provide effective integration solutions. Additionally, I maintained technical documentation for integration processes, configuration settings, and customizations, and provided 
                                      ongoing support and maintenance for deployed integrations, implementing updates and improvements as needed.
                                    </p>
                                    <p>
                                      Since the second week of August 2025, I have been contributing to a new project using AngularJS and NodeJS, handling both front-end and back-end 
                                      development. In this project, I work on building and maintaining a platform that leverages AI to assist users in querying and understanding their needs, 
                                      ensuring a responsive and intelligent user experience. My responsibilities include designing and implementing front-end components, developing server-side logic, 
                                      integrating APIs, and maintaining smooth communication between client-side and server-side systems. I also collaborate closely with cross-functional teams to translate
                                       business requirements into technical solutions, troubleshoot issues, optimize performance, and maintain documentation for future reference.
                                    </p>
                                    {/* Job responsibilities: As a Software Engineer Associate, my job 
                                    responsibilities will include back-end development which is using Boomi for API integration. 
                                    My responsibilities include designing and implementing end-to-end integration solutions using the Boomi platform, 
                                    which involves developing workflows, connectors, and APIs to ensure seamless data exchange between systems. 
                                    I test integrations to verify their alignment with business requirements and ensure smooth operations, 
                                    while also debugging and troubleshooting any issues to optimize performance and resolve errors. 
                                    I collaborate with cross-functional teams, including business analysts, and solution architects, 
                                    to understand business needs and provide effective integration solutions. 
                                    Additionally, I document integration processes, configuration settings, and customizations for future reference, 
                                    maintaining technical documentation for audits and reviews. I also provide ongoing support and maintenance 
                                    for deployed integration processes, implementing updates and improvements as needed. */}
                                    {/* if we are 
                                    deployed on a project. I am done attending the Accenture 
                                    Technology Analyst School (ATAS) and will subsequently participate 
                                    in a bootcamp. Following this, we will commence our project, and I 
                                    am looking forward to my specific responsibilities and the other technologies that we will use. */}
                                  </Box>  
                                </Typography>
                            <hr/>

                              <Typography 
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                                 {<WorkIcon/>} Software Test Engineer
                              </Typography>

                              <Typography
                               fontWeight='none' fontSize= '16' m= '0' color="primary"
                               sx={{ "&:hover": { color: "#d9ff00" } }} >
                                {<CalendarMonthIcon/>} March 23, 2023 – June 21, 2024                           
                              </Typography>
                              
                              <Typography
                               fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<BusinessIcon/>} Gothong Southern Shipping Lines, Inc.
                              </Typography>
                                <Typography>
                                  <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                    <p>
                                      <strong>Job responsibilities: </strong> In my role as a Software Test Engineer, I was responsible for ensuring the quality, 
                                      reliability, and performance of software products throughout the development lifecycle. My key responsibilities 
                                      included designing, implementing, and executing comprehensive test plans, test cases, and test scripts to validate 
                                      system functionality, performance, and usability. I actively identified, reported, and tracked defects, collaborating 
                                      closely with developers and stakeholders to ensure timely resolution and continuous improvement.
                                    </p>
                                    <p>
                                      Additionally, I performed functional, regression, integration, and user acceptance testing, ensuring that software met or 
                                      exceeded business requirements and customer expectations. I contributed to process improvements by analyzing test results, 
                                      providing actionable feedback, and helping to refine development and testing workflows. Maintaining detailed documentation of test cases, 
                                      results, and defect reports was also a critical part of my responsibilities, supporting audits, compliance, and future reference. Through 
                                      these efforts, I helped deliver high-quality, robust software products that aligned with both technical standards and end-user needs.
                                    </p>
                                    {/* Job responsibilities: In my role as a software test engineer, my primary job responsibilities involve designing, implementing,
                                    and executing test plans, alongside identifying, reporting, and tracking defects to guarantee that 
                                    software products meet or surpass customer expectations. */}
                                  </Box>  
                                </Typography>
                            <hr/>
                            <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                            {<WorkIcon/>} Outsourcing Agent
                            </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<CalendarMonthIcon/>} December 2022 – March 2023 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }} >
                              {<BusinessIcon/>} MMS Placement Int’l, Inc.
                              </Typography>
                              <Typography>
                              <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0}}>
                                <p>
                                  <strong>Job responsibilities: </strong> As an Outsourcing Agent, my primary responsibilities focused on managing and optimizing outsourcing operations within the local 
                                  teams of the agency. I coordinated with internal teams to ensure timely and efficient completion of tasks, monitored adherence to 
                                  contractual agreements, and facilitated clear communication across departments.
                                </p>
                                <p>
                                  I also provided guidance, support, and problem-solving assistance to team members, helping to streamline processes, enhance productivity, 
                                  and maintain quality standards. Additionally, I tracked performance metrics, prepared reports, and suggested improvements to maximize operational 
                                  efficiency and profitability. Through these efforts, I contributed to the smooth functioning of agency operations and supported the company in achieving 
                                  its strategic objectives.
                                </p>
                                {/* Job responsibilities: As an outsourcing agent, my job responsibilities primarily revolve around the management of outsourcing
                                services. This entails coordinating with overseas workers, ensuring adherence to contractual agreements, 
                                and providing general support to enhance the activities and profitability of the company.         */}
                              </Box>
                               </Typography>
                            <hr/>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Self-Employed 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} March 2020 – September 2022
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Sogod BellyChon
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  <p>
                                    <strong>Job responsibilities: </strong> As an Assistant in my family business, my responsibilities encompassed supporting daily operations and ensuring smooth customer service. 
                                    I coordinated and managed meal deliveries to customers, handled customer communications, and responded to inquiries to ensure satisfaction.
                                  </p>
                                  <p>
                                    I also monitored inventory, tracking ingredient stock levels and determining what was needed for upcoming orders, helping to maintain efficiency 
                                    and prevent shortages. Additionally, I assisted in meal preparation, developing menus and service packages, and managed event schedules and food 
                                    preparation timelines to ensure timely and high-quality service. Through these efforts, I contributed to the seamless operation of the business while 
                                    supporting its growth and customer satisfaction.
                                  </p>
                                {/* Job responsibilities: As a self-employed individual, my job responsibilities encompass developing menus and service packages, 
                                coordinating meal delivery, as well as managing event schedules and food preparation timelines. */}
                                </Box>
                              </Typography>
                            <hr />     
                              <Typography
                                  fontWeight='none' fontSize= '16' m= '0' color="primary"
                                  sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Company Secretary 
                              </Typography>                      
                              <Typography
                                  fontWeight='none' fontSize= '16' m= '0' color="primary"
                                  sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} August 2017 – February 2020
                              </Typography>
                              <Typography
                                  fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                  sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>}   WilHer Construction
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0}}>
                                  <p>
                                    <strong>Job responsibilities: </strong> As a Construction Secretary, my responsibilities included providing comprehensive administrative support to ensure smooth day-to-day 
                                    operations of the company. I managed telephone communications, relayed messages, and handled correspondence to maintain effective internal 
                                    and external communication.
                                  </p>
                                  <p>
                                    I also performed filing, document management, and copying tasks, organized and sorted mail, and coordinated the ordering of office supplies to 
                                    support operational efficiency. Additionally, I assisted with scheduling, prepared documents, and carried out various other administrative duties
                                     essential to business operations. Through these efforts, I contributed to maintaining an organized, efficient, and well-supported work environment.
                                  </p>
                                  {/* Job responsibilities: My job responsibilities as a Construction Secretary include answering phones, filing, 
                                  copying, ordering supplies, sorting mail, relaying messages, composing correspondence, 
                                  and performing various other administrative tasks essential to business operations. */}
                                </Box>
                              </Typography>
                            <hr />
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Call Analyst 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} June 2015 – July 2017
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>}  Humanatic
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0}}>
                                  <p>
                                    <strong>Job responsibilities: </strong> As a Call Analyst, my responsibilities involved assisting clients in reviewing and analyzing their call 
                                    data to identify trends, opportunities, and areas for improvement. I prepared and delivered detailed analytical reports based 
                                    on these insights, providing actionable recommendations to enhance customer service quality and sales performance.
                                  </p>
                                  <p>
                                    Additionally, I collaborated with clients to interpret data effectively, supported decision-making processes, and helped implement 
                                    strategies to optimize call operations. Through these efforts, I contributed to improving overall client satisfaction, operational 
                                    efficiency, and business outcomes.
                                  </p>
                                  {/* Job responsibilities: My job responsibilities entail assisting clients in reviewing their calls, 
                                  followed by the provision of analytical reports. This valuable data serves to 
                                  enhance customer service and sales performance. */}
                                </Box>
                              </Typography>
                            <hr />
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Intern 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary"
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} July 2014 – October 2014
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary"
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Metro Ormoc Community Cooperative – OCCCI  
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  <p>
                                    <strong>Job responsibilities: </strong> During my internship, my responsibilities focused on supporting the finance and operations team by 
                                    updating account records and reviewing loan files to ensure accuracy and compliance with company policies. I assisted in 
                                    verifying documentation, maintaining organized records, and performing routine checks to support efficient workflow.
                                  </p>
                                  <p>
                                    This role allowed me to gain hands-on experience in financial processes, develop attention to detail, and strengthen my understanding 
                                    of organizational operations and data management practices.
                                  </p>
                                {/* Job responsibilities: My primary responsibilities encompass updating account records and reviewing loan files. */}
                                </Box>
                               </Typography>
                            <hr />   
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary"
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Intern
                              </Typography>                         
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} June 2014 – July 2014
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Oxior Incorporated
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  <p>
                                    <strong>Job responsibilities: </strong> During my internship, my responsibilities included accurately entering invoicing data into the system, 
                                    organizing and maintaining records within the database, and performing manual software testing to identify potential bugs or defects.
                                  </p>
                                  <p>
                                    This role allowed me to develop attention to detail, strengthen data management skills, and gain practical experience in software testing 
                                    and quality assurance, supporting the overall efficiency and reliability of the system.
                                  </p>
                                  {/* Job responsibilities: My responsibilities include meticulously invoicing data into the system, 
                                  systematically storing it within the database, and conducting manual testing of the software to 
                                  identify any potential bugs or defects. */}
                                </Box>
                              </Typography>
                            <hr />
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary" 
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<WorkIcon/>} Part-Time Sales Associate 
                              </Typography>
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary"
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<CalendarMonthIcon/>} April 2014 – June 2014
                              </Typography>                           
                              <Typography
                                fontWeight='none' fontSize= '16' m= '0' color="primary"
                                sx={{ "&:hover": { color: "#d9ff00" } }}>
                              {<BusinessIcon/>} Gaisano Capital
                              </Typography>
                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                  <p>
                                      <strong>Job responsibilities: </strong> During my summer employment, I was responsible for facilitating sales and enhancing the customer experience by actively 
                                      engaging with customers, offering product recommendations, and providing comprehensive product knowledge. I welcomed customers 
                                      warmly, addressed their inquiries courteously, and guided them to relevant merchandise or service counters.
                                  </p>
                                  <p>
                                    Additionally, I employed suggestive selling techniques to increase sales while ensuring customer satisfaction, contributing to a positive 
                                    shopping experience and supporting the store’s overall performance.
                                  </p>
                                  {/* Job responsibilities: Facilitates sales by actively engaging customers, employing 
                                  suggestive selling techniques, and imparting comprehensive product knowledge. 
                                  Extends a warm welcome to customers and courteously assists them in addressing 
                                  inquiries. Guides customers by escorting them to relevant merchandise racks and 
                                  service counters. */}
                                </Box>
                              </Typography>
                          </Item2>
                      </Grid>
                </Slide>
            </Grid>
    </Box>
      </Container>
       {/* Optional extra space inside */}
        <Box sx={{ height: "20px" }} /> {/* You can adjust/remove this */}
      <CssBaseline />
    </>
  );
}
