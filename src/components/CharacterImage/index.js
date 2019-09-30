import React from "react";
import "./style.css";

const CharacterImage = props => {
    return (
        <div className="img-container">
            <img onClick={props.onClick} alt={props.name} src={props.image} />
        </div>
    );
}

export default CharacterImage;
