import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
          <span className="count-pill">
            {watchList.length === 1 ? "1 Movie" : `${watchList.length} Movies`}
          </span>
        </div>
        {watchList.length === 0 ? (
          <h2 className="no-movies">No movies in your watch list</h2>
        ) : (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard movie={movie} type="watchList" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchList;
