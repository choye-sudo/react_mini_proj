import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Person from './components/person';
import Calc from './components/calc';
import Template from './components/template';
import Test from './components/test/Test';
const router = createBrowserRouter(
  [
    {
      path: "/", // localhost:3000
      element: <Template/>,
      children: [
        {
          path: "/", // localhost:3000/test
          element: <Test />
        },
        {
          path: "/test", // localhost:3000/test
          element: <Calc />
        },
        {
          path: "/news/it/:id", // localhost:3000/news/it/1 localhost:3000/news/it/2 
          element: <Calc />
        }
      ]
    },
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);

reportWebVitals();
