import React, { memo } from "react";
import { Box, Button, Typography } from "@mui/material";
import plus from "./../../assets/images/plus.png";
const Product=({ title, isMostPopular, text, price, src, alt }) => {
    return (
        <Box style={{
            width:"100%",
            height:"100%",
            minWidth: "0px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
            padding:"10px 35px"
          }} >
        <Box
          style={{
            width:"100%",
            height:"100%"
          }}
        >
          <Box
          className="dishImage"
            style={{
              margin: "0 auto",
              mb: 1,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "1/1",
                objectFit: "contain",
                filter: "drop-shadow(0 0 0.1rem crimson)",
              }}
              src={src}
              alt={alt}
            />
          </Box>
          {isMostPopular && (
            <Typography
              variant="p"
              style={{
                background: "#FAE8ED",
                fontWeight: "bold",
                color: "red",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "20px",
                display: "block",
                marginBottom: "10px",
                fontSize: ".7rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              MOST POPULAR
            </Typography>
          )}

          <Typography
          className="title"
            variant="h6"
            style={{
              fontWeight: "bolder",
              fontFamily: "poppins",
              color: "#535353",
            }}
          >
            {title}
          </Typography>
          <Typography
          className="subtitle"
            variant="subtitle1"
            style={{
              fontFamily: "poppins",
              color: "#F0AABA",
              fontSize: ".9rem",
              width: "100%",
            }}
          >
            {text}
          </Typography>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Typography
             className="price"
              variant="h4"
              style={{
                fontWeight: "bold",
                color: "#4e4e4e",
                fontSize: "1.5rem",
                fontFamily: "poppins",
              }}
            >
              {price}
            </Typography>

            <Box

              className="AddButton"
              style={{
                cursor:"pointer",
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "red",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  aspectRatio: "1/1",
                }}
                src={plus}
              />
            </Box>
          </Box>
        </Box>
      </Box>
        
    );
  };
export default memo(Product)