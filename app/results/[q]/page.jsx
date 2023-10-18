import React from "react";
import * as api from "@/api";
import { Box, Container } from "@mui/material";
import BookCard from "@/components/BookCard";

const Results = async ({ params }) => {
  const res = await api.getBooksByName(params.q);
  const books = res.docs;

  return (
    <Container maxWidth="lg">
      <h1>Resultados: {res.numFound || "0"}</h1>
      <br />

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {books.length === 0 ? (
          <h1>Nenhum livro encontrado</h1>
        ) : (
          books.map((book) => (
            <Box
              key={book.key.replace("/works/", "")}
              sx={{ width: "33.333%", padding: ".5rem" }}
            >
              <BookCard
                href={`/book/${book.key.replace("/works/", "")}`}
                img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                title={book.title}
                author={book.author_name}
              />
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
};

export default Results;
