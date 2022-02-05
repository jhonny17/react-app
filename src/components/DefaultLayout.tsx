import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const DefaultLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default DefaultLayout;
