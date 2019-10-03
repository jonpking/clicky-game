import React from "react";
import "./style.css";

function ImageWrapper(props) {
  return <div className="imageWrapper">{props.children}</div>;
}

export default ImageWrapper;
