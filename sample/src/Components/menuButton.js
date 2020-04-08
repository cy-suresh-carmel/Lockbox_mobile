import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import {Ionicons} from 'react-native-vector-icons';
import Drawer from '../Drawer';
export default class Menu extends Component{
    render(){
        return(
         
                <Container>
                  <Header style={{backgroundColor:'#066DB3',height:100}}>
                    <Left>
                      <Button transparent>
                        <Icon style={{height:30,width:30}}
                         name='menu' />
                      </Button>
                    </Left>
                    <Body>
                      <Title style={{color:'#FFFFFF',fontSize:20,fontFamily:'Quicksand'}}>Locations</Title>
                    </Body>
                    <Right />
                  </Header>
                </Container>
            
  );
}
}

