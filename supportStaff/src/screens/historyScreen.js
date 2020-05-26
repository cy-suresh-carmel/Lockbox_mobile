import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,AsyncStorage } from 'react-native';
import { List, ListItem } from 'native-base';
import { Divider } from 'react-native-elements';
import Header from '../Header';
import { FILTER_KEY, USER_DETAILS,HISTORY_KEY } from '../constants/ApiUrl';
export default class historyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      address: '',
      employeeId: '',
      startTime: '',
      endTime: '',
      password: '',
      date: '2020-05-19 2:36:34',
      action: "",
      description: "",
      device: "",
      employee: "",
      employeeType: "",
      fromDate: "",
      location: "",
      module: "",
      supportStaff:[],
      empId:''


    };
  }
  async componentDidMount() {
    console.log("Component did mount inside")
     let user = await AsyncStorage.getItem('email');
    this.setState({ email: user })
      console.log(this.state.email, "email console");
       let url=USER_DETAILS+this.state.email
    fetch(url, {
      method: 'GET',

    })
      .then((response) => response.json())
      .then((responseUser) => {
         console.log(responseUser, "data J")
         this.setState({empId:responseUser.data.employeeId})
         console.log(this.state.empId,"employeeId")
         })


    this.HistoryDetails();
  }

  HistoryDetails = () => {
    console.log("home")
    const index = 0;
    const parameters = {
      "date": "2020-05-19 2:36:34",
      "deviceId": "",
      "employeeId": "6e9f58d8-01c0-4cb0-a6d3-5cfebd9fc999",
      "endTime": "",
      "id": "",
      "paginationRequest": {
        "pageNumber": 0,
        "pageSize": 20,
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
        this.setState({ supportStaff: responseHome.data.response });
        //this.setState({ startTime: responseHome.data.response[0].startTime });
        console.log(responseHome.data.response, "startTime")
        //console.log(responseHome.data.response[0].address, "address");
        console.log(responseHome, "response from HomeScreen")

      })
  }


render() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="History" navigation={this.props.navigation} />
      <ScrollView>
      <View style={{ margin: 10 }}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Location</Text>
          <Text style={styles.textStyle}>Date & Time</Text>
        </View>

        <Divider style={styles.DividerStyle} />

        {this.state.supportStaff.map((item)=>(
        <View>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle1}>{item.address}</Text>
          <Text style={styles.textStyle1}>{item.endTime}</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 80, paddingBottom: 5 }}>
          <Text style={styles.textStyle}>EST</Text>

        </View>
        <Divider style={styles.DividerStyle} />
        </View>
        ))}
       
      </View>
      </ScrollView>



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
