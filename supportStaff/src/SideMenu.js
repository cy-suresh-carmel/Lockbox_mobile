import React, { Component } from 'react';
import {View,SafeAreaView,ScrollView,Image,Text} from 'react-native'
import { IMAGE } from './Image';
import {ListItem,List } from 'native-base';
export default class SideMenu extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={IMAGE.ICON_USER_DEFAULT}
                        style={{ height: 120, width: 120, borderRadius: 60 }} />
                </View>
                <ScrollView>
                    <List>
                        <ListItem onPress={()=>this.props.navigation.navigate('Home')}>
                            <Text>Home</Text>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('History')}>
                            <Text>History</Text>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('Notifications')}>
                            <Text>Notifications</Text>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('Profile')}>
                            <Text>Profile</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Sign Out</Text>
                        </ListItem>
                    </List>
                </ScrollView>
            </SafeAreaView>


        );
    }
}