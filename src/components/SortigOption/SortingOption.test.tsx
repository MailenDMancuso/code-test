import React from 'react';
import { render, screen } from '@testing-library/react';
import SortingOption from './';

test('Renders Sorting button', () => {
    render(<SortingOption label="asc" disableOption={false} onClickHandler={() => { }} />);
    const sortingButtonComponent = screen.getByText('asc');
    expect(sortingButtonComponent).toBeInTheDocument();
});
