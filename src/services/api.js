import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-api-url.com', // Replace with your actual API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getInventory = async () => {
    const response = await api.get('/inventory');
    return response.data;
};

export const addInventoryItem = async (item) => {
    const response = await api.post('/inventory', item);
    return response.data;
};

export const getSales = async () => {
    const response = await api.get('/sales');
    return response.data;
};

export const addSale = async (sale) => {
    const response = await api.post('/sales', sale);
    return response.data;
};

export const getFinancialRecords = async () => {
    const response = await api.get('/finance');
    return response.data;
};

export const addFinancialRecord = async (record) => {
    const response = await api.post('/finance', record);
    return response.data;
};
