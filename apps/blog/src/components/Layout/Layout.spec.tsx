/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react';
import DefaultLayout from './DefaultLayout';
import React from 'react';

describe('<DefaultLayout />', () => {
  it('should contain a Navbar component', () => {
    expect.assertions(1);
    render(<DefaultLayout />);
    const navbar = screen.getByTestId('primary-navbar');
    expect(navbar).toBeInTheDocument();
  });
});
