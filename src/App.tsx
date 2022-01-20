import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PublicGlobalProvider from './contexts/PublicGlobal';

const A = () => <>App</>;
const B = () => <>Not Found</>;

const App = () => (
  <PublicGlobalProvider>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="*" element={<B />} />
      </Routes>
    </>
  </PublicGlobalProvider>
);

export default App;
