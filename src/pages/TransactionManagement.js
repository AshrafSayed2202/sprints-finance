import React from 'react';
import TransactionForm from '../components/Transactions/TransactionForm';
import Transaction from '../components/Transactions/Transaction';

const TransactionManagement = () => {
    return (
        <div className="transaction-management-container">
            <TransactionForm />
            <Transaction />
        </div>
    );
};

export default TransactionManagement;
