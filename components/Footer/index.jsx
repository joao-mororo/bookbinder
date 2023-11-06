import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", width: "1200px" }}>
        <div className={styles.wrapper}>teste</div>
        <div className={styles.wrapper}>Footer</div>
        <div className={styles.wrapper}>tese</div>
      </div>
    </div>
  );
};

export default Footer;
