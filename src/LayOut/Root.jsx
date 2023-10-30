import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Sheard/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
      return (
            <div>
                  <div className='max-w-6xl mx-auto'>
                        <Navbar></Navbar></div>
                  <Outlet></Outlet>
                  <Toaster />
            </div>
      );
};

export default Root;