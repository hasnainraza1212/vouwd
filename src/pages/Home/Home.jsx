import React from "react";
import home from "./home.module.css";
import chef from "./../../assets/images/chef.gif";
import { Box, Stack, Typography } from "@mui/material";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
const headings = ["Eat healthy", "Live long", "Live strong"];
const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
          maxWidth:"1200px",
          margin:"0 auto"
        },
      }}
    >
      <Box
        sx={{
          marginLeft: {
            xs: "3rem",
            md: "8rem",
          },
          marginTop: {
            xs: 0,
            md: "3rem",
          },
        }}
      >
        <Box
          sx={{
            // mb: 5,
          }}
        >
          {headings.map((heading, index) => (
            <Heading key={index} text={heading} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          mt:{
            xs:"1.5rem",
            md:"3rem"
          },
          mb:{
            xs:"1.5rem",
            md:"0rem"
          },
          width: "100%",
          display:"flex",
          alignItems:"flex-end",
          justifyContent:"center",
        }}
      >
        <img
          style={{ maxWidth: "50%", height: "auto",  aspectRatio: "1 / 1" }}
          src={`${chef}`}
          alt={chef}
          loading="lazy"
        />
      </Box>
      <Box
        sx={{
          marginLeft: {
            xs: "3rem",
            md: "8rem",
          },
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "1.5rem",
          }}
        >
          We cook and deliver the tastiest, healthiest food right away to your
          designated location.
        </Typography>
        <Box
          sx={{
            mt: {
              xs:5,
            md:8            },
          }}
        >
          <Button />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
