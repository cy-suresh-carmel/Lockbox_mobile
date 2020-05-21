import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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


    };
  }
  componentDidMount = () => {
    console.log("Component did mount inside")
    this.HomeDetails();
  }

  HomeDetails = () => {
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
        this.setState({ address: responseHome.data.response[0].address });
        this.setState({ startTime: responseHome.data.response[0].startTime });
        console.log(responseHome.data.response[0].startTime, "startTime")
        console.log(responseHome.data.response[0].address, "address");
        console.log(responseHome, "response from HomeScreen")

      })
  }



//   historyAction = () => {
//     const params = {
//         {
//       "action": "",
//       "description": "",
//       "device": "",
//       "employee": "",
//       "employeeType": "",
//       "fromDate": "",
//       "location": "",
//       "module": "",
//       "paginationRequest": {
//       "pageNumber": 0,
//       "pageSize": 10,
//       "searchKey": "",
//       "sortKey": "activated_on",
//       "sortOrder": ""
//       },
//       "toDate": ""
//     }
//     fetch(HISTORY_KEY){
//       method: 'POST',
//       headers: {
//         "content-type": 'application/json',
//       },
//       body: JSON.stringify(params),
//     })

//       .then((response) => response.json())
//       .then((responseHistory) => {
//         console.log(responseHistory, "response from History")
//         this.setState({ data: responseHome.data.response});


//       })
//   }

// }

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
          <Text style={styles.textStyle1}>{this.state.address}</Text>
          <Text style={styles.textStyle1}>{this.state.date}</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 80, paddingBottom: 5 }}>
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
