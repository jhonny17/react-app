/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import React from 'react';

describe('<Navbar /> component', () => {
  it('should be rendering correctly', () => {
    expect.assertions(1);
    render(<Navbar />);
    const navbar = screen.queryByText(/Navbar/u);
    expect(navbar).not.toBeInTheDocument();
  });
});
