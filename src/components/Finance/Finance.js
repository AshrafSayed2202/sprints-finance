import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Finance = () => {
    // Dummy financial data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Expenses',
                data: [1000, 1200, 900, 1400, 1100], // Dummy expense data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Revenue',
                data: [2000, 2500, 2300, 2700, 2600], // Dummy revenue data
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
                    <p>$12,100</p> {/* Dummy total revenue */}
                </div>
                <div className="card p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-lg font-semibold">Total Expenses</h2>
                    <p>$5,700</p> {/* Dummy total expenses */}
                </div>
            </div>
            <div className="chart-container h-96">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Finance;
