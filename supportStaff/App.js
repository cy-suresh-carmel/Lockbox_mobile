import React,{Component} from 'react';
import Navig from './Navig';
import Splash from './Splash';
import {fcmService} from './src/PushNotification/FCMService';
import {localNotificationService} from './src/PushNotification/LocalNotificationService';


export default class Main extends Component{
constructor(props){
super(props);
this.state={currentScreen:'Splash'};
setTimeout(()=>{
this.setState({currentScreen:'HomeScreen'})
}, 3000)
}

componentDidMount() {
    fcmService.registerAppWithFCM()
        fcmService.register(onRegister,  onNotification, onOpenNotification)
        localNotificationService.configure(onOpenNotification)

        function onRegister(token) {
            console.log("[App] onRegister:", token)
        }
        function onNotification(notify){
            console.log("[App] onNotification:",notify)
            const options = {
                soundName: 'default',
                playSound: true
            }
            localNotificationService.showNotification(
                0,
                notify.title,
                notify.body,
                notify,
                options
            )
        }
        function onOpenNotification(notify){
            console.log("[App] onOpenNotification:",notify)
            alert("Open Notification:"+ notify.body)
        }
        return () => {
            console.log("[App] unRegister")
            fcmService.unRegister()
            localNotificationService.unregister()
        }
}
render(){
const { currentScreen } = this.state
let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Navig/>
return mainScreen

}
}