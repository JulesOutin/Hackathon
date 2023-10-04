import React, { useState } from 'react';

const DemandeForm = () => {
  // État local pour stocker les valeurs du formulaire
  const [typeAnnonce, setTypeAnnonce] = useState('');
  const [campus, setCampus] = useState('');
  const [filiere, setFiliere] = useState('');
  const [tarif, setTarif] = useState('');
  const [tempsMission, setTempsMission] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [bioUtilisateur, setBioUtilisateur] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [lienTeams, setLienTeams] = useState('');


  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();


    // Réinitialiser le formulaire après la soumission
    setTypeAnnonce('');
    setCampus('');
    setFiliere('');
    setTarif('');
    setTempsMission('');
    setTitre('');
    setDescription('');
    setImageURL('');
    setNomUtilisateur('');
    setBioUtilisateur('');
    setEmail('');
    setTelephone('');
    setLienTeams('');

  };

  return (
    <div>
      <h2>Poster une demande</h2>
      <form onSubmit={handleSubmit}>
        {/* Filtres sous forme de liste déroulante */}
        <div>
          <label>Type d'annonce :</label>
          <select value={typeAnnonce} onChange={(e) => setTypeAnnonce(e.target.value)}>
            <option value="jePropose">Je propose</option>
            <option value="jeRecherche">Je recherche</option>
          </select>
        </div>

        <div>
          <label>Choix du campus :</label>
          <select value={campus} onChange={(e) => setCampus(e.target.value)}>
            <option value="">Sélectionnez...</option>
            <option value="aix-en-provence">Aix en Provence</option>
            <option value="bordeaux">Bordeaux</option>
            <option value="lille">Lille</option>
            <option value="lyon">Lyon</option>
            <option value="montpellier">Montpellier</option>
            <option value="nantes">Nantes</option>
            <option value="paris">Paris</option>
            <option value="rennes">Rennes</option>
            <option value="rouen">Rouen</option>
            <option value="sophia">Sophia</option>
            <option value="strasbourg">Strasbourg</option>
            <option value="val-d-europe">Val d'Europe</option>
          </select>
        </div>

        <div>
          <label>Filière :</label>
          <select value={filiere} onChange={(e) => setFiliere(e.target.value)}>
            <option value="">Sélectionnez...</option>
            <option value="informatique-dev">INFORMATIQUE - Développement</option>
            <option value="informatique-infra">INFORMATIQUE - Infra</option>
            <option value="informatique-cybersec">INFORMATIQUE - Cybersécurité</option>
            <option value="informatique-ia-data">INFORMATIQUE - IA & Data</option>
            <option value="marketing">MARKETING</option>
            <option value="communication">COMMUNICATION</option>
            <option value="creation-design">CREATION & DESIGN</option>
          </select>
        </div>

        <div>
          <label>Tarif :</label>
          <select value={tarif} onChange={(e) => setTarif(e.target.value)}>
            <option value="gratuit">Gratuit</option>
            <option value="payant0-50">Payant 0-50€</option>
            <option value="payant50-100">Payant 50-100€</option>
            <option value="payant+100">Payant +100€</option>
          </select>
        </div>

        <div>
          <label>Temps de la mission :</label>
          <select value={tempsMission} onChange={(e) => setTempsMission(e.target.value)}>
            <option value="1 semaine">1 semaine</option>
            <option value="1 mois">1 mois</option>
            <option value="2 mois">2 mois</option>
            <option value="3 mois">3 mois</option>
            <option value="6 mois">6 mois</option>
            <option value="1 an">1 an</option>
          </select>
        </div>

        {/* Titre de la demande */}
        <div>
          <label>Titre de la demande :</label>
          <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
        </div>

        {/* Description de la demande */}
        <div>
          <label>Description de la demande :</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        {/* Image sous forme d'URL à importer */}
        <div>
          <label>Image (URL) :</label>
          <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>
        
        <div>
          <label>Votre nom:</label>
          <input type="text" value={nomUtilisateur} onChange={(e) => setNomUtilisateur(e.target.value)} />
        </div>

        <div>
          <label>Votre Bio:</label>
          <textarea value={bioUtilisateur} onChange={(e) => setBioUtilisateur(e.target.value)} />
        </div>

        <div>
          <label>Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Téléphone :</label>
          <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </div>

        <div>
          <label>Lien Teams :</label>
          <input type="url" value={lienTeams} onChange={(e) => setLienTeams(e.target.value)} />
        </div>

        {/* Bouton de soumission du formulaire */}
        <button type="submit">Poster la demande</button>
      </form>
    </div>
  );
};

export default DemandeForm;