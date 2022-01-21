import React from 'react';

import PublicGlobalProvider from './contexts/PublicGlobal';

import Navbar from './components/Navbar';
import AppRoutes from './navigation/app/routes';

const App = () => (
  <PublicGlobalProvider>
    <>
      <Navbar />
      <AppRoutes />
    </>
  </PublicGlobalProvider>
);

export default App;
