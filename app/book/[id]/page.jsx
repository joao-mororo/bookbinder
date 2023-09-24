import React from "react";
import * as api from "@/api";
import { Container } from "@mui/material";

const Book = async ({ params }) => {
  const book = await api.getBookById(params.id);

  return (
    <Container maxWidth="lg">
      <h1>{book.title}</h1>
    </Container>
  );
};

export default Book;
