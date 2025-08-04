import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '../App.css'
import {Slide} from "@mui/material";
import bg7 from '../assets/BG/ag_unsplash.jpg';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
// import CircularProgress from '@mui/joy/CircularProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCountUp } from 'use-count-up';
import {Helmet} from "react-helmet";
import { FunnelChart, Funnel, LabelList, ResponsiveContainer } from "recharts";
import Tooltip from '@mui/material/Tooltip';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
///////////////////////////////////////////////////////
const background = {
    backgroundImage: `url(${bg7})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"300px",
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
/////////////////////////////////////////
const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.body1,
  }));
///////////////////////////////////////////
const data = [
    {
      "value": 100,
      "name": "Web Design",
      "fill": "#8884d8"
    },
    {
      "value": 80,
      "name": "Manual Testing",
      "fill": "#83a6ed"
    },
    {
      "value": 60,
      "name": "SQL Query",
      "fill": "#8dd1e1"
    },
    {
      "value": 40,
      "name": "API testing",
      "fill": "#82ca9d"
    },
    {
      "value": 26,
      "name": "Automation Testing",
      "fill": "#a4de6c"
    }
  ]
//////////////////////////////////////////

//////////////////////////////////////////
export default function Skills() {

  /////////////////////////////////////
  const { value: value1 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 85,
  });

  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 75,
  });

  const { value: value3 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 100,
  });

  
  const { value: value4 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 95,
  });

  
  const { value: value5 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 90,
  });

  
  const { value: value6 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 70,
  });

  
  const { value: value7 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 100,
  });

  
  const { value: value8 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 100,
  });

  
  const { value: value9 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 95,
  });

  
  const { value: value10 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 100,
  });

  const { value: value11 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 67,
  });

  const { value: value12 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 78,
  });

  const { value: value13 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 80,
  });

  const { value: value14 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 80,
  });

  const { value: value15 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 75,
  });

  const { value: value16 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 80,
  });

  const { value: value17 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 80,
  });

  const { value: value18 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 88,
  });

  const { value: value19 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 87,
  });

  const { value: value20 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 90,
  });
  const { value: value21 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 50,
  });
  const { value: value22 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 50,
  });
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
            <title> Portfolio | Skills </title>
            <meta name="Skills" content="Skills" />
        </Helmet>
       <div style={background}></div>
        <Container sx={{padding: '5px', marginTop: "-250px",}}>          
            <Box id="get-info-home"
                sx={{ flexGrow: 1, padding: '5px' }} >

                <Slide
                      direction="left"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >  
                    <Grid item xs={12}>
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)',}}>
                            <center>
                                <Typography>
                                    <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'white'}}>
                                    Personal Skills
                                    </Box>    
                                </Typography> 
                                <Typography>
                                    <Box sx={{ fontWeight: 'none', fontSize: 16, m: 0, color:'white', letterSpacing: 1, fontFamily: 'Monospace' }}>
                                    My proficiency in web designing, coding, and software testing demonstrates a comprehensive 
                                    mastery of technical skills essential for delivering high-quality digital solutions.
                                    </Box>
                                </Typography>
                            </center>                                       
                        </Item>
                        <br/> 
                    </Grid>
                </Slide>


                <Grid container spacing={3}  columns={12}
                            direction={{ xs: 'column', sm: 'row' }}>
                    <Slide
                          direction="right"
                          in={checkedSlide}
                          {...(checkedSlide ? { timeout: 1000 } : {})}
                          collapsedheight={50}
                        >
                            
                                <Grid item xs={6}
                                    style={{
                                    width:"100%"
                                    }}>
                                    <Item2>
                                        <div>    
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         Adobe Photoshop
                                                         <span>
                                                         <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value1} text={`${value1}%`}  />
                                                        </Box>
                                                         </span>
                                                    </Box>                      
                                                </Typography> 
                                                <hr/>   
                                                 <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                        Adobe Illustrator
                                                        <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value2} text={`${value2}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box> 
                                                    </Typography>                           
                                                
                                                <hr/>                      
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         HTML
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value3} text={`${value3}%`}  /> 
                                                            </Box> 
                                                    </Box>                             
                                                </Typography>   
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         CSS
                                                        <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value4} text={`${value4}%`}  /> 
                                                            </Box>   
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         Javascript
                                                        <span>
                                                           <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value5} text={`${value5}%`}  /> 
                                                            </Box>  
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                        PHP 
                                                        <span>
                                                        <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value6} text={`${value6}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                      {/* , color:'#002E4E' */}
                                                        Material UI
                                                        <span>
                                                        <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value7} text={`${value7}%`}  /> 
                                                            </Box>   
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                        ReactJS
                                                        <span>
                                                        <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value8} text={`${value8}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography>
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                        VB.net
                                                        <span>
                                                        <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value9} text={`${value9}%`}  /> 
                                                            </Box>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>
                                                <hr/> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                        Zentao Tool
                                                        <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value10} text={`${value10}%`}  /> 
                                                            </Box>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>
                                                <hr/>
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Bubble IO
                                                        <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value22} text={`${value22}%`}  /> 
                                                            </Box> 
                                                        </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr /> 

                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         Visual Studio Code
                                                         <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value20} text={`${value20}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/>   

                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                          Microsoft Azure
                                                         <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value22} text={`${value22}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/>       
                                        </div>
                                    </Item2>
                              </Grid>
                    </Slide>

                    <Slide
                            direction="left"
                            in={checkedSlide}
                            {...(checkedSlide ? { timeout: 1000 } : {})}
                            collapsedheight={50}
                        >
                            
                                <Grid item xs={6}
                                        style={{
                                        width:"100%"
                                        }}>
                                        <Item2>
                                            <div>                           
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         Selenium using Java
                                                         <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value11} text={`${value11}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr/>  
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    IDE Selenium
                                                    <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value12} text={`${value12}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Postman
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value13} text={`${value13}%`}  /> 
                                                            </Box>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Insomnia
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value14} text={`${value14}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Node JS
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value15} text={`${value15}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    XAMPP
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value16} text={`${value16}%`}  /> 
                                                            </Box>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography color="body1"  gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    C#
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value17} text={`${value17}%`}  /> 
                                                            </Box>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    SQL Express 
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value18} text={`${value18}%`}  /> 
                                                            </Box>
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Flash
                                                    <span>
                                                    <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value19} text={`${value19}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Vegas Pro 
                                                        <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value20} text={`${value20}%`}  /> 
                                                            </Box> 
                                                        </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr /> 
                                                <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                    Jotform
                                                        <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value21} text={`${value21}%`}  /> 
                                                            </Box> 
                                                        </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr />  

                                                 <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                         Microsoft Visual Studio Management
                                                         <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value20} text={`${value20}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/>  

                                                  <Typography color="body1" gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                          Oracle SQL Developer
                                                         <span>
                                                            <Box 
                                                            style={{ width: 50, height: 50, float: "right", fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E' }}> 
                                                            <CircularProgressbar value={value18} text={`${value18}%`}  /> 
                                                            </Box> 
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/>             
                                            </div>
                                    </Item2>
                                </Grid>
                          
                    </Slide>                         
                </Grid>
                <br/> 
                    <center>           
                        <ResponsiveContainer width="95%" height={400}>
                            <FunnelChart>
                                <Tooltip cursor={false} />
                                    <Funnel 
                                        dataKey="value"
                                        data={data}
                                        isAnimationActive
                                    >
                                        <LabelList position="right" fill="#16E42C" stroke="none" dataKey="name" />
                                    </Funnel>
                            </FunnelChart> 
                        </ResponsiveContainer>                                
                    </center> 
            </Box>    
        </Container>
    </>
  );
}