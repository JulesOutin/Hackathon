import React from 'react';
import Navbar from '../03.Components/Navbar';
import Hero from '../02.Sections/Hero';
import Footer from '../03.Components/Footer';
import Authentification from '../03.Components/Compte/Authentification';

const Profile = () => {
    return (
        <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <Hero />
            <Authentification />
            <Footer />
        </div>
    );
};

export default Profile;
