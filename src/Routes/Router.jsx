import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../LayOut/Root';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/Login/LogIn';
import Register from '../Pages/Register/Register';
import CheckOut from '../Pages/BookService/BookService';
import BookService from '../Pages/BookService/BookService';
import Bookings from '../Pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
      {
            path:'/',
            element:<Root></Root>,
            children:[
                  {
                        path:'/',
                        element: <Home></Home>
                  },
                  {
                        path:'/login',
                        element: <LogIn></LogIn>
                  },
                  {
                        path:'/register',
                        element: <Register></Register>
                  },
                  {
                        path:'/book/:id',
                        element:<PrivateRoute><BookService></BookService></PrivateRoute>,
                        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                  },
                  {
                        path:'/bookings',
                        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
                  },
                  
            ]
      }
])

export default router;