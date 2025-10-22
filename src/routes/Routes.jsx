import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/root/Root';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/home/Home';
import Card from '../pages/card/Card';
import Apps from '../pages/apps/Apps';
import Installation from '../pages/installation/Installation';
import AppDetails from '../pages/appDetails/AppDetails';


export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                loader:()=>fetch('cardData.json'),
                path:"/",
                Component:Home
            },
            {
                path:"/apps",
                loader:()=>fetch('cardData.json'),
                Component:Apps
            },
            {
                path:"/installation",
                loader:()=>fetch('cardData.json'),
                Component:Installation
            },
            {
                path:"/appDetails/:id",
                loader:()=>fetch('cardData.json'),
                Component:AppDetails
            }
        ]
    },
])