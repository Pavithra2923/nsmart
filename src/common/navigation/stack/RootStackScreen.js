import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_ROOT, LOGIN_ROOT, PROFILE_ROOT, SEARCH_ROOT, SETTINGS_ROOT } from '../../utils/NavigationRoot';
import HomeScreen from '../../../domain/home/HomeScreen';
import { HOME_HEAD, PROFILE_HEAD, SEARCH_HEAD, SETTINGS_HEAD } from '../../utils/NavigationHead';
import ProfileScreen from '../../../domain/profile/ProfileScreen';
import SearchScreen from '../../../domain/search/SearchScreen';
import SettingsScreen from '../../../domain/settings/SettingsScreen';
import Header from '../../components/Header';
import { FONT_FAMILY } from '../../utils/FontFamily';
import { colors } from '../../utils/Colors';
import LoginScreen from '../../../domain/session/LoginScreen';


const Stack = createStackNavigator();

const screenOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#17315c',
    },
    headerTintColor: colors.defaultWhite,
    headerTitleStyle: {
      fontFamily: FONT_FAMILY,
    },
    //headerTitleStyle: { alignSelf: 'center' },
  };

function option ( navigation, head, screen ,sales) {
  
    return {
      title: head,
      headerTitleStyle:{
        width:'100%',
        fontFamily:FONT_FAMILY,
        fontSize:head.length>23 ? 15 : 18
      },
      headerLeft: () => <Header screen={screen} navigation={navigation} />,
    };
  }

  export const LogStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={LOGIN_ROOT}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  
export const HomeStackScreen = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName={HOME_ROOT} screenOptions={screenOptions}>
            <Stack.Screen
                name={HOME_ROOT}
                component={HomeScreen}
             />
            <Stack.Screen
                name={PROFILE_ROOT}
                component={ProfileStackScreen}
                options={{headerShown:false}}
                 />
            <Stack.Screen
                name={SEARCH_ROOT}
                component={SearchStackScreen}
                options={{headerShown:false}}

          />
            <Stack.Screen
                name={SETTINGS_ROOT}
                component={SettingsStackScreen}
                options={{headerShown:false}}
                 />
        </Stack.Navigator>
    )
}

export const ProfileStackScreen = ({navigation})=>{
    return ( 
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={PROFILE_ROOT} component={ProfileScreen}  />
        </Stack.Navigator>
    )
}

export const SearchStackScreen = ({navigation})=>{
    return ( 
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={SEARCH_ROOT} component={SearchScreen}  />
        </Stack.Navigator>
    )
}

export const SettingsStackScreen = ({navigation})=>{
    return ( 
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={SETTINGS_ROOT} component={SettingsScreen}  />
        </Stack.Navigator>
    )
}