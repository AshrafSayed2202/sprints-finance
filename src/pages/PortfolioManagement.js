import React from 'react';
import Portfolio from '../components/Portfolio/Portfolio';
import PortfolioForm from '../components/Portfolio/PortfolioForm';

const PortfolioManagement = () => {
    return (
        <div className="portfolio-management-container">
            <PortfolioForm />
            <Portfolio />
        </div>
    );
};

export default PortfolioManagement;
