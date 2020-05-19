import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {View,Image} from 'react-native';
export default class ProfileHeader extends Component {
  render() {
    return (
      
        <Header style={{height:200,backgroundColor:'#066DB3'}}>
          <Left>
          <Button transparent
                onPress={()=>this.props.navigation.navigate('Notifications')}>
                  <Icon style={{fontSize:35,paddingBottom:30}}
                   name='arrow-back' />
                   </Button>
          </Left>
          <Body>
            <Text style={{fontSize:20,fontFamily:'Quicksand',fontWeight:'900',color:'#FFFFFF',paddingLeft:75,paddingBottom:30}}>Profile</Text>
          </Body>
          <Right>
          </Right>
          </Header>
       
        
          
      
     
    );
  }
}