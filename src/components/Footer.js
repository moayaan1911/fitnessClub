import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" pb="4px" mt="20px">
          Made with ❤️ by <i class="fa-brands fa-ethereum"></i> Mohammad Ayaan
          Siddiqui <i class="fa-brands fa-ethereum"></i>
        </Typography>
        <Typography variant="h6" color="gray">
          © Copyright {year}
        </Typography>
        <Stack gap="20px" alignItems="center" direction="row" pb="20px">
          <a
            href="https://github.com/moayaan1911"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img src="github.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-ayaan-siddiqui-678564214/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img src="linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://www.twitter.com/usdisshitcoin"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img src="twitter.png" alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/moayaan_1911"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img src="insta.png" alt="insta" />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
