import { useContext } from 'react';
import { ERPContext } from '../context/ERPContext';

const useERPData = () => {
    return useContext(ERPContext);
};

export default useERPData;
