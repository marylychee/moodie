import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import {lightGrey, darkGrey} from './Styles'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
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
      marginTop: 15,
      height: 60,
    },
    headerTintColor: lightGrey,
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      color: darkGrey,
    },
}
