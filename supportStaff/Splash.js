import React,{Component} from 'react';
import {
 StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
export default class Splash extends Component{  
render(){
  return(
    <View style={styles.wrapper}>
      <Image
       style={{height:120,width:180}}
       source={require('./src/Images/logo.png')}
       />
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
}
}
);

