import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user}=useContext(AuthContext);
    console.log(user);

    const location= useLocation();

    
    if(user){
        return <>{children}</>;
    }

    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoutes;