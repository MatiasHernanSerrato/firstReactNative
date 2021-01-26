import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainFeed, Login } from './components/screens';

const Stack = createStackNavigator();

const InstaMatt = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MainFeed' component={MainFeed}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InstaMatt;
