import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';
import { Bar } from 'react-chartjs-2';

const Finance = () => {
    const { state } = useContext(PortfolioContext);

    const totalRevenue = state.financialRecords.reduce((sum, record) => sum + record.revenue, 0);
    const totalExpenses = state.financialRecords.reduce((sum, record) => sum + record.expenses, 0);

    const data = {
        labels: state.financialRecords.map(record => record.month),
        datasets: [
            {
                label: 'Expenses',
                data: state.financialRecords.map(record => record.expenses),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Revenue',
                data: state.financialRecords.map(record => record.revenue),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="finance-container p-8">
            <h1 className="text-3xl font-bold mb-6">Finance Management</h1>
            <div className="metrics grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Revenue</h2>
                    <p>${totalRevenue}</p>
                </div>
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Expenses</h2>
                    <p>${totalExpenses}</p>
                </div>
            </div>
            <div className="chart-container h-96">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Finance;
