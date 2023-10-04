import React, { useState } from 'react';
import Connexion from './Connexion';
import CreationCompte from './CreationCompte';
import './Authentification.css'

const Authentification = () => {
    return (
      
      <div className="title-container">
        <h1>Connectez-vous ou créer votre compte</h1>
        {/* Affiche le formulaire de connexion */}
      
      {/* Conteneur principal avec Flexbox */}
      <div className="auth-container">

        <div className="connexion-container">
          <h2>Connexion</h2>
          <Connexion />
        </div>
        
        {/* Affiche le formulaire de création de compte */}
        <div className="creation-container">
          <h2>Créer un Compte</h2>
          <CreationCompte />
        </div>
      </div>
      </div>
    );
  };
  
  export default Authentification;
  