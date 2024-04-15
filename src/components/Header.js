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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import '../App.css'
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { useScroll, motion } from "framer-motion";
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
// const navItems = ['Home', 'About', 'Experiences', 'Projects', 'Acknowledgment', 'Services', 'Contact' ];

///////////////////////////////////////////

////////////////////////////////////////////

export default function Header(propsBackTop,propsElevate) {
  const [activeButton, setActiveButton] = useState("");
 
  const handleClick = (event) => {
    setActiveButton(event.target.id);
  }
  /////////////////////////////////////
  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
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
              to={'/'} onClick={event =>  window.location.href='/'}          
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
              //to="/About"
              //onClick={event =>  window.location.href='/About'}
              to={'/About'} onClick={event =>  window.location.href='/About'}  
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
              //to="/Experiences"
              //onClick={event =>  window.location.href='/Experiences'}
              to={'/Experiences'} onClick={event =>  window.location.href='/Experiences'}  
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
              // to="/Projects"
              //onClick={event =>  window.location.href='/Projects'}
              to={'/Projects'} onClick={event =>  window.location.href='/Projects'}  
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
              // to="/Acknowledgment"
              // onClick={event =>  window.location.href='/Acknowledgment'}
              to={'/Acknowledgment'} onClick={event =>  window.location.href='/Acknowledgment'}  
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
              // to="/Services"
              // onClick={event =>  window.location.href='/Services'}
              to={'/Services'} onClick={event =>  window.location.href='/Services'}  
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
              // to="/Contact"
              // onClick={event =>  window.location.href='/Contact'}
              to={'/Contact'} onClick={event =>  window.location.href='/Contact'}  
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
      <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
      />
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
                    // variant="h6"
                    // component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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

                        //to="/"
                        //onClick={event =>  window.location.href='/'}
                       to={"/"} onClick={event =>  window.location.href='/'}
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
                        //to="/About"
                        onClick={event =>  window.location.href='/About'}
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
                        //to="/Experiences"
                        onClick={event =>  window.location.href='/Experiences'}
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
                        //to="/Projects"
                        onClick={event =>  window.location.href='/Projects'}
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
                        //to="/Acknowledgment"
                        onClick={event =>  window.location.href='/Acknowledgment'}
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
                        //to="/Services"
                        onClick={event =>  window.location.href='/Services'}
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
                        //to="/Contact"
                        onClick={event =>  window.location.href='/Contact'}
                      >
                        <Button                         
                          className="headerNavlink"
                          sx={{ color: "#fff", "&:hover": { color: "#d9ff00" } }}>
                          Contact
                        </Button>
                     </NavLink>
                     <motion.div
                            className="progress-bar"
                            style={{ scaleX: scrollYProgress }}
                      />
                  </Box>
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
