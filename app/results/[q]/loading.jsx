import { CircularProgress, Container } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress />
    </Container>
  );
};

export default loading;
