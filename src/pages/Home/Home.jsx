import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../../Shared/Services';
import Hero from './Hero';

const Home = () => {
    const serviceData = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <h3 className='text-center py-10 text-3xl'>My Service</h3>
           
			
            <div id="service" className='container mx-auto grid grid-cols-3 gap-8 pb-10'>
    
                    {
                        serviceData.map(service =>{
                            return(
                                <Services service={service} key={service._id}></Services>
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default Home;