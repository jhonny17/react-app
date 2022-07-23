/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import React from 'react';

describe('Navbar component', () => {
  it('should be rendering correctly', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId('primary-navbar');

    expect(navbar).toBeInTheDocument();
  });
});
