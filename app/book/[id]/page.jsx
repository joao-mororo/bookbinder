import React from "react";
import * as api from "@/api";
import { Container } from "@mui/material";

const Book = async ({ params }) => {
  const book = await api.getBookById(params.id);
  const editions = await api.getBookEditions(params.id);
  const shelves = await api.getBookShelves(params.id);
  const ratings = await api.getBookRatings(params.id);

  return (
    <Container maxWidth="lg">
      <h1>{book.title}</h1>
    </Container>
  );
};

export default Book;
