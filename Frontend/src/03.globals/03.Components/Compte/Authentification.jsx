import React, { useState } from 'react';
import Connexion from './Connexion';
import CreationCompte from './CreationCompte';
const Authentification = () => {
    return (
      <div>
        {/* Affiche le formulaire de connexion */}
        <div>
          <h2>Connexion</h2>
          <Connexion />
        </div>
        
        {/* Affiche le formulaire de création de compte */}
        <div>
          <h2>Créer un Compte</h2>
          <CreationCompte />
        </div>
      </div>
    );
  };
  
  export default Authentification;
  