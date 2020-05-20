import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FILTER_DEVICE,FILTER_KEY } from '../constants/ApiUrl';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     email: '',
    };
}
  //To display UserDetails:
   async componentDidMount() {
    let user =  await AsyncStorage.getItem('email');
    this.setState({ email: user })
   //console.log(this.state.email, "email console");
   this.HomeDetails();
  }

  HomeDetails = () => {
    const index = 0;
    const parameters = {
      "date": "2020-05-19 2:36:34",
      "deviceId": "",
      "employeeId": "6e9f58d8-01c0-4cb0-a6d3-5cfebd9fc999",
      "endTime": "",
      "id": "",
      "paginationRequest": {
        "pageNumber": 0,
        "pageSize": 10,
        "searchKey": "",
        "sortKey": "activated_on",
        "sortOrder": "desc"
      },
      "startTime": ""
    }
    fetch(FILTER_KEY, {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify(parameters),
    })

      .then((response) => response.json())
      .then((responseHome) => {
        //this.setState({ data: responseHome.data.response })
        console.log(responseHome, 'response from HomeScreen')
        
      })
   

  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#066DB3', height: 400, width: 400 }}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image style={{ height: 30, width: 30, margin: 25 }}
              source={require('../Images/menu1.png')} />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 40 }}>
            <Image style={{ height: 70, width: 50 }}
              source={require('../Images/location2.png')} />
            <Text style={{ color: '#ffff', fontSize: 20, fontFamily: 'Quicksand', fontWeight: 'bold', letterSpacing: 0.5, paddingTop: 10 }}>6375 Dixie Rd,Missisauga,on</Text>
            <Text style={{ color: '#ffff', fontSize: 20, fontFamily: 'Quicksand', fontWeight: 'bold', letterSpacing: 0.5 }}>belongs to : Bell Telecom</Text>
          </View>
        </View>
        
        <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:10,backgroundColor:'#ffff',borderRadius:20,position:'absolute'}}>
          <Text style={{color:'#707070',fontSize:16,letterSpacing:0.3,margin:20}}>Recieved Security code to access the lockBox between 11.00am to 12:00pm</Text>
          <Image style={{height:300,width:300}}
          source={require('../Images/closeLock.png')}/> 
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{ alignItems: 'center',justifyContent: 'center',backgroundColor: '#066DB3', width: 280,height: 50,borderRadius: 12,borderRadius: 25}} onPress={()=>this.props.navigation.navigate('unlockKey')}>
            <Text style={{color: '#ffff', fontSize: 20, fontFamily: 'Quicksand', fontWeight: 'bold', letterSpacing: 0.5 }}>Unlock Key</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingTop: 10

  }
})