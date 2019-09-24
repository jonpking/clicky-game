import React from "react";
import "./style.css";

const CharacterImage = props => {
    return (
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
    );
}

export default CharacterImage;
