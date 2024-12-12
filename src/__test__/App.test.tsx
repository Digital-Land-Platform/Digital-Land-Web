import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';
import { AuthContextProvider } from '../context/AuthContext';

describe('App', () => {
  it('renders the WelcomePage component', () => {
    render(
      <Router>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    );

    // Add the assertions here
  });
});
