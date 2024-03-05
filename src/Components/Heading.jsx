import { Box, Typography } from "@mui/material";
import React, { memo, useMemo } from "react";

const Heading = ({ text }) => {
  const capitalizeFirstLetter = useMemo(
    () => (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    []
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: {
              xs: "3rem",
              md: "5rem",
            },
            color: "black",
            fontWeight: "lighter",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em",
            fontFamily: "poppins",
          }}
        >
          {capitalizeFirstLetter(text.split(" ")[0])}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "poppins",
            fontWeight: "500",
            fontSize: {
              xs: "3rem",
              md: "5rem",
            },
            color: "#4e4e4e",
          }}
          component="h1"
        >
          {capitalizeFirstLetter(text.split(" ")[1])}
        </Typography>
      </Box>
    </>
  );
};

export default memo(Heading);
