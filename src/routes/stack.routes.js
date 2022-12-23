import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

import { LogoImg } from '../components/LogoImg';

function LogoTitle() {
    return (
        <LogoImg />
    );
}  

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name='home' component={Home}
                    options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                    />
            <Screen name='details' component={Details}/>
        </Navigator>
    );
}