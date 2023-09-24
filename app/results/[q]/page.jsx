import React from "react";
import * as api from "@/api";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Skeleton,
  Box,
} from "@mui/material";
import Link from "next/link";

const Results = async ({ params }) => {
  const res = await api.getBooksByName(params.q);
  const books = res.docs;

  return (
    <Container maxWidth="lg">
      <h1>Resultados: {res.numFound || "0"}</h1>
      <br />
      {!books ? (
        <h1>Nenhum livro encontrado</h1>
      ) : (
        books.map((book) => (
          <Card sx={{ maxWidth: 345, margin: "1rem" }}>
            <CardMedia
              component="img"
              alt="cover"
              image={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
            </CardContent>

            <CardActions>
              <Button>
                <Link href={`/book/${book.key.replace("/works/", "")}`}>
                  Detalhes
                </Link>
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Results;
