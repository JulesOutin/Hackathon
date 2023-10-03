import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import PosterDemande from "../03.globals/01.Pages/PosterDemande";
import Login from "../03.globals/01.Pages/Login";
import Profile from "../03.globals/01.Pages/Profile";

function Router() {
    return (
        <Routes>
            // Route page Home
            <Route path="/" element={<HomePage />} />
            // redirection automatique si la page n'existe pas

            // Route page PosterDemande
            <Route path="/posterDemande" element={<PosterDemande />} />

            // Route page Login
            <Route path="/login" element={<Login />} />
        

            // Route page Profile
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}

export default Router;
