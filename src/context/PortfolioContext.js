import React, { createContext, useReducer } from 'react';

const initialState = {
    portfolios: [],
    transactions: [],
    financialRecords: [],
};

export const PortfolioContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PORTFOLIO':
            return { ...state, portfolios: [...state.portfolios, action.payload] };
        case 'ADD_TRANSACTION':
            return { ...state, transactions: [...state.transactions, action.payload] };
        case 'UPDATE_FINANCIAL_RECORDS':
            return { ...state, financialRecords: action.payload };
        default:
            return state;
    }
};

export const PortfolioProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PortfolioContext.Provider value={{ state, dispatch }}>
            {children}
        </PortfolioContext.Provider>
    );
};
