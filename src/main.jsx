import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import HeroWithHeader from './components/custom/HerowithHeader';
import Header from './components/custom/Header';
import CreateTrip from './create-trip';
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeroWithHeader /> 
        <App /> 
      </>
    ),
  },
  {
    path: '/create-trip',
    element: (
      <>
        <Header /> 
        <CreateTrip /> 
      </>
    ),
  },
  {
    path:'/view-trip/:tripId',
    element:(
      <>
      <Header />
      <Viewtrip />
      </>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Toaster/>
    <RouterProvider router={router} /> 
    </GoogleOAuthProvider>
  </StrictMode>
);
