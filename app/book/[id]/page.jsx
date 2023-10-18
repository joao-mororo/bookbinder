import React from "react";
import * as api from "@/api";
import { Box, Chip, Container } from "@mui/material";

const Book = async ({ params }) => {
  const book = await api.getBookById(params.id);
  const editions = await api.getBookEditions(params.id);
  const shelves = await api.getBookShelves(params.id);
  const ratings = await api.getBookRatings(params.id);
  const author = await api.getDataOfAuthor(
    book.authors[0].author.key.replace("/authors/", "")
  );

  return (
    <Container maxWidth="lg" sx={{ display: "flex", margin: "2rem auto" }}>
      <Box sx={{ width: "30%", textAlign: "center" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
        />
      </Box>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <div>
          <h1>{book.title}</h1>
          <h3 style={{ opacity: ".7" }}>{author.name}</h3>
        </div>
        {book.description && (
          <pre style={{ whiteSpace: "pre-wrap" }}>{book.description.value}</pre>
        )}
        <p>
          <Chip label={`Querem ler: ${shelves.counts.want_to_read}`} />
          <Chip label={`Estão lendo: ${shelves.counts.currently_reading}`} />
          <Chip label={`Já leram: ${shelves.counts.already_read}`} />
        </p>
      </Box>
    </Container>
  );
};

export default Book;
