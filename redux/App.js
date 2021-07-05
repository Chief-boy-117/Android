import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text} from 'react-native';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import configureStore from './src/store';
import {Provider} from 'redux';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'Redux App 01',
          headerTintColor: 'blue',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          headerTintColor: 'blue',
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
    </Stack.Navigator>
      </NavigationContainer>
    {/*<View>
    <Text>
      This should work
    </Text>
  </View> */}