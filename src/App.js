import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ERPProvider } from './context/ERPContext';
import Navbar from './components/common/Navbar';
import Loader from './components/common/Loader';

// Use React.lazy for dynamic imports
const Home = React.lazy(() => import('./pages/Home'));
const InventoryManagement = React.lazy(() => import('./pages/InventoryManagement'));
const FinanceManagement = React.lazy(() => import('./pages/FinanceManagement'));
const SalesManagement = React.lazy(() => import('./pages/SalesManagement'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));

const App = () => {
  return (
    <AuthProvider>
      <ERPProvider>
        <Router>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/inventory" element={<InventoryManagement />} />
              <Route path="/finance" element={<FinanceManagement />} />
              <Route path="/sales" element={<SalesManagement />} />
            </Routes>
          </Suspense>
        </Router>
      </ERPProvider>
    </AuthProvider>
  );
};

export default App;
