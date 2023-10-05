import React from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Campus from '../03.Components/Campus';
import Filiere from '../03.Components/Filiere';
import ky from 'ky';

const DemandeForm = () => {
  const {handleSubmit, register, reset, formState : {errors}} = useForm()
  const navigate = useNavigate()



  async function sendData(data) {
    try {
      const response = await ky.post('http://localhost:3000/api/joboffers', {
        json: data // JSON.stringify est automatiquement appelé par Ky
      }).json(); // Appelle également la méthode .json() sur la réponse pour obtenir les données JSON
      console.log(response); // Affiche la réponse de votre serveur
    } catch (error) {
      console.error('Erreur lors de l’envoi des données :', error);
      console.error(error.response);
    }
  }


  const onSubmit = (data) => {
    sendData(data)
    reset()
    navigate("/")

  }

 
  return (
    <div className="">
      <Campus />
      <Filiere />
      <h2 className="sukui-h2">Poster une demande</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex my-8 gap-2">
          <select
            className="sukui-select"
            {...register("jobofferIsWorker")}
            required
          >
            <option disabled selected value="">
              Type d'annonce *
            </option>
            <option value="jePropose">Je propose</option>
            <option value="jeRecherche">Je recherche</option>
          </select>
          <select
            id="Campus"
            className="sukui-select"
            {...register("jobofferLocalisation")}
            required
          >
            <option selected disabled value="">
              Localisation *
            </option>
          </select>
          
          <select
            id="Filière"
            className="sukui-select"
            {...register("userFiliere")}
            required
          >
            <option select disabled value="">
              Filière *
            </option>
          </select>

          <input
            className="sukui-input"
            max={100}
            min={0}
            type="number"
            placeholder="Tarif (€)*"
            {...register("jobofferPrice")}
            required
          />

          <input 
            type="number"
            className='sukui-input' 
            min={0}
            max={10}
            placeholder='Durée de la mission (Jours)'
            {...register("jobofferDuration")}
          />
        </div>

        <div className="flex flex-col gap-2 max-w-3xl m-auto">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                className="sukui-input"
                placeholder="Titre de votre annonce *"
                {...register("jobofferTitle")}
                required
              />

              <textarea
                className="sukui-input resize-none py-16"
                placeholder="Description du service *"
                {...register("jobofferDescription")}
                required
              />

              <input
                type="text"
                className="sukui-input"
                placeholder="URL vers une image *"
                {...register("jobofferImage")}
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                className="sukui-input"
                placeholder="Votre nom *"
                {...register("userName")}
                required
              />

              <input
                type='email'
                placeholder="Votre email Ynov *"
                className="sukui-input"
                maxLength={80}
                {...register("userEmail")}
                required
              />

              <input
                type="text"
                maxLength={10}
                className="sukui-input"
                placeholder="Téléphone"
                {...register("userPhone")}
              />

              <input
                type="text"
                className="sukui-input"
                placeholder="discord"
                {...register("userDiscord")}
              />
            </div>
          </div>
          <button className="sukui-button w-fit m-auto" type="submit">
            Poster la demande
          </button>
        </div>
        
       </form>
    </div>
  );
};

export default DemandeForm;
