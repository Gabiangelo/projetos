import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page_Exe from './exercices/Page_Exe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Page_Exe id={0}/>
      },
      {
        path: "/exe2",
        element: <Page_Exe id={1}/>
      }, 
      {
        path: "/exe3",
        element: <Page_Exe id={2}/>
      }, 
      {
        path: "/exe4",
        element: <Page_Exe id={3}/>
      }, 
      {
        path: "/exe5",
        element: <Page_Exe id={4}/>
      }, 
      {
        path: "/exe6",
        element: <Page_Exe id={5}/>
      }, 
      {
        path: "/exe7",
        element: <Page_Exe id={6}/>
      }, 
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
