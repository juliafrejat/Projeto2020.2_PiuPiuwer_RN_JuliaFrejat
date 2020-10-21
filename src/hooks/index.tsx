import React from 'react';

import { PiusProvider } from './usePius';
import { AuthProvider } from './useAuth';
import { LoadingProvider } from './useLoading';

const AppProvider: React.FC = ({ children }) => {
    return (
        <LoadingProvider>
            <AuthProvider>
                <PiusProvider>
                    {children}
                </PiusProvider>
            </AuthProvider>
        </LoadingProvider>
    )
}

export default AppProvider;