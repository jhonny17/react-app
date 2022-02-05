import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { ROOT_PAGE, LOG_IN_PAGE, SIGN_UP_PAGE } from './navigation-link';

import DefaultLayout from '../../components/DefaultLayout';

const Login = lazy(() => import('../../components/Login'));
const NotFound = lazy(() => import('../../components/NotFound'));

const A = () => <>App</>;

const AppRoutes = () => (
  <Routes>
    <Route path={ROOT_PAGE} element={<DefaultLayout />}>
      <Route index element={<A />} />
      <Route
        path="*"
        element={
          <Suspense fallback={'Loading...'}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
    <Route
      path={LOG_IN_PAGE}
      element={
        <Suspense fallback={'Loading...'}>
          <Login />
        </Suspense>
      }
    />
    <Route path={SIGN_UP_PAGE} element={<Login isUserSigningUp={true} />} />
    <Route
      path="*"
      element={
        <Suspense fallback={'Loading...'}>
          <NotFound />
        </Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
