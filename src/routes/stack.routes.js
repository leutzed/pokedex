import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { ScreenB } from '../screens/ScreenB';

import { LogoImg } from '../components/LogoImg';

function LogoTitle() {
    return (
        <LogoImg />
    );
}  

export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerStyle: { backgroundColor: '#21386E' },
        }}>
            <Screen name='home' component={Home}
                    options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
                    />
            <Screen name='screenB' component={ScreenB}/>
        </Navigator>
    );
}