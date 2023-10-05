import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effectuer la requête GET vers votre API locale
    fetch('http://localhost:3001/api/joboffers')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  return (
    <div>
      <h1>Données récupérées :</h1>
      <ul>
        {data.map(item => (
          <li key={item.joboffer_id}>
            {item.joboffer_title} - {item.joboffer_description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
