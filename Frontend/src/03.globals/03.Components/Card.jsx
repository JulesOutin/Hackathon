import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ description, duration, id, image, isWorker, localisation, price, title, discord, email, filiere, name, phone }) => {

    // Autour de ma cabane
    // chaque jour les grenouilles disent
    // tu vieillis, tu vieillis

    let frog;

      array.forEach(cabin => {
          while (frog === -1) {
              frog = "you grow old"
          }
      });
    
    return (
      <NavLink to={`/annonce/${id}`}>
        <div className='w-[296px] h-[365px] gap-2 flex flex-col duration-300 hover:shadow-sm' id="card">
          <img className='h-[280px] object-cover rounded-md ' src={image} alt="" />
          <div>
            <p className='nom-filiere'>{filiere}</p>
            <h2 className='custom-text'>{title}</h2>
            <h1 className='grotesk-price'>{price} €</h1>

          </div>
        </div>
      </NavLink>
    );
  };

export default Card;
