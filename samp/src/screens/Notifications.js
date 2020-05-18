import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import {IMAGE} from '../Image';
import CustomHeader from '../CustomHeader.js';
export default class Notifications extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader title="Notifications" isHome={false} navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.textStyle}>Support staff Brain K did not put the access card back to the device</Text>
          <View style={styles.viewstyle}>
            <Image style={styles.ImageStyle}
              source={IMAGE.LOCATION_ICON} />
            <Text style={styles.dateTime}>6375 Dixie Rd,Missisauga</Text>
          </View>
          <View style={styles.viewstyle1}>
            <Image style={styles.ImageStyle}
              source={IMAGE.CALENDER_ICON} />
            <Text style={styles.dateTime}>12/03/2020</Text>
            <Image style={styles.ImageStyle}
              source={IMAGE.CLOCK_ICON} />
            <Text style={styles.dateTime}>10:10am EST</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 17
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Quicksand',
    color: '#707070',
    fontWeight: 'bold'
  },
  viewstyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  viewstyle1: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5
  },
  dateTime: {
    paddingLeft: 5,
    fontSize: 12,
    color: '#707070',
    paddingTop: 2,
    paddingRight: 5
  },
  ImageStyle:{
    height: 20,
     width: 18 
  }

});

