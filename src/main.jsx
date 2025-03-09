import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Shop from './components/Shop/Shop.jsx';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <div>This is from router</div>,
  //   // errorElement: <Error></Error>
  // },
  // {
  //   path: '/contact',
  //   element: <div>This from contact</div>,
  //   errorElement: <Error></Error>
  // },
  // {
  //   path: '/about',
  //   element: <div>This about Page</div>,
  //   errorElement: <Error></Error>
  // },
  // {
  //   path: '/shop',
  //   element: <div>This is shop</div>,
  //   errorElement: <Error></Error>
  // },
  // {
  //   path: '/cart',
  //   element: <div>This is cart</div>,
  //   errorElement: <Error></Error>
  // },
  // {
  //   path: '/collection',
  //   element: <div>Collection page</div>,
  //   errorElement: <Error></Error>
  // },
  // {
  //   path: '/payment',
  //   element: <div>Payment collection</div>,
  //   errorElement: <Error></Error>
  // }

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      }
    ]
   }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
