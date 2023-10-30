import React from "react";
import { Box, Container } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgb(10, 10, 10)", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <div className={styles.wrapper}></div>
        <div className={styles.wrapper}>Footer</div>
        <div className={styles.wrapper}></div>
      </Container>
    </div>
  );
};

export default Footer;
