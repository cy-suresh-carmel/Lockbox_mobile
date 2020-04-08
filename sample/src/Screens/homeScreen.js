import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,Button} from 'react-native';
import {Header}from 'react-native-elements';
import Menu from '../Components/menuButton';

export default class homeScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
              <Menu/>
               <Button
               title='click'
               onPress={() => this.props.navigation.navigate('Generatekey')}
               />
                </View>
          
        );
    }
}
