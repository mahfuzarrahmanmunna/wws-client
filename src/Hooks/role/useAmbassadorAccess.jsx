import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const useAmbassadorAccess = () => {
  const { user } = useContext(AuthContext);

  const fetchAmbassadorAccess = async () => {
    if (!user?.email) return null;
    const { data } = await axios.get(
      `http://localhost:3000/ambassador/access/${user.email}`
    );
    return data; // data = { role, access }
  };

  const { data: ambassadorData, isLoading: ambassadorDataLoading, error } = useQuery({
    queryKey: ['ambassadorData', user?.email],
    queryFn: fetchAmbassadorAccess,
  });

  return [ambassadorData, ambassadorDataLoading, error];
};

export default useAmbassadorAccess;
