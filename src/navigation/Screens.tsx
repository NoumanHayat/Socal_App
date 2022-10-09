import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StartingPoint, Login,Signup,Dashboard } from '../screens';
import { useData } from '../hooks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default () => {
  const { translations } = useData();
 

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen
        name={translations.navigation.StartingPoint }
        component={StartingPoint}
        options={{ title: translations.Screen.StartingPoint }}
      />
       <Stack.Screen
        name={translations.navigation.Login}
        component={Login}
        options={{ title: translations.Screen.Login }}
      /> 
      <Stack.Screen
        name={translations.navigation.SignUp}
        component={Signup}
        options={{ title: translations.Screen.SignUp }}
      /> 
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
      />
    </Stack.Navigator>
  ); 
};

 

 