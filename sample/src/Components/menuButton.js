import React,{Component} from 'react';
import {StyleSheet,View,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import {Ionicons} from 'react-native-vector-icons';
import Drawer from '../Drawer';
import { openDrawer } from 'react-navigation-drawer';
const menuButton = ({ navigation }) => {
    
        return(
         
                <Container>
                  <Header style={{backgroundColor:'#066DB3',height:100}}>
                    <Left>
                      <Button transparent>
                      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon style={{height:30,width:30}}
                         name='menu' 
                         />
                         </TouchableOpacity>
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

export default menuButton;