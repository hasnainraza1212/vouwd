import React, { memo } from 'react'
import Partner from '../../Components/Partner/Partner'
import tamarisc from "./../../assets//images/tamarisc.png"
import etsy from "./../../assets//images/etsy.png"
import nextdoor from "./../../assets//images/nextdoor.png"
import palantir from "./../../assets//images/palantir.png"
import { Box } from '@mui/material'
import { partners } from '../../utils/utils'


const Partners = () => {
  return (
    <Box sx={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    }}>
    {partners.map((partner,index)=><Partner key={index} partner={partner}/>)
    }
    </Box>
  )
}

export default memo(Partners)