import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './';

test('Renders searching bar', () => {
  render(<SearchBar value="" onChangeHandler={() => { }} />);
  const searchInputComponent = screen.getByText('Search users by name or email:');
  expect(searchInputComponent).toBeInTheDocument();
});
