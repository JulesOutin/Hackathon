// DetailDemandePage.jsx
import React from 'react';

const DetailDemandePage = ({
  typeAnnonce,
  campus,
  filiere,
  tarif,
  tempsMission,
  titre,
  description,
  imageURL,
  nomUtilisateur,
  bioUtilisateur,
  email,
  telephone,
  lienTeams,
}) => {
  return (
    <div className="p-8 bg-gray-100 text-center">
      {/* Titre centré au-dessus des deux colonnes */}
      <h2 className="sukui-h2 mb-6">Détails de la demande</h2>
      <br></br>

      {/* Conteneur pour les deux colonnes */}
      <div className="flex">
        {/* Partie gauche */}
        <div className="flex-grow pr-8">
          <div className="mb-4">
            <strong className="sukui-label">Type d'annonce :</strong> {typeAnnonce}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Choix du campus :</strong> {campus}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Filière :</strong> {filiere}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Tarif :</strong> {tarif}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Temps de la mission :</strong> {tempsMission}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Titre de la demande :</strong> {titre}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Description de la demande :</strong> {description}
          </div>
          {imageURL && (
            <div className="mb-4">
              <strong className="sukui-label">Image :</strong> <img src={imageURL} alt="Demande" className="rounded-lg" />
            </div>
          )}

        </div>

        {/* Partie droite (30%) */}
        <div className="flex-shrink">
          <div className="mb-4">
            <strong className="sukui-label">Nom de l'utilisateur :</strong> {nomUtilisateur}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Bio de l'utilisateur :</strong> {bioUtilisateur}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Email :</strong> {email}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Téléphone :</strong> {telephone}
          </div>
          <div className="mb-4">
            <strong className="sukui-label">Lien Teams :</strong> {lienTeams}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDemandePage;
