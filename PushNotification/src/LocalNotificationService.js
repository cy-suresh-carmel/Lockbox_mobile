import PushNotification from "react-native-push-notification";

class LocalNotificationService {
    configure = (onOpenNotification) => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[LocalNotificationService] onRegister:",token);
            },
            onNotification: function (notification) {
                console.log("[LocalnotificationService] onNotification:", notification);
                if(!notification?.data) {
                    return
                }
                notification.userInteraction = true;
                onOpenNotification(notification.data);
            },

            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            popInitialNotification: true,
            requestpermission: true,
        })
    }

    unregister = () => {
        PushNotification.unregister()
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title,message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false // BOOLEAN: if the notification was opened by the user from the notification
        });
    }

    buildAndroidNotification = (id,title,message,data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_notification",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || true,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data:data,
        }
    }

    cancelAllLocalNotifications = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    removeDeliveredNotificationByID = (notificationId) => {
        console.log("[LocalnotificationService] removeDeliveredNotificationByID: ", notificationId);
        PushNotification.cancelLocalNotifications({id: `${notificationId}`})
    }
}

export const localNotificationService = new LocalNotificationService()