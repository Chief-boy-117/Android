import * as React from 'react';
import { StyleSheet, View, Text, Easing } from 'react-native';
import { enableScreens } from "react-native-screens";

enableScreens();

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from "@react-navigation/stack";
import Home from './app/screens/Home';
import Settings from './app/screens/Settings';
const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    stiffness: 1000,
    easing: Easing.linear,
  },
};

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
           //stackAnimation: "fade",
           gestureEnabled: true,
           gestureDirection: "horizontal",

          ...TransitionPresets.ModalSlideFromBottomIOS,
         }}
        >
          <Stack.Screen 
           options={{headerCenter: ()=> <Text>Home</Text>}}
          name="Home" component={Home} />
          <Stack.Screen name="Settings"
          options={{headerLargeTitle: true}}
          component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
