import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/common/navigation/drawer/DrawerContent';
import MainTabScreen from './src/common/navigation/tab/MainTabScreen';
import { LogStackScreen } from './src/common/navigation/stack/RootStackScreen';
import Load from './src/common/components/load';
import AsyncStorage from '@react-native-community/async-storage';
import { LOGIN } from './src/domain/session/actionTypes';
import { AppState, PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging'
import notifee, { AndroidImportance, EventType, AndroidStyle } from '@notifee/react-native';


export default function AppRoot() {

  const Drawer = createDrawerNavigator();
  const session = useSelector((state) => state.session);
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState()
  const dispatch = useDispatch()
  const [appState, setAppState] = useState(AppState.currentState);
  const navigationRef = React.createRef();

  useEffect(() => {
    async function fetchData() {
      const getToken = await AsyncStorage.getItem('userToken')
      const loggedInUser = await AsyncStorage.getItem('userData')
      const deviceToken = await messaging().getToken()
      dispatch({
        type: LOGIN,
        payload: loggedInUser,
      })
      setToken(getToken)
    }
    fetchData()
    reqPermission()
  }, [])


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onForeMessageReceived(remoteMessage)
    });
    return unsubscribe;
  }, []);


  const reqPermission = async () => {
    try {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      ]);
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };


  const onForeMessageReceived = async (message) => {
    if (message.data.notify_type == 'float_transferred_confirmed') {
      alert('FCM')
    }
  }


  const onBackMessageReceived = async (message) => {

    const channelId = await notifee.createChannel({
      id: 'RC Default',
      name: 'RC Channel',
      importance: AndroidImportance.HIGH,
      sound: 'sot',
      badge: false,
    });
    if (message.data.notify_type == 'float_transferred_confirmed') {
      await notifee.displayNotification({
        id: 'PaymentConfirmed',
        title: `TEST`,
        body: `TEST`,
        android: {
          channelId,
          importance: AndroidImportance.HIGH
        },
      });
    }

  }

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      await onBackMessageReceived(remoteMessage)
    })
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {(token || session.loggedIn) ?
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} navigationRef={navigationRef} />}>
          <Drawer.Screen name="MainTab" component={MainTabScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
        : <>
          <Load visible={loading} textContent='Loading...' />
          <LogStackScreen />

        </>
      }
    </NavigationContainer>
  )

}