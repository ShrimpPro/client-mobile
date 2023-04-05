import { useState, useEffect, useRef } from "react";
import { Text, View, Platform, StyleSheet, Button } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import axios from 'axios';
import { baseUrl } from "../config/connection";
import * as SecureStore from "expo-secure-store";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    // const { status: existingStatus } =
    //   await Notifications.getPermissionsAsync();
    // let finalStatus = existingStatus;
    // console.log(existingStatus);
    // if (existingStatus !== "granted") {
    //   console.log('<<<<< before status');
    //   const { status } = await Notifications.requestPermissionsAsync();
    //   console.log(status, '<<<<< status');
    //   finalStatus = status;
    // }
    // if (finalStatus !== "granted") {
    //   console.log("Not granted");
    //   alert("Failed to get push token for push notification!");
    //   return;
    // }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token, "<<< token");
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default function PushNotification() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    async function run() {
      // console.log(expoPushToken, "<<< expo");
      const access_token = await SecureStore.getItemAsync("access_token");
      if (expoPushToken) {
        axios
          .patch(`${baseUrl}users/expo`, { token: expoPushToken }, {
            headers: { access_token }
          })
          // .then(({ data }) => console.log(data, "<<< data"))
          .catch((err) => console.log(err, "<<< error"));
      }
    }

    run();
  }, [expoPushToken]);
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});