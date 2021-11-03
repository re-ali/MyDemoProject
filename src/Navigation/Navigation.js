import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Slider from '../Screens/Slider';
import DefaultScreen from '../Screens/DefaultScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          // gestureDirection: 'horizontal',
        }}>
        {/* <Stack.Screen name="Slider" component={Slider} /> */}
        <Stack.Screen name="DefaultScreen" component={DefaultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
