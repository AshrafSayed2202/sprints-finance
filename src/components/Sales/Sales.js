import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';

const Sales = () => {
    const { state } = useContext(PortfolioContext);

    return (
        <div className="sales-container p-8">
            <h1 className="text-3xl font-bold mb-6">Transaction Management</h1>
            <div className="sales-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.transactions.map((transaction) => (
                    <div key={transaction.id} className="sales-card p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold mb-2">{transaction.type}</h2>
                        <p className="text-sm text-gray-600">Amount: ${transaction.amount}</p>
                        <p className="text-sm text-gray-600">Date: {transaction.date}</p>
                        <p className="text-sm text-gray-600">Portfolio: {transaction.portfolioName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sales;
