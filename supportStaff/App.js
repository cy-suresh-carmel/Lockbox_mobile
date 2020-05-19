import React,{Component} from 'react';
import Navig from './Navig';
import Splash from './Splash';
export default class Main extends Component{
constructor(props){
super(props);
this.state={currentScreen:'Splash'};
setTimeout(()=>{
this.setState({currentScreen:'HomeScreen'})
}, 3000)
}
render(){
const { currentScreen } = this.state
let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Navig/>
return mainScreen

}
}