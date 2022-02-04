import React from 'react';

import AuthProvider from './contexts/AuthContext';

import AppRoutes from './navigation/app/routes';

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;
