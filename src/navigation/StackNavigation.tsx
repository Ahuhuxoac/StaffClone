import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@src/screens/homescreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
