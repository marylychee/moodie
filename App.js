import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

import {lightGrey, darkGrey} from './Styles'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Log In" component={LogInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions =  {
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: 'transparent',
      borderBottomWidth: 10,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
    },
    headerTintColor: lightGrey,
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 38,
      color: darkGrey,
    },
    headerBackTitle: '',
}
