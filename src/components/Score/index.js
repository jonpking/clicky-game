import React from "react";
import "./style.css";

const Score = props => {
    return (
        <div className="score">
            <h1>Score: {props.score}</h1>
        </div>
    );
}

export default Score;
