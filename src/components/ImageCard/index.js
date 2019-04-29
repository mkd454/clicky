import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div classname="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove"></span>
    </div>
  );
}

export default ImageCard;
