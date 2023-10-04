import React, { useEffect, useState } from 'react';
import Navbar from '../03.Components/Navbar';
import Footer from '../03.Components/Footer';
import Card from '../03.Components/Card';
import "./HomePage.css";

const HomePage = () => {
  const Campusynov = [
    "Nantes",
    "Paris",
    "Rouen",
    "Val d europe",
    "Rennes",
    "Bordeaux",
    "Toulouse",
    "Lyon",
    "Montpellier",
    "Sophia",
    "Aix-en-Provence",
    "Strasbourg",
  ];

  const Filière = [
    "Informatique",
    "Marketing & Communication",
    "Création & Design",
    "Achitecture",
    "Audiovisuel",
    "3D, Animation & jeux vidéo",
    "Tech & Business",
  ];
  useEffect(() => {
    const selectCampus = document.getElementById("Campus");
    Campusynov.sort();
    if (selectCampus && selectCampus.options.length === 1) {
        // Ajouter les options au select
        for (let i = 0; i < Campusynov.length; i++) {
            const opt = Campusynov[i];
            const campus = document.createElement("option");
            campus.textContent = opt;
            campus.value = opt;
            selectCampus.appendChild(campus);
        }
    }
}, []);
useEffect (() => {
    const selectFiliere = document.getElementById("Filière");
    Filière.sort();
    if (selectFiliere && selectFiliere.options.length === 1) {
        // Ajouter les options au select
        for (let i = 0; i < Filière.length; i++) {
            const opt = Filière[i];
            const filiere = document.createElement("option");
            filiere.textContent = opt;
            filiere.value = opt;
            selectFiliere.appendChild(filiere);
        }
    }
}, []);

  const Tarif = [
    { min: 0, max: 10, label: "0 - 10" },
    { min: 11, max: 20, label: "11 - 20" },
    { min: 21, max: 30, label: "21 - 30" },
    { min: 31, max: 40, label: "31 - 40" },
    { min: 41, max: 50, label: "41 - 50" },
    { min: 51, max: 100, label: "51 - 100" },
    // Ajoutez d'autres tranches de tarif au besoin
  ];

  const [searchString, setSearchString] = useState("");
  const [selectedTarif, setSelectedTarif] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // Filtrer les annonces en fonction du tarif sélectionné
    if (selectedTarif === "") {
      // Si aucune tranche de tarif n'est sélectionnée, afficher toutes les annonces
      setFilteredCards(title.map((cardTitle, index) => ({
        title: cardTitle,
        tarif: tarif[index],
      })));
    } else {
      // Sinon, filtrer les annonces en fonction de la tranche de tarif
      const [min, max] = selectedTarif.split("-").map(Number);
      const annoncesFiltrees = title.map((cardTitle, index) => ({
        title: cardTitle,
        tarif: tarif[index],
      })).filter(annonce => annonce.tarif >= min && annonce.tarif <= max);
      setFilteredCards(annoncesFiltrees);
    }
  }, [selectedTarif]);

  const title = [
    "Aide informatique",
    "Dépannage informatique",
    "Montage vidéo",
    "Aide shooting photo",
    "Création Portefolio",
    "Étude de marché",
    "Benchmark",
    "Création instagram",
    "Gestion réseaux sociaux",
    "Tournage clip de rap",
  ];

  const tarif = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  useEffect(() => {
    // Filtrer les annonces en fonction du tarif sélectionné
    if (selectedTarif === "") {
      // Si aucune tranche de tarif n'est sélectionnée, afficher toutes les annonces
      setFilteredCards(
        title.map((cardTitle, index) => ({
          title: cardTitle,
          tarif: tarif[index],
        }))
      );
    } else {
      // Sinon, filtrer les annonces en fonction de la tranche de tarif
      const [min, max] = selectedTarif.split("-").map(Number);
      const annoncesFiltrees = title
        .map((cardTitle, index) => ({
          title: cardTitle,
          tarif: tarif[index],
        }))
        .filter((annonce) => annonce.tarif >= min && annonce.tarif <= max);
      setFilteredCards(annoncesFiltrees);
    }
  }, [selectedTarif]);

  return (
    <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
      <Navbar />
      <div>
        {/* Création de la barre de recherche */}
        <div id="searchBar">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher..."
            aria-label="Rechercher un film"
            aria-describedby="button-addon2"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
        <label id="labelTitle" htmlFor="">
          Choisir les filtres
        </label>
        <div id="filter">
          {/* Création des input pour les filtres */}
          <select>
            <option value="">Choisir une option</option>
            <option value="search">Je recherche</option>
            <option value="propose">Je propose</option>
          </select>
          <select id="Campus">
            <option value="">Choisir son campus</option>
          </select>
          <select id="Filière">
            <option value="">Choisir la filière</option>
          </select>
          <select
            id="Tarif"
            value={selectedTarif}
            onChange={(e) => setSelectedTarif(e.target.value)}
          >
            <option value="">Choisir une tranche de tarif</option>
            {Tarif.map((tranche, index) => (
              <option key={index} value={`${tranche.min}-${tranche.max}`}>
                {tranche.label}
              </option>
            ))}
          </select>
          <button onClick={() => {}}>Filtrer</button>
        </div>
        <div id="cards">
            {/* Affichage des cards */}
            {filteredCards
                .filter((card) =>
                card.title.toLowerCase().includes(searchString.toLowerCase())
                )
                .map((card, index) => (
                <Card key={index} title={card.title} tarif={card.tarif} />
                ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
