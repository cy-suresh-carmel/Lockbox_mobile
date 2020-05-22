import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FILTER_DEVICE,FILTER_KEY, USER_DETAILS } from '../constants/ApiUrl';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     midView: true,
     email: '',
     address: '',
     startTime: '',
     endTime: '',
     deviceCode: '',
     businessUserName: ''
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
        this.setState({ address: responseHome.data.response[0].address});
        this.setState({ startTime: responseHome.data.response[0].startTime});
        this.setState({ endTime: responseHome.data.response[0].endTime});
        this.setState({deviceCode: responseHome.data.response[0].deviceCode})
        //console.log(this.state.deviceCode,"deviceCode from HomeScreen");
      });

  const filterDeviceParameters = {
    "code": "PTF 86 U8T4",
    "employee": "",
    "location": "",
    "paginationRequest": {
      "pageNumber": 0,
      "pageSize": 10,
      "searchKey": "",
      "sortKey": "",
      "sortOrder": "asc"
    }
  }
  fetch(FILTER_DEVICE, {
    method: 'POST',
    headers: {
      "content-type": 'application/json',
    },
    body: JSON.stringify(filterDeviceParameters),
  })

    .then((response) => response.json())
    .then((responseHome) => {
      this.setState({ businessUserName: responseHome.data.response[0].employeeFullName })
      //console.log(this.state.businessUserName, 'businessUserName filter device response')
      
    })

  }


  
  onUnlock = () => {
    this.setState({
      midView: !this.state.midView
    })
  }
  onLock=()=>{
    this.setState({
      midView: this.state.midView
    })
  }


  render() {
    return (
    
      <View style={styles.container}>
        <View style={styles.viewStyle1}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image style={{ height: 30, width: 30, margin: 30 }}
              source={require('../Images/menu1.png')} />
          </TouchableOpacity>
          <View style={styles.viewStyle2}>
            <Image style={{ height: 70, width: 50 }}
              source={require('../Images/location2.png')} />
            <Text style={styles.textStyle1}>{this.state.address}</Text>
              <Text style={styles.textStyle2}>belongs to : {this.state.businessUserName}</Text>
          </View>
          <View>

            {this.state.midView ? (
              <View>
                <View style={styles.boxstyle}>
                  <Text style={styles.textStyle3}>Recieved Security code to access the lockBox between {this.state.startTime} to {this.state.endTime}</Text>
                  <Image style={{ height: 210, width: 300 }}
                    source={require('../Images/closeLock.png')} />
                </View>
                <View style={styles.touchableView}>
                  <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={() => this.onUnlock()}>
                    <Text style={styles.textStyle4}>Open LockBox</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
                <View>
                  <View style={styles.boxstyle}>
                    <Text style={styles.textStyle3}>Recieved Security code to access the lockBox between 11.00am to 12:00pm</Text>
                    <Image style={{ height: 210, width: 300 }}
                      source={require('../Images/openLock.png')} />
                  </View>
                  <View style={styles.touchableView}>
                    <TouchableOpacity
                      style={styles.touchableOpacityStyle}
                      onPress={() => this.onlock()}>
                      <Text style={styles.textStyle4}>Return Key and unLock</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewStyle1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#066DB3',
    height: 400
  },
  viewStyle2: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40,
    paddingBottom: 70,
    
  },
  textStyle1: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingTop: 10
  },
  textStyle2: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  boxstyle: {
    flex:1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    backgroundColor: '#ffff',
    borderRadius: 20,
    position: 'absolute',
    paddingBottom: 20
  },
  textStyle3: {
    color: '#707070',
    fontSize: 14,
    letterSpacing: 0.3,
    margin: 15,
    paddingBottom:10
  },
  touchableView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 70,
    paddingTop:100
    
 
  },
  touchableOpacityStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#066DB3',
    width: 210,
    height: 45,
    borderRadius: 12,
    borderRadius: 25
  },
  textStyle4: {
    color: '#ffff',
    fontSize: 14,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    letterSpacing: 0.5
  }


})