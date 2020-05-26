import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Text, Button, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
export default class loginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            employeeId: '',
            showToast: false
        };
    }
    loginAction = (async) => {
        let formData = new FormData();
        formData.append('username', this.state.email);
        formData.append('password', this.state.password);
        formData.append('grant_type', 'password')

        fetch('http://103.79.223.60:8080/lockbox/oauth/token', {
            method: 'POST',
            headers: new Headers({
                // "Accept": "application/json",
                // 'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Basic ` + btoa('lockbox' + ':' + 'lockbox_secret'),
            }),
            body: formData,
        })
            .then((response) => response.json())
            .then((responseData) => {
            console.log(responseData,"------> loginpage")

                var prop = 'access_token'
                if (responseData.hasOwnProperty(prop)) {
                    AsyncStorage.setItem("userToken", responseData.access_token);
                    AsyncStorage.setItem("email", this.state.email)
                    // let check=await AsyncStorage.setItem('email',this.state.email.toString());
                    this.props.navigation.navigate('Home', { email: this.state.email, password: this.state.password, data: responseData })
                }
                else {
                    //console.log(responseData, "response")
                    Alert("Invalid request")
                }
                // AsyncStorage.setItem(responseData.access_token);
            })
            .catch(error => { console.log('error', error) })
    }
    render() {
        //console.log(this.state.email, 'email')
        //console.log(this.state.password, 'password')
        return (
            <View style={styles.wrapper}>
                <Image
                    style={{ height: 120, width: 180 }}
                    source={require('../Images/logo.png')}
                />
                <View style={styles.wrapp1}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={styles.wrapp1}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <View style={styles.wrapp2}>
                    <TouchableOpacity
                        style={styles.touchableopacityStyle}
                        onPress={() => this.loginAction()}>
                        <Text style={styles.textStyle}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapp1: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30

    },
    wrapp2: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40

    },
    textInputStyle: {
        height: 60,
        width: 300,
        color: '#b9b9b9',
        borderWidth: .5,
        borderRadius: 10,
        borderColor: '#E6E6E6',
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    touchableopacityStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#066DB3',
        width: 280,
        height: 50,
        borderRadius: 12,
        borderRadius: 25
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Quicksand'
    }
}
);
