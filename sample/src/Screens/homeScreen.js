import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,Button,TouchableOpacity} from 'react-native';
import {Header}from 'react-native-elements';
import Menu from '../Components/menuButton';

export default class homeScreen extends Component{
    
    render(){
        return(
            <View style={styles.wrapper}>
                <Menu/>
                <View style={styles.wrapp1}>
                    <Text style={styles.textStyle}>Bell support center</Text>
                    <Text style={styles.textStyle2}>213 Dixie Rd,Missisauga,On</Text>
                    <View style={{paddingTop:5}}>
                    <TouchableOpacity
                    style={styles.touchableopacityStyle}
               onPress={() => this.props.navigation.navigate('Generatekey')}>
               <Text style={styles.textStyle1}>Generate Key</Text>
               </TouchableOpacity>
               </View>
                </View>
                </View>
          
        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
      flex:1,
      backgroundColor:'#FFFFFF',
    },
    wrapp1:{
        flex:5,
        backgroundColor:'#FFFFFF',
        justifyContent:'flex-start',
        margin:19
    },
    touchableopacityStyle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#066DB3',
        width:150,
        height:30,
        borderRadius:12,
        borderRadius:25,
    },
    textStyle: {
        fontSize:14,
        color:'#707070',
        fontWeight:'bold',
        fontFamily:'Quicksand',
        
    },
    textStyle1: {
        fontSize:12,
        color:'#FFFFFF',
        fontWeight:'bold',
        fontFamily:'Quicksand'
    },
    textStyle2: {
        fontSize:12,
        color:'#707070',
        
        fontFamily:'Quicksand'
    }
});