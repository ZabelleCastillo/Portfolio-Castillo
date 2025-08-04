import { useEffect, useState } from "react";
import {
  Card, CardContent, CardMedia, Typography, CardActionArea, CardActions,
  Grid, Container, Box, Paper, Slide
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Images
import HotelReservation from "../assets/HotelReservation.jpg";
import MotorcycleInventory from "../assets/MotorcycleInventory.jpg";
import SchoolManagement from "../assets/SchoolManagement.jpg";
import FoodReservation from "../assets/FoodReservation.jpg";
import PortfolioImage from "../assets/PortfolioImage.jpg";
import SocialMediaImage from "../assets/SocialMediaImage.jpg";
import bg3 from "../assets/BG/ch_unsplash.jpg";

const background = {
  backgroundImage: `url(${bg3})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "320px",
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
}));

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 1, scale: 0 },
};

const ProjectCard = ({ image, title, description, creditName, creditLink }) => (
  <Grid margin="auto">
    <Card sx={{ maxWidth: 345 }} className="bottomCard">
      <CardActionArea>
        <CardMedia component="img" height="300px" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <Box sx={{ fontWeight: "bold" }}>{title}</Box>
          </Typography>
          <Typography>
            <Box sx={{ fontSize: 14, color: "primary" }}>{description}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        &nbsp; Photo by &nbsp;
        <a href={creditLink} target="_blank" rel="noreferrer">
          {creditName}
        </a>
      </CardActions>
    </Card>
  </Grid>
);

// =================== SECTIONS TO SHOW =====================
const ProjectSection1 = ({ checkedSlide }) => (
    <Container sx={{ padding: "2rem", marginTop: "-320px" }}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Header Section */}
        <Grid>
          <Slide
            direction="left"
            in={checkedSlide}
            {...(checkedSlide ? { timeout: 2000 } : {})}
          >
            <Grid>
              <Item sx={{ backgroundColor: "rgba(0,0,0,.5)", width: "98%" }}>
                <center>
                  <Typography>
                    <Box sx={{ fontWeight: "bold", fontSize: 26, color: "white" }}>
                      Get to know more
                    </Box>
                  </Typography>
                  <Typography>
                    <Box
                      sx={{
                        fontSize: 20,
                        color: "white",
                        letterSpacing: 6,
                        fontFamily: "Monospace",
                      }}
                    >
                      About my Projects
                    </Box>
                  </Typography>
                </center>
              </Item>
            </Grid>
          </Slide>
        </Grid>
  
        {/* Add vertical space here */}
        <Box sx={{ mt: 4 }} />  {/* mt = margin-top, 4 = ~32px */}
  
        {/* Projects Grid */}
        <motion.div
          className="Box"
          variants={boxVariant}
          initial="hidden"
          animate="visible"
        >
          <Grid container rowSpacing={1} columnSpacing={2} justifyContent="center">
            <ProjectCard
              image={HotelReservation}
              title="Hotel Reservation"
              description="Developed for Syshore Hotel using HTML/CSS (front-end) and PHP (back-end)."
              creditName="Kelly Sikkema"
              creditLink="https://unsplash.com/@kellysikkema"
            />
            <ProjectCard
              image={MotorcycleInventory}
              title="Motorcycle Inventory"
              description="Built with Visual Basic.NET and C# for a motorcycle shop inventory."
              creditName="Harley-Davidson"
              creditLink="https://unsplash.com/@harleydavidson"
            />
            <ProjectCard
              image={SchoolManagement}
              title="School Management"
              description="Built with ReactJS (front-end) and C# (back-end) for SNHS."
              creditName="Headway"
              creditLink="https://unsplash.com/@headwayio"
            />
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
  

  const ProjectSection2 = () => (
    <Container sx={{ padding: "1rem", marginTop: "1rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Optional extra space inside */}
        <Box sx={{ height: "20px" }} /> {/* You can adjust/remove this */}
  
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <ProjectCard
            image={FoodReservation}
            title="Food Reservation"
            description="Developed a user-friendly food reservation system for Sogod Bellychon, leveraging ReactJS for the front-end interface and C# for robust back-end functionality."
            creditName="Webvilla"
            creditLink="https://unsplash.com/@webvilla"
          />
          <ProjectCard
            image={PortfolioImage}
            title="Portfolio Website"
            description="Developed a responsive portfolio web app serving as an online CV, utilizing ReactJS for dynamic UI rendering and C# for secure server-side logic."
            creditName="Hal Gatewood"
            creditLink="https://unsplash.com/@halacious"
          />
          <ProjectCard
            image={SocialMediaImage}
            title="Social Media App"
            description="Developed a full-stack social media app with ReactJS and MUI for a responsive front-end, combined with NodeJS and SQL for efficient back-end data management and server logic."
            creditName="Prateek Katyal"
            creditLink="https://unsplash.com/@prateekkatyal"
          />
        </Grid>
      </Box>
    </Container>
  );
  
// =================== MAIN COMPONENT =====================
export default function Projects() {
  const [checkedSlide, setCheckedSlide] = useState(false);
  const [visibleSections, setVisibleSections] = useState(1);

  useEffect(() => {
    setCheckedSlide(true);
  }, []);

  const handleSeeMore = () => setVisibleSections((prev) => prev + 1);
  const handleSeeLess = () => setVisibleSections(1);

  return (
    <>
      <Helmet>
        <title>Portfolio | Projects</title>
        <meta name="Projects" content="Projects" />
      </Helmet>

      <div style={background}></div>

      {/* Project Sections */}
      {visibleSections >= 1 && <ProjectSection1 checkedSlide={checkedSlide} />}
      {visibleSections >= 2 && <ProjectSection2 />}

      {/* See More / See Less Buttons
      <Box sx={{ textAlign: "center", my: 3 }}>
  {visibleSections < 2 && (
    <Typography
      onClick={handleSeeMore}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        cursor: "pointer",
        bgcolor: "primary.main",
        color: "white",
        borderRadius: 1,
        userSelect: "none",
        "&:hover": {
          bgcolor: "primary.dark",
          textDecoration: "none",
          color: "#d9ff00", // optional highlight color on hover
        },
      }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') handleSeeMore(); }}
    >
      See more
    </Typography>
  )}
  {visibleSections >= 2 && (
    <Typography
      onClick={handleSeeLess}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        cursor: "pointer",
        bgcolor: "primary.main",
        color: "white",
        borderRadius: 1,
        userSelect: "none",
        "&:hover": {
          bgcolor: "primary.dark",
          textDecoration: "none",
          color: "#d9ff00",
        },
      }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') handleSeeLess(); }}
    >
      See less
    </Typography>
  )}
</Box> */}
<Box sx={{ textAlign: "center", mt: 4 }}>
  {visibleSections < 2 ? (
    <Typography
      onClick={handleSeeMore}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        borderRadius: "30px",
        backgroundColor: "#002E4E",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          color: "#d9ff00",
          textDecoration: "none",
        },
      }}
    >
      See more
    </Typography>
  ) : (
    <Typography
      onClick={handleSeeLess}
      sx={{
        display: "inline-block",
        padding: "10px 20px",
        borderRadius: "30px",
        backgroundColor: "#002E4E",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          color: "#d9ff00",
          textDecoration: "none",
        },
      }}
    >
      See less
    </Typography>
  )}
</Box>
 {/* Optional extra space inside */}
 <Box sx={{ height: "20px" }} /> {/* You can adjust/remove this */}
    </>
  );
}