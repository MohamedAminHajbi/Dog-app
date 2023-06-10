import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import sketch from '../media/home.png'
import CustomButton from "./CustomButton";
import { WidthFull } from "@mui/icons-material";

const Home = () => {
  
    const CustomBox = styled(Box)(({ theme }) => ({
      display: "flex",
      justifyContent:"center",
      gap: theme.spacing(5),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down("sm")]:{
        felxDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    }));
  
    const Title = styled(Typography)(({ theme }) => ({
      fontSize: "64px",
      color:"#1C1718",
      fontWeight:"bold",
      margin: theme.spacing(4,0,4,0),
      [theme.breakpoints.down("sm")]:{
        fontSize: "40px"
      }
    }));
  
    return <Box sx={{ minHeight: "80vh"}}>
      <Container>
        <CustomBox>
          <Box sx={{flex:"1"}}>
            <Typography variant="body2" sx={{fontSize: "18px", color:"#687690", fontWeight: "500", mt: 10,mb: 4}}>
              Welcome to our Dog's App!
            </Typography>
            <Title variant="h1" sx={{fontSize:"50px" , width:"600px"}}>
            Our app is a hub for learning and exploring everything about dogs.
            </Title>
            <Typography variant="h1" sx={{fontSize:"18px", color:"#5A6473", my:4}}>
            We offer a diverse collection of resources and information to help you in your research.
            </Typography>
            <CustomButton backgroundColor="#A22948" color="#fff" buttonText="Explore" heroBtn={true} width="90px" to={"/catalog"}/>
          </Box>
          <Box>
            <img src={sketch} alt=""/>
          </Box>
        </CustomBox>
  
      </Container>
    </Box>;
  
}

export default Home