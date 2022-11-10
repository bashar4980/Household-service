import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../../Shared/Service';
import Hero from './Hero';
import { Link } from 'react-router-dom';


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
              <Link to="/services">Get More services</Link>
            </button>
            </div>
            
            <section className=" py-10 rounded m-4 md:m-8 bg-gray-800 text-gray-100">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-4xl font-semibold">Our Feature</h2>
		
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-2xl font-semibold">Instant Service</h3>
            <p>Household service provide instant service</p>
			
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-2xl font-semibold">24/7 Quality Service</h3>
            <p>Household service provide 24/7 support</p>
			
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-2xl font-semibold">Easy Customer service</h3>
            <p>Household service provide Easy customer service</p>
			
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-2xl font-semibold">Quality Cost service</h3>
            <p>Household service provide low cost but best service</p>
			
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-2xl font-semibold">User Satisfaction</h3>
            <p>Household service provide Client satisfaction</p>
			<div className="space-y-1 leading-tight">
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Reliability</h3>
            <p>Household service is more reliable</p>
			<div className="space-y-1 leading-tight">
				
			</div>
		</div>
	</div>
</section>

            <section className="container mx-auto rounded py-5 mb-10 bg-gray-800 text-gray-100">
	<div className="container flex flex-col mx-auto lg:flex-row">
		<div className="w-full lg:w-1/3">
            <img src="https://i.ibb.co/GVwcMz3/370-3706620-tools-of-household-services-hd-png-download-removebg-preview.png" alt="" />
        </div>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
			</svg>
			<h2 className="text-3xl font-semibold leading-none">Modern solutions to all kinds of Household problems</h2>
			<p className="mt-4 mb-8 ">House hold service Ltd ensure client satisfaction.For any problem for your Household call me.</p>
			<button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-blue-700 text-gray-300 hover:bg-gray-300 hover:text-blue-700">
                <Link to="/services">Get started</Link>
            </button>
		</div>
	</div>
</section>
        </div>
    );
};

export default Home;