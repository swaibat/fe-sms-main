import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Head from "next/head";
import Dropdown from "./Dropdown";
import Link from "next/link";



export default function PlainAppBar() {
  
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>AirDady</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Container maxWidth="lg">
      <AppBar style={{ background: '#ffffff'  }} sx={{ boxShadow: 0, paddingLeft: 5, paddingTop: 3 }}>
      <Toolbar variant="dense">
         <Typography variant="h4" color="#008BB7" component="div">
          Airdady
         </Typography>
      </Toolbar>
      </AppBar>
        </Container>
      
    </Box>
  );
}
