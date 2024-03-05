import React from "react";
import home from "./home.module.css";
import chef from "./../../assets/images/chef.gif";
import { Box, Stack, Typography } from "@mui/material";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import Partner from "../../Components/Partner/Partner";
import { dishes, partners, services } from "../../utils/utils";
import Service from "../../Components/Service/Service";
import Product from "../../Components/Product/Product";

const headings = ["Eat healthy", "Live long", "Live strong"];

const Home = () => {
  return (
    <Box>
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
              md: "8rem",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: {
                xs: "1.3",
                md: "1.5rem",
              },
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
              xs: "1.7rem",
              md: "3rem",
            },
            mb: {
              xs: 1,
              md: 6,
            },
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
              xs: "300px",
              md: "1200px",
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
      {/* section 3 */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection:{
            xs:"column",
            md:"row"
          },
          maxWidth: {
            xs: "300px",
            md: "1200px",
          },
          margin: "0 auto",
          mt: 5,
          gap:"50px",
          alignItems: "center",
        }}
      >
        {services.map((service, index) => (
          <Box key={index}>
            <Service
              count={++index}
              title={service.title}
              text={service.text}
              src={service.uri}
              alt={service.alt}
            />
          </Box>
        ))}
      </Box>
      {/* section 3 */}
      {/* section 4 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs:"1fr",
            md:"repeat(4, 1fr)"
          },
          gap: "20px",
          maxWidth:"1200px",
          margin:"0 auto",
          mt:8
        }}
      >
        {dishes.map((dish, index) => (
          <Box className={"gridItem"} key={index}>
            <Product
              title={dish.title}
              text={dish.text}
              src={dish.src}
              alt={dish.alt}
              price={dish.price}
              isMostPopular={dish.isMostPopular}
            />
          </Box>
        ))}
      </Box>
      {/* section 4 */}
    </Box>
  );
};
{
}
export default Home;
