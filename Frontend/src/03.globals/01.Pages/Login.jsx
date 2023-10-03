import React from 'react';
import Navbar from '../03.Components/Navbar';
import Hero from '../02.Sections/Hero';
import Authentification from '../03.Components/Compte/Authentification';
import Connexion from '../03.Components/Compte/Connexion';
import CreationCompte from '../03.Components/Compte/CreationCompte';
import Footer from '../03.Components/Footer';



const Login = () => {
    return (
        <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <Hero />
            <Connexion />
            <CreationCompte />
            <Footer />
        </div>
    );
};

export default Login;
