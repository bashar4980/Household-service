import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Shared/Service';
import Hero from './Hero';


const Home = () => {
    const serviceData = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <h3 className='text-center py-10 text-3xl'>My Services</h3>
           
			
            <div id="service" className='container mx-auto grid grid-cols-3 gap-8 pb-10'>
    
                    {
                        serviceData.map(service =>{
                            return(
                                <Service service={service} key={service._id}></Service>
                               
                            )
                        })
                    }
            </div>
            <div className='container mx-auto text-center'>
            <button
              className=" mb-5 rounded-lg bg-blue-700 px-8 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get More services
            </button>
            </div>
        </div>
    );
};

export default Home;