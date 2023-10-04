import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        // Dans votre fichier JSX
        <nav>
        <ul>
            <li>
            <Link to="/">YTalents</Link>
            </li>
            <li>
            Trouver des services. Acquérir de l’expérience
            </li>
            <li className="dropdown">
            <span>Gestion d'annonce et compte</span>
            <ul className="dropdown-content">
                <li>
                <Link to="/login">Poster & gérer une annonce</Link>
                </li>
                <li>
                <Link to="/profile">Mon Compte</Link>
                </li>
            </ul>
            </li>
        </ul>
        </nav>

    );
};

export default Navbar;