import React, { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              value={query}
              onChange={onChange}
              type="text"
              placeholder="Search for a movie"
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((result, index) => (
                <li key={index}>
                  <ResultCard movie={result} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
