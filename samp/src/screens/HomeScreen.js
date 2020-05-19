import React from 'react';
import { View, StyleSheet, TouchableOpacity, AsyncStorage, ScrollView,SafeAreaView, FlatList, Dimensions } from 'react-native';
import { Button, Text, Container, Header, Left, Body, Right, Icon, Title, Item } from 'native-base';
import {USER_DETAILS,FILTER_DEVICE} from '../constants/ApiUrl';
import CustomHeader from '../CustomHeader';
const { width } = Dimensions.get('window');
const contentPerPage = 5;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      employeeId: '',
      data: [],
      userRole: '',
      pagination: [],
      selected: 0
    };
}

  //To display UserDetails:
  async componentDidMount() {
    let user = await AsyncStorage.getItem('email');
    this.setState({ email: user })
    // const params = new URLSearchParams({

    //   userId: this.state.email

    // })

    let url=USER_DETAILS+this.state.email
    fetch(url, {
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
    fetch(FILTER_DEVICE, {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify(dataa),
    })

      .then((response) => response.json())
      .then((responseHome) => {
        this.setState({ data: responseHome.data.response })
        console.log(responseHome, 'response')
        let count =
          parseInt(responseHome.data.response.length / contentPerPage) +
          (responseHome.data.response.length % contentPerPage > 0);
        let pagination = [];
          //console.log(responseHome.data.response,"dat----->")
        for (let i = 0; i < count; i++) {
          pagination.push(i);
        }
          this.setState({ pagination });
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
    const { pagination, selected } = this.state;
    //console.log(this.state.data.,"-----> length console");
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }} >
        <CustomHeader title="Locations" isHome={true} navigation={this.props.navigation} 
        dataCount={this.state.data.length} />
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={width}
            snapToAlignment={"center"}
            onMomentumScrollEnd={(event) => this.setState({ selected: Math.round(event.nativeEvent.contentOffset.x / width) })}
          >
            {pagination.map(item => (<FlatList
              style={{ paddingTop: 10, width: width }}
              keyExtractor={(item, index) => item + index}
              data={this.state.data.slice(item * contentPerPage,
                this.state.data.length > item * contentPerPage
                  ? item * contentPerPage + contentPerPage
                  : item * contentPerPage + (this.state.data.length % contentPerPage))}
                renderItem={({ item }) => (
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
              )}
            />))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 35 }}>
          {pagination.map(item => (<View
            style={{ width: 8, height: 8, margin: 5, borderRadius: 10, backgroundColor: selected == item ? "#066DB3" : "gray" }}>
          </View>))}
        </View>
      </SafeAreaView>
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