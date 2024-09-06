export const addTransaction = (transaction) => {
    // Simulate an API call to add a transaction
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ...transaction, id: Date.now() });
        }, 1000);
    });
};

export const getTransactions = () => {
    // Simulate an API call to fetch transactions
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, type: 'buy', amount: 1000, portfolioName: 'Tech Fund', date: '2023-09-01' },
                { id: 2, type: 'sell', amount: 500, portfolioName: 'Healthcare Fund', date: '2023-09-02' },
            ]);
        }, 1000);
    });
};
