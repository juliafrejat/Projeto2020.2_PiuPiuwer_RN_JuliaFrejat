import React from 'react';

import AuthRoutes from './auth';
import AppTabs from './app';

import { useAuth } from '../hooks/useAuth';

const Routes: React.FC = () => {
    const { token } = useAuth();
    
    if (token) {
        return <AppTabs />
    } else {
        return <AuthRoutes />
    }
};

export default Routes;