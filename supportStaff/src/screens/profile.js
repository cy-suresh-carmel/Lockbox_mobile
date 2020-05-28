import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,Image,AsyncStorage}from 'react-native';
import AlertPro from 'react-native-alert-pro';
import ProfileHeader from '../ProfileHeader';
import {USER_DETAILS} from '../constants/ApiUrl';
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      data: [],
      addressDetail: '',
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
         console.log(responseUser, "data")
        this.setState({ data: responseUser.data })
        console.log(responseUser.data,"data4")
        AsyncStorage.setItem("userDetails", responseUser)
        console.log(this.state.data.addressResponse.addressDetail,"detail")
        this.setState({ addressDetail: this.state.data.addressResponse.addressDetail })
      })
  }


    render() {
      return (
        <View style={{ flex: 1 }}>
               <ProfileHeader title="Profile" navigation={this.props.navigation}/>
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 400 }}>
          <Image source={require('../Images/menu2.png')}
            style={[{ height: 130, width: 130 }]} />
          <Text style={{ fontSize: 20, color: '#707070', fontWeight: 'bold' }}>{this.state.data.firstName} {this.state.data.lastName}</Text>
          <Text style={{ fontSize: 16, color: '#707070' }}>{this.state.addressDetail}</Text>
          <Text style={{ fontSize: 16, color: '#707070' }}>{this.state.data.email}</Text>
          <View>
            <TouchableOpacity
              style={styles.touchableopacityStyle}
              onPress={() => this.AlertPro.open()}>
              {/* // onPress={()=>this.props.navigation.navigate('auth')}> */}
              <Text style={styles.textStyle1}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <AlertPro
            ref={ref => {
              this.AlertPro = ref;
            }}
            onConfirm={() => this.props.navigation.navigate('auth')}
            onCancel={() => this.AlertPro.close()}
            title="Sign Out?"
            message="Are you sure you want to Sign out?"
            textConfirm="Sign Out"
            textCancel="Cancel"
            customStyles={{
              mask: {
                backgroundColor: "transparent"
              },
              container: {
                borderWidth: 1,
                borderColor: "transparent",
                shadowColor: "#000000",
                shadowOpacity: 0.1,
                shadowRadius: 10
              },
              buttonCancel: {
                backgroundColor: "#4da6ff"
              },
              buttonConfirm: {
                backgroundColor: "#ffa31a"
              }
            }}
          />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  touchableopacityStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#066DB3',
    width: 280,
    height: 50,
    borderRadius: 12,
    borderRadius: 25,

  },
  textStyle1: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Quicksand'
  },
  title: {
    fontSize: 20,
    marginTop: 120
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginBottom: 15
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});