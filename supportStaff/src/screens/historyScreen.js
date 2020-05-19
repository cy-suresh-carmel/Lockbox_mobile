import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';
import { Divider } from 'react-native-elements';
import Header from '../Header';
export default class historyScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="History" navigation={this.props.navigation} />
        <View style={{ margin: 10 }}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Location</Text>
            <Text style={styles.textStyle}>Date & Time</Text>
          </View>
          
          <Divider style={styles.DividerStyle} />
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Bell 6375 Dixie Rd</Text>
            <Text style={styles.textStyle1}>11-11-2019  12.17</Text>
          </View>
          <View style={{justifyContent:'flex-end',alignItems:'center',paddingLeft:70,paddingBottom:5}}>
            <Text style={styles.textStyle}>EST</Text>

          </View>
          <Divider style={styles.DividerStyle} />
        </View>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 15,
    paddingBottom: 10
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Quicksand',
    color: '#707070'
  },
  textStyle1: {
    fontSize: 16,
    fontFamily: 'Quicksand',
    color: '#707070',
    fontWeight: 'bold'
  },
  DividerStyle: {
    backgroundColor: '#707070'
  },
})
