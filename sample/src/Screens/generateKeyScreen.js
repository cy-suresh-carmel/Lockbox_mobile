import React,{Component} from 'react';
import {StyleSheet,Picker,View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
export default class homeScreen extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <Text style={styles.textStyle}>Device Id:AAFFE123</Text>
            <View style={styles.wrapp1}>
                <TextInput style={styles.textInputStyle}
                placeholder="Date"
                />
            </View>
            <View style={styles.wrapp3}>
                <TextInput style={styles.textInputStyle}
                placeholder="Start Time"
                />
                <Picker >
                <Picker.Item label="1:00" value="1:00" />
                <Picker.Item label="2:00" value="2:00" />
                <Picker.Item label="3:00" value="3:00" />
                <Picker.Item label="4:00" value="4:00" />
                <Picker.Item label="5:00" value="5:00" />
                <Picker.Item label="6:00" value="6:00" />
                <Picker.Item label="7:00" value="7:00" />
                <Picker.Item label="8:00" value="8:00" />
                <Picker.Item label="9:00" value="9:00" />
                <Picker.Item label="10:00" value="10:00" />
                <Picker.Item label="11:00" value="11:00" />
                <Picker.Item label="12:00" value="12:00" />
                </Picker>
            </View>
            <View style={styles.wrapp3}>
                
                <TextInput style={styles.textInputStyle}
                placeholder="End Time"
                />
                <Picker>


                </Picker>
                
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

        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
      flex:1,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center'
    },
    textStyle:{
        fontFamily:'Quicksand',
        fontWeight:'bold',
        fontSize:20,
        color:'#707070'
    },
    wrapp1:{
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30

    },    
    textInputStyle:{
        height: 60,
        width:300,
        color:'#707070',
        borderWidth:.5,
        borderRadius:10,
        borderColor:'#E6E6E6',
        paddingLeft:10,
        fontWeight:'bold',
        fontSize:18
    },  
    touchableopacityStyle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#066DB3',
        width:280,
        height:50,
        borderRadius:12,
        borderRadius:25
    },
    text1Style:{
        color:'#F9F4F2',
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Quicksand'
    } , 
    wrapp2:{
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40

    } ,
    wrapp3:{
        justifyContent:'flex-start',
        backgroundColor:'#FFFFFF',
        paddingTop:30,flexDirection:'row',
        position:'relative'
    }
});