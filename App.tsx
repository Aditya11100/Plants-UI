import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          // headerLeft: () => (
          //   <MenuIconWrapper>
          //     <MenuIcon width={25} height={25} />
          //   </MenuIconWrapper>
          // ),
          // headerRight: () => (
          //   <ImageCover source={UserProfileImg} resizeMode={'cover'} />
          // ),
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return <NavigationContainer>{StackNavigator()}</NavigationContainer>;
};

export default App;
