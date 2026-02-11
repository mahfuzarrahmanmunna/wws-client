import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';






const useAdmin = () => {


  let { user } = useContext(AuthContext)



  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3000/getAdmin/${user?.email}`);
    return response.data?.admin;
  };


  const { data: isAdmin = [], isLoading: adminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"], // The unique key for this query
    queryFn: fetchUsers, // Function to fetch the data
  });



  return [isAdmin, adminLoading]
};

export default useAdmin;