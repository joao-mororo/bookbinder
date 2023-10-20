import React from "react";
import { Box } from "@mui/material";

const Ratings = async ({ ratings }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        margin: "1rem",
        padding: "1rem",
        border: "solid yellow 2px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{ratings.summary.average.toFixed(1)}</h1>
        <p>{ratings.summary.count}</p>
      </div>
      <ul style={{ listStyleType: "none" }}>
        <li>
          5 <progress max={ratings.summary.count} value={ratings.counts["5"]} />
        </li>
        <li>
          4 <progress max={ratings.summary.count} value={ratings.counts["4"]} />
        </li>
        <li>
          3 <progress max={ratings.summary.count} value={ratings.counts["3"]} />
        </li>
        <li>
          2 <progress max={ratings.summary.count} value={ratings.counts["2"]} />
        </li>
        <li>
          1 <progress max={ratings.summary.count} value={ratings.counts["1"]} />
        </li>
      </ul>
    </Box>
  );
};

export default Ratings;
