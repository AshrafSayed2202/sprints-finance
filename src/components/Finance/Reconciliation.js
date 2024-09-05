import React, { useContext, useState } from 'react';
import { ERPContext } from '../../context/ERPContext';

const Reconciliation = () => {
    const { state } = useContext(ERPContext);
    const [reconciliationResult, setReconciliationResult] = useState(null);

    const reconcile = () => {
        const totalRevenue = state.financialRecords.reduce((sum, record) => sum + record.revenue, 0);
        const totalExpenses = state.financialRecords.reduce((sum, record) => sum + record.expenses, 0);
        const inventoryValue = state.inventory.reduce((sum, item) => sum + item.value, 0);

        const result = totalRevenue - totalExpenses - inventoryValue;
        setReconciliationResult(result);
    };

    return (
        <div className="reconciliation-container">
            <h1 className="text-2xl font-bold mb-4">Reconciliation</h1>
            <div className="metrics grid grid-cols-1 gap-4">
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Total Revenue</h2>
                    <p>${state.financialRecords.reduce((sum, record) => sum + record.revenue, 0)}</p>
                </div>
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Total Expenses</h2>
                    <p>${state.financialRecords.reduce((sum, record) => sum + record.expenses, 0)}</p>
                </div>
                <div className="card p-4 shadow rounded bg-white">
                    <h2 className="text-lg font-semibold">Total Inventory Value</h2>
                    <p>${state.inventory.reduce((sum, item) => sum + item.value, 0)}</p>
                </div>
            </div>
            <div className="reconciliation-result mt-6">
                <button
                    onClick={reconcile}
                    className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-300"
                >
                    Reconcile
                </button>
                {reconciliationResult !== null && (
                    <div className="mt-4 p-4 bg-gray-100 rounded">
                        <h2 className="text-lg font-semibold">Reconciliation Result</h2>
                        <p>{reconciliationResult >= 0 ? `Surplus of $${reconciliationResult}` : `Deficit of $${Math.abs(reconciliationResult)}`}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reconciliation;
