import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import InstaMatt from './src/InstaMatt';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const instaMattStatus = true;
  if (instaMattStatus) {
    return <InstaMatt />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
