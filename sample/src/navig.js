import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Drawer from './Drawer';
import Tab from './Tab';
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import Splash from '../Splash';
import loginScreen from './Screens/loginScreen';
import generateKeyScreen from './Screens/generateKeyScreen';

const MainNavigator= createStackNavigator({
  Login:
  {
    screen: loginScreen,
    
  },
  Tab : {
    screen: Tab,
    navigationOptions: ({navigation}) => ({
      header:null
    })
  },
  Drawer:{
    screen:Drawer

  },
  Generatekey:{
    screen:generateKeyScreen,
    navigationOptions: ({navigation}) => ({
      title: "Generate Key",
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#066DB3'
      },
    }),
  },
});
const App=createAppContainer(MainNavigator);
export default App;

