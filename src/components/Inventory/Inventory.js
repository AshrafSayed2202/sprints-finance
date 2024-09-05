import React, { useContext } from 'react';
import { ERPContext } from '../../context/ERPContext';

const Inventory = () => {
    const { state } = useContext(ERPContext);

    return (
        <div className="inventory-container">
            <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
            <div className="inventory-list grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.inventory.map((item) => (
                    <div key={item.id} className="inventory-item p-4 shadow rounded bg-white">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <p>Value: ${item.value}</p>
                        <p>Supplier: {item.supplier}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;
