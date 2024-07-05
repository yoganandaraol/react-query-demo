import { useQuery } from 'react-query';
import axios from 'axios';

const fetchNorthwindEmployees = () => {
    return axios.get('http://localhost:5063/api/Employees');
}

export const useNorthwindEmployeesData = (onSuccess, onError) => {
    return useQuery('northwind-employees',
        fetchNorthwindEmployees,
        {
            onSuccess,
            onError
        }
    );
}
