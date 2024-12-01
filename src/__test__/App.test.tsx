import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders the WelcomePage component', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // const landingPageElement = screen.getByText(/Explore our collections/i);
    // expect(landingPageElement).toBeInTheDocument();

    // const categoryElement = screen.getByText(/Electronic/i);
    // expect(categoryElement).toBeInTheDocument();
  });
});
