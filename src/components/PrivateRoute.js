import React from 'react'
import { Navigate } from 'react-router-dom';


export const PrivateRoute = (props) => {

    if(props.isloggedin){
        return props.children;
    }

    else{
        return <Navigate to="/login"></Navigate>;
    }

}
