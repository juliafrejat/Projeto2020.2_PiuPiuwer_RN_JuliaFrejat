import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import Feed from '../pages/Feed';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
    return (
        <NavigationContainer>
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
                }}
            >
                <Screen 
                    name="Feed" 
                    component={Feed}
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
                    component={Feed}
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
                    component={Feed}
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
                    component={Feed}
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
                    component={Feed}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Feather name="power" size={size} color='#FFFFFF' />
                            )
                        }
                    }} 
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppTabs;