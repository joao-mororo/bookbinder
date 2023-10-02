import React from "react";
import BoodCard from "../BookCard";
import * as api from "@/api";
import styles from "./BooksRow.module.css";

const BooksRow = async ({ title, subject }) => {
  const res = await api.getBooksBySubject(subject);
  const works = res.works;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.row}>
        {works.map((book) => (
          <BoodCard
            key={book.key.replace("/works/", "")}
            href={`/book/${book.key.replace("/works/", "")}`}
            title={book.title}
            author={book.authors[0].name}
            img={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksRow;
