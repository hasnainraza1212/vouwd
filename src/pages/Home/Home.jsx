import React from "react";
import home from "./home.module.css";
import chef from "./../../assets/images/chef.gif";
import { Box, Stack, Typography } from "@mui/material";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import Partner from "../../Components/Partner/Partner";
import { partners } from "../../utils/utils";
const headings = ["Eat healthy", "Live long", "Live strong"];
const Home = () => {
  return (
    <Box >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
            maxWidth: "1200px",
            margin: "0 auto",
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
            sx={
              {
                // mb: 5,
              }
            }
          >
            {headings.map((heading, index) => (
              <Heading key={index} text={heading} />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            mt: {
              xs: "1.5rem",
              md: "3rem",
            },
            mb: {
              xs: "1.5rem",
              md: "0rem",
            },
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <img
            style={{ maxWidth: "50%", height: "auto", aspectRatio: "1 / 1" }}
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
                xs: 5,
                md: 8,
              },
            }}
          >
            <Button />
          </Box>
        </Box>
      </Box>
      {/* section 2 */}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.5rem",
              md: "3rem",
            },
            mb: 6,
            color: "#4e4e4e",
          }}
        >
          Our Satisfied Customers
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: {
              xs:"300px",
              md:"1200px"
            },
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          {partners.map((partner, index) => (
            <Partner key={index} partner={partner} />
          ))}
        </Box>
      </Box>
      {/* section  2 */}
    </Box>
  );
};
{
}
export default Home;
