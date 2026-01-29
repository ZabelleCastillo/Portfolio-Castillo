import { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import {Slide} from "@mui/material";
import Button from '@mui/material/Button';
import monitor from '../assets/Services/monitor.gif';
import css from '../assets/Services/css.gif';
import html from '../assets/Services/html.gif';
import browser from '../assets/Services/browser.gif';
import responsive from '../assets/Services/responsive.gif';
import settings from '../assets/Services/settings.gif';
import search from '../assets/Services/search.gif';
import books from '../assets/Services/books.gif';
import bubblechat from '../assets/Services/bubblechat.gif';
import bg5 from '../assets/BG/js_unsplash.jpg';
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";

const background = {
  backgroundImage: `url(${bg5})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height:"230px",
  //width:"100vw",
};
/////////////////////////////////////////////////
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
})); 
//////////////////////////////////////////////////
const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.body1,
  }));

export default function Services() {
  const navigate = useNavigate();
  ///////////////////////////////////
  const [checkedSlide, setCheckedSlide] = useState(false);
  useEffect(() => {
    setCheckedSlide(true);
  }, []);

  return (
    <>
    <Helmet>
        <title> Portfolio | Services </title>
        <meta name="Services" content="Services" />
      </Helmet>
      <CssBaseline />
      <div style={background}></div>
      <Container sx={{padding: '5px', marginTop: "-200px",}}>
        <Box 
        // sx={{ bgcolor: '#cfe8fc', height: '100vh',width: '100%', margin: 'auto' }}>
        sx={{ flexGrow: 1, padding: '5px' }} >
            <Container 
             direction={{ xs: 'column', sm: 'row' }}
                container rowSpacing={1} columnSpacing={{xs:4, sm:5,md:3}}
                alignItems= "center"
                justifyContent= "center"
                margin="auto" 
            >
                <Slide
                      direction="left"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >  
                    <Grid item xs={12}>
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)',}}>
                            <center>
                            <Typography
                              // variant="h3"
                              // sx={{
                              //   fontSize: {
                              //     xs: "16px",
                              //     sm: "24px",
                              //   },
                              // }}
                            >
                                <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'white'}}>
                                  Features & Services
                                </Box>    
                            </Typography>

                            <Typography>
                              <Box sx={{ fontWeight: 'none', fontSize: 16, m: 0, color:'white', letterSpacing: 1, fontFamily: 'Monospace' }}>
                                Customized solutions crafted specifically to address the unique needs and 
                                objectives of your business.
                              </Box>
                            </Typography>
                          <br/>
                            <Button   sx={{ color: "#fff", "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                  onClick={()=> navigate("/Contact")}
                                //onClick={event =>  window.location.href='/Contact'}  
                                  style={{                                    
                                     borderRadius: 35,
                                     backgroundColor: "#002E4E",
                                    padding: "8px 16px",
                                    fontSize: "13px",
                                    }} 
                                    variant="contained"> Contact me 
                            </Button> 
                            </center>                    
                        </Item>
                    </Grid>
                </Slide>
                <br/> 

              <Slide
                      direction="up"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >    
                 <Grid 
                      direction={{ xs: 'column', sm: 'row' }}
                      container rowSpacing={1} columnSpacing={{xs:4, sm:5,md:3}}
                      alignItems= "center"
                      justifyContent= "center"
                      margin="auto" 
                  >                  
                        <Grid item xs={6}
                        style={{
                          width:"100%"
                        }}>
                            <Item2>
                              <div>                           
                                  <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                        Website Design 
                                        <span>
                                            <img src={monitor} alt='Website Design' 
                                                style={{
                                                float: "right",
                                                width: "50px",
                                                height: "50px",
                                                boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                }}
                                            /> 
                                        </span> 
                                    </Box>                             
                                  </Typography>
                                  <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                                    ESTIMATED RANGE ($ per hour) <br/> 
                                    $8 to $15
                                  </Typography>                                 
                              </div>

                                                  
                          </Item2>
                        </Grid> 
                        <Grid item xs={6}
                         style={{
                          width:"100%"
                        }}>
                            <Item2>
                            <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                        Front-end Coding
                                        <span>
                                              <img src={css} alt='Front-end Coding' 
                                                            style={{
                                                            float: "right",
                                                            width: "50px",
                                                            height: "50px",
                                                            boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                            }}
                                              /> 
                                          </span> 
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                                ESTIMATED RANGE ($ per hour) <br/> 
                                $10 to $18
                            </Typography>          
                          </Item2>
                        </Grid>    

                         <Grid item xs={6}
                          style={{
                          width:"100%"
                        }}>
                            <Item2>
                            <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                      Back-end Coding 
                                    <span>
                                          <img src={html} alt='Back-end Coding' 
                                                        style={{
                                                        float: "right",
                                                        width: "50px",
                                                        height: "50px",
                                                        boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                        }}
                                          /> 
                                      </span>    
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                              ESTIMATED RANGE ($ per hour) <br/> 
                              $12 to $20
                            </Typography>
                          </Item2>
                        </Grid>
                    
                        <Grid item xs={6}
                        style={{
                          width:"100%"
                        }}>
                            <Item2>                        
                            <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                      Full Stack 
                                    <span>
                                          <img src={browser} alt='Full Stack ' 
                                                        style={{
                                                        float: "right",
                                                        width: "50px",
                                                        height: "50px",
                                                        boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                        }}
                                          /> 
                                      </span>    
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                              ESTIMATED RANGE ($ per hour) <br/>
                              $14 to $22
                            </Typography>
                          </Item2>
                        </Grid>           

                        <Grid item xs={6}
                         style={{
                          width:"100%"
                        }}>
                      <Item2>
                        <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    E-commerce Setup 
                                  <span>
                                  <img src={responsive} alt='E-commerce Setup ' 
                                                style={{
                                                float: "right",
                                                width: "50px",
                                                height: "50px",
                                                boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                }}
                                      /> 
                                  </span> 
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                                ESTIMATED RANGE ($ per hour) <br/>
                                $18 to $25
                            </Typography>
                      </Item2>
                  </Grid>

                  <Grid item xs={6}
                  style={{
                          width:"100%"
                        }}>
                      <Item2>
                        <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    Website Maintenance 
                                  <span>
                                            <img src={settings} alt='Website Maintenance ' 
                                                          style={{
                                                          float: "right",
                                                          width: "50px",
                                                          height: "50px",
                                                          boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                          }}
                                            /> 
                                    </span>  
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                                ESTIMATED RANGE ($ per hour) <br/> 
                                $7 to $12
                            </Typography>
                      </Item2>
                  </Grid>

                  <Grid item xs={6}
                   style={{
                          width:"100%"
                        }}
                  >
                      <Item2>
                            <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                      Custom Features 
                                      <span>
                                                <img src={books} alt='Custom Features' 
                                                              style={{
                                                              float: "right",
                                                              width: "50px",
                                                              height: "50px",
                                                              boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                              }}
                                                /> 
                                      </span> 
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                                ESTIMATED RANGE ($ per hour) <br/> 
                                $15 to $22
                            </Typography>
                      </Item2>
                  </Grid>

                  <Grid item xs={6}
                   style={{
                          width:"100%"
                        }}>                  
                      <Item2>
                        <Typography gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    SEO Optimization 
                                    <span>
                                              <img src={search} alt='SEO Optimization ' 
                                                            style={{
                                                            float: "right",
                                                            width: "50px",
                                                            height: "50px",
                                                            boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                            }}
                                              /> 
                                    </span> 
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                            ESTIMATED RANGE ($ per hour) <br/>
                            $10 to $18
                            </Typography>
                      </Item2>
                  </Grid>

                  <Grid item xs={6}
                   style={{
                          width:"100%"
                        }}>
                    <Item2>
                              <Typography color='body1' gutterBottom variant="h6" component="div">     
                                    <Box sx={{ fontWeight: 'bold', m: 0}}>
                                    Consultation 
                                    <span>
                                                <img src={bubblechat} alt='Consultation' 
                                                              style={{
                                                              float: "right",
                                                              width: "50px",
                                                              height: "50px",
                                                              boxShadow:"0 0 0 0 rgba(0, 0, 0, 0.2), 0 0px 0 0 rgba(0, 0, 0, 0.19)",                                 
                                                              }}
                                                /> 
                                      </span> 
                                    </Box>
                            </Typography>
                            <Typography sx={{ fontWeight: 'none', fontSize: '0.85em', m: 0}}>
                                ESTIMATED RANGE ($ per hour) <br/>
                                $8 to $15
                            </Typography>
                    </Item2>
                  </Grid>
                </Grid>
              </Slide>
            </Container>
    </Box>
      </Container>
    {/* Optional extra space inside */}
    <Box sx={{ height: "20px" }} /> {/* You can adjust/remove this */}
      <CssBaseline />
    </>
  );
}
