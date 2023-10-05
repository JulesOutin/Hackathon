import React from 'react';

const Navbar = () => {
    return (
        // Dans votre fichier JSX

        <nav className='flex items-center justify-between gap-10 h-full max-w-7xl m-auto w-full'>
            <div className='flex items-center justify-center'>
                <a href='/' className=' font-bold text-lg'>Ytalents.
                <span className='font-normal text-base'>  Trouver des services. Acquérir de l’expérience.</span>
                </a>
            </div>
            <a className='sukui-button' href="/posterdemande">Ecrire une annonce</a>
        </nav>

    );
};

export default Navbar;