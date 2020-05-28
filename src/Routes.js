import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Video from './pages/Video'

const Stack = createStackNavigator();

export default function Routes () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
            <Stack.Screen name="Video" component={Video} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}