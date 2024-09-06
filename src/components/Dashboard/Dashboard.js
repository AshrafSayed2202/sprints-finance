import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { state } = useContext(PortfolioContext);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Portfolio Performance',
                data: state.portfolios.map(portfolio => portfolio.performance),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
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
        <div className="dashboard-container p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="metrics grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Portfolios</h2>
                    <p>{state.portfolios.length}</p>
                </div>
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Value</h2>
                    <p>${state.portfolios.reduce((sum, portfolio) => sum + portfolio.value, 0)}</p>
                </div>
            </div>
            <div className="chart-container h-96">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
