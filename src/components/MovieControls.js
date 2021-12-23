import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const { removeMovie, addMovieToWatched, moveToWatchList, removeFromWatched } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button onClick={() => addMovieToWatched(movie)} className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button onClick={() => removeMovie(movie.id)} className="ctrl-btn">
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
