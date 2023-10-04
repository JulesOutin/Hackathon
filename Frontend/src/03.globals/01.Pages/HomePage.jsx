import React, { useEffect } from "react";
import Navbar from "../03.Components/Navbar";
import Footer from "../03.Components/Footer";
import "./HomePage.css";
import Card from "../03.Components/Card";

const HomePage = () => {
  // Fonction pour ajouter des option dans le select id="Campus" en fonction de valeurs et les mettre dans l'ordre alphabétique
  const Option = [
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
    Option.sort();
    if (selectCampus && selectCampus.options.length === 1) {
      // Ajouter les options au select
      for (let i = 0; i < Option.length; i++) {
        const opt = Option[i];
        const campus = document.createElement("option");
        campus.textContent = opt;
        campus.value = opt;
        selectCampus.appendChild(campus);
      }
    }
  }, []);
  useEffect(() => {
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
          />
        </div>
        <label id="labelTitle" for="">
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
          <select id="Tarif">
            <option value="">Tarif</option>
          </select>
          <label for="">Temps de mission :</label>
          {/* input range */}
          <input type="range" id="start" name="volume" min="0" max="31"></input>
          <button type="">Filtrer</button>
        </div>
        <Card />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
