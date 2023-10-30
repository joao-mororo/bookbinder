import React from "react";
import * as api from "@/api";
import Ratings from "./Ratings";
import { Box, Chip, Container, Link } from "@mui/material";
import { BiLinkExternal } from "react-icons/bi";

// [...]
// Mas, você me ensinou a ter amor próprio
// E, por amor próprio, eu não aceito essa fria liquidez
// - Boa noite.
// - Ok, boa noite.
// Hum, boa noite.

const Book = async ({ params }) => {
  const [book, editions, shelves, ratings] = await Promise.all([
    api.getBookById(params.id),
    api.getBookEditions(params.id),
    api.getBookShelves(params.id),
    api.getBookRatings(params.id),
  ]);

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
          <Chip label={`${shelves.counts.want_to_read} querem ler`} />{" "}
          <Chip label={`${shelves.counts.currently_reading} estão lendo`} />{" "}
          <Chip label={`${shelves.counts.already_read} já leram`} />{" "}
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
