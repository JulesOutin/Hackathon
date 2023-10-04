import React from 'react';
import './Card.css';
import Image from "../../Img/image.jpg";

const Card = ({ title, tarif }) => {
    return (
      <div id="card">
        <img src={Image} alt="" />
        <h2>{title}</h2>
        <p>Petite description</p>
        <h1>{tarif} euros</h1>
      </div>
    );
  };

export default Card;