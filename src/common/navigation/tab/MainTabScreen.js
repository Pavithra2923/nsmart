import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CustomerStackScreen, HomeStackScreen, ProfileStackScreen, SearchStackScreen, } from '../stack/RootStackScreen';
import { HOME_ROOT, PROFILE_ROOT, SEARCH_ROOT,  } from '../../utils/NavigationRoot';
import { colors } from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileScreen from '../../../domain/profile/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen({ navigation }) {


  return (
      <Tab.Navigator
        initialRouteName={HOME_ROOT}
        // activeColor={colors.defaultWhite}
        // barStyle={{ backgroundColor: '#17315c' }}
        barStyle={{backgroundColor: 'transparent', }}
        backBehavior="history"
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            tabBarLabel: HOME_ROOT,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={"black"} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: PROFILE_ROOT,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cash-plus" color={colors.textblack} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStackScreen}
          options={{
            tabBarLabel: SEARCH_ROOT,
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-search" size={26} color={colors.textblack} />
            ),
          }}
        />
      </Tab.Navigator>
  )
}
