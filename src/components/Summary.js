import {React} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import aboutme from '../assets/aboutme.jpg';
import scoding from '../assets/coding.jpg';
import SoftwareTesting from '../assets/software_testing.jpg';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//         else
//         {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('hidden');
// hiddenElements.forEach((el) => observer.observe(el));


export default function Summary() {
    const navigate = useNavigate();
  return (
    <>
   <Container sx={{padding: '2rem'}}>
   <Box  sx={{ flexGrow: 1 }} id="id-to-info">
   <ScrollAnimation animateIn='fadeIn'
      animateOut='fadeOut'  
    >
     <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
                                                    alignItems= "center"
                                                    justifyContent= "center"                                                                                                               
     >
    
                <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft"
                    >
             
                    <CardActionArea>
                        <CardMedia id="myImg"
                        component="img"
                        height="300px"
                        //image="./assets/Belle.jpg"
                        image={aboutme}
                        alt="Belle"
                        sx={{ zIndex:'-2'}}
                        />
                        <CardContent>
                        <Typography  color="body1" gutterBottom variant="h6" component="div">     
                                <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    A self-introduction
                                </Box>
                        </Typography>
                        <Typography color="primary"> 
                        {/* ,color:'#002E4E' */}
                            <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                "I've worked hard my education and now I'm ready to apply my knowledge 
                                into practice."
                            </Box>
                        </Typography>
    
                        </CardContent>
                    </CardActionArea>
                        <center> 
                                    {/* <NavLink to="/About" > */}
                                          <Button   
                                            onClick={()=> navigate("/About")}
                                             //onClick={event =>  window.location.href='/About'}
                                         
                                            sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                style={{
                                                  borderRadius: 35,
                                                  backgroundColor: "#002E4E",
                                                  padding: "8px 16px",
                                                  fontSize: "13px",
                                                  }} 
                                                  variant="contained"> More...
                                          </Button>  
                                    {/* </NavLink>  */}
                        </center>
                        <br />
                    </Card>
            </Grid>

            <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft"
                     >
                        <CardActionArea>
                            <CardMedia id="myImg"
                            component="img"
                            height="300px"
                            //   image="./assets/Belle.jpg"
                            image={scoding}
                            alt="Belle"
                            />
                            <CardContent>
                            <Typography color="body1" gutterBottom variant="h6" component="div">
                            <Box sx={{ fontWeight: 'bold', m: 0}}>
                                Why I love coding?
                            </Box>
                            </Typography>
                            
                            <Typography color="primary">
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0}}>
                                    "It can sharpen your mind, rewire your brain, provide people with 
                                    great software."
                                 </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <center>
                            {/* <NavLink to="/Experiences" > */}
                            <Button  size="small" color="primary"
                                    onClick={()=> navigate("/Experiences")}
                                    //onClick={event =>  window.location.href='/Experiences'}
                                    sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                    style={{
                                        borderRadius: 35,
                                        backgroundColor: "#002E4E",
                                        padding: "8px 16px",
                                        fontSize: "13px",
                                    }} 
                                    variant="contained"> More...
                            </Button> 
                            {/* </NavLink> */}
                        </center>
                        <br />
                        </Card>
            </Grid>

            <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight"
                    >
                        <CardActionArea>
                            <CardMedia id="myImg"
                            component="img"
                            height="300px"                   
                            //   image="./assets/Belle.jpg"
                            image={SoftwareTesting}
                            alt="Belle"
                            />
                            <CardContent>
                            <Typography color="body1" gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    Why do I like Software testing?
                                    </Box>
                            </Typography>
                            <Typography color="primary">
                            <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0 }}>
                                "Due to its inherent appeal in ensuring the robustness 
                                of software applications."
                            </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <center>
                        {/* <NavLink to="/Projects" > */}
                            <Button  size="small" color="primary"
                                    onClick={()=> navigate("/Projects")}
                                    //onClick={event =>  window.location.href='/Projects'}
                                    sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                    style={{
                                        borderRadius: 35,
                                        backgroundColor: "#002E4E",
                                        padding: "8px 16px",
                                        fontSize: "13px",
                                    }} 
                                    variant="contained"> More...
                            </Button> 
                        {/* </NavLink> */}
                        </center>
                        <br />
                        </Card>
            </Grid>        
     </Grid>  
     </ScrollAnimation>  
     </Box>
     </Container>
    </>
   
  );
}
