import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';

const Sales = () => {
    const { state } = useContext(ERPContext);

    return (
        <div className="sales-container">
            <h1 className="text-2xl font-bold mb-4">Sales Management</h1>
            <div className="sales-list grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.sales.map((sale) => (
                    <div key={sale.id} className="sales-item p-4 shadow rounded bg-white">
                        <h2 className="text-lg font-semibold">{sale.productName}</h2>
                        <p>Quantity Sold: {sale.quantity}</p>
                        <p>Total Amount: ${sale.totalAmount}</p>
                        <p>Customer: {sale.customerName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sales;
