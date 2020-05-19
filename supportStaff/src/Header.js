import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';
export default class HeaderIcon extends Component {
  render() {
    let {title}=this.props;
    return (
        
        <Header style={{height:100,backgroundColor:'#066DB3'}}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon style={{fontSize:40}}
               name='arrow-back' />
            </Button>  
          </Left>
          <Body>
          <Title style={{fontSize:20,fontFamily:'Quicksand',letterSpacing:.5,lineHeight:25}}>{title}</Title>
          </Body>
          <Right>
            <Title></Title>
          </Right>
        </Header>
     
    );
  }
}