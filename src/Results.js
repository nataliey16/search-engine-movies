import React from "react";

export default function Results(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.released}</h2>
    </div>
  );
}
