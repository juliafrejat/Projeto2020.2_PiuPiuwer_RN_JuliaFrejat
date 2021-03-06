import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import useAuth from '../hooks/useAuth';

import { Feather } from '@expo/vector-icons';

import NewPiuStack from './NewPiuStack';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
    const { logOut } = useAuth();
    
    const handleLogOut = useCallback(() => {
        logOut();
    },[logOut]);

    return (
        <Navigator
            tabBarOptions= {{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 80,
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 50,
                    height: 50,
                    color: '#FFFFFF',
                },
                labelStyle: {
                    display: 'none',
                },
                inactiveBackgroundColor: '#52B788',
                activeBackgroundColor: '#40916C',
                safeAreaInsets: {
                    bottom: 0,
                },
            }}
        >
            <Screen 
                name="Feed" 
                component={NewPiuStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="home" size={size} color='#FFFFFF' />
                        )
                    }
                }} 
            />

            <Screen 
                name="Messages" 
                component={NewPiuStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="mail" size={size} color='#FFFFFF' />
                        )
                    }                        
                }} 
            />

            <Screen 
                name="Notifications" 
                component={NewPiuStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="bell" size={size} color='#FFFFFF' />
                        )
                    }
                }} 
            />

            <Screen 
                name="Profile" 
                component={NewPiuStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="user" size={size} color='#FFFFFF' />
                        )
                    }
                }} 
            />

            <Screen 
                name="Logout" 
                component={NewPiuStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="log-out" size={size} color='#FFFFFF' />
                        )
                    },
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        handleLogOut();
                    }
                }} 
            />
        </Navigator>
    )
}

export default AppTabs;