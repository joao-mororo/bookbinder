"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Container, TextField } from "@mui/material";
import { BiSearchAlt, BiUser, BiHeart, BiCart } from "react-icons/bi";
import styles from "./Header.module.css";

const Search = () => {
  const { push } = useRouter();
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("buscando");
    const q = input.replaceAll(" ", "+");
    push(`/results/${q}`);
  };

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
        <h1>Logo</h1>
      </Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        <form className={styles.form} onSubmit={submit}>
          <input
            placeholder="Pesquisa"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </Box>
      <Box sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
        <Button>
          <BiUser />
        </Button>
        <Button>
          <BiHeart />
        </Button>
        <Button>
          <BiCart />
        </Button>
      </Box>
    </Container>
  );
};

export default Search;
