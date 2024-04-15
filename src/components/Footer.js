import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});


export default function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div>
      <AppBar
        position="relative"
        style={{ background: "#002E4E" }}
        elevation={0}
      >   
        <StyleToolbar>
            <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
                    alignItems= "center"
                    justifyContent= "center">
                <Grid>  
                    <Typography  className="bottomLeft">
                            Working with passion while exploring the world.
                    </Typography>
                </Grid> 
    
                <Grid>
                    <Typography className="bottomLeft">
                        Jessa Belle | Software Test Engineer.    
                    </Typography>
                </Grid>
            
                <Grid>
                    <Typography >
                        <center>
                        Copyright © {date}. All Rights Reserved. 
                        </center>
                    </Typography>
                </Grid>        
            </Grid>
        </StyleToolbar>
      </AppBar>
    </div>
  );
}