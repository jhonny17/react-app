import React from 'react';

import PublicGlobalProvider from './contexts/PublicGlobal';

import AppRoutes from './navigation/app/routes';

const App = () => (
  <PublicGlobalProvider>
    <AppRoutes />
  </PublicGlobalProvider>
);

export default App;
