import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import NewPiuPage from '../pages/NewPiuPage';

const { Navigator, Screen } = createStackNavigator();

function NewPiuStack() {
    return (
        <Navigator screenOptions={{ headerShown:false }}>
            <Screen name="Feed" component={Feed} />
            <Screen name="NewPiuPage" component={NewPiuPage} />
        </Navigator>
    )
}

export default NewPiuStack;