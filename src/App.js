import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
//import BounceLoader from "react-spinners/BounceLoader";
import { CirclesWithBar } from 'react-loader-spinner';
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Acknowledgment from "./components/Acknowledgment";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Skills from "./components/Skills";
//import { Canvas} from '@react-three/fiber';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import PageNotFound from "./components/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  /////////////////////////////////////
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      // color: 'white',
      // primary: {
      //   main: '#FFFFFF',
      // },
      // secondary: {
      //   main: '#FFFFFF',
      // },
    },
  });
////////////////////////////
const style3 = {
  position: "fixed",
  bottom: "50px",
  right: "unset !important",
  left: "15px !important",
  //left: "15px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  zIndex: "2",
};
////////////////////////
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false);
    }, 2500)
  }, [])
//////////////////////////////

  return (
  <>
     {
      isLoading ?   
        <div className="App"> 
            <CirclesWithBar 
              ariaLabel="loading..."
              color="#00016b" 
              height="180"
              width="180" 
              loading={isLoading} />
        </div>   :
      //<BrowserRouter>
  <>

          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }} 
            />

  <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Header mode={mode} setMode={setMode} />
           <Routes>
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Acknowledgment" element={<Acknowledgment />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experiences" element={<Experiences />} />
            <Route path="/About" element={<AboutMe />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/404" element={<PageNotFound/>} />
            <Route path="*" element={<Navigate to="/404" />} />          
          </Routes> 
         
           <div style={style3}>
            <MessengerCustomerChat
              pageId="264391036764466"
              appId="1860301621137741" 
              themeColor={'#002E4E'}
              style={{width:"20px"}} 
            />
           </div>
        <Footer/>
     {/* </BrowserRouter> */}
    </Box>
  </ThemeProvider>
  </>
     }
  </>

  );
}

export default App;
