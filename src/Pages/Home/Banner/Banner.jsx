import React from 'react';
import bImg1 from '../../../assets/images/banner/1.jpg'
import bImg2 from '../../../assets/images/banner/2.jpg'
import bImg3 from '../../../assets/images/banner/3.jpg'
import bImg4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
      return (
            <div className='max-w-6xl mx-auto'>
                  <div className="carousel w-full h-[550px]">
                        <div id="slide1" className="carousel-item relative w-full">
                              <img src={bImg1} className="w-full" />
                              <div className='absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                                    <div className='text-white space-y-7 w-1/2 pl-12'>
                                          <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                                          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div>
                                                <button className='btn bg-[#FF3811] border-0 text-white hover:text-black'>Discover More</button>
                                                <button className="btn btn-outline border-white text-white ml-5 hover:bg-[#FF3811]">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                              <img src={bImg2} className="w-full" />
                              <div className='absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                                    <div className='text-white space-y-7 w-1/2 pl-12'>
                                          <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing<span className='text-[#FF3811]'>2</span></h1>
                                          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div>
                                                <button className='btn bg-[#FF3811] border-0 text-white hover:text-black'>Discover More</button>
                                                <button className="btn btn-outline border-white text-white ml-5 hover:bg-[#FF3811]">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                              <img src={bImg3} className="w-full" />
                              <div className='absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                                    <div className='text-white space-y-7 w-1/2 pl-12'>
                                          <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing<span className='text-[#FF3811]'>3</span></h1>
                                          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div>
                                                <button className='btn bg-[#FF3811] border-0 text-white hover:text-black'>Discover More</button>
                                                <button className="btn btn-outline border-white text-white ml-5 hover:bg-[#FF3811]">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                              <img src={bImg4} className="w-full" />
                              <div className='absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                                    <div className='text-white space-y-7 w-1/2 pl-12'>
                                          <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing<span className='text-[#FF3811]'>4</span></h1>
                                          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                          <div>
                                                <button className='btn bg-[#FF3811] border-0 text-white hover:text-black'>Discover More</button>
                                                <button className="btn btn-outline border-white text-white ml-5 hover:bg-[#FF3811]">Latest Project</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;