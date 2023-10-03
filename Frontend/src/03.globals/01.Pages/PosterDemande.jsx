import React from 'react';
import Navbar from '../03.Components/Navbar';
import Hero from '../02.Sections/Hero';
import DemandeForm from '../03.Components/DemandForm';
import Footer from '../03.Components/Footer';


const PosterDemande = () => {
    return (
        <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <Hero />
            <DemandeForm />
            <Footer />
        </div>
    );
};

export default PosterDemande;
