<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
<<<<<<< HEAD
=======
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
>>>>>>> 42163cd (property details)
=======
import React, { useEffect, useState, useCallback } from 'react';
>>>>>>> e03a375 (implementation of  login, logout, signup)
=======
>>>>>>> b585c90 (fx: Fixing integration errors)

const Profile = () => {
  const [token, setToken] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const codeFromUrl = params.get('code');

    // If there's a code in the URL and no token, fetch token
    if (codeFromUrl && !token) {
      setCode(codeFromUrl);
    } else {
      const storedToken = localStorage.getItem('access_token');
      if (storedToken) {
        setToken(storedToken); // Retrieve token from localStorage if available
      }
    }
  }, [token]); // Only re-run effect when token changes

<<<<<<< HEAD
<<<<<<< HEAD
  const API_BASE_URL = (import.meta as any).env.VITE_REACT_APP_API_BASE_URL;

  // Function to fetch token and return it
  const exchangeCodeForToken = useCallback(
    async (code: string): Promise<string | null> => {
      try {
        const response = await fetch(`${API_BASE_URL}/token?code=${code}`);
        if (response.ok) {
          const access_token = await response.text();
          localStorage.setItem('access_token', access_token);
          return access_token;
        } else {
          toast.error('Failed to fetch token.');
          console.error('Failed to fetch token.');
          return null; // Return null if the request fails
        }
      } catch (error) {
        console.error('An error occurred while fetching token.', error);
        return null; // Return null if there's an error
      }
    },
    [API_BASE_URL]
  );
=======
=======
  const API_BASE_URL = (import.meta as any).env.VITE_REACT_APP_API_BASE_URL;

>>>>>>> b585c90 (fx: Fixing integration errors)
  // Function to fetch token and return it
  const exchangeCodeForToken = useCallback(
    async (code: string): Promise<string | null> => {
      try {
        const response = await fetch(`${API_BASE_URL}/token?code=${code}`);
        if (response.ok) {
          const access_token = await response.text();
          localStorage.setItem('access_token', access_token);
          return access_token;
        } else {
          toast.error('Failed to fetch token.');
          console.error('Failed to fetch token.');
          return null; // Return null if the request fails
        }
      } catch (error) {
        console.error('An error occurred while fetching token.', error);
        return null; // Return null if there's an error
      }
<<<<<<< HEAD
    } catch (error) {
      console.error('An error occurred while fetching token.', error);
      return null; // Return null if there's an error
    }
  }, []); // No dependencies for exchangeCodeForToken
>>>>>>> e03a375 (implementation of  login, logout, signup)
=======
    },
    [API_BASE_URL]
  );
>>>>>>> b585c90 (fx: Fixing integration errors)

  // Fetch token when `code` changes
  useEffect(() => {
    const fetchTokenAndSetState = async (code: string) => {
      const accessToken = await exchangeCodeForToken(code);
      if (accessToken) {
        setToken(accessToken); // Set state if token is fetched
      }
    };

    if (code && !token) {
      fetchTokenAndSetState(code);
    }
  }, [code, token, exchangeCodeForToken]); // Include all dependencies

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 42163cd (property details)
=======
>>>>>>> e03a375 (implementation of  login, logout, signup)
    <div>
      <h2>Access Token</h2>
      <p>{token ? (window.location.href = import.meta.env.VITE_MAIN_URI) : 'Check your email for verification'}</p>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
    isAuthenticated &&
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
>>>>>>> 42163cd (property details)
=======
>>>>>>> e03a375 (implementation of  login, logout, signup)
  );
};

export default Profile;
