import React, { useState } from 'react';

const Connexion = () => {
  // États pour suivre les champs du formulaire
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyez les données du formulaire de connexion à votre backend pour authentification
    const formData = { email, motDePasse };
    console.log('Connexion:', formData);

    // Réinitialisez les champs du formulaire après la soumission
    setEmail('');
    setMotDePasse('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Champ d'e-mail du formulaire */}
      <div>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      
      {/* Champ de mot de passe du formulaire */}
      <div>
        <label>Mot de Passe:</label>
        <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
      </div>
      
      {/* Bouton de soumission du formulaire */}
      <button type="submit">Se Connecter</button>
    </form>
  );
};

export default Connexion;
