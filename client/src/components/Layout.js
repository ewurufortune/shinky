import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
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
import { Fade } from "react-awesome-reveal";
import Flash from "react-reveal/Flash";
import { useState } from "react";

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
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK2_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK3_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK4_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK5_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK6_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK7_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK8_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";
const TRACK9_FILE_URL =
  "https://shinky-music-git-main-ewurufortune.vercel.app/music.mp3";

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
            backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')`,
            backgroundSize: "auto 100px",
            paddingTop: "10px", // Add some padding to separate the background from content
          }}
        >
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
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
            backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')`,
            backgroundSize: "auto 50px", // Adjust the second value (50px) to control pattern repetition
            pt: 8,
            pb: 6,
            border: "10px solid #ccc", // Add a border with a color of your choice
          }}
        >
          <Container maxWidth="sm">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Box
                sx={{
                  flex: 1,
                  borderBottom: "2px solid pink", // Pink bottom border
                  paddingBottom: 2,
                }}
              >
                {/* Header Text */}
                <Flash when={isHovered}>
                  <Box
                    component="div"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      backgroundImage:
                        "url('https://fontmeme.com/permalink/230814/9cf1198a733a6e3070fd76307197b297.png')",
                      backgroundSize: "contain", // Change to 'cover' if necessary
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center", // Center the image
                      width: "100%",
                      height: "100px", // Adjust the height as needed
                      color: "transparent", // Make the text transparent
                      display: "flex",
                      marginBottom: "30px",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer", // Add the cursor style to indicate interactivity
                    }}
                  >
                    The Shinky Album
                  </Box>
                </Flash>
                <Typography
                  variant="h5"
                  align="left"
                  color="text.secondary"
                  paragraph
                  sx={{
                    position: "relative", // Needed for the text-shadow
                  }}
                >
                  Introducing{" "}
                  <span
                    sx={{
                      textShadow: "5px 5px 25px #ad1a08", // Apply the specified text-shadow
                      color: "#f9ccc9", // Apply the specified color
                    }}
                  >
                    "The Shinky Album,"
                  </span>{" "}
                  a transcendent journey through the myriad shades of love,
                  carefully crafted by yours truly. This album is a symphony of
                  emotions, woven together with melodies that mirror the
                  intricate dance of hearts entwined. From the euphoric
                  crescendos of newfound passion to the tender cadences of
                  enduring companionship, each track tells a story of love's
                  transformative power.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="flex-start">
                  <Button variant="contained">Download The Album</Button>
                  <RWebShare
                    data={{
                      text: " This album is a symphony of emotions, woven together with melodies that mirror the intricate dance of hearts entwined.",
                      url: "https://shinky-music-git-main-ewurufortune.vercel.app/",
                      title: "The Shinky Album",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <Button variant="outlined">
                      {" "}
                      <SendIcon />
                      Share This Album
                    </Button>
                  </RWebShare>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Container
          sx={{
            py: 8,
            backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')`,
            backgroundSize: "auto 70px",
          }}
          maxWidth="100%"
        >
          <Container
            sx={{
              py: 8,
              backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')`,
              backgroundSize: "auto 70px",
              borderBottom: "2px solid pink", // Pink bottom border
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
                          pt: "56.25%", // 16:9 aspect ratio
                        }}
                        image="https://images.unsplash.com/photo-1691860664006-b1ef531c8743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.name}
                        </Typography>
                        <Typography>
                          This is where you can write a short description /
                          thought process while making the Track.
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                      <DownloadAudioButton id={card.id} url={card.url} trackName={card.name} />
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
        <Divider sx={{ maxWidth: "50%", marginLeft: "25%" }}>
          <Chip
            sx={{
              backgroundImage:
                "linear-gradient(45deg, #FF69B4, #FFA500,#FF69B4,#FF69B4)",
            }}
            label="JOIN THE MOVEMENT"
          />
        </Divider>
      </div>

      {/* Footer */}
      <Box
        sx={{
          p: 6,
          backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')`,
          backgroundSize: "auto 50px",
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Shinky
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
