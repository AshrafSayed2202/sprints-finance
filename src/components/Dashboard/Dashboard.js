import React from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Dummy data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Portfolio Performance',
                data: [10000, 10500, 11000, 10750, 11500], // Dummy performance data
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
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="dashboard-container p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="metrics grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Portfolios</h2>
                    <p>3</p> {/* Dummy total portfolios */}
                </div>
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Value</h2>
                    <p>$11,500</p> {/* Dummy total value */}
                </div>
            </div>
            <div className="chart-container h-96">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
