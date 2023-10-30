import React from 'react';
import AB1 from '../../../assets/images/about_us/person.jpg'
import AB2 from '../../../assets/images/about_us/parts.jpg'

const AboutSection = () => {
      return (
            <div className="hero min-h-screen bg-base-200 max-w-6xl mx-auto">
                  <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:w-1/2 relative'>
                              <img src={AB1} className="w-3/4  rounded-lg shadow-2xl" />
                              <img src={AB2} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2'>
                              <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                              <h1 className="text-5xl font-semibold">We are qualified <br /> & of experience <br /> in this field</h1>
                              <p className="py-3 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not  look even slightly believable.</p>
                              <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                              <button className='btn bg-[#FF3811] border-0 text-white hover:text-black'>Discover More</button>
                        </div>
                  </div>
            </div>
      );
};

export default AboutSection;