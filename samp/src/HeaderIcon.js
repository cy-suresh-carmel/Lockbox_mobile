import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIcon extends Component {
  render() {
    return (
      
        <Header style={{height:100}}>
          <Left>
          <Button transparent>
              <Icon style={{fontSize:35}}
              name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Locations</Title>
          </Body>
          <Right>
          </Right>
        </Header>
     
    );
  }
}