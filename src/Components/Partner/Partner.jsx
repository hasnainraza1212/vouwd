import { Box } from "@mui/material";
import React from "react";
import tamarisc from "./../../assets//images/tamarisc.png"
import etsy from "./../../assets//images/etsy.png"


const Partner = ({ partner }) => {
  return (
    <>
    <Box sx={{
        aspectRatio:"16/9",
        width:{
            xs:"50px",
            md:"150px"
        },
        mt:partner.alt==="tamarisc"?0:2

    }}>
      <img style={{width:"100%",height:"100%"}} src={partner.uri} alt={partner.alt} loading="lazy" />
    </Box>
    </>
  );
};

export default Partner;

// var GOOGLE_MAPS_URL = '//maps.googleapis.com/maps/api/js?key=AIzaSyDOHSRtHcrkFA0S4Ut6_uUlvXWXDN9K-rE&v=3.53&language=en_US&libraries=drawing,geometry,places,visualization';
