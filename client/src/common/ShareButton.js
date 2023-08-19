import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ShareButtons() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <a href="https://twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
        <TwitterIcon color="black" sx={{ fontSize: 40 }} />
      </a>
      <a href="https://youtube.com/your-youtube-link" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon color="error" sx={{ fontSize: 40 }} />
      </a>
      <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon color="success" sx={{ fontSize: 40 }} />
      </a>
      <a href="https://instagram.com/your-instagram-link" target="_blank" rel="noopener noreferrer">
        <InstagramIcon sx={{ fontSize: 40, backgroundImage: 'linear-gradient(45deg, #FF69B4, #FFA500,#FF69B4,#FF69B4)' }} />
      </a>
      <a href="https://facebook.com/your-facebook-link" target="_blank" rel="noopener noreferrer">
        <FacebookIcon color="primary" sx={{ fontSize: 40 }} />
      </a>
    </Stack>
  </Container>
  );
}
