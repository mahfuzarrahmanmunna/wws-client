import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';







const useAmbassador = () => {


    let {user}= useContext(AuthContext)



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/getAmbassador/${user?.email}`);
        return response.data?.ambassador;
      };

   
    const { data: isambassador = [], isLoading:ambassadorLoading } = useQuery({
        queryKey: [user?.email,"isambassador"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [isambassador,ambassadorLoading]
};

export default useAmbassador;