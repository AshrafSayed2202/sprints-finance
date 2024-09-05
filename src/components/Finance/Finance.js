import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';
import { Bar } from 'react-chartjs-2';
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
const Finance = () => {
    const { state } = useContext(ERPContext);

    const totalRevenue = state.financialRecords.reduce((sum, record) => sum + record.revenue, 0);
    const totalExpenses = state.financialRecords.reduce((sum, record) => sum + record.expenses, 0);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
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
        <div className="finance-container">
            <h1 className="text-2xl font-bold mb-4">Finance Management</h1>
            <div className="metrics grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Total Revenue</h2>
                    <p>${totalRevenue}</p>
                </div>
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Total Expenses</h2>
                    <p>${totalExpenses}</p>
                </div>
            </div>
            <div className="chart-container mt-6">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Finance;
