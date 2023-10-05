import React from 'react';
import Navbar from '../03.Components/Navbar';
import DetailDemandeComponent from '../03.Components/DetailDemandeComponent';
import Footer from '../03.Components/Footer';

// Affichez le composant avec des données fictives (remplacez-les par vos données réelles)
const exempleDemande = {
  typeAnnonce: 'jeRecherche',
  campus: 'Paris',
  filiere: 'informatique-dev',
  tarif: 'payant50-100',
  tempsMission: '1 mois',
  titre: 'Développeur Web Recherche',
  description: 'Je recherche un développeur web pour créer mon site personnel.',
  imageURL: 'https://www.educatel.fr/wp-content/uploads/2021/04/metier-developpeur-web-1.jpgttps://example.com/image.jpg',
  nomUtilisateur: 'John Doe',
  bioUtilisateur: 'Étudiant en informatique passionné de développement web.',
  email: 'john.doe@example.com',
  telephone: '123-456-7890',
  lienTeams: 'https://teams.microsoft.com/',
};

const DetailsDemandes = () => {
    return (
        <div className="h-full w-full m-auto max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <DetailDemandeComponent {...exempleDemande}/>
            <Footer />
        </div>
    );
}


export default DetailsDemandes 