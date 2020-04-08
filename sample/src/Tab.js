import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import {Icon} from 'react-native-elements';
import homeScreen from './Screens/homeScreen';
import notifications from './Screens/notifications';
import profile from './Screens/profile';
const TabNavigator = createBottomTabNavigator({ 
Home: {
	screen:homeScreen,
	navigationOptions: ({navigation}) => ({
		tabBarIcon:({focused, horizontal,tintColor:color}) => (
			<Icon
			name='home'
			color={color}
			type='font-awesome'
			size={25}
			/>
		),	
    }),      
},

Notifications: {
		screen:notifications,
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
Profile: {
	screen:profile,
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
},
},
{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    // tabBarOptions: {
    //   activeTintColor: '#e91e63',
    // },
 
}); 


export default createAppContainer(TabNavigator);


 