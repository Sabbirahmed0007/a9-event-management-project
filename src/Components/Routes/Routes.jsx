import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import EventDetails from '../../Pages/EventDetails/EventDetails';
import PrivateRoutes from './PrivateRoutes';
import AboutUs from '../../Pages/About/AboutUs';
import Gallery from '../Gallery/Gallery';

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch(`/services.json`),
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/eventdetails/:id',
                loader:()=>fetch(`../services.json`),
                element:<PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>
            },
            {
                path:'/about',
                element:<PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>
            },
            {
                path:'/gallery',
                loader:()=>fetch(`/services.json`),
                element:<PrivateRoutes><Gallery></Gallery></PrivateRoutes>
            }
           
        ]
    }
])

export default routes;