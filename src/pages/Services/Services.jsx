import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Shared/Service';

const Services = () => {
    const Services = useLoaderData();
    return (
        <>
        <h1 className='text-center py-10 text-3xl'>My All Services</h1>
        <div className='container mx-auto grid grid-cols-3 gap-8 pb-10'>
            {
                Services.map(service =>{
                    return(
                        <Service key={service._id} service={service}/>
                    )
                })
            }
        </div>
        </>
    );
};

export default Services;