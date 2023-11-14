import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/common/navigation/drawer/DrawerContent';
import MainTabScreen from './src/common/navigation/tab/MainTabScreen';
import { LogStackScreen } from './src/common/navigation/stack/RootStackScreen';
import Load from './src/common/components/load';
import AsyncStorage from '@react-native-community/async-storage';


export default function AppRoot() {
    const Drawer = createDrawerNavigator();
  const session = useSelector((state) => state.session);
  console.log('session.loggedIn :>> ', session.loggedIn);
  const [loading, setLoading] = useState(false)
  const [token,setToken] = useState()

  console.log('token :>> ', token,today);

useEffect(()=>{
  async function fetchData(){
    const getToken = await AsyncStorage.getItem('userToken')
    const loggedInUser = await AsyncStorage.getItem('userData')
    dispatch({
      type: LOGIN,
      payload: loggedInUser,
    })
    setToken(getToken)
  }
  fetchData()
},[])
    return (
      <NavigationContainer>
        {/* <LogStackScreen />  */}
        {(token || session.loggedIn) ?
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="MainTab" component={MainTabScreen} options={{ headerShown: false }} />
          </Drawer.Navigator>
          : <>
            <Load visible={loading} textContent='Loading...' />
            <LogStackScreen />

          </>
        }
        {/* } */}
      </NavigationContainer>
    )
  
}