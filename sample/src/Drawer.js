import React from 'react';
import{Platform,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import homeScreen from './Screens/homeScreen';
import notifications from './Screens/notifications';
import profile from './Screens/profile';
import signout from './Screens/signout';
const DrawerNavigator=createDrawerNavigator({
    Home: {
        screen:homeScreen
    },
    Notifications:{
        screen:notifications
    },
    Profile:{
        screen:profile
    },
    SignOut:{
        screen:signout
    },
})

export default createAppContainer(DrawerNavigator);
