import React from 'react';

import AuthStack from './AuthStack';
import AppTabs from './AppTabs';

import { useAuth } from '../hooks/useAuth';

const Routes: React.FC = () => {
    const { token } = useAuth();
    if (token) {
        return <AppTabs />
    } else {
        return <AuthStack />
    }
};

export default Routes;