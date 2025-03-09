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
import User from './components/User/User.jsx';
import GroceryShop from './components/Shop/GroceryShop.jsx';
import LaundryShop from './components/Shop/LaundryShop.jsx';
import SuperShop from './components/Shop/SuperShop.jsx';
import MeatShop from './components/Shop/MeatShop.jsx';

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
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        children: [
          {
            path: "/shop/grocery",
            element: <GroceryShop></GroceryShop>
          },
          {
            path: "/shop/laundry",
            element: <LaundryShop></LaundryShop>
          },
          {
            path: "/shop/super",
            element: <SuperShop></SuperShop>
          },
          {
            path: "/shop/meat",
            element: <MeatShop></MeatShop>
          }
        ]
      },
      {
        path: '/user',
        element: <User></User>
      }
    ]
    }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
