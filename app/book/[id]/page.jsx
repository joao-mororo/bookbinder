import React from "react";
import * as api from "@/api";
import Ratings from "./Ratings";
import { Box, Chip, Container, Link } from "@mui/material";
import { BiLinkExternal } from "react-icons/bi";

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
        {book.covers && (
          <img
            style={{ borderRadius: "10px" }}
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          />
        )}
        {ratings.summary.average && <Ratings ratings={ratings} />}
      </Box>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <div>
          <h1>{book.title}</h1>
          <h3 style={{ opacity: ".7" }}>{author.name}</h3>
        </div>

        <p>
          {ratings.summary.average && (
            <Chip label={`Avaliação: ${ratings.summary.average.toFixed(1)}`} />
          )}{" "}
          <Chip label={`Querem ler: ${shelves.counts.want_to_read}`} />{" "}
          <Chip label={`Estão lendo: ${shelves.counts.currently_reading}`} />{" "}
          <Chip label={`Já leram: ${shelves.counts.already_read}`} />{" "}
        </p>

        {book.description && (
          <pre style={{ whiteSpace: "pre-wrap" }}>{book.description.value}</pre>
        )}

        {book.links &&
          book.links.map((link, i) => (
            <Link key={i} target="_blank" href={link.url} underline="always">
              {link.title} <BiLinkExternal />
            </Link>
          ))}
      </Box>
    </Container>
  );
};

export default Book;
