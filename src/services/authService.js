import api from './api';

export const login = async (username, password) => {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
};

export const register = async (username, email, password) => {
    const response = await api.post('/auth/register', { username, email, password });
    return response.data;
};

export const logout = async () => {
    const response = await api.post('/auth/logout');
    return response.data;
};
