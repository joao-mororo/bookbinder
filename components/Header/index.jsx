import Link from "next/link";
import Search from "./Search";
import { Box, Button, Container, TextField } from "@mui/material";
import { BiUser, BiHeart, BiCart } from "react-icons/bi";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      <Box sx={{ width: "20%" }}>
        <Link href={"/"}>
          <h1>Logo</h1>
        </Link>
      </Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        <Search />
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <button className={styles.btn_icon}>
          <BiUser />
        </button>
        <button className={styles.btn_icon}>
          <BiHeart />
        </button>
        <button className={styles.btn_icon}>
          <BiCart />
        </button>
      </Box>
    </Container>
  );
};

export default Header;
