import {React, useState, useEffect}  from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@mui/material';
import '../App.css';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    position: "relative",
    bottom: "0px",
    left: "0px",
    right: "0px",
    //width: "100vw",
}
});

export default function BottomBar() {

  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

///////////////////////////////////////
const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
  <>
  <Box>
    <br/>
      <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
      showLabels={false}
      style={{
        backgroundColor: '#002E4E',
        
        color: 'white', 
      }}
      >
   <br/>
        <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2,md:3}}
                                                    alignItems= "center"
                                                    justifyContent= "center"
        >
                <Grid>
                 
                        <Typography  className="bottomLeft">
                            Working with passion while exploring the world.  
                        </Typography>
                </Grid> 
          
                <Grid>
                        <Typography className="bottomLeft">
                        Jessa Belle | Software Test Engineer. {"</>"}
                        </Typography>
                </Grid>
               
                <Grid>
                <Typography >
                        Copyright © {date}. All Rights Reserved. 
                        </Typography>
                </Grid>         
         </Grid> 
      </BottomNavigation>
    </Box>
  </>
  );
}
