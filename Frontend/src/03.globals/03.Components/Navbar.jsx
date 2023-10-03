import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/">Accueil</Link>
                </li>
                <li>
                <Link to="#">Trouver des services. Acquérir de l’experience</Link>
                </li>
                <ul>
                    <li>
                    <p>Gestion d'annonce et compte</p>
                    </li>
                    <li>
                    <Link to="/login">Poster & gérer une annonce</Link>
                    <Link to="/profile">Mon Compte</Link>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;