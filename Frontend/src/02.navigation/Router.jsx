import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import PosterDemande from "../03.globals/01.Pages/PosterDemande";
import AnnonceDetail from "../03.globals/01.Pages/AnnonceDetail";

function Router() {
    return (
        <Routes>
            // Route page Home
            <Route path="/" element={<HomePage />} />
            // redirection automatique si la page n'existe pas

            // Route page PosterDemande
            <Route path="/ajouter" element={<PosterDemande />} /> 

            // Route page Détails Demande
            <Route path="/annonce/:id" element={<AnnonceDetail />} />

        
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}

export default Router;
