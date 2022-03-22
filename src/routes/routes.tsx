import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './screenNames';

import {Home} from '../pages/Home';
import {Exemple} from '../pages/Exemple';
import {Intro} from '../pages/Intro';

export function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.exemplo} component={Exemple} />
        <Stack.Screen name={screenNames.home} component={Home} />
        <Stack.Screen name={screenNames.Intro} component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
