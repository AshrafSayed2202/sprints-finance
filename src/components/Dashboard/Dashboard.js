import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Dashboard = () => {
    const { state } = useContext(ERPContext);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2300],
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
        <div className="dashboard-container">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="metrics grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Inventory Levels</h2>
                    <p>Total Items: {state.inventory.length}</p>
                </div>
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Total Sales</h2>
                    <p>$12,000</p>
                </div>
            </div>
            <div className="chart-container mt-6">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
