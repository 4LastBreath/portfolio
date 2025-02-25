import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/contact',
    element: <Contact />
  }
])