import { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const usePortfolioData = () => {
    return useContext(PortfolioContext);
};

export default usePortfolioData;
