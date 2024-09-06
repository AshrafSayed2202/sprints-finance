import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import PortfolioManagement from './PortfolioManagement';
import TransactionManagement from './TransactionManagement';
import FinanceManagement from './FinanceManagement';
import Navbar from '../components/common/Navbar';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/portfolio" element={<PortfolioManagement />} />
                <Route path="/transactions" element={<TransactionManagement />} />
                <Route path="/finance" element={<FinanceManagement />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
