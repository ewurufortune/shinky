import React from "react";
import { useEffect,useState, useRef } from "react";
import { Button } from "@mui/material";

export default function CheckoutButton({ url, trackName }) {
  const isReturnHandled = useRef(false); 
  const createPayPalTransaction = async () => {
    try {
      const response = await fetch("https://www.sandbox.paypal.com/create-paypal-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 2 },
          ],
        }),
      });

      const data = await response.json();
      if (data.orderId) {
        window.location.href = `https://www.sandbox.paypal.com/checkoutnow?token=${data.orderId}`;
      } else {
        console.error("Failed to create PayPal transaction");
      }
    } catch (error) {
      console.error("Error creating PayPal transaction:", error);
    }
  };

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", trackName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };



  const handleReturnFromPayPal = async () => {
    if (!isReturnHandled.current) { // Check if return is not already handled
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const payerId = urlParams.get("PayerID");

      if (token && payerId) {
        try {
          const response = await fetch(
            `https://shinky-k7qp.onrender.com/process-paypal-payment?token=${token}&payerId=${payerId}`
          );
          const result = await response.text();

          if (result.includes("success")) {
            downloadFileAtURL(url);
          } else {
            console.error("PayPal payment processing failed:", result);
          }
        } catch (error) {
          console.error("Error processing PayPal payment:", error);
        }
      } else {
        console.error("Token and/or PayerID not found in URL");
      }

      isReturnHandled.current = true; // Mark return as handled
    }
  };

  React.useEffect(() => {
    handleReturnFromPayPal();
  }, []);
  return (
    <Button onClick={createPayPalTransaction} sx={{ whiteSpace: 'nowrap' }}>
      Download '{trackName}'
    </Button>  );
}
