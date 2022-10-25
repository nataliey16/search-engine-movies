import React from "react";
import "./Results.css";
import Poster from "./Poster";

export default function Results(props) {
  return (
    <div className="Results">
      <h1 className="movie-title">{props.title}</h1>
      <ul>
        <li className="year-released">{props.year}</li>
        <li className="run-time">{props.runTime}</li>
      </ul>
      <img className="img-fluid" src={props.poster} alt="movie-poster"></img>
      <div className="genre">{props.genre}</div>
      <div className="plot">{props.plot}</div>
      <Poster />
    </div>
  );
}
