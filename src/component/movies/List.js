import React, { useEffect, useState } from "react";
import styles from "./list.module.css";

const List = ({ selectedCards }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${selectedCards}&year=2020`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCards]);

  return (
    <div>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {selectedCards}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => (
          <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
            <img
              src={movie?.primaryImage?.url}
              alt={movie.title}
              style={{
                objectFit: "cover",
                width: "20vw",
                height: "22vh",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
