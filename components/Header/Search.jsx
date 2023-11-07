"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
import styles from "./Search.module.css";

const Search = () => {
  const { push } = useRouter();
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    console.log("buscando");
    const q = input.replaceAll(" ", "+");
    push(`/results/${q}`);
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <input
        placeholder="Pesquisa"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <BiSearchAlt />
      </button>
    </form>
  );
};

export default Search;
