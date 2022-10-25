import React, { useState } from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Results from "./Results";
import "./Movies.css";

export default function Movies() {
  let [movie, setMovie] = useState("Finding Nemo");
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState("");

  function handleMovieResponse(response) {
    console.log(response.data);

    setResults({
      title: response.data.Title,
      year: response.data.Year,
      runTime: response.data.Runtime,
      genre: response.data.Genre,
      poster: response.data.Poster,
      plot: response.data.Plot,
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
          <div className="row">
            <div className="col-lg-10 col-lg-10">
              <input
                className="form-control search-bar"
                type="search"
                placeholder="Search for a movie"
              ></input>
            </div>
            <div className="col-lg-2 col-lg-2">
              <input
                className="btn btn-branding"
                type="submit"
                value="search"
                onClick={handleMovieSubmit}
              ></input>
            </div>
          </div>
        </form>
        <Results
          title={results.title}
          year={results.year}
          poster={results.poster}
          runTime={results.runTime}
          genre={results.genre}
          plot={results.plot}
        />
      </div>
    );
  } else {
    handleMovieData();
    return (
      <div className="Loading text-center">
        <Bars
          height="50"
          width="50"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}
