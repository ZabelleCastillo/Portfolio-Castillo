import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { CirclesWithBar } from "react-loader-spinner";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Acknowledgment from "./components/Acknowledgment";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Skills from "./components/Skills";
import PageNotFound from "./components/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: { mode: mode },
  });

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2500);
  }, []);

  // Messenger Button handler
  const openMessenger = () => {
    window.open("https://m.me/264391036764466", "_blank");
  };

  // Floating Messenger Button Style (Bottom-Left)
  const messengerBtnStyle = {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 1000,
    backgroundColor: "#0084FF",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
  };

  return (
    <>
      {isLoading ? (
        <div className="App">
          <CirclesWithBar
            ariaLabel="loading..."
            color="#00016b"
            height="180"
            width="180"
            loading={isLoading}
          />
        </div>
      ) : (
        <>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />

          <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
              <Header mode={mode} setMode={setMode} />

              <Routes>
                <Route path="/" element={<Home mode={mode} />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Acknowledgment" element={<Acknowledgment />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Experiences" element={<Experiences />} />
                <Route path="/About" element={<AboutMe />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>

              {/* Messenger Floating Button */}
              <button style={messengerBtnStyle} onClick={openMessenger}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  style={{ width: "32px", height: "32px", fill: "#fff" }}
                >
                  <path d="M18 0C8.058 0 0 7.163 0 16c0 4.787 2.293 9.065 5.91 11.944V36l6.14-3.237C15.146 33.157 16.56 33.5 18 33.5 27.942 33.5 36 26.337 36 17.5 36 7.663 27.942 0 18 0zm2.625 21.5l-4.75-5.25-8.25 5.25 9-6.5 4.75 5.25 8.25-5.25-9 6.5z" />
                </svg>
              </button>

              <Footer />
            </Box>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;