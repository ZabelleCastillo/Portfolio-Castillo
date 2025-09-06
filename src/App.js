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

  // ✅ Messenger Test Button handler
  const openMessenger = () => {
    console.log("Opening Messenger link...");
    window.open("https://m.me/264391036764466", "_blank");
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

              {/* ✅ Messenger Test Button (moved to left side) */}
              <div style={{ position: "fixed", bottom: "20px", left: "20px" }}>
                <button
                  onClick={openMessenger}
                  style={{
                    padding: "12px 18px",
                    backgroundColor: "#0084FF",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    fontSize: "16px",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  💬 Chat on Messenger
                </button>
              </div>

              <Footer />
            </Box>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
