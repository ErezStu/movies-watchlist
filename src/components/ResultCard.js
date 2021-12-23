import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatched, addMovie, watchList, watched } =
    useContext(GlobalContext);

  let storedMovie = watchList.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedListDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 7)
              : "Sorry, no release date"}
          </h4>
        </div>
        <div className="controls">
          <button
            disabled={watchListDisabled}
            onClick={() => addMovie(movie)}
            className="btn"
          >
            Add to watch list
          </button>
          <button
            disabled={watchedListDisabled}
            onClick={() => addMovieToWatched(movie)}
            className="btn"
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
