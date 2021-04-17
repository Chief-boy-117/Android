import React from 'react';// 8.5K (gzipped: 3.4K)
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, Easing} from 'react-native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { enableScreens } from "react-native-screens";

enableScreens();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  navigation.setOptions({
    headerRight:()=>(
      <Button title="Save" onPress={()=>{
        navigation.replace('Home');
      }}/>
    )
  });
  return (
  <View style={{flex:1,
  alignItems:'center',
  justifyContent:'center'}}>
  <Text>HomeScreen</Text>
  <Button title="Go to Details Screen" 
  onPress={()=>navigation.navigate('Details')}>
  </Button>
  </View>
  );
}

const SettingScreen = (props) => {
  const isFocused = useIsFocused()
  return(
    <View style={{flex:1,
    alignItems:'center',
    justifyContent:'center'}}>
    <Text style={{color: isFocused ? 'green':'black'}}>Settings Screen</Text>
    </View>
  )
};

const FeedScreen = (props) => (
  <View style={{flex:1,
    alignItems:"center",
    justifyContent:"center"}}>
      <Text>FeedScreen</Text>
    </View>
);

const DetailsScreen = (props) => (
  <View style={{flex: 1,
  alignItems: "center",
  justifyContent: "center"}}>
    <Text>Details Screen</Text>
  </View>
);

const HomeStackNavigator = ({navigation, route})=>{
  if(route.state){
    navigation.setOptions({
      tabBarVisible: route.state.index>0?false:true
    });
  }
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Details" component={DetailsScreen}/>
    </HomeStack.Navigator>
  )
}

const HomeTabNavigator = ()=>(
  <Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon:({color,size}) => {
      let iconName
      if(route.name == 'Home')
      {
        iconName='ios-home';
      }
      else if(route.name == 'Feed')
      {
        iconName='logo-rss';
      }
      else if(route.name == 'Settings')
      {
        iconName='ios-settings';
      }
      return <Ionicons name = {iconName} size = {size} color = {color}/>
    }
  })}>
    <Tab.Screen name="Home" component={HomeStackNavigator}></Tab.Screen>
    <Tab.Screen name="Feed" component={FeedScreen}></Tab.Screen>
    <Tab.Screen name="Settings" component={SettingScreen}></Tab.Screen>
  </Tab.Navigator>
);

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation:'timing',
  config: {
    duration:500,
    easing: Easing.linear
  }
};

function getHeaderTitle(route){
  // const routeName = route.state? route.state.routes[route.state.index].name:'Home'

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch(routeName){
    case 'Home':
      return 'Home';
    case 'Feed':
      return 'Feed';
    case 'Settings':
      return 'Settings';
  }
};

function shouldHeaderBeShown(route){
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch(routeName){
    case 'Home':
      return false;
  }
}

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: "horizontal",
    // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
    // ,transitionSpec: {
    // open: config,
    // close: closeConfig
    // }

    ...TransitionPresets.ModalSlideFromBottomIOS,
    }
  } 
    initialRouteName="Home"
    headerMode="float">
      <Stack.Screen options={({route})=>({title:getHeaderTitle(route),
      headerShown:shouldHeaderBeShown(route)
    })} 
      name="Home" 
      component={HomeTabNavigator} />
      <Stack.Screen name="Settings"
      component={SettingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
