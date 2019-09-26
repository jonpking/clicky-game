import React from "react";
import "./style.css";

function characterContainer(props) {
  return <div className="characterContainer">{props.children}</div>;
}

export default characterContainer;
