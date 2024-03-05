
import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
const Service =  (props) => {
  return (
    <Box
      sx={{
        maxWidth: "300px",
        minWidth: "0px",
      
      }}
    >
        <Box sx={{
            maxHeight:"200px",
            margin:"0 auto",
            width:"70%",
            mb:2

        }}>
          <img style={{
            width:"100%",
            height:"100%",
            aspectRatio:"1/1",
            objectFit:"contain"
          }} src={props.src}
          
          alt={props.alt}
          />

        </Box>
      <Typography
        variant="h4"
        sx={{
          borderRadius: "50%",
          border: "1px solid #ff8888",
          minWidth: "0px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bolder",
          color: "red",
          fontFamily: "poppins",
          margin:"0 auto"
        }}
      >
        {props.count}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bolder",
          fontFamily: "poppins",
          textAlign: "center",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "poppins",
          fontSize: "1.1rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        {
            props.text
        }
      </Typography>
    </Box>
  )
}

export default Service