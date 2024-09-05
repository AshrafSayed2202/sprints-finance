import React, { createContext, useReducer } from 'react';

const initialState = {
    inventory: [
        { id: 1, name: 'Laptop', quantity: 10, value: 1500, supplier: 'Supplier A' },
        { id: 2, name: 'Phone', quantity: 25, value: 700, supplier: 'Supplier B' },
        { id: 3, name: 'Tablet', quantity: 30, value: 300, supplier: 'Supplier C' },
        { id: 4, name: 'Monitor', quantity: 12, value: 200, supplier: 'Supplier D' },
        { id: 5, name: 'Keyboard', quantity: 50, value: 50, supplier: 'Supplier E' },
        { id: 6, name: 'Mouse', quantity: 40, value: 30, supplier: 'Supplier F' },
        { id: 7, name: 'Printer', quantity: 8, value: 400, supplier: 'Supplier G' },
        { id: 8, name: 'Router', quantity: 20, value: 100, supplier: 'Supplier H' },
        { id: 9, name: 'Smartwatch', quantity: 15, value: 250, supplier: 'Supplier I' },
        { id: 10, name: 'Camera', quantity: 5, value: 1200, supplier: 'Supplier J' },
    ],
    sales: [
        { id: 1, productName: 'Laptop', quantity: 2, totalAmount: 3000, customerName: 'John Doe' },
        { id: 2, productName: 'Phone', quantity: 3, totalAmount: 2100, customerName: 'Jane Smith' },
        { id: 3, productName: 'Tablet', quantity: 1, totalAmount: 300, customerName: 'Emily Brown' },
        { id: 4, productName: 'Monitor', quantity: 4, totalAmount: 800, customerName: 'Michael Johnson' },
        { id: 5, productName: 'Keyboard', quantity: 5, totalAmount: 250, customerName: 'Chris Evans' },
        { id: 6, productName: 'Mouse', quantity: 10, totalAmount: 300, customerName: 'Clark Kent' },
        { id: 7, productName: 'Printer', quantity: 1, totalAmount: 400, customerName: 'Diana Prince' },
        { id: 8, productName: 'Router', quantity: 2, totalAmount: 200, customerName: 'Bruce Wayne' },
        { id: 9, productName: 'Smartwatch', quantity: 3, totalAmount: 750, customerName: 'Peter Parker' },
        { id: 10, productName: 'Camera', quantity: 1, totalAmount: 1200, customerName: 'Natasha Romanoff' },
    ],
    financialRecords: [
        { id: 1, revenue: 12000, expenses: 5000, month: 'January' },
        { id: 2, revenue: 15000, expenses: 7000, month: 'February' },
        { id: 3, revenue: 17000, expenses: 6000, month: 'March' },
        { id: 4, revenue: 20000, expenses: 9000, month: 'April' },
        { id: 5, revenue: 25000, expenses: 11000, month: 'May' },
    ],
};

export const ERPContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INVENTORY':
            return { ...state, inventory: [...state.inventory, action.payload] };
        case 'UPDATE_SALES':
            return { ...state, sales: [...state.sales, action.payload] };
        case 'ADD_FINANCIAL_RECORD':
            return { ...state, financialRecords: [...state.financialRecords, action.payload] };
        default:
            return state;
    }
};

export const ERPProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ERPContext.Provider value={{ state, dispatch }}>
            {children}
        </ERPContext.Provider>
    );
};
