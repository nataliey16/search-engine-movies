import React, { useState } from "react";
import "./Movies.css";

export default function Movies() {
  let [movie, setMovie] = useState(null);

  function handleMovieSearch(event) {
    event.preventDefault();
    alert(`${movie}`);
  }

  function handleMovieChange(event) {
    event.preventDefault();
    setMovie(event.target.value);
  }

  return (
    <div className="Movies">
      <form onChange={handleMovieChange}>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <input
              className="form-control"
              type="search"
              placeholder="Search for a movie"
            ></input>
          </div>
          <div className="col-sm-2 ">
            <input
              className="btn btn-branding"
              type="submit"
              value="search"
              onClick={handleMovieSearch}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
