import React from 'react';
import {Icon} from 'react-native-elements';
import {createDrawerNavigator} from 'react-navigation-drawer';
import historyScreen from './src/screens/historyScreen';
import HomeScreen from './src/screens/HomeScreen';
import Notifications from './src/screens/notifications';
import unlockKey from './src/screens/unlockKey';
import loginScreen from './src/screens/loginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from './src/screens/profile';
import SideMenu from './src/SideMenu';
import { Dimensions } from 'react-native';

const navOptionHandler=(navigation)=>({
  header:null
})

const HomeStack=createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:navOptionHandler
  },
  unlockKey:{
    screen:unlockKey,
    navigationOptions:navOptionHandler
  }
})

const MainTabs = createBottomTabNavigator({
  Home:
  {
   screen:HomeStack,
   navigationOptions:{
     tabBarLabel:'Home',
     tabBarIcon:({tintColor}) => (
			<Icon
			name='home'
			color={tintColor}
			type='font-awesome'
			size={25}
			/>
			)
   }
  },

  History: 
  {
    screen:historyScreen,
    navigationOptions:{
      tabBarLabel:'History',
      tabBarIcon:({tintColor}) => (
       <Icon
       name='navicon'
       color={tintColor}
       type='font-awesome'
       size={25}
       />
       )
    }
  },
  Notifications:
  {
    screen:Notifications,
    navigationOptions:{
      tabBarLabel:'Notifications',
      tabBarIcon:({tintColor}) => (
       <Icon
       name='bell'
       color={tintColor}
       type='font-awesome'
       size={25}
       />
       )
    }
  },
  Profile:
  {
    screen:ProfileScreen,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon:({tintColor}) => (
       <Icon
       name='user'
       color={tintColor}
       type='font-awesome'
       size={25}
       />
       )
    }
  }

});
const MainStack = createStackNavigator({
  Home:{
    screen:MainTabs,
    navigationOptions:navOptionHandler
  },
  History:{
    screen:historyScreen,
    navigationOptions:navOptionHandler
  },
  Notifications:{
    screen:Notifications,
    navigationOptions:navOptionHandler
  },
  Profile:{
    screen:ProfileScreen,
    navigationOptions:navOptionHandler
  }

},{initialRouteName:'Home'})
const appDrawer =createDrawerNavigator(
  {
    drawer:MainStack
  },
  {
    contentComponent:SideMenu,
    drawerWidth:Dimensions.get('window').width*3/4
  }
)
const authStack=createStackNavigator({
  Login:{
    screen:loginScreen,
    navigationOptions:navOptionHandler
  }
})
const MainApp= createSwitchNavigator(
  {
    app:appDrawer,
    auth:authStack
  },
  {
    initialRouteName:'auth'
  }
)

export default createAppContainer(MainApp);