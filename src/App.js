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


// ✅ Messenger Component
const FacebookMessenger = () => {
  const chatRef = React.useRef();

  useEffect(() => {
    console.log("🔄 Setting up Messenger Chat Plugin...");

    if (chatRef.current) {
      chatRef.current.setAttribute("page_id", "264391036764466"); // 👈 Your Page ID
      chatRef.current.setAttribute("attribution", "biz_inbox");
    }

    if (!document.getElementById("facebook-jssdk")) {
      window.fbAsyncInit = function () {
        console.log("✅ FB SDK initialized");
        window.FB.init({
          xfbml: true,
          version: "v16.0",
        });
      };

      (function (d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src =
          "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
        console.log("📥 FB SDK script injected");
      })(document, "script", "facebook-jssdk");
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        ref={chatRef}
        id="fb-customer-chat"
        className="fb-customerchat"
      ></div>
    </>
  );
};


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

              {/* ✅ Messenger Floating Chat Plugin */}
              <FacebookMessenger />

              <Footer />
            </Box>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
