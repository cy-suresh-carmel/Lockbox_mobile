import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
export default class CustomHeader extends Component {
  render() {
    let {title}=this.props
    return (
     
        <Header span style={{height:300,backgroundColor:'#066DB3'}}>
          <Left>
          <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon style={{fontSize:50,marginTop:60,marginLeft:11}}
               name='menu' />
            </Button>
          </Left>
          <Body>
          <Title></Title>
          </Body>
          <Right />
        </Header>
      
    );
  }
}