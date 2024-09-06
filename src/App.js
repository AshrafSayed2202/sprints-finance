import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './pages/routes';

const App = () => {
  return (
    <AuthProvider>
      <PortfolioProvider>
        <AppRoutes />
      </PortfolioProvider>
    </AuthProvider>
  );
};

export default App;
