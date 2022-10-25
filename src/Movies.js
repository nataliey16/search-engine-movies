import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Results from "./Results";
import "./Movies.css";

export default function Movies() {
  let [movie, setMovie] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState("");

  function handleMovieResponse(response) {
    setResults({
      title: response.data.Title,
      year: response.data.Year,
      plot: response.data.Plot,
      poster: response.data.Poster,
      runTime: response.data.Runtime,
      actors: response.data.Actors,
    });
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
        <Results title={results.title} released={results.released} />
      </div>
    );
  } else {
    handleMovieData();
    return (
      <div className="Loading text-center">
        <div className="Loader-spinner text-center">
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }
}
