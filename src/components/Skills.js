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
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';
import {Helmet} from "react-helmet";
import { FunnelChart, Funnel, LabelList, ResponsiveContainer } from "recharts";
import Tooltip from '@mui/material/Tooltip';

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
    color: theme.palette.text.secondary,
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
export default function Skills(propsBackTop,propsElevate) {

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
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                         Adobe Photoshop
                                                         <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value1}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value1}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                      
                                                </Typography>  
                                                <hr/>   
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                        Adobe Illustrator
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value2}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value2}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr/>                      
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                         HTML
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value3}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value3}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                         CSS
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value4}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value4}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                         Javascript
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value5}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value5}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                        PHP 
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value6}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value6}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                        Material UI
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value7}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value7}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                        ReactJS
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value8}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value8}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                        VB.net
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value9}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value9}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>
                                                <hr/> 
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                        Zentao Tool
                                                        <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value10}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value10}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>
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
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                         Selenium using Java
                                                         <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value11}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value11}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr/>  
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    IDE Selenium
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value12}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value12}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    Postman
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value13}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value13}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    Insomnia
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value14}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value14}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    Node JS
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value15}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value15}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    XAMPP
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value16}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value16}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    C#
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value17}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value17}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>   
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    SQL Express 
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value18}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value18}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography> 
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    Flash
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value19}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value19}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>  
                                                <hr />
                                                <Typography gutterBottom variant="h6" component="div">     
                                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                                    Vegas Pro 
                                                    <span>
                                                            <CircularProgress 
                                                                color="success" size="md" determinate value={value20}
                                                                style={{
                                                                float: "right"}}>
                                                                <Typography
                                                                    sx={{ fontWeight: 'none', fontSize: '0.99em', m: 0, color:'#002E4E'}}
                                                                >{value20}%</Typography>
                                                            </CircularProgress>  
                                                         </span>
                                                    </Box>                             
                                                </Typography>                  
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
                                        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                                    </Funnel>
                            </FunnelChart> 
                        </ResponsiveContainer>                                 
                    </center> 
            </Box>    
        </Container>
    </>
  );
}