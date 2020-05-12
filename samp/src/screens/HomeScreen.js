import React from 'react';
import { View, StyleSheet, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { Button, Text, Container, Header, Left, Body, Right, Icon, Title, Item } from 'native-base';
import CustomHeader from '../CustomHeader'
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      employeeId: '',
      data: [],
      userRole: ''
    };
  }

  //To display UserDetails:
  async componentDidMount() {
    let user = await AsyncStorage.getItem('email');
    this.setState({ email: user })
    const params = new URLSearchParams({

      userId: this.state.email

    })

    fetch(`http://103.79.223.60:8080/lockbox/core/v1/employee/detail?${params.toString()}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseUser) => {
        console.log(responseUser,"responseuser")
        console.log(responseUser.data.userRole,'userRole');
        this.setState({ userRole: responseUser.data.userRole })
        // AsyncStorage.setItem("userDetails", responseUser)
      })
    this.HomeDetails();
  }

  //To display all locations in Home page:
  HomeDetails = () => {
    const index = 0;
    const dataa = {
      "code": "",
      "employee": "",
      "location": "",
      "paginationRequest": {
        "pageNumber": 0,
        "pageSize": 50,
        "searchKey": "",
        "sortKey": "created_Date",
        "sortOrder": "asc"
      }
    }
    fetch('http://103.79.223.60:8080/lockbox/core/v1/device/filter', {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify(dataa),
    })

      .then((response) => response.json())
      .then((responseHome) => {
        this.setState({ data: responseHome.data.response })
        // console.log(responseHome.data, 'response')

      })
    // const params= new URLSearchParams({

    //   pageSize:24,
    //   pageNumber:0,
    //   sortOrder:"asc"

    // })
    //   fetch(`http://103.79.223.60:8080/lockbox/core/v1/location/all?${params.toString()}`,{
    //     method:'GET',
    //   })
    //   .then((response) => response.json())
    //         .then((responseHome) => { 
    //         this.setState({data:responseHome.data.response})
    //         console.log(responseHome,'response')
    //         // console.log(responseHome.data.response,"CONTENT");
    //         // this.setState({data:responseUser.data})
    //         })

  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} >
        <CustomHeader title="Locations" isHome={true} navigation={this.props.navigation} />
        <ScrollView >
          <View style={styles.wrapper}>
            {this.state.data.map((item) => (
              <View style={styles.wrapp1}>
                <Text style={styles.textStyle}>{item.deviceCode}</Text>
                <Text style={styles.textStyle2}>{item.locationDetail}, {item.employeeFullName}</Text>
                <View style={{ paddingTop: 5 }}>
                  <TouchableOpacity
                    style={styles.touchableopacityStyle}
                    onPress={() => this.props.navigation.navigate('GenerateKey', { location: item, user: this.state.userRole })}>
                    <Text style={styles.textStyle1}>Generate Key</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View >

    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapp1: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    margin: 19
  },
  touchableopacityStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#066DB3',
    width: 150,
    height: 30,
    borderRadius: 12,
    borderRadius: 25,
  },
  textStyle: {
    fontSize: 14,
    color: '#707070',
    fontWeight: 'bold',
    fontFamily: 'Quicksand',

  },
  textStyle1: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Quicksand'
  },
  textStyle2: {
    fontSize: 12,
    color: '#707070',
    fontFamily: 'Quicksand'
  }
});