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
                <p>Trouver des services. Acquérir de l’experience</p>
                </li>
                <ul>
                    <p>Gestion d'annonce et compte</p>
                    <li>
                    <Link to="/login">Poster & gérer une annonce</Link>
                    </li>
                    <li>
                    <Link to="/profile">Mon Compte</Link>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;