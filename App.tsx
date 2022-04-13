import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Details}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return <NavigationContainer>{StackNavigator()}</NavigationContainer>;
};

export default App;
