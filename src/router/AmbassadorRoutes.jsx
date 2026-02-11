import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';


import useAmbassador from '../Hooks/role/useAmbassador';
import useAuth from '../Hooks/useAuth/useAuth';

const AmbassadorRoutes = ({children}) => {
    let {user,loading}= useAuth()
    let [isambassador,ambassadorLoading]= useAmbassador()


             let location= useLocation()

   if(loading || ambassadorLoading){
        return null
    }


    if(user && isambassador){
        return children
    }


    return <Navigate  to={"/signin"} state={{from:location}} replace></Navigate>



    

};

export default AmbassadorRoutes;