import React from 'react';
import { View } from 'react-native';
import {Button,Text,Container, Header, Left, Body, Right, Icon, Title} from 'native-base';
export default class CustomHeader extends React.Component{
    render(){
      let {title,isHome,dataCount}=this.props
        return(
          
            <Header style={{height:100,backgroundColor:'#066DB3'}}>
              <Left>
                {
                  isHome?
                  <Button transparent
                  onPress={()=>this.props.navigation.openDrawer()}>
                  <Icon style={{fontSize:35}}
                  name='menu' />
                </Button>:
                  <Button transparent
                onPress={()=>this.props.navigation.goBack()}>
                  <Icon style={{fontSize:35}}
                   name='arrow-back' />
                </Button>
                
                }
                
              </Left>
              <Body>
              <Title>{title}</Title>
              </Body>
              <Right>
              <Text style={{alignItems: 'center',justifyContent: 'center',color:'#FFFFFF'}}>{dataCount}</Text>
              </Right>
              
            </Header>
           
        );
    }
}