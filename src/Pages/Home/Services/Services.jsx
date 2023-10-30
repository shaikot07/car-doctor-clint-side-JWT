import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
      const [services,setServices]=useState([])
      useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res =>res.json())
            .then(data =>setServices(data))
      },[])
      

      return (
            <div className='max-w-6xl mx-auto mt-12'>
                  <div className='text-center space-y-4'>
                        <h1 className='text-2xl text-orange-600'>Service</h1>
                        <h2 className='text-5xl font-bold'>Our Service Area</h2>
                        <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                              services.map(service =><ServiceCart key={service._id} service={service}></ServiceCart>)
                        }
                  </div>
            </div>
      );
};

export default Services;