import React, { useEffect } from 'react';
import './Card.css';
import Image from "../../Img/image.jpg";

const Card = () => {
    useEffect(() => {
        const cards = document.getElementById("cards");

        // Supprimez tous les enfants de l'élément "cards" existant
        while (cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }

        // Ajoutez vos nouvelles cartes
        for (let i = 0; i < 20; i++) {
            const card = document.createElement("div");
            card.id = "card";
            const img = document.createElement("img");
            img.src = Image;
            img.alt = "";
            const h2 = document.createElement("h2");
            h2.textContent = "Description";
            const p = document.createElement("p");
            p.textContent = "Petite description";
            const h1 = document.createElement("h1");
            h1.textContent = "30£";
            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(h1);
            cards.appendChild(card);
        }
    }, []);

    return <div id='cards'></div>;
};

export default Card;