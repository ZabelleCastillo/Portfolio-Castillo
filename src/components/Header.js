import { useState, cloneElement } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { styled } from '@mui/system';
import { NavLink } from "react-router-dom";
////////////////////////////////////////
function ScrollTop(propsBackTop) {
  const { children } = propsBackTop;
  const triggerBackTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    collapsedheight:50,
    timeout: 1000,
    smooth: true,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={triggerBackTop}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
//////////////////////////////////////////////////
function ElevationScroll(propsElevate) {
  const { children } = propsElevate;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const triggerElevate = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: triggerElevate ? 4 : 0,
  });
}
/////////////////////////////////////////

/////////////////////////////////////////
const drawerWidth = 240;

///////////////////////////////////////////
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
////////////////////////////////////////////

export default function Header({propsBackTop,propsElevate, mode, setMode}) {

  const [activeButton, setActiveButton] = useState("");
 
  const handleClick = (event) => {
    setActiveButton(event.target.id);
  }
  /////////////////////////////////////
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    layoutEffect: false,
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  ////////////////////////////////////

  const [mobileOpen, setMobileOpen] =useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>   
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: 'white' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JBC
      </Typography>
      <Divider color="#FFFFFF" sx={{ height: 2, width: '100%' }}/>
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/"
              //to={'/'} onClick={event =>  window.location.href='/'}          
            >
              <ListItemButton to="get-info-home"  
              sx={{ textAlign: "center" }}>
                <ListItemText primary="HOME" />
              </ListItemButton>
          </NavLink>

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/About"
              //onClick={event =>  window.location.href='/About'}
              //to={'/About'} onClick={event =>  window.location.href='/About'}  
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="ABOUT" />
              </ListItemButton>
          </NavLink>

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/Experiences"
              //onClick={event =>  window.location.href='/Experiences'}
              //to={'/Experiences'} onClick={event =>  window.location.href='/Experiences'}  
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="EXPERIENCES" />
              </ListItemButton>
          </NavLink>

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/Projects"
              //onClick={event =>  window.location.href='/Projects'}
              //to={'/Projects'} onClick={event =>  window.location.href='/Projects'}  
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="PROJECTS" />
              </ListItemButton>
          </NavLink>

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/Acknowledgment"
              // onClick={event =>  window.location.href='/Acknowledgment'}
              //to={'/Acknowledgment'} onClick={event =>  window.location.href='/Acknowledgment'}  
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="ACKNOWLEDGMENT" />
              </ListItemButton>
          </NavLink>

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/Services"
              // onClick={event =>  window.location.href='/Services'}
              //to={'/Services'} onClick={event =>  window.location.href='/Services'}  
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="SERVICES" />
              </ListItemButton>
          </NavLink>

          <NavLink
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "none", color: "#d9ff00" }
                  : { textDecoration: "none", color: "white" }
              }
              to="/Contact"
              // onClick={event =>  window.location.href='/Contact'}
              //to={'/Contact'} onClick={event =>  window.location.href='/Contact'}  
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="CONTACT" />
              </ListItemButton>
          </NavLink>
      </List>
    </Box>
 
    </>
  );
  ///////////////////////////////////
  return (
    <>

      <CssBaseline />
     <motion.div className="progress-bar" style={{ scaleX }} />
      <ElevationScroll {...propsElevate}>
      <AppBar component="nav">
            <Toolbar style={{
              backgroundColor: '#002E4E'
            }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                 
                  <Typography 
                    //variant="h6"
                    //component="div"              
                    sx={{ flexGrow: 1, color: "#fff", display: { xs: 'none', sm: 'block' } }}
                  >
                  <h6>
                    J<span id="hide"> essa&nbsp;</span> 
                    B<span id="hide"> elle&nbsp;</span> 
                    C<span id="hide">astillo</span> 
                      <span id="hide">&nbsp; at your service! 👩🏼‍💻 </span> 
                    </h6> 
                  </Typography>

                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}
                  
                    >
                    {/* {navItems.map((item) => (
                      <Link>
                      <Button key={item} sx={{ color: '#fff' }}>
                        {item}                       
                      </Button>
                                            
                    ))} */}
                      <NavLink                    
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "#d9ff00" }
                            : { textDecoration: "none", color: "white" }
                        }

                      to="/"
                      //onClick={event =>  window.location.href='/'}
                      //  to={"/"} onClick={event =>  window.location.href='/'}
                      >
                             <Button to="get-info-home"
                                className="headerNavlink"
                                sx={{ color: "#fff", "&:hover": { color: "#d9ff00",} }}>
                                Home
                            </Button>                   
                      </NavLink>

                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "red" }
                            : { textDecoration: "none", color: "white" }
                        }
                        to="/About"
                        //onClick={event =>  window.location.href='/About'}
                      >
                        <Button 
                           className="headerNavlink"
                          sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                          About
                        </Button>
                      </NavLink>

                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "red" }
                            : { textDecoration: "none", color: "white" }
                        }
                        to="/Experiences"
                        //onClick={event =>  window.location.href='/Experiences'}
                      >
                        <Button 
                         className="headerNavlink"
                         sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                          Experiences
                        </Button>
                      </NavLink>

                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "red" }
                            : { textDecoration: "none", color: "white" }
                        }
                        to="/Projects"
                        //onClick={event =>  window.location.href='/Projects'}
                      >
                        <Button 
                         className="headerNavlink"
                         sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                          Projects
                        </Button>
                      </NavLink>

                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "red" }
                            : { textDecoration: "none", color: "white" }
                        }
                        to="/Acknowledgment"
                        //onClick={event =>  window.location.href='/Acknowledgment'}
                      >
                        <Button
                         className="headerNavlink"
                         sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                        Acknowledgment
                        </Button>
                      </NavLink>

                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "red" }
                            : { textDecoration: "none", color: "white" }
                        }
                        to="/Services"
                        //onClick={event =>  window.location.href='/Services'}
                      >
                        <Button 
                         className="headerNavlink"
                         sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                          Services
                        </Button>
                     </NavLink>

                      <NavLink
                        style={({ isActive }) =>
                          isActive
                            ? { textDecoration: "none", color: "red" }
                            : { textDecoration: "none", color: "white" }
                        }
                        to="/Contact"
                        //onClick={event =>  window.location.href='/Contact'}
                      >
                        <Button                         
                          className="headerNavlink"
                          sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                          Contact
                        </Button>
                     </NavLink>
                     {/* <Switch
                      checked={mode}
                        onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                    /> */}
                    <FormControlLabel
                      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                      onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                    />
                  </Box>
                      <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}
                      />
            </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
                <nav>
                  <Drawer                 
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#002E4E', opacity: 0.8 },
                    }}
                  >
                    {drawer}
                  </Drawer>
                </nav>
     

                                                     
                <ScrollTop {...propsBackTop}>
                  <Fab size="small" aria-label="scroll back to top" >
                    <KeyboardArrowUpIcon  sx={{ zIndex: 1300}}
                   style={{ zIndex: 'auto' }} />
                  </Fab>
                </ScrollTop>          
                                                

    </>
  );
}
