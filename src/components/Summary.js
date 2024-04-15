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
// import { useNavigate } from "react-router-dom";
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
    // const navigate = useNavigate();
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
                        <Typography gutterBottom variant="h6" component="div">     
                                <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                    A self-introduction
                                </Box>
                        </Typography>
                        <Typography>
                            <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                "I've worked hard my education and now I'm ready to apply my knowledge 
                                into practice."
                            </Box>
                        </Typography>
    
                        </CardContent>
                    </CardActionArea>
                        <center> 
                                          <Button   
                                            //onClick={()=> navigate("/About")}
                                             onClick={event =>  window.location.href='/About'}
                                            sx={{ "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                style={{
                                                  borderRadius: 35,
                                                  backgroundColor: "#002E4E",
                                                  padding: "8px 16px",
                                                  fontSize: "13px",
                                                  }} 
                                                  variant="contained"> More...
                                          </Button>   
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
                            <Typography gutterBottom variant="h6" component="div">
                            <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                Why I love coding?
                            </Box>
                            </Typography>
                            
                            <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                    "It can sharpen your mind, rewire your brain, provide people with 
                                    great software."
                                 </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <center>
                            <Button  size="small" color="primary"
                                    //onClick={()=> navigate("/Experiences")}
                                    onClick={event =>  window.location.href='/Experiences'}
                                    sx={{ "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                    style={{
                                        borderRadius: 35,
                                        backgroundColor: "#002E4E",
                                        padding: "8px 16px",
                                        fontSize: "13px",
                                    }} 
                                    variant="contained"> More...
                            </Button> 
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
                            <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0, color:'#002E4E'}}>
                                    Why do I like Software testing?
                                    </Box>
                            </Typography>
                            <Typography>
                            <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'#002E4E' }}>
                                "Due to its inherent appeal in ensuring the robustness 
                                of software applications."
                            </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <center>
                            <Button  size="small" color="primary"
                                    //onClick={()=> navigate("/Projects")}
                                    onClick={event =>  window.location.href='/Projects'}
                                    sx={{ "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                    style={{
                                        borderRadius: 35,
                                        backgroundColor: "#002E4E",
                                        padding: "8px 16px",
                                        fontSize: "13px",
                                    }} 
                                    variant="contained"> More...
                            </Button> 
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
