import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Components/Body';
import Artifactdeails from './Components/Artifactdeails';

import Scholarship from './Components/Scholarship';
import Petdetails from './Components/Petdetails';


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
    path: '/pet',
    element: <Petdetails></Petdetails>
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
