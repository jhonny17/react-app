import AuthProvider from '@mono-repo/blog/contexts/AuthContext';
import Layout from '@mono-repo/blog/components/Layout';
import React from 'react';

const App = () => (
  <AuthProvider>
    <Layout />
  </AuthProvider>
);

export default App;
