import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";


export const router = createBrowserRouter([
  {
    path: '/portfolio/',
    element: <Home />, 
  },
  {
    path: '/portfolio/404',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate replace to='/portfolio/404'/>
  },
  {
    path: '/portfolio/contact',
    element: <Contact />
  }
])