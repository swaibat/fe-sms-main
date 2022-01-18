import type { NextPage } from "next";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PlainAppBar from "../../components/PlainAppBar";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer";
import "antd/dist/antd.css";
import styles from "./login.module.css";
import CMessage from "../../components/Message";

const PassChangeSuccess: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Box>
        
    <Container fixed>
      
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <CMessage mainText="New password set successfully"
        subText="Your new password has been set successfully, you can login using your new password"  />
      </Box>
    </Container>
    </Box>
  );
};

export default PassChangeSuccess;
