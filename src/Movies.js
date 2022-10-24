import React, { useState } from "react";
import axios from "axios";
// import Results from "./Results";
import "./Movies.css";

export default function Movies() {
  let [movie, setMovie] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState("");

  function handleMovieResponse(response) {
    // console.log(response.data);
    setResults(response.data.title);
    setLoaded(true);
  }

  function handleMovieData() {
    // https://www.omdbapi.com/
    let apiKey = "dcf858c8";
    let apiUrl = ` http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}&`;

    axios.get(apiUrl).then(handleMovieResponse);
  }

  function handleMovieSubmit(event) {
    event.preventDefault();
    handleMovieData();
  }

  function handleMovieChange(event) {
    setMovie(event.target.value);
  }

  if (loaded) {
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
                onClick={handleMovieSubmit}
              ></input>
            </div>
          </div>
        </form>
        <h1>{results}</h1>
      </div>
    );
  } else {
    handleMovieData();
    return <div>Loading...</div>;
  }
}
