import React, { useState } from 'react';
import './CreationConnexionCompte.css'; 

const CreationCompte = () => {
  // États pour suivre les champs du formulaire
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifiez la complexité du mot de passe
    //if (!verifierComplexiteMotDePasse(motDePasse)) {
    //     setErreurMotDePasse('Le mot de passe doit contenir au moins 12 caractères, inclure des lettres, des majuscules et des caractères spéciaux.');
   //      return;
    //} 

    // Envoyez les données du formulaire de création de compte à votre backend pour traitement
    const formData = { email, motDePasse };
    console.log('Création de compte:', formData);
    // afficher messsage utilisateur "compte créé"
    confirm("Votre compte a bien été créé")

    // Réinitialisez les champs du formulaire après la soumission
    setEmail('');
    setMotDePasse('');
    //setErreurMotDePasse('');
  };

    // Fonction pour vérifier la complexité du mot de passe
    //const verifierComplexiteMotDePasse = (motDePasse) => {
      //  const regexMotDePasse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-#@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
      //  return regexMotDePasse.test(motDePasse);
      //};
    

  return (
    <form onSubmit={handleSubmit}>
      {/* Champ d'e-mail du formulaire */}
      <div className="form-container">
        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      
      {/* Champ de mot de passe du formulaire */}
        <label>Mot de Passe:</label>
        <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />

      {/* Bouton de soumission du formulaire */}
      <button type="submit">Créer un Compte</button>
      </div>
    </form>
  );
};

export default CreationCompte;
