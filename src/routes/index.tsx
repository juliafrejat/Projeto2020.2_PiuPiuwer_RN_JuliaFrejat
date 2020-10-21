import React from 'react';

import AuthRoutes from './Auth';
import AppTabs from './AppTabs';

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