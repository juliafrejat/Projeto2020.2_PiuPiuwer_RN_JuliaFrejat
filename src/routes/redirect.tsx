import React from 'react';

import {Redirect} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const Redirection:React.FC = () => {
    const { token } = useAuth();
    
    if (token) {
        return <Redirect to={{ pathname:'/feed'}} />
    } else {
        return <Redirect to={{ pathname:'/login'}} />
    }
}

export default Redirection;