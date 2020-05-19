import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet}from 'react-native';
import Header from '../Header';
export default class Notifications extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
            <Header  title="Notifications" navigation={this.props.navigation}/>
            <View style={styles.container}>
          <Text style={styles.textStyle}>Recieved Unlock code for bell 6375 Dixie</Text>
          <Text style={styles.dateTime}>10:10am EST</Text>
         
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
    margin: 10
  },
  textStyle: {
    fontSize: 16,
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
    paddingLeft: 2,
    fontSize: 12,
    color: '#707070',
    paddingTop: 5,
    paddingRight:5
  },
  ImageStyle:{
    height: 20,
     width: 18 
  }

});

