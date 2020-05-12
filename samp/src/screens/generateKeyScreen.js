import React from 'react';
import { View, StyleSheet, TextInput, Picker, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Text, Container, Header, Left, Body, Right, Title } from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker';
import CustomHeader from '../CustomHeader';

export default class generateKeyScreen extends React.Component {
    constructor(props) {
        super(props)
        //set value in state for initial date
        this.state = {
            date: "",
            time: "",
            startTime: "",
            endTime: "",
            id: '',
            flag: false,
            employee: 'ath',
            emp: this.props.navigation.state.params.emp,
            employeeId: this.props.navigation.state.params.location.employeeId,
            deviceId: this.props.navigation.state.params.location.deviceId,
            locationId: this.props.navigation.state.params.location.locationId,
            activatedOn: this.props.navigation.state.params.location.activatedOn,
            userRole: this.props.navigation.state.params.user,
            // employeeFullName: this.props.navigation.state.params.location.employeeFullName,
            selecteddate: '',
            selectedtime: '',
            setDatePickerVisibility: false,
            isDatePickerVisible: false,
            isLoading: true,
            PickerValueHolder: '',
            pickerName: [],
            supportStaff:[]
        }
    }
    showStartDatePicker = () => {
        console.log("start date picker selected")
        console.log(this.state.flag, "show start date picker flag")
        this.setState({ isDatePickerVisible: true, flag: false });

    }

    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    }
    showEndDatePicker = () => {
        console.log("end date picker selected")
        console.log(this.state.flag, "show end date picker flag")
        this.setState({ isDatePickerVisible: true, flag: true });
    }

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    }
    // hideStartDatePicker = () =>{
    //     this.setState({ isDatePickerVisible: false });
    // }

    handleConfirm = (date) => {
        console.log(this.state.flag, "inside handle function")
        //    console.log("inside handle confirm")
        // let Hours = (new Date(date)).getHours();
        const date1 = new Date(date);
        // var sTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const sTime = date1.toTimeString().split(' ')[0].split(':');
        if (this.state.flag) {
            this.setState({ endTime: sTime[0] + ':' + sTime[1], isDatePickerVisible: false, flag: false })
            // console.log(this.state.flag,"flag inside end time")
        }
        else {
            this.setState({ startTime: sTime[0] + ':' + sTime[1], isDatePickerVisible: false, flag: true })
            // this.hideStartDatePicker();
            // console.log(this.state.startTime,"startTime")
        }
        // this.setState({ startTime: sTime[0] + ':' + sTime[1],isDatePickerVisible:false })
        // console.log(sTime[0] + ':' + sTime[1])

        // console.log("A date has been picked: ");
        // console.log(this.state.startTime,"starttime1")
        // this.hideDatePicker();
    };

    updateUser = (user) => {
        this.setState({ employee: user })
    }

    componentDidMount = () => {
        // console.log(this.props.navigation.state.params.user,"user inside generate")
        const params = new URLSearchParams({

            pageSize: 14,
            pageNumber: 0,
            sortOrder: 'asc',
            role:'USER_ROLE_SUPPORT_USER'
            // role: this.state.userRole

        })
        fetch(`http://103.79.223.60:8080/lockbox/core/v1/employee/all?${params.toString()}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseEmployee) => {
                // this.setState({ data: responseHome.data.response })
                // console.log(responseEmployee.data.response, 'response')
                // console.log(responseHome.data.response,"CONTENT");
                this.setState({ supportStaff: responseEmployee.data.response })
                console.log(this.state.supportStaff, "pickerName")
            })


    }

    keyAction = () => {
        console.log('insideaction')
        console.log(this.state.deviceId, "deviceId")
        console.log(this.state.date, "date")
        console.log(this.state.startTime, "start time")
        console.log(this.state.endTime, "end time")
        console.log(this.state.employee, "picker value")

        const data = {

            date: this.state.date,
            deviceId: this.state.deviceId,
            employeeId: this.state.employeeId,
            endTime: "12:00:00",
            id: "",
            startTime: "12:00:00"

        }
        fetch('http://103.79.223.60:8080/lockbox/core/v1/device/key/generator', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((responseKey) => {
                console.log(responseKey, "data1111")
                // this.setState({data:responseKey.data.response})
                // console.log(responseHome.data.response,"CONTENT");
                // this.setState({data:responseUser.data})
            })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title='Generate Key' navigation={this.props.navigation} />
                <View style={styles.wrapper}>
                    <Text style={styles.textStyle}>Device Id:  {this.state.deviceId}</Text>
                    <View style={styles.wrapp3}>
                        <DatePicker
                            style={{ width: 300, height: 40 }}
                            date={this.state.date} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="Date"
                            format="YYYY-MM-DD"
                            minDate="2019-01-01"
                            maxDate="2030-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            // onFocus={() => this.showDatePicker()}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                placeholderText: {
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    color: '#707070',
                                    opacity: .7,
                                    left: 0,
                                    paddingRight: 250
                                },
                                dateInput: {
                                    borderWidth: .5,
                                    borderRadius: 10,
                                    borderColor: '#E6E6E6',

                                },
                                dateText: {
                                    fontSize: 18,
                                    color: '#b9b9b9',
                                    left: 0,
                                    paddingRight: 200,
                                    fontFamily: 'bold'
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                    <View style={styles.wrapp3}>
                        <TouchableOpacity>
                        <TextInput style={styles.textInputStyle}
                            placeholder="Start Time"
                            onFocus={this.showStartDatePicker}
                            value={this.state.startTime}
                        // onChange={(time) => { this.setState({ time: time }) }}
                        />
                        
                        </TouchableOpacity>
                        <DateTimePickerModal
                            style={{ width: 300, height: 40 }}
                            isVisible={this.state.isDatePickerVisible}
                            mode="time"
                            placeholder="Start Time"
                            format="hh:mm:ss"
                            // onFocus={() => this.showStartDatePicker()}
                            onConfirm={this.handleConfirm}
                            onCancel={this.hideDatePicker}
                            customStyles={{

                                placeholderText: {
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    color: '#707070',
                                    opacity: .2,
                                    left: 0,
                                    paddingRight: 250
                                },
                                dateInput: {
                                    borderWidth: .5,
                                    borderRadius: 10,
                                    borderColor: '#E6E6E6'
                                }
                            }}
                        />
                    </View>
                    <View style={styles.wrapp3}>
                        <TextInput style={styles.textInputStyle}
                            placeholder="End Time"
                            onFocus={this.showEndDatePicker}
                            value={this.state.endTime}
                        // onChange={(time) => { this.setState({ time: time }) }}
                        />
                        
                        <DateTimePickerModal
                            style={{ width: 300, height: 40 }}
                            isVisible={this.state.isDatePickerVisible}
                            mode="time"
                            placeholder="End Time"
                            // onPress={() => this.showEndDatePicker()}
                            onConfirm={this.handleConfirm}
                            onCancel={this.hideDatePicker}
                            customStyles={{

                                placeholderText: {
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    color: '#707070',
                                    opacity: .2,
                                    left: 0,
                                    paddingRight: 250
                                },
                                dateInput: {
                                    borderWidth: .5,
                                    borderRadius: 10,
                                    borderColor: '#E6E6E6'
                                }
                            }}
                        />
                    </View>
                    <View style={styles.wrapp3}>
                        <Picker style={{ height: 40, width: 300, borderWidth: 5, borderRadius: 10, color: '#707070', fontFamily: 'QuickSand', fontSize: 18, fontWeight: 'bold' }}
                            selectedValue={this.state.employee}
                            onValueChange={this.updateUser}>
                            {this.state.supportStaff.map((item) => (
                                <Picker.Item label={item.firstName} value={item.employeeId} />
                            ))}
                        </Picker >
                    </View>
                    <View style={styles.wrapp2}>
                        <TouchableOpacity
                            style={styles.touchableopacityStyle}>
                            <Text style={styles.text1Style}
                                onPress={this.keyAction}>Generate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
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
        fontSize: 13.3,
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
        paddingTop: 30,
        flexDirection: 'row',

    },
    placeholder: {
        fontSize: 18,
        textAlign: 'left'
    }
});