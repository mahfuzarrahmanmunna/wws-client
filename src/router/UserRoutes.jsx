import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';
import useUser from '../Hooks/role/useUser';

const UserRoutes = ({children}) => {
    let {user,loading}= useAuth()
    let [isUser,userLoading]= useUser()


             let location= useLocation()

   if(loading || userLoading){
        return null
    }


    if(user && isUser){
        return children
    }


    return <Navigate  to={"/signin"} state={{from:location}} replace></Navigate>



    

};

export default UserRoutes;