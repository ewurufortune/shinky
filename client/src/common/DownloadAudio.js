import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import CheckoutButton from "./CheckoutButton";

function DownloadAudioButton({ url, trackName }) {


  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
 
        <CheckoutButton
          trackName={trackName}
        url={url}
        />
    
    </Box>
  );
}

export default DownloadAudioButton;
