import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';
import getEnvVariable from '../config/config';
import { AuthContextProvider } from './context/AuthContext';

const auth0Domain = getEnvVariable('VITE_AUTH_DOMAIN');
const clientId = getEnvVariable('VITE_CLIENT_ID');
const redirectUri = getEnvVariable('VITE_REDIRECT_URI');
const audience = getEnvVariable('VITE_AUDIENCE');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={auth0Domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
          audience: audience,
          scope: 'offline_access openid profile email read:users'
        }}
      >
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Auth0Provider>
      <Toaster />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  </React.StrictMode>
);
