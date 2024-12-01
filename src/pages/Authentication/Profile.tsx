import React, { useEffect, useState, useCallback } from 'react';

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

  // Function to fetch token and return it
  const exchangeCodeForToken = useCallback(async (code: string): Promise<string | null> => {
    try {
      const response = await fetch(`http://localhost:8000/token?code=${code}`);
      if (response.ok) {
        const access_token = await response.text();
        localStorage.setItem('access_token', access_token);
        return access_token;
      } else {
        console.error('Failed to fetch token.');
        return null; // Return null if the request fails
      }
    } catch (error) {
      console.error('An error occurred while fetching token.', error);
      return null; // Return null if there's an error
    }
  }, []); // No dependencies for exchangeCodeForToken

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
    <div>
      <h2>Access Token</h2>
      <p>{token ? (window.location.href = import.meta.env.VITE_MAIN_URI) : 'Check your email for verification'}</p>
    </div>
  );
};

export default Profile;
