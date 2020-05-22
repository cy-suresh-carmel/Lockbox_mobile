import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, AsyncStorage, StyleSheet } from 'react-native'
import { USER_DETAILS } from './constants/ApiUrl';
import { IMAGE } from './Image';
import { ListItem, List } from 'native-base';
export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            data: []
        };
    }

    //To display UserDetails:
    async componentDidMount() {
        let user = await AsyncStorage.getItem('email');
        this.setState({ email: user })
        let url = USER_DETAILS + this.state.email
        fetch(url, {
            method: 'GET',

        })
            .then((response) => response.json())
            .then((responseUser) => {
                console.log(responseUser, "data3")
                this.setState({ data: responseUser.data })
                console.log(responseUser.data, "responseUser.data")
                AsyncStorage.setItem("userDetails", responseUser)
            })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ListItem>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ height: 150, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                            <Image source={IMAGE.ICON_USER_DEFAULT}
                                style={{ height: 80, width: 80, }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 60 }}>
                            <Text style={{ color: '#707070', fontSize: 20, fontFamily: 'Quicksand', fontWeight: '200', paddingLeft: 5 }}>{this.state.data.firstName} {this.state.data.lastName}</Text>
                        </View>
                    </View>
                </ListItem>


                <ScrollView>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.TextStyle}>Home</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('History')}>
                            <Text style={styles.TextStyle}>History</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Notifications')}>
                            <Text style={styles.TextStyle}>Notifications</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.TextStyle}>Profile</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('auth')}>
                            <Text style={styles.TextStyle}>Sign Out</Text>
                        </ListItem>
                    </List>
                </ScrollView>
            </SafeAreaView>


        );
    }
}
const styles = StyleSheet.create({
    TextStyle: {
        color: '#707070',
        fontFamily: 'Quicksand',
        fontSize: 18,
        fontWeight: '400'
    }
}) 