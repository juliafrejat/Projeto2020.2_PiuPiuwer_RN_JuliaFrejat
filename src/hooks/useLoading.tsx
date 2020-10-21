import React, {createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState} from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

interface LoadingContextData {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export const LoadingProvider: React.FC = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
            <Modal
                visible={isLoading}
                transparent
            >
                <View
                    style={{ flex: 1, justifyContent: 'center' }}
                >
                    <ActivityIndicator size='large' />
                </View>
            </Modal>
        </LoadingContext.Provider>
    )
}

function useLoading(): LoadingContextData {
    const context = useContext(LoadingContext);
    return context;
}

export default useLoading;