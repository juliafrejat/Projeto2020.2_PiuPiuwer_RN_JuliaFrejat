import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

const { Navigator, Screen } = createStackNavigator();

function AuthStack() {
    return (
        <Navigator screenOptions={{ headerShown:false }}>
            <Screen name="Login" component={Login} />
            <Screen name="Signup" component={Signup} />
        </Navigator>
    )
}

export default AuthStack;