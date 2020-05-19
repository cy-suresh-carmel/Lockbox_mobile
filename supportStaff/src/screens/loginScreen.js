import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Text, Button, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
export default class loginScreen extends Component {
    render() {
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
                       
                    />
                </View>
                <View style={styles.wrapp1}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Password'
                        secureTextEntry={true}
                       
                    />
                </View>
                <View style={styles.wrapp2}>
                    <TouchableOpacity
                        style={styles.touchableopacityStyle}
                        onPress={()=>this.props.navigation.navigate('Home')} >
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


