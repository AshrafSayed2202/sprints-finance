import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';

const Portfolio = () => {
    const { state } = useContext(PortfolioContext);

    return (
        <div className="portfolio-container p-8">
            <h1 className="text-3xl font-bold mb-6">Portfolio Management</h1>
            <div className="portfolio-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.portfolios.map((portfolio) => (
                    <div key={portfolio.id} className="portfolio-card p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">{portfolio.name}</h2>
                        <p className="text-sm text-gray-600">Value: ${portfolio.value}</p>
                        <p className="text-sm text-gray-600">Assets: {portfolio.assets.length}</p>
                        <p className="text-sm text-gray-600">Performance: {portfolio.performance}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
