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
        element: <Page_Exe/>
      },
      {
        path: "/exe2",
        element: <Page_Exe/>
      }, 
      {
        path: "/exe3",
        element: <Page_Exe/>
      }, 
      {
        path: "/exe4",
        element: <Page_Exe/>
      }, 
      {
        path: "/exe5",
        element: <Page_Exe/>
      }, 
      {
        path: "/exe6",
        element: <Page_Exe/>
      }, 
      {
        path: "/exe7",
        element: <Page_Exe/>
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
