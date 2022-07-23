/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import React from 'react';

describe('Layout component', () => {
  it('should contain a Navbar component', () => {
    render(<Layout />);
    const navbar = screen.getByTestId('primary-navbar');

    expect(navbar).toBeInTheDocument();
  });
});
