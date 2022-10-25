import React from "react";

export default function Results(props) {
  return (
    <div className="Results">
      <header>
        {props.title} {props.year}
      </header>
    </div>
  );
}
