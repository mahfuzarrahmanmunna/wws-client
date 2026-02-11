import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';







const useUser = () => {


    let {user}= useContext(AuthContext)



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/getUser/${user?.email}`);
        return response.data?.user;
      };

   
    const { data: isUser = [], isLoading:userLoading } = useQuery({
        queryKey: [user?.email,"isuser"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [isUser,userLoading]
};

export default useUser;