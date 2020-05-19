import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,Image}from 'react-native';
import ProfileHeader from '../ProfileHeader';
export default class ProfileScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
               <ProfileHeader title="Profile" navigation={this.props.navigation}/>
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 400 }}>
          <Image source={require('../Images/menu2.png')}
            style={[{ height: 130, width: 130 }]} />
          <Text style={{ fontSize: 20, color: '#707070', fontWeight: 'bold' }}>Jeff Tom</Text>
          <Text style={{ fontSize: 16, color: '#707070' }}>jeff@yahoo.com</Text>
          <Text style={{ fontSize: 16, color: '#707070' }}>Bell Support Services Inc.</Text>
          <View>
            <TouchableOpacity
              style={styles.touchableopacityStyle}
               onPress={()=>this.props.navigation.navigate('auth')}>
              <Text style={styles.textStyle1}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          {/* <AlertPro
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
          /> */}
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