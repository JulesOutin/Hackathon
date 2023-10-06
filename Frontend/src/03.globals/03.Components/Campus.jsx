import { useEffect } from 'react';

const Campus = () => {
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
    return null
}

export default Campus;