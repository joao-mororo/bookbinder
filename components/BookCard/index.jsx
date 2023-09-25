import Link from "next/link";
import React from "react";
import styles from "./BookCard.module.css";

const BoodCard = ({ href, img, title, author }) => {
  return (
    <Link className={styles.card} href={href}>
      <img className={styles.img} src={img} />
      <div className={styles.description}>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>{author}</div>
      </div>
    </Link>
  );
};

export default BoodCard;
