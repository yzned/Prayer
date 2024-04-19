import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../../5_features/ Registration/Registratiion';
import Login from '../../5_features/Login/Login';
const Stack = createNativeStackNavigator();
export const UserIsGuest = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
