import React from "react";
import * as api from "@/api";
import { Container } from "@mui/material";
import BookCard from "@/components/BookCard";

const Results = async ({ params }) => {
  const res = await api.getBooksByName(params.q);
  const books = res.docs;

  return (
    <Container maxWidth="lg">
      <h1>Resultados: {res.numFound || "0"}</h1>
      <br />
      {books.length === 0 ? (
        <h1>Nenhum livro encontrado</h1>
      ) : (
        books.map((book) => (
          <BookCard
            key={book.key.replace("/works/", "")}
            href={`/book/${book.key.replace("/works/", "")}`}
            img={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            title={book.title}
            author={book.author_name}
          />
        ))
      )}
    </Container>
  );
};

export default Results;
