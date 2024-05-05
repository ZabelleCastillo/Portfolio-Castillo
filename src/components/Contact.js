import React, { useEffect, useState, useRef } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../App.css'
import {Slide} from "@mui/material";
import TextField from '@mui/material/TextField';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import bg6 from '../assets/BG/ng_unsplash.jpg';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import { styled} from '@mui/material/styles';
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import MuiAlert from "@mui/material/Alert";
import emailjs from '@emailjs/browser';
import {Helmet} from "react-helmet";


const background = {
  backgroundImage: `url(${bg6})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height:"200px",
  //width:"100vw",
};
/////////////////////////////////////////////////
////////////////////////////////////////
// const theme = createTheme();

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };
//////////////////////////////////////////////////
// const Contact_Label = {
//      myTextStyle: {
//          textDecoration: 'none',
//          '&:hover': {
//           color: 'white'
//        }
//    }
//     };
/////////////////////////////////////////


///////////////////////////////////////////
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

/////////////////////////////////////////////////
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email."),
  message: Yup.string().required("Required"),
});
//////////////////////////////////////////////////
export default function Contact(propsBackTop,propsElevate) {
  //////////////////////////////////////

  /////////////////////////////////////
  const [checkedSlide, setCheckedSlide] = useState(false);
  useEffect(() => {
    setCheckedSlide(true);
  }, []);
  ////////////////////////////////////
  const [status, setStatusBase] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
 
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (data, props) => {
      try {
        emailjs
          .send(
           process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            data,
            process.env.REACT_APP_EMAILJS_USER_ID
          )
          .then(() => {
            setStatusBase({ msg: "Success", key: Math.random() });
          });
        setTimeout(() => {
          props.resetForm();
          props.setSubmitting(false);
          setStatusBase(false);
        }, 5000);
      } catch (error) {
        setStatusBase({ error: "Failed to send" });
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  ///////////////////////////////////
  return (
    <>
    <Helmet>
        <title> Portfolio | Contact </title>
        <meta name="Contact" content="Contact" />
      </Helmet>
    <div style={background}></div>
      <Container sx={{padding: '5px', marginTop: "-160px",}}>
                <Box 
                 sx={{ flexGrow: 1, padding: '5px' }} 
                // sx={{flexGrow: 1, padding: '5px',
                //     "&:hover": {
                //       "& #Contact_Label": {
                //         color: "#0909F4",
                //       },
                //       "& .MuiOutlinedInput-root": {
                //         borderColor: "#0909F4",
                //       },
                //     },
                //   }}
                >
                <Slide
                      direction="left"
                      in={checkedSlide}
                      {...(checkedSlide ? { timeout: 2000 } : {})}
                       collapsedheight={50}
                >  
                    <Grid item xs={12}>                    
                        <Item sx={{backgroundColor:'rgba(0,0,0,.5)'}}> 
                            <center>  
                              <Typography>
                                      <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'white'}}>
                                      How can I help?
                                      </Box>    
                              </Typography>

                              <Typography>
                                <Box sx={{ fontWeight: 'none', fontSize: 16, m: 0, color:'white', letterSpacing: 1, fontFamily: 'Monospace' }}>
                                  I love supporting you. Any way you choose.
                                </Box>
                              </Typography>   
                            </center>                 
                          </Item>                             
                    </Grid>
                </Slide>
              <br />
                  <Grid container spacing={3}  columns={12}
                    direction={{ xs: 'column', sm: 'row' }}  
                  >

                      <Slide
                          direction="right"
                          in={checkedSlide}
                          {...(checkedSlide ? { timeout: 1000 } : {})}
                          collapsedheight={50}
                        >
                              <Grid item xs={6}
                               marginTop= "10%">
                                  <div>
                                      <Typography  variant="h3">  
                                        <Box sx={{ fontWeight: 'bold', fontSize: 26, m: 0, color:'body1'}}>
                                          Get in touch
                                        </Box>  
                                      </Typography>

                                      <Typography>
                                        <Box sx={{ fontWeight: 'none', fontSize: 16, m: 0, color:'primary', letterSpacing: 1, fontFamily: 'Monospace' }}>
                                          Let us collaborate to construct a distinctive entity.
                                        </Box>
                                      </Typography>
                                      <br />
                                        <hr/>
                                      <br />
                               
                                      <Typography 
                                            // fontWeight= "regular"
                                            // fontSize= "18px"
                                            // marginTop= "-4px"
                                            // marginLeft= "8px" 
                                            // color="#0909F4"
                                            className="typographyText"
                                            color="primary"
                                            sx={{ "&:hover": { color: "#d9ff00" } }} 
                                      >
                                            {<PhoneIcon/>} +639-39-716-9774
                                      </Typography> 
                                  <br/>
                                      <Typography          
                                        // sx={{
                                        //     fontWeight: "regular",
                                        //     fontSize: "18px",
                                        //     marginTop: "-4px",
                                        //     marginLeft: "8px",
                                        //     color: "#0909F4",                  
                                        // }}
                                        className="typographyText"
                                        color="primary"
                                            sx={{ "&:hover": { color: "#d9ff00" } }} 
                                      >
                                            {<EmailIcon/>} jessabellecastillo1993@yahoo.com
                                      </Typography> 
                                    <br />
                                    <Typography
                                        className="typographyText"
                                        color="primary"
                                        sx={{ "&:hover": { color: "#d9ff00" } }} 
                                      >
                                             {<PlaceIcon/>} Minglanilla, Cebu, Philippines
                                    </Typography> 
                          
                                    <br/>
                                     <br/>
                                        <hr/>
                                     <br />
                                         <center>
                                         <Grid container direction="row"
                                                    padding='5px'
                                                    position = "relative"
                                                    alignItems= "center"
                                                    justifyContent= "center"                                                
                                                >  
                                               
                                                        <Tooltip title="Facebook">
                                                            <IconButton 
                                                            onClick={
                                                              () => window.open('https://www.facebook.com/yzabelletaylorjessbelle', '_blank', 'noopener')
                                                            }
                                                            style={{ color: 'blue'}}
                                                            >
                                                              <FacebookIcon                                               
                                                                    sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                              />
                                                            </IconButton>
                                                          </Tooltip>  

                                                          <Tooltip title="Github">
                                                            <IconButton
                                                            onClick={
                                                              () => window.open('https://github.com/ZabelleCastillo', '_blank', 'noopener')
                                                            }
                                                            style={{ color: 'black'}}
                                                            >
                                                              <GitHubIcon
                                                              sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                              />
                                                            </IconButton>
                                                          </Tooltip>   

                                                           <Tooltip title="LinkedIn">
                                                              <IconButton
                                                              onClick={
                                                                () => window.open('https://www.linkedin.com/in/jessa-belle-castillo-21a724134/', '_blank', 'noopener')
                                                              }
                                                              style={{ color: 'skyblue'}}
                                                              >
                                                                <LinkedInIcon
                                                                  sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                                />
                                                              </IconButton>
                                                            </Tooltip>   

                                                            <Tooltip title="YouTube">
                                                              <IconButton
                                                              onClick={
                                                                () => window.open('https://www.youtube.com/@billyjesscastillo8025', '_blank', 'noopener')
                                                              }
                                                              style={{ color: 'red'}}
                                                              >
                                                                <YouTubeIcon
                                                                sx={{ "&:hover": { cursor: "pointer", color: "#002E4E" } }}
                                                                />
                                                              </IconButton>
                                                            </Tooltip>     
                                          </Grid>                                            
                                        </center>   
                                    </div> 
                              </Grid>
                      </Slide>
                     
                          <Slide
                                      direction="left"
                                      in={checkedSlide}
                                      {...(checkedSlide ? { timeout: 1000 } : {})}
                                      collapsedheight={50}
                           >
                    
                              <Grid item xs={6}
                                //  display="absolute"
                                  marginTop= "10%"
                                height= "100vh"
                                width= "100vw"
                              >    
                               <Formik value={formik}>
                          {() => (
                            <Form autoComplete="off" onSubmit={handleSubmit} noValidate>
                              <span>
                                {status ? (
                                  <Alert
                                    className="snackbar"
                                    id={status ? "show" : "hide"}
                                    severity="success"
                                    sx={{
                                      //width: "100%",
                                      //maxWidth: "200px",
                                      vertical: "top",
                                      horizontal: "right",
                                    }}
                                  >
                                    Message has been successfully sent!
                                  </Alert>
                                ) : null}
                              </span>     <br />                    
                                        <TextField
                                            size="large"
                                            label="Fullname"
                                            fullWidth
                                            id="name"
                                            type="name"
                                            name="name"
                                            {...getFieldProps("name")}
                                            error={Boolean(touched.name && errors.name)}
                                            helperText={touched.name && errors.name}
                                            multiline
                                            maxRows={4}                                      
                                            sx={{
                                              "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                  borderColor: "#002E4E",
                                                },
                                              },
                                            }}                                        
                                        />
                                         <br/><br/>
                                        <TextField
                                            size="large"
                                            fullWidth   
                                            id="email"
                                            type="email"
                                            name="email"
                                            {...getFieldProps("email")}
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            label="Email Address"
                                            multiline
                                            maxRows={4}
                                            sx={{
                                              "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                  borderColor: "#002E4E",
                                                },
                                              },
                                          }}
                                        />
                                        <br/><br/>
                                         <TextField
                                            size="large"
                                            fullWidth
                                            id="message"
                                            name="message"
                                            {...getFieldProps("message")}
                                            error={Boolean(touched.message && errors.message)}
                                            helperText={touched.message && errors.message}
                                            label="Message"
                                            multiline
                                            rows={4}
                                            sx={{
                                              "& .MuiOutlinedInput-root": {
                                                "&.Mui-focused fieldset": {
                                                  borderColor: "#002E4E",
                                                },
                                              },
                                          }}
                                            // defaultValue="Message"
                                        />
                                        <br/> <br />
                                        <center>
                                          <Button   sx={{ color:"#fff" , "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                                               type="submit"
                                                style={{
                                                  borderRadius: 35,
                                                  backgroundColor: "#002E4E",
                                                  padding: "8px 16px",
                                                  fontSize: "13px",
                                                  }} 
                                                  variant="contained"> Submit
                                          </Button> 
                                        </center>   
                                        </Form>
                                        )}
                                   </Formik> 
                             </Grid>   
                         </Slide>  
                                                                                 
                  </Grid>
               </Box>
        </Container>
    </>
  );
}
