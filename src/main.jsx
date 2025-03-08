import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>This is from router</div>,
    errorElement: <div>404 error not found</div>
  },
  {
    path: '/contact',
    element: <div>This from contact</div>,
    errorElement: <div>404 error not found</div>
  },
  {
    path: '/about',
    element: <div>This about Page</div>,
    errorElement: <div>404 error not found</div>
  },
  {
    path: '/shop',
    element: <div>This is shop</div>,
    errorElement: <div>404 error not found</div>
  },
  {
    path: '/cart',
    element: <div>This is cart</div>,
    errorElement: <div>404 error not found</div>
  },
  {
    path: '/collection',
    element: <div>Collection page</div>,
    errorElement: <div>404 error not found</div>
  },
  {
    path: '/payment',
    element: <div>Payment collection</div>,
    errorElement: <div>404 error not found</div>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
