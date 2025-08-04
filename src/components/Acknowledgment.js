import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import automationtesting from '../assets/Certificates/automationtesting.jpg';
import manualtesting from '../assets/Certificates/manualtesting.jpg';
import QGIS from '../assets/Certificates/QGIS.jpg';
import arduino from '../assets/Certificates/arduino.jpg';
import OnlineStrategy from '../assets/Certificates/OnlineStrategy.jpg';
import AssociateIntegrationDeveloperCertificate from '../assets/Certificates/AssociateIntegrationDeveloperCertificate.png';
import ProfessionalIntegrationDeveloperCertification from '../assets/Certificates/ProfessionalIntegrationDeveloperCertification.png';
import ProfessionalAPIDesignCertification from '../assets/Certificates/ProfessionalAPIDesignCertification.PNG';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';
import {Slide} from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import bg4 from '../assets/BG/jr_unsplash.jpg';
import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Footer from "./Footer";
import {Helmet} from "react-helmet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
////////////////////////////////////////
const background = {
    backgroundImage: `url(${bg4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"320px",
    //width:"100vw",
  };
//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  })); 
/////////////////////////////////////////////////
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
  const CertificationCard = ({ image, title, onClick }) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300px" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            <Box sx={{ fontWeight: 'bold' }}>{title}</Box>
          </Typography>
          <Box textAlign="center">
            <Button
              onClick={onClick}
              sx={{
                color: "#fff",
                bgcolor: "#002E4E",
                '&:hover': { bgcolor: "#001F36", color: "#d9ff00" },
                borderRadius: 35,
                padding: "8px 16px",
                fontSize: "13px",
              }}
              variant="contained"
            >
              View
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
  
  const CertificationDialog = ({ open, onClose, image }) => (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative', backgroundColor: '#002E4E' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">Acknowledgment</Typography>
        </Toolbar>
      </AppBar>
      <Box textAlign="center" mt={4}>
        <img src={image} alt="" width="50%" />
      </Box>
      <Footer />
    </Dialog>
  );

  
export default function Acknowledgment() {
    const classes = useStyles()
   ///////////////////////////////////////////
   const [checkedSlide, setCheckedSlide] = useState(false);
   useEffect(() => {
     setCheckedSlide(true);
   }, []);

   /////////////////////////////////////////////
   const [openAPIBoomi, setOpenAPIBoomi] = useState(false);

   const handleClickOpenAPIBoomi = () => {
    setOpenAPIBoomi(true);
   };
 
   const handleCloseAPIBoomi = () => {
    setOpenAPIBoomi(false);
   }; 
/////////////////////////////////////////////
 const [openProfBoomi, setOpenProfBoomi] = useState(false);

  const handleClickOpenProfBoomi = () => {
    setOpenProfBoomi(true);
  };

  const handleCloseProfBoomi = () => {
    setOpenProfBoomi(false);
  }; 
     /////////////////////////////////////////////
 const [openAssoBoomi, setOpenAssoBoomi] = useState(false);

  const handleClickOpenAssoBoomi = () => {
    setOpenAssoBoomi(true);
  };

  const handleCloseAssoBoomi = () => {
    setOpenAssoBoomi(false);
  }; 
 /////////////////////////////////////////////
 const [openAuto, setOpenAuto] = useState(false);

  const handleClickOpenAuto = () => {
    setOpenAuto(true);
  };

  const handleCloseAuto = () => {
    setOpenAuto(false);
  };
 /////////////////////////////////////////////
 const [openManual, setOpenManual] = useState(false);

  const handleClickOpenManual = () => {
    setOpenManual(true);
  };

  const handleCloseManual = () => {
    setOpenManual(false);
  };
   /////////////////////////////////////////////
 const [openQGIS, setOpenQGIS] = useState(false);

 const handleClickOpenQGIS = () => {
  setOpenQGIS(true);
 };

 const handleCloseQGIS = () => {
  setOpenQGIS(false);
 };
 /////////////////////////////////////////////
 const [openArduino, setOpenArduino] = useState(false);

 const handleClickOpenArduino = () => {
  setOpenArduino(true);
 };

 const handleCloseArduino = () => {
  setOpenArduino(false);
 };
  /////////////////////////////////////////////
 const [openStrat, setOpenStrat] = useState(false);

 const handleClickOpenStrat= () => {
  setOpenStrat(true);
 };

 const handleCloseStrat = () => {
  setOpenStrat(false);
 };

//////////////////////////////////////////////////
const [visibleSections, setVisibleSections] = useState(1);

const handleSeeMore = () => setVisibleSections(prev => prev + 1);
const handleSeeLess = () => setVisibleSections(1);

  return (
    <>
    <Helmet>
            <title> Portfolio | Acknowledgment </title>
            <meta name="Acknowledgment" content="Acknowledgment" />
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
                                About my Acknowledgment
                              </Box>   
                            </Typography>
                            </center>                    
                        </Item>
                        <br/> 
                    </Grid>
                </Slide>
   </Grid>
    {/* Add vertical space here */}
    <Box sx={{ mt: 4 }} />  {/* mt = margin-top, 4 = ~32px */}
    {visibleSections >= 1 && (
  <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center">
    {/* Cards group 1: API, Integration Dev, Associate Dev */}
  
        <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
                alignItems= "center"
                justifyContent= "center" >

              <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft">           
                            <CardActionArea>
                                <CardMedia id="myImg"
                                component="img"
                                height="300px"
                                //image="./assets/Belle.jpg"
                                image={ProfessionalAPIDesignCertification}
                                alt="Boomi"
                                />
                                <CardContent>
                                    <center>
                                        <Typography color="body1" gutterBottom variant="h6" component="div">
                                            <Box sx={{ fontWeight: 'bold', m: 0}}>
                                            Professional API Design Certification {<br/>} Boomi
                                            </Box>  
                                        </Typography>
                                    
                                                <Button className={classes.button}  
                                                      onClick={handleClickOpenAPIBoomi} 
                                                      sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                                </Button>                                
                                    </center>                   
                                </CardContent>
                            </CardActionArea>
                    </Card>               
                </Grid>
                        <Dialog
                          fullScreen
                          open={openAPIBoomi}
                          onClose={handleCloseAPIBoomi}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseAPIBoomi}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={ProfessionalAPIDesignCertification} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog> 
      
                  <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft">           
                            <CardActionArea>
                                <CardMedia id="myImg"
                                component="img"
                                height="300px"
                                //image="./assets/Belle.jpg"
                                image={ProfessionalIntegrationDeveloperCertification}
                                alt="Boomi"
                                />
                                <CardContent>
                                    <center>
                                        <Typography color="body1" gutterBottom variant="h6" component="div">
                                            <Box sx={{ fontWeight: 'bold', m: 0}}>
                                            Professional Integration Developer Certification <br /> Boomi
                                            </Box>  
                                        </Typography>
                                    
                                                <Button className={classes.button}  
                                                      onClick={handleClickOpenProfBoomi} 
                                                      sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                                </Button>                                
                                    </center>                   
                                </CardContent>
                            </CardActionArea>
                    </Card>               
                  </Grid>
                        <Dialog
                          fullScreen
                          open={openProfBoomi}
                          onClose={handleCloseProfBoomi}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseProfBoomi}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={ProfessionalIntegrationDeveloperCertification} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog>    

                <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft">           
                            <CardActionArea>
                                <CardMedia id="myImg"
                                component="img"
                                height="300px"
                                //image="./assets/Belle.jpg"
                                image={AssociateIntegrationDeveloperCertificate}
                                alt="Boomi"
                                />
                                <CardContent>
                                    <center>
                                        <Typography color="body1" gutterBottom variant="h6" component="div">
                                            <Box sx={{ fontWeight: 'bold', m: 0}}>
                                            Associate Integration Developer Certification <br /> Boomi
                                            </Box>  
                                        </Typography>
                                    
                                                <Button className={classes.button}  
                                                      onClick={handleClickOpenAssoBoomi} 
                                                      sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                                </Button>                                
                                    </center>                   
                                </CardContent>
                            </CardActionArea>
                    </Card>               
                  </Grid>
                        <Dialog
                          fullScreen
                          open={openAssoBoomi}
                          onClose={handleCloseAssoBoomi}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseAssoBoomi}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={AssociateIntegrationDeveloperCertificate} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog>                                                            
     </Grid>  
  </Grid>
)}
 {/* Add vertical space here */}
 <Box sx={{ mt: 4 }} />  {/* mt = margin-top, 4 = ~32px */}
{visibleSections >= 2 && (
  <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center">
    {/* Cards group 2: Auto Test, Manual Test, QGIS */}
    <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
        alignItems= "center"
        justifyContent= "center"                                                                                                               
     >

              <Grid margin="auto">
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft">           
                            <CardActionArea>
                                <CardMedia id="myImg"
                                component="img"
                                height="300px"
                                //image="./assets/Belle.jpg"
                                image={automationtesting}
                                alt="Automation Testing"
                                />
                                <CardContent>
                                    <center>
                                        <Typography color="body1" gutterBottom variant="h6" component="div">
                                            <Box sx={{ fontWeight: 'bold', m: 0}}>
                                                Software Quality Assurance  Automation Testing
                                            </Box>  
                                        </Typography>
                                    
                                                <Button className={classes.button}  
                                                      onClick={handleClickOpenAuto} 
                                                      sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                                </Button>                                
                                    </center>                   
                                </CardContent>
                            </CardActionArea>
                    </Card>               
                  </Grid>
                      <Dialog
                          fullScreen
                          open={openAuto}
                          onClose={handleCloseAuto}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseAuto}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={automationtesting} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog>                                           

                <Grid margin="auto" >
                    <Card sx={{ maxWidth: 345 }} className="bottomLeft"> 
                        <CardActionArea>
                            <CardMedia id="myImg"
                            component="img"
                            height="300px"
                            //   image="./assets/Belle.jpg"
                            image={manualtesting}
                            alt="Manual Testing"
                            />
                            <CardContent>
                                <center>
                                    <Typography gutterBottom variant="h6" component="div">
                                        <Box sx={{ fontWeight: 'bold', m: 0}}>
                                            Software Quality Assurance Manual Testing
                                        </Box>     
                                    </Typography>
                                    <Button className={classes.button}   
                                                      onClick={handleClickOpenManual} 
                                                      sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }}       
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                    </Button> 
                                </center>
                            
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
                      <Dialog
                          fullScreen
                          open={openManual}
                          onClose={handleCloseManual}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseManual}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={manualtesting} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                       </Dialog>
                       
                <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia id="myImg"
                            component="img"
                            height="300px"                   
                            //   image="./assets/Belle.jpg"
                            image={QGIS}
                            alt="Quantum Geographic Information System"
                            />
                            <CardContent>
                                <center>
                                <Typography gutterBottom variant="h6" component="div">
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    Quantum Geographic Information System
                                    </Box>    
                                </Typography>
                                <Button className={classes.button}   
                                                  onClick={handleClickOpenQGIS} 
                                                  sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }}      
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                </Button> 
                                </center>                          
                            </CardContent>
                        </CardActionArea>
                        </Card>
                </Grid> 
                      <Dialog
                          fullScreen
                          open={openQGIS}
                          onClose={handleCloseQGIS}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseQGIS}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={QGIS} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog>                                           
        </Grid>    
  </Grid>
)}

 {/* Add vertical space here */}
 <Box sx={{ mt: 4 }} />  {/* mt = margin-top, 4 = ~32px */}

{visibleSections >= 3 && (
  <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center">
    {/* Cards group 3: Arduino, Online Strategy */}
    <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
          alignItems= "center"
          justifyContent= "center"                                                                                                               
         >          


                <Grid margin="auto" >
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia id="myImg"
                            component="img"
                            height="300px"                   
                            //   image="./assets/Belle.jpg"
                            image={arduino}
                            alt="Robotics Workshop via Arduino"
                            />
                            <CardContent>
                            <center>
                             <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                          Robotics Workshop <br /> via Arduino
                                    </Box>
                            </Typography>
                            <Button className={classes.button}   
                                    onClick={handleClickOpenArduino} 
                                    sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                            </Button> 
                            </center>                          
                            </CardContent>
                        </CardActionArea>
                        </Card>
                  </Grid>  
                        <Dialog
                          fullScreen
                          open={openArduino}
                          onClose={handleCloseArduino}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseArduino}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={arduino} alt="" 
                                      height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog>  
      

               <Grid margin="auto">
                    <Card sx={{ maxWidth: 345}} className="bottomRight">
                        <CardActionArea>
                            <CardMedia id="myImg"
                            component="img"
                            height="300px"                   
                            //image="./assets/Belle.jpg"
                            image={OnlineStrategy}
                            alt="Utilizing Online Strategy, Tools and Tactics for E-Tourism"
                            />
                            <CardContent>
                            <center>
                                <Typography gutterBottom variant="h6" component="div">
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                        Utilizing Online Strategy, <br /> Tools & Tactics 
                                    </Box>    
                                </Typography>
                                <Button className={classes.button}   
                                        onClick={handleClickOpenStrat} 
                                        sx={{color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                                      style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "#002E4E",
                                                        padding: "8px 16px",
                                                        fontSize: "13px",
                                                      }} 
                                                      variant="contained">  View 
                                </Button> 
                            </center>                          
                            </CardContent>
                        </CardActionArea>
                        </Card>
                </Grid> 
                    <Dialog
                          fullScreen
                          open={openStrat}
                          onClose={handleCloseStrat}
                          TransitionComponent={Transition}
                        >
                          <AppBar sx={{ position: 'relative', backgroundColor:'#002E4E' }}>
                            <Toolbar>
                              <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseStrat}
                                aria-label="close"
                              >
                                <CloseIcon />
                              </IconButton>
                              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Acknowledgment
                              </Typography>
                            </Toolbar>
                          </AppBar>
                              <br/>
                                  <center>
                                      <img src={OnlineStrategy} alt=""
                                           height="auto" width="50%" 
                                      />
                                  </center>
                              <br />
                                <Footer/>
                        </Dialog>                                          
        </Grid>         
  </Grid>
)}

<Box sx={{ textAlign: "center", mt: 4 }}>
  {visibleSections < 3 ? (
    <Typography
      onClick={handleSeeMore}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        borderRadius: "30px",
        backgroundColor: "#002E4E",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          color: "#d9ff00",
          textDecoration: "none",
        },
      }}
    >
      See more
    </Typography>
  ) : (
    <Typography
      onClick={handleSeeLess}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        borderRadius: "30px",
        backgroundColor: "#002E4E",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          color: "#d9ff00",
          textDecoration: "none",
        },
      }}
    >
      See less
    </Typography>
  )}
</Box>
 

   
    

                                               
     </Box>
     </Container>
    </>
   
  );
}
