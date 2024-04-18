import React, { useEffect, useState } from "react";
import '../App.css';
import { Button, Box, Divider } from "@mui/material";
import  pgf_404 from "../assets/BG/pgf_404.gif";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";
//////////////////////////////////////////////////
export default function PageNotFound() {
    const navigate = useNavigate()
  const click = () => navigate('/')
 return (
    <>
        <Helmet>
            <title> Portfolio | Page not found</title>
            <meta name="PageNotFound" content="Page not found" />
        </Helmet>
         <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            backgroundImage: `url(${pgf_404})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            //backgroundSize: `300px 300px`,
            height: "78vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
           display: "flex",
          }}
        >
            <Grid item xs={12}>
                <center>
                    <Typography >
                        <Box 
                        sx={{ fontWeight: 'bold', fontSize: 40, m: 0, color:'#002E4E',letterSpacing: 2}}>
                            THE PAGE
                        </Box>   
                        <Divider /> 
                        <Box sx={{ fontWeight: 'none', fontSize: 20, m: 0, color:'#002E4E', letterSpacing: 1, fontFamily: 'Monospace' }}>
                            was not found.
                        </Box>
                    </Typography>
                    <Button  sx={{ "&:hover": { cursor: "pointer", color: "#d9ff00"} }} 
                            onClick={click}
                            style={{
                            borderRadius: 35,
                            backgroundColor: "#002E4E",
                            padding: "8px 16px",
                            fontSize: "13px",
                            }} 
                            variant="contained"> Go back to Mars 
                    </Button>
                </center>
            </Grid>
        </Box>  
    </>           
  );
}
