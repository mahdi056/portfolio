import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Components/Body';
import Artifactdeails from './Components/Artifactdeails';
import Visadetails from './Components/Visadetails';
import Scholarship from './Components/Scholarship';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
  },
  {
    path: '/artifact',
    element: <Artifactdeails></Artifactdeails>
  },
  {
    path: '/visa',
    element: <Visadetails></Visadetails>
  },
  {
    path: '/scholarship',
    element: <Scholarship></Scholarship>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
