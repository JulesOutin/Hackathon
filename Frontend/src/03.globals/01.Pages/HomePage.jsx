import React, { useEffect, useState } from "react";
import Navbar from "../03.Components/Navbar";
import Footer from "../03.Components/Footer";
import Card from "../03.Components/Card";
import "./HomePage.css";
import Campus from "../03.Components/Campus";
import Filiere from "../03.Components/Filiere";


const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedFiliere, setSelectedFiliere] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');



  useEffect(() => {
    // Effectuer la requête GET vers votre API locale
    fetch("http://localhost:3000/api/joboffers")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  const Tarif = [
    { min: 0, max: 20, label: "20 €" },
    { min: 0, max: 40, label: "40 €" },
    { min: 0, max: 60, label: "60 €" },
    { min: 0, max: 80, label: "80 €" },
  ];


  const filteredData = data.filter(joboffer => {
    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
    return (
      joboffer.joboffer_title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === '' || joboffer.joboffer_isWorker === selectedType) &&
      (selectedCampus === '' || joboffer.joboffer_localisation === selectedCampus) &&
      (selectedFiliere === '' || joboffer.user_filiere === selectedFiliere) &&
      (selectedPriceRange === '' || (joboffer.joboffer_price >= minPrice && joboffer.joboffer_price <= maxPrice))
    );
  });
  

  return (
    <div className="h-full max-w-7xl m-auto w-full p-6 flex flex-col">
      <Campus />
      <Filiere />
      <Navbar />
      <div>
        {/* Création de la barre de recherche */}
        <div className="my-14">

          <div id="searchBar">
            <input
              type="text"
              value={searchTerm}
              className="sukui-input max-w-5xl"
              placeholder="Rechercher..."
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <label id="labelTitle" htmlFor="">
            Choisir les filtres
          </label>
          <div className="gap-2 max-w-5xl m-auto" id="filter">
            {/* Création des input pour les filtres */}
            <select 
              className="sukui-select"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="">Type d'annonce</option>
              <option value="jePropose">Je propose</option>
              <option value="jeRecherche">Je recherche</option>
            </select>
            <select 
              className="sukui-select" 
              id="Campus"
              value={selectedCampus}
              onChange={(event) => setSelectedCampus(event.target.value)}
            >
              <option value="">Choisir son campus</option>
            </select>
            <select 
              className="sukui-select" 
              id="Filière"
              value={selectedFiliere}
              onChange={(event) => setSelectedFiliere(event.target.value)}
            >
              <option value="">Choisir la filière</option>
            </select>
            <select
              className="sukui-select"
              id="Tarif"
              value={selectedPriceRange}
              onChange={(event) => setSelectedPriceRange(event.target.value)}
            >
              <option value="">Budget maximum</option>
              {Tarif.map((tranche, index) => (
                <option key={index} value={`${tranche.min}-${tranche.max}`}>
                  {tranche.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 max-w-7xl" id="cards">
          {/* Affichage des cards */}
          {
            Array.isArray(filteredData) && filteredData
            .map((joboffer) => {
              return (
                <Card
                  key={joboffer.joboffer_id}
                  description={joboffer.joboffer_description}
                  duration={joboffer.joboffer_duration}
                  id={joboffer.joboffer_id}
                  image={joboffer.joboffer_image}
                  isWorker={joboffer.joboffer_isWorker}
                  localisation={joboffer.joboffer_localisation}
                  price={joboffer.joboffer_price}
                  title={joboffer.joboffer_title}
                  discord={joboffer.user_discord}
                  email={joboffer.user_email}
                  filiere={joboffer.user_filiere}
                  name={joboffer.user_name}
                  phone={joboffer.user_phone}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
