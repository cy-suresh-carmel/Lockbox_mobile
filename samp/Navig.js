import React from 'react';
import { View ,Dimensions} from 'react-native';
import {Button,Text,Container, Header, Left, Body, Right, Title} from 'native-base';
import {Icon} from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './src/screens/HomeScreen';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';
import {createStackNavigator} from 'react-navigation-stack';
import loginScreen from './src/screens/loginScreen';
import generateKeyScreen from './src/screens/generateKeyScreen';
import SideMenu from './src/SideMenu';

const navOptionHandler =(navigation)=>({
    header:null
})

const HomeStack =createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:navOptionHandler
    },
    GenerateKey:{
        screen:generateKeyScreen,
        navigationOptions:navOptionHandler
    }
})

const MainTabs = createBottomTabNavigator({

  Home: {
      screen:HomeStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon:({tintColor}) => (
			<Icon
			name='home'
			color={tintColor}
			type='font-awesome'
			size={25}
			/>
			)
	})

  },
  Notifications: {
      screen:Notifications,
      navigationOptions: () => ({
        tabBarIcon:({tintColor}) => (
            <Icon
            name='bell'
            color={tintColor}
            type='font-awesome'
            size={25}
            />
            )
    })

  },
  Profile:{
      screen:Profile,
      navigationOptions: () => ({
        tabBarIcon:({tintColor}) => (
            <Icon
            name='user'
            color={tintColor}
            type='font-awesome'
            size={25}
            />
            )
    })

  }
  
});
const MainStack=createStackNavigator({
    Home:{
        screen:MainTabs,
        navigationOptions:navOptionHandler
    },
    Notifications:{
        screen:Notifications,
        navigationOptions:navOptionHandler
    },
    Profile:{
        screen:Profile,
        navigationOptions:navOptionHandler
    }

},{initialRouteName:'Home'})

const appDrawer=createDrawerNavigator(
    {
        drawer:MainStack
    },
    {
        contentComponent:SideMenu,
        drawerWidth:Dimensions.get('window').width*3/4
    }
)
  
   const authStack =createStackNavigator({
       Login:{
           screen:loginScreen,
           navigationOptions:navOptionHandler       
        }   
   }) 
   const MainApp=createSwitchNavigator(
       {
       app:appDrawer,
       auth:authStack
   },
   {
       initialRouteName:'auth'
   }
   )




export default createAppContainer(MainApp);