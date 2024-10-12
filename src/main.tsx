import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="insert_your_domain_here"
    clientId="insert_yourclient_id_here"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
