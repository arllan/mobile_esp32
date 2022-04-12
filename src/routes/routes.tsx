import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {screenNames} from './screenNames';
import {Exemple} from '../pages/Exemple';
import {Intro} from '../pages/Intro';
import {Provide} from '../provider/provider';

export function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Provide>
          <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={screenNames.Intro} component={Intro} />
            <Stack.Screen name={screenNames.exemplo} component={Exemple} />
          </Stack.Navigator>
        </Provide>
      </NavigationContainer>
      <Toast />
    </>
  );
}
