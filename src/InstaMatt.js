import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainFeed, Login, Profile, Camera, Register, RegisterProfile } from './components/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainFeed" component={MainFeed} />
      <Tab.Screen name='Camera' component={Camera} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const MainLoginScreen = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='RegisterProfile' component={RegisterProfile} />
    </Stack.Navigator>
  )
}

const InstaMatt = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Login' component={MainLoginScreen} />
        <Stack.Screen name='Tabs' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InstaMatt;
