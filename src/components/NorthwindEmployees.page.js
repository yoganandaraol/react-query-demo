import { Box } from "theme-ui";
import { useNorthwindEmployeesData } from "../hooks/useNorthwindEmployeesData";
import EmployeeCard from "./Employee/EmployeeCard";
import ImageComponent from "./ImageComponent";

export const NorthwindEmployeesPage = () => {
    const onSuccess = (data) => {
        console.log('Employees fetched', data);
    }

    const onError = (error) => {
        console.log('Employees fetch unsuccessful', error);
    }

    const { isLoading, data, isError, error, isFetching, refetch } = 
        useNorthwindEmployeesData(onSuccess, onError);

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>Northwind Employees</h2>
            <button onClick={refetch}>Fetch Employees</button>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            {
                data?.data.map(emp => {
                    return <Box key={emp.employeeId} style={{padding: '5px', width: '33%'}}>
                        <EmployeeCard employee={emp}/>
                    </Box>
                })
            }
            </Box>
        </>
    );
}