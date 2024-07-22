import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
=======
>>>>>>> 42163cd (property details)
=======
>>>>>>> b585c90 (fx: Fixing integration errors)
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react';
import getEnvVariable from '../config/config';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Auth0Provider } from '@auth0/auth0-react';
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
=======

const auth0Domain = getEnvVariable('VITE_AUTH_DOMAIN');
const clientId = getEnvVariable('VITE_CLIENT_ID');
const redirectUri = getEnvVariable('VITE_REDIRECT_URI');
const audience = getEnvVariable('VITE_AUDIENCE');
>>>>>>> b585c90 (fx: Fixing integration errors)

const auth0Domain = getEnvVariable('VITE_AUTH_DOMAIN');
const clientId = getEnvVariable('VITE_CLIENT_ID');
const redirectUri = getEnvVariable('VITE_REDIRECT_URI');
const audience = getEnvVariable('VITE_AUDIENCE');
>>>>>>> 42163cd (property details)

const auth0Domain = getEnvVariable('VITE_AUTH_DOMAIN');
const clientId = getEnvVariable('VITE_CLIENT_ID');
const redirectUri = getEnvVariable('VITE_REDIRECT_URI');
const audience = getEnvVariable('VITE_AUDIENCE');
import getEnvVariable from '../config/config';

const auth0Domain = getEnvVariable('VITE_AUTH_DOMAIN');
const clientId = getEnvVariable('VITE_CLIENT_ID');
const redirectUri = getEnvVariable('VITE_REDIRECT_URI');
const audience = getEnvVariable('VITE_AUDIENCE');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        domain={auth0Domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
          audience: audience,
          scope: 'offline_access openid profile email read:users'
<<<<<<< HEAD
=======
        domain="insert_your_domain_here"
        clientId="insert_yourclient_id_here"
        authorizationParams={{
          redirect_uri: window.location.origin
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
        domain={auth0Domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
          audience: audience,
          scope: 'offline_access openid profile email read:users'
>>>>>>> 42163cd (property details)
=======
        domain={import.meta.env.VITE_AUTH_DOMAIN!}
        clientId={import.meta.env.VITE_CLIENT_ID!}
=======
        domain={auth0Domain}
        clientId={clientId}
>>>>>>> b585c90 (fx: Fixing integration errors)
        authorizationParams={{
          redirect_uri: redirectUri,
          audience: audience,
          scope: 'offline_access openid profile email read:users'
>>>>>>> e03a375 (implementation of  login, logout, signup)
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
        }}
      >
        <App />
      </Auth0Provider>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Toaster />
      <ToastContainer theme="colored" />
=======
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
      <Toaster />
      <ToastContainer theme="colored" />
>>>>>>> 42163cd (property details)
=======
      <Toaster />
      <ToastContainer theme="colored" />
>>>>>>> b585c90 (fx: Fixing integration errors)
=======
      <Toaster />
      <ToastContainer theme="colored" />
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
    </BrowserRouter>
  </React.StrictMode>,
);
