import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DownloadAudioButton from "../common/DownloadAudio";
import ShareButtons from "../common/ShareButton";
import Chip from "@mui/material/Chip";
import { RWebShare } from "react-web-share";
import SendIcon from "@mui/icons-material/Send";
import { Fade, Zoom } from "react-awesome-reveal";
import Flash from "react-reveal/Flash";
import { useState } from "react";
import { FadeIn } from 'react-slide-fade-in';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Shinky_Music
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const TRACK1_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK2_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK3_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK4_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK5_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK6_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK7_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK8_FILE_URL =
  "https://shinky.netlify.app/music.mp3";
const TRACK9_FILE_URL =
  "https://shinky.netlify.app/music.mp3";

const cards = [
  { id: 1, name: "Tender", url: TRACK1_FILE_URL },
  { id: 2, name: "Love Of my Life", url: TRACK2_FILE_URL },
  { id: 3, name: "Enchanted Melodies", url: TRACK3_FILE_URL },
  { id: 4, name: "Luminous", url: TRACK4_FILE_URL },
  { id: 5, name: "Radiance", url: TRACK5_FILE_URL },
  { id: 6, name: "Love Of my Spirit", url: TRACK6_FILE_URL },
  { id: 7, name: "Endless Cadence", url: TRACK7_FILE_URL },
  { id: 8, name: "Dazzling Embrace", url: TRACK8_FILE_URL },
  { id: 9, name: "Art Of my Love", url: TRACK9_FILE_URL },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LayoutBody() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#A8DF8E",
             backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-circles.png")')`,
            backgroundSize: "auto 100px",
            paddingTop: "10px", // Add some padding to separate the background from content
          }}
        >
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} />
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />{" "}
          <RepeatOneOnIcon sx={{ mr: 2, opacity: 0.1}} /> <RepeatOneOnIcon sx={{ mr: 2 , opacity: 0.1}} />
          <Typography variant="h6" color="inherit" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <div
        sx={{
          backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')`,
          backgroundSize: "auto 100px",
        }}
      >
        {/* Hero unit */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Vertically center the content
            backgroundColor: "#A8DF8E",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-circles.png")`,
            backgroundSize: "auto 10px", // Adjust the second value (50px) to control pattern repetition
            pt: 8,
            pb: 6,
            border: "10px solid #A4907C", // Add a border with a color of your choice
          }}
        >
          <Container maxWidth="sm">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "2px solid #e74c3c", // Pink bottom border
                  paddingBottom: 2,
                }}
              >
                {/* Header Text */}
                <Flash when={isHovered}>
                <Zoom>
                  <Box
                    component="div"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      width: "100%",
                      height: "100px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h1"
                      align="center"
                      color="text.secondary"
                      paragraph
                      sx={{
                        fontFamily: "'Kalam', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      <span style={{ color: "#3498db" }}>S</span>
                      <span
                        style={{
                          color: "#2ecc71",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                        }}
                      >
                        H
                      </span>
                      <span style={{ color: "#d35400" }}>I</span>
                      <span style={{ color: "#e74c3c" }}>N</span>
                      <span style={{ color: "#c0392b" }}>K</span>
                      <span style={{ color: "#3498db" }}>Y</span>
                    </Typography>
                    <span
                      style={{
                        width: "50%",
                        height: "2px",
                        backgroundColor: "#3498db",
                        position: "absolute",
                        bottom: "-5px",
                        left: "25%",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "40%",
                        height: "2px",
                        backgroundColor: "#3498db",
                        position: "absolute",
                        bottom: "-10px",
                        left: "30%",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "30%",
                        height: "2px",
                        backgroundColor: "#3498db",
                        position: "absolute",
                        bottom: "-15px",
                        left: "35%",
                      }}
                    ></span>
                  </Box>
                  </Zoom>
                </Flash>
                <FadeIn
                from="bottom"
      positionOffset={100}
      triggerOffset={50}
      delayInMilliseconds={200}>
                <Typography
                  variant="h5"
                  align="left"
                  color="text.secondary"
                  paragraph
                  sx={{
                    fontFamily: "'Abril Fatface', sans-serif",
                    fontWeight: 400,
                    position: "relative",
                    // color:'#ad1a08',
                    marginTop: "15%", // Adjust the margin top value
                    marginBottom: "19%",
                    animation: "glow 5s infinite", // Add the animation property
                    "@keyframes glow": {
                      "0%": {
                        textShadow: "none", // No text shadow at the beginning of the animation
                      },
                      "50%": {
                        textShadow: "5px 5px 15px #FFC436", // Glowing effect at the midpoint
                      },
                      "100%": {
                        textShadow: "none", // No text shadow at the end of the animation
                      },
                    },
                  }}
                >
                  Introducing{" "}
                  <span
                    sx={{
                      color: "#f9ccc9",
                    }}
                  >
                    "The Shinky Album,"
                  </span>{" "}
                  a transcendent journey through the myriad shades of love,
                  carefully crafted by yours truly. This album is a symphony of
                  emotions, woven together with melodies that mirror the
                  intricate dance of hearts entwined.
                </Typography>
</FadeIn>
                <Stack direction="row" spacing={2} justifyContent="flex-start">
                <FadeIn
                from="left"
      positionOffset={300}
      triggerOffset={50}
      delayInMilliseconds={200}>
                  <Button variant="contained">Download The Album</Button>
                  </FadeIn>
                  <RWebShare
                    data={{
                      text: " This album is a symphony of emotions, woven together with melodies that mirror the intricate dance of hearts entwined.",
                      url: "https://shinky.netlify.app/",
                      title: "The Shinky Album",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                       <FadeIn
                from="right"
      positionOffset={300}
      triggerOffset={50}
      delayInMilliseconds={200}>
                    <Button variant="outlined">
                      {" "}
                      <SendIcon />
                      Share This Album
                    </Button>
</FadeIn>
                  </RWebShare>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Container
          sx={{
            py: 8,
            background: "#A8DF8E",
            backgroundImage: `url("https://www.transparenttextures.com/patterns/elegant-grid.png")`,

            backgroundSize: "auto 70px",
          }}
          maxWidth="100%"
        >
          <Container
            sx={{
              py: 8,
              backgroundColor: "#a8df8e",
              backgroundImage: `url("https://www.transparenttextures.com/patterns/elegant-grid.png")`,
              backgroundSize: "auto 70px",
              borderBottom: "2px solid #e74c3c", // Pink bottom border
              paddingBottom: 2,
            }}
            maxWidth="md"
          >
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Fade attentionSeeker="flash" cascade>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        backgroundColor: "#A4907C",
                        backgroundImage:
                          " url('https://www.transparenttextures.com/patterns/elegant-grid.png'), linear-gradient(to bottom, #A8DF8E, #D0F5BE, #FBFFDC)",
                        backgroundSize: "auto 70px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center top",
                        flexDirection: "column",
                        transition: "transform 0.2s", // Adding transition for a smoother effect
                        "&:hover": {
                          transform: "scale(1.05)", // Scale up the card on hover
                        },
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          pt: "100.25%", // 16:9 aspect ratio
                        }}
                        image="https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                      <CardContent sx={{ flexGrow: 1, color: "#FBFFDC" }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          sx={{
                            fontFamily: "'Fjalla One', cursive",
                          }}
                        >
                          {card.name}
                        </Typography>
                        <Typography>
                          This is where you can write a short description /
                          thought process while making the Track.
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <DownloadAudioButton
                          id={card.id}
                          url={card.url}od
                          trackName={card.name}
                        />
                      </CardActions>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </div>
      <div sx={{ maxWidth: "130px" }}>
        <Divider sx={{ maxWidth: "20%", marginLeft: "25%" }}></Divider>
      </div>

      {/* Footer */}
      <Box
        sx={{
          p: 6,
          backgroundColor: "#A8DF8E",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-circles.png")`,
          backgroundSize: "auto 20px",
        }}
        component="footer"
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ fontFamily: "'Kalam', sans-serif" }}
          gutterBottom
        >
          ShinkyAfrika
        </Typography>
        <ShareButtons />
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          i'd love to connect with you, keep in touch!
        </Typography>
        <Copyright />
      </Box>

      {/* End footer */}
    </ThemeProvider>
  );
}
