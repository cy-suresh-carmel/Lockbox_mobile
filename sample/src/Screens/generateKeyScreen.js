import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
export default class homeScreen extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <Text style={styles.textStyle}>Device Id:AAFFE123</Text>
            <View style={styles.wrapp1}>
                <TextInput style={styles.textInputStyle}
                placeholder="Date and Time"
                />
            </View>
            <View style={styles.wrapp1}>
                <TextInput style={styles.textInputStyle}
                placeholder="Start Time"
                />
            </View>
            <View style={styles.wrapp1}>
                <TextInput style={styles.textInputStyle}
                placeholder="End Time"
                />
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
        color:'#E6E6E6',
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

    } 
});
