import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '.';

test('Renders the main Landing Page title', () => {
  render(<LandingPage />);
  const title = screen.getByText(/Welcome to the Code Tes/i);
  expect(title).toBeInTheDocument();
});
