import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions} from '@mui/material';
import HotelReservation from '../assets/HotelReservation.jpg';
import MotorcycleInventory from '../assets/MotorcycleInventory.jpg';
import SchoolManagement from '../assets/SchoolManagement.jpg';
import FoodReservation from '../assets/FoodReservation.jpg';
import PortfolioImage from '../assets/PortfolioImage.jpg';
import SocialMediaImage from '../assets/SocialMediaImage.jpg';
import bg3 from '../assets/BG/ch_unsplash.jpg';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../App.css';
import {motion} from "framer-motion";
import {Slide} from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {Helmet} from "react-helmet";
////////////////////////////////////////
const background = {
    backgroundImage: `url(${bg3})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"320px",
    //width:"100vw",
  };
//////////////////////////////////////////////////
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
///////////////////////////////////////
const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: {duration: 0.75}},
    hidden: {opacity: 1, scale: 0}
};
//////////////////////////////////////
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

export default function Projects() {
    ///////////////////////////////////////////
      const [checkedSlide, setCheckedSlide] = useState(false);
      useEffect(() => {
        setCheckedSlide(true);
      }, []);
    /////////////////////////////////////////////
  return (
    <>
        <Helmet>
            <title> Portfolio | Projects </title>
            <meta name="Projects" content="Projects" />
      </Helmet>
    <div style={background}></div>
   <Container sx={{padding: '2rem', marginTop: "-320px",}}>
        <Box  sx={{ flexGrow: 1 }} >
            <Grid>
                <Slide
                      direction="left"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >  
                    <Grid>
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)', width: '98%',}}>
                            <center>
                            <Typography>
                              <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'white'}}>
                                Get to know more
                              </Box>   
                            </Typography>

                            <Typography>
                              <Box sx={{ fontWeight: 'none', fontSize: 20, m: 0, color:'white', letterSpacing: 6, fontFamily: 'Monospace' }}>
                                About my Projects
                              </Box>   
                            </Typography>
                            </center>                    
                        </Item>
                        <br/> 
                    </Grid>
                </Slide>
            </Grid>
        <motion.div
            className="Box"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
        >
            <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
                alignItems= "center"
                justifyContent= "center"                                                                                                               
            >
                <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft">
             
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300px"
                        //image="./assets/Belle.jpg"
                        image={HotelReservation}
                        alt="Hotel Reservation"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            <Box sx={{ fontWeight: 'bold', m: 0, color:'body1'}}>
                            Hotel Reservation
                            </Box>  
                        </Typography>
                        <Typography>
                            <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'primary' }}>
                                "Developed the Hotel Reservation System for Syshore Hotel, employing HTML and CSS for the 
                                front-end and PHP for the back-end."
                            </Box>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                       &nbsp; Photo by &nbsp; <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Kelly Sikkema </a>                    
                    </CardActions>
                    </Card>
            </Grid>
          
            <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft" >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300px"
                            //   image="./assets/Belle.jpg"
                            image={MotorcycleInventory}
                            alt="Motorcycle Inventory"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <Box sx={{ fontWeight: 'bold', m: 0, color:'body1'}}>
                                    Motorcycle Inventory System
                                </Box>  
                            </Typography>
                            <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'primary' }}>
                                    "Contributed to the Motorcycle Inventory System, utilizing Visual Basic.net for the windows application and C# for the back-end."
                                </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        &nbsp; Photo by &nbsp; <a href="https://unsplash.com/@harleydavidson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> Harley-Davidson </a> 
                        </CardActions>
                        </Card>
            </Grid>
         
            <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300px"                   
                            //image="./assets/Belle.jpg"
                            image={SchoolManagement}
                            alt="School Management"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <Box sx={{ fontWeight: 'bold', m: 0, color:'body1'}}>
                                    School Management System
                                </Box>  
                            </Typography>
                            <Typography>
                                  <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'primary' }}>
                                  "Development of a School Management System for SNHS, integrating ReactJS 
                                   for the front-end and C# for the back-end."
                                  </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        &nbsp; Photo by &nbsp; <a href="https://unsplash.com/@headwayio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Headway</a> 
                        </CardActions>
                        </Card>
            </Grid>         
     </Grid>  
     <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
            alignItems= "center"
            justifyContent= "center"                                                                                                               
     >
     <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300px"                   
                            //image="./assets/Belle.jpg"
                            image={FoodReservation}
                            alt="Food Reservation"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <Box sx={{ fontWeight: 'bold', m: 0, color:'body1'}}>
                                    Food Reservation System
                                </Box>  
                            </Typography>
                            <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'primary' }}>
                                    "Designed and implemented the Food Reservation System for Sogod Bellychon, using 
                                    ReactJS for the front-end and C# for the back-end."
                                </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        &nbsp; Photo by &nbsp; <a href="https://unsplash.com/@webvilla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Webvilla</a>
                        </CardActions>
                        </Card>
            </Grid>     
            <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300px"                   
                            //   image="./assets/Belle.jpg"
                            image={PortfolioImage}
                            alt="Portfolio"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <Box sx={{ fontWeight: 'bold', m: 0, color:'body1'}}>
                                    Portfolio
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'primary' }}>
                                "Crafted a visually appealing Portfolio web design functioning as a Curriculum Vitae, employing 
                                ReactJS for the front-end and C# for the back-end."
                                </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                         <CardActions>
                             &nbsp; Photo by &nbsp; <a href="https://unsplash.com/@halacious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hal Gatewood</a> 
  
                        </CardActions>
                        </Card>
            </Grid>  
            <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300px"                   
                            //image="./assets/Belle.jpg"
                            image={SocialMediaImage}
                            alt="Social Media Image"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <Box sx={{ fontWeight: 'bold', m: 0, color:'body1'}}>
                                    Social Media ReactJS
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 14, m: 0, color:'primary' }}>
                                "Executed the development of a Social Media platform, utilizing React JS with Material-UI for the front-end,
                                while the back-end was powered by Node.js with Bench SQL."
                                </Box>
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                         &nbsp; Photo by &nbsp; <a href="https://unsplash.com/@prateekkatyal?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Prateek Katyal</a>
  
                        </CardActions>
                        </Card>
            </Grid>    
        </Grid>   
        </motion.div> 
        </Box>
    </Container>
    </>
   
  );
}
