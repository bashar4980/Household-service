import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Shared/Service';
import {Helmet} from "react-helmet";

const Services = () => {
    const Services = useLoaderData();

    return (
        <>
            <Helmet>
    <meta charSet="utf-8" />
    <title>services</title>
   
</Helmet>
        <h1 className='text-center py-10 text-3xl'>My All Services</h1>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
            {
               Services.length < 0 ?  <div className="w-16 h-16 border-4 container mx-auto border-dashed rounded-full animate-spin border-violet-700"></div>
               :
               <>
               { Services.map(service =>{
                    return(
                        <Service key={service._id} service={service}/>
                    )
                })}
               </>
            }
        </div>
        </>
    );
};

export default Services;