import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { LOG_IN_PAGE } from 'navigation/app/navigation-link';

import { useAuthContext } from 'contexts/AuthContext';

type PrivateRouteProps = {
  isOutlet?: boolean;
  children: ReactElement | null;
};

const PrivateRoute = ({ isOutlet, children }: PrivateRouteProps) => {
  const { currentUser } = useAuthContext();
  if (!currentUser) return <Navigate to={LOG_IN_PAGE} />;
  return isOutlet ? <Outlet /> : children;
};

export default PrivateRoute;
