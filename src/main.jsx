import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "../src/styles/global.css"

import UserRoot from './root/userRoot';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

import FormContext from './context/context';
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot />,
  
    children: [  {
        path: "/",
        element: <Step1 />,
      },
      {
        path: "/otpVerification",
        element: <Step2 />,
      },
       {
        path: "/otpValidation",
        element: <Step3 />,
      },
          {
        path: "/updatePan",
        element: <Step4 />,
      },

   
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
