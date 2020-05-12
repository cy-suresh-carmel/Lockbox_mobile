import React from 'react';
import { View, StyleSheet, TextInput, Picker, TouchableOpacity } from 'react-native';
import { Button, Text, Container, Header, Left, Body, Right, Title } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
// import CustomHeader from '../CustomHeader';
export default class generateKeyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({

      isDateTimePickerVisible: false,
      selecteddate: ''
    })
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (pickeddate) => {
    day = pickeddate.getDate();
    month = pickeddate.getMonth();
    year = pickeddate.getFullYear();
    console.log('A date has been picked: ' + day + '-' + month + '-' + year);
    exdate = day + '-' + month + '-' + year
    this._hideDateTimePicker();
  };

  onFocus = () => {
    this._handleDatePicked();
  }

  // keyAction=()=>{
  //     fetch(`http://103.79.223.60:8080/lockbox/core/v1/device/key/generator`,{
  //         method:'POST',
  //       })
  //       .then((response) => response.json())
  //             .then((responseKey) => {
  //             console.log(responseKey,"data")
  //             this.setState({data:responseKey.data.response})
  //             console.log(responseHome.data.response,"CONTENT");
  //               // this.setState({data:responseUser.data})
  //             })

  //       }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <CustomHeader title='Generate Key'navigation={this.props.navigation}/> */}
        <View style={styles.wrapper}>
          <Text style={styles.textStyle}>Device Id:</Text>
          <View style={styles.wrapp3}>
            <TextInput style={styles.textInputStyle}
              placeholder="Date"
              onFocus={() => this._showDateTimePicker()}
              value={this.state.selecteddate}
            />
            {/* //--------------------------------------DateTimePicker */}
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode={'date'}
              datePickerModeAndroid={'spinner'}

            />
            {/* //-------------------------------------- */}
          </View>

          <View style={styles.wrapp3}>
            <TextInput style={styles.textInputStyle}
              placeholder="Start Time"
              onFocus={() => this._showDateTimePicker()}
              value={this.state.selecteddate}
            />
            {/* //--------------------------------------DateTimePicker */}
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode={'time'}
              

            />
            {/* //-------------------------------------- */}
          </View>
          
          <View style={styles.wrapp3}>

            <TextInput style={styles.textInputStyle}
              placeholder="End Time"
              onFocus={() => this._showDateTimePicker()}
              value={this.state.selecteddate}
            />
            {/* //--------------------------------------DateTimePicker */}
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              mode={'time'}
              datePickerModeAndroid={'spinner'}

            />
            {/* //-------------------------------------- */}

          </View>
          <View style={styles.wrapp1}>
            <TextInput style={styles.textInputStyle}
              placeholder="Support Staff"
            />
          </View>
          <View style={styles.wrapp2}>
            <TouchableOpacity
              style={styles.touchableopacityStyle}>
              <Text style={styles.text1Style}
                onPress={() => this.props.navigation.navigate('Home')}>Generate</Text>
            </TouchableOpacity>
          </View>







        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#707070'
  },
  wrapp1: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30

  },
  textInputStyle: {
    height: 40,
    width: 300,
    color: '#707070',
    borderWidth: .5,
    borderRadius: 10,
    borderColor: '#E6E6E6',
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  touchableopacityStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#066DB3',
    width: 280,
    height: 50,
    borderRadius: 12,
    borderRadius: 25
  },
  text1Style: {
    color: '#F9F4F2',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Quicksand'
  },
  wrapp2: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40

  },
  wrapp3: {
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingTop: 30, flexDirection: 'row',
    position: 'relative'
  },
  placeholder: {
    fontSize: 18,
    textAlign: 'left'
  }
});