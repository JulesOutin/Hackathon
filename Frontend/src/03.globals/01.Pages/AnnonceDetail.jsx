import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../03.Components/Navbar';
import Footer from '../03.Components/Footer';

const AnnonceDetail = () => {
    const [data, setData] = useState([0]);
    const { id } = useParams()


    useEffect(() => {
        // Effectuer la requête GET vers votre API locale
        fetch(`http://localhost:3000/api/joboffers/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("je fetch icii", data)
            setData(data)
          })
          .catch((error) =>
            console.error("Erreur lors de la récupération des données :", error)
          );
      }, [id]);




    return (
        <div className='py-6 min-h-screen max-w-7xl m-auto p-6 pb-20 w-full'>
            <Navbar />
            <div>
                <img src={data[0].joboffer_image} className='w-full object-cover h-[378px] rounded-2xl my-14' alt="" />
            </div>
            <div className='flex w-full justify-between m-auto'>
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='nom-filiere mb-2'>{data[0].user_filiere}</p>
                            <h1 className='titre-detail-annonce text-start mb-1'>{data[0].joboffer_title}</h1>
                            <p className='custom-text'>{data[0].user_name}</p>
                        </div>
                        <h3 className='grotesk-price'>{data[0].joboffer_price} €</h3>
                    </div>
                    <div>
                        <p className='custom-text'>{data[0].joboffer_description}</p>
                    </div>
                </div>
                <div className='border border-solid border-customBorder rounded-md p-6 flex flex-col gap-3 w-[280px] h-fit'>
                    <h2 className='grotesk-title'>Me contacter</h2>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-center items-center border border-solid border-primary rounded-md py-2 px-4'>
                            <p className='text-button-alternatif'>{data[0].user_email}</p>
                        </div>
                        {
                            data[0].user_phone ?
                                <div className='flex justify-center items-center border border-solid border-primary rounded-md py-2 px-4'>
                                    <p className='text-button-alternatif'>{data[0].user_phone}</p>
                                </div> :
                                <></>
                        }
                        {
                            data[0].user_discord ? 
                                <div className='flex justify-center items-center border border-solid border-primary rounded-md py-2 px-4'>
                                    <p className='text-button-alternatif'>{data[0].user_discord}</p>
                                </div> : 
                                <></>
                        }
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default AnnonceDetail;