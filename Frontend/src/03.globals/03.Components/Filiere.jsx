import {useEffect} from 'react'

const Filiere = () => {
    const Filière = [
        "Informatique",
        "Marketing & Communication",
        "Création & Design",
        "Achitecture",
        "Audiovisuel",
        "3D, Animation & Jeux vidéo",
        "Tech & Business",
    ];
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
    return null
}

export default Filiere;