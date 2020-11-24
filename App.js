
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/components/screens/VideoPlayer';
import Explore from './src/components/screens/Explore';
import Subscribe from './src/components/screens/Suscribe';
import { MaterialIcons } from '@expo/vector-icons';
import {reducer} from './src/reducer/reducer';

import {Provider,useSelector} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {themeReducer} from './src/reducer/themeReducer';

const rootReducer =combineReducers({
  cardData:reducer,  //[]
  myDarkMode:themeReducer
})
const store = createStore(rootReducer)
const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

const customDarkTheme ={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'grey',
    iconColor:'white',
    tabBarIcon:'white'
  }
}
const customDefaultTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:'black',
    tabBarIcon:'red'
  }
}

const RootHome = () => {
  const {colors} = useTheme()
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color}) => {
        let iconName;

        if (route.name === 'home') {
          iconName = "home"
        } else if (route.name === "explore") {
          iconName = "explore"
        }else if(route.name === 'subscribe'){
          iconName="subscriptions"
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabBarIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={Home}/>
      <Tabs.Screen name="explore" component={Explore}/>
      <Tabs.Screen name="subscribe" component={Subscribe}/>
    </Tabs.Navigator>

  )
}

export default () => {
  return (
  <Provider store={store}>
    <Navigation/>
  </Provider>
  )
}
export  function Navigation() {

  let currentTheme = useSelector(state=> {
    return state.myDarkMode
  })
  return (
    <Provider store={store}>
    <NavigationContainer theme={ currentTheme ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name ="videoPlayer" component={VideoPlayer}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

