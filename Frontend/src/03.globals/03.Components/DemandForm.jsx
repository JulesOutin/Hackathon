import React, { useState } from "react";

const DemandeForm = () => {
  // État local pour stocker les valeurs du formulaire

  const [typeAnnonce, setTypeAnnonce] = useState("");
  const [campus, setCampus] = useState("");
  const [filiere, setFiliere] = useState("");
  const [tarif, setTarif] = useState("");
  const [tempsMission, setTempsMission] = useState("");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [bioUtilisateur, setBioUtilisateur] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [lienTeams, setLienTeams] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();


    // Réinitialiser le formulaire après la soumission
    setTypeAnnonce("");
    setCampus("");
    setFiliere("");
    setTarif("");
    setTempsMission("");
    setTitre("");
    setDescription("");
    setImageURL("");
    setNomUtilisateur("");
    setBioUtilisateur("");
    setEmail("");
    setTelephone("");
    setLienTeams("");

  };

  return (
    <div className="">
      <h2 className="sukui-h2">Poster une demande</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex my-8 gap-2">
          <select
            className="sukui-select"
            value={typeAnnonce}
            onChange={(e) => setTypeAnnonce(e.target.value)}
            required
          >
            <option disabled selected value="">
              Type d'annonce *
            </option>
            <option value="jePropose">Je propose</option>
            <option value="jeRecherche">Je recherche</option>
          </select>

          <select
            className="sukui-select"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            required
          >
            <option selected disabled value="">
              Localisation *
            </option>
            <option value="france">France entière</option>
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

          <select
            className="sukui-select"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
            required
          >
            <option select disabled value="">
              Filière *
            </option>
            <option value="Informatique">INFORMATIQUE</option>
            <option value="Marketing & Communication">MARKETING</option>
            <option value="Création & Design">COMMUNICATION</option>
            <option value="Architecture">COMMUNICATION</option>
            <option value="Audiovisuel">COMMUNICATION</option>
            <option value="3D, Animation & Jeux vidéo">COMMUNICATION</option>
            <option value="Tech & Business">COMMUNICATION</option>
          </select>

          <input
            className="sukui-input"
            max={100}
            min={0}
            type="number"
            placeholder="Tarif (€)*"
            name=""
            id=""
            required
          />

          <select
            value={tempsMission}
            onChange={(e) => setTempsMission(e.target.value)}
            className="sukui-select"
            required
          >
            <option selected disabled value="">
              Durée de la mission *
            </option>
            <option value="1j">1 jour</option>
            <option value="2j">2 jours</option>
            <option value="3j">3 jours</option>
            <option value="4j">4 jours</option>
            <option value="5j">5 jours</option>
            <option value="6j">6 jours</option>
            <option value="7j">7 jours</option>
            <option value="8j">8 jours</option>
            <option value="9j">9 jours</option>
            <option value="10j">10 jours</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 max-w-3xl m-auto">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                className="sukui-input"
                placeholder="Titre de votre annonce *"
                required
              />

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="sukui-input resize-none py-16"
                placeholder="Description du service *"
                required
              />

              <input
                type="text"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="sukui-input"
                placeholder="URL vers une image *"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                value={nomUtilisateur}
                className="sukui-input"
                placeholder="Votre nom *"
                onChange={(e) => setNomUtilisateur(e.target.value)}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="sukui-input"
              />

              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="sukui-input"
                placeholder="Téléphone"
              />

              <input
                type="url"
                value={lienTeams}
                onChange={(e) => setLienTeams(e.target.value)}
                className="sukui-input"
                placeholder="Teams"
              />
            </div>
          </div>
          <button className="sukui-button w-fit m-auto" type="submit">
            Poster la demande
          </button>
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

      </form>
    </div>
  );
};

export default DemandeForm;
