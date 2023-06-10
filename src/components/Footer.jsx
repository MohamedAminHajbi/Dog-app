import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
      flexDirection : "column",
      textAlign: "center"
    }
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]:{
      justifyContent:"center"
    }
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize:"16px",
    color:"#7A7A7E",
    fontWeight:"300",
    cursor:"pointer",
    "&hover":{
      color:"#000"
    }
  }));

  return <Box sx={{ py:10}}>
    <CustomContainer>
      <Box>
        <Typography sx={{fontSize: "20px",color:"#1C1C1D", fontWeight:"700", mb: 2}}>
          Products
        </Typography>
        <FooterLink>Listing</FooterLink>
        <br/>
        <FooterLink>Properties</FooterLink>
        <br/>
        <FooterLink>Agents</FooterLink>
        <br/>
        <FooterLink>Blog</FooterLink>
        <br/>
      </Box>
      <Box>
        <Typography sx={{fontSize: "20px",color:"#1C1C1D", fontWeight:"700", mb: 2}}>
          Ressources
        </Typography>
        <FooterLink>Our books</FooterLink>
        <br/>
        <FooterLink>Stories</FooterLink>
        <br/>
        <FooterLink>Videos</FooterLink>
        <br/>
        <FooterLink>Free trial</FooterLink>
        <br/>
      </Box>
      <Box>
        <Typography sx={{fontSize: "20px",color:"#1C1C1D", fontWeight:"700", mb: 2}}>
          Get in touch
        </Typography>
        <Typography sx={{fontSize: "16px",color:"#1C1C1D", fontWeight:"500", mb: 2}}>
          You will find your favourite book here.
        </Typography>
        <IconBox>
          <img src={fbIcon} alt="fbIcon" style={{cursor:"pointer"}} />
          <img src={twitterIcon} alt="fbIcon" style={{cursor:"pointer"}} />
          <img src={linkedinIcon} alt="fbIcon" style={{cursor:"pointer"}} />
        </IconBox>
      </Box>
    </CustomContainer>
  </Box>;
};

export default Footer;
