import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { ROOT_PAGE, STORE_PAGE } from './navigation-link';

import Login from '../../components/Login';

const B = () => <>Store</>;
const NotFound = () => <>Not Found</>;

const AppRoutes = () => (
  <Routes>
    <Route path={ROOT_PAGE} element={<Login />} />
    <Route path={STORE_PAGE} element={<B />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
