import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../utils/Colors.js';
import { LOGOUT } from '../../../domain/session/actionTypes.js';
// import {  CREATE_PROFILE, HOME_ROOT, INITITATE_TRANSACTION_ROOT, PROFILE_ROOT, SEARCH_ROOT, TRANSACTION_ROOT } from '../../utils/NavigationRoot'
import { CREATE_PROFILE, CASH_MANAGEMENT_ROOT, HOME_ROOT, INITITATE_TRANSACTION_ROOT, PROFILE_ROOT, SEARCH_ROOT, TRANSACTION_ROOT, SETTINGS_ROOT } from '../../utils/NavigationRoot'
import { FONT_FAMILY, FONT_FAMILY_BOLD, FONT_FAMILY_MEDIUM } from '../../utils/FontFamily.js';
import { DEFAULT_IMAGE } from '../../utils/Images.js';
import { DrawerActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../domain/session/actions.js';
// import AsyncStorage from '@react-native-community/async-storage';
// import { logout } from '../../../domain/session/actions.js';
// import { DrawerActions } from '@react-navigation/native';
// import { lt } from '../../utils/CommonActions.js';

export default function DrawerContent(props) {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <Image
                        source={DEFAULT_IMAGE} style={{ width: "20%" }}
                    />
                    <View style={styles.userNameSection}>
                        <Text allowFontScaling={false} style={styles.title}>Unknown</Text>
                        {/* <Text style={styles.subTitle}>Customers</Text> */}
                    </View>
                </View>
                <DrawerItem
                    icon={({ size }) => (
                        <Icon name="home" color={colors.textblack} size={size} />
                    )}
                    label={() => (
                        <Text allowFontScaling={false} style={styles.labelStyle}>Home</Text>
                    )}
                    onPress={() => {
                        props.navigation.navigate("HomeStack", { screen: HOME_ROOT });
                    }}
                />


                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons name="account-search" color={colors.textblack} size={size} />
                    )}
                    label={() => (
                        <Text allowFontScaling={false} style={styles.labelStyle}>
                            Search
                        </Text>
                    )}
                    onPress={() => {
                        props.navigation.navigate(SEARCH_ROOT)
                    }}
                />

                <DrawerItem
                    icon={({ size }) => (
                        <MaterialCommunityIcons name="account" color={colors.textblack} size={size} />
                    )}
                    label={() => (
                        <Text allowFontScaling={false} style={styles.labelStyle}>
                            Profile
                        </Text>
                    )}
                    onPress={() => {
                        props.navigation.navigate(PROFILE_ROOT)
                    }}
                />

                <DrawerItem
                    icon={({ size }) => (
                        <Ionicons name="settings-sharp" size={20} color="black" />
                    )}
                    label={() => (
                        <Text allowFontScaling={false} style={styles.labelStyle}>
                            Settings
                        </Text>
                    )}
                    onPress={() => {
                        props.navigation.navigate(SETTINGS_ROOT)
                    }}
                />
            </View>

            <View>
                <DrawerItem
                    icon={() => <MaterialCommunityIcons name="exit-to-app" color={colors.textblack} size={25} />}
                    label={() => (
                        <Text allowFontScaling={false} style={styles.labelStyle}>
                            Sign-Out
                        </Text>
                    )}
                    onPress={() => { props.navigation.dispatch(DrawerActions.closeDrawer()), dispatch(logout()) }}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 18,
        marginTop: 26
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center'
    },
    userNameSection: {
        flex: 1,
        marginLeft: 15,
    },
    title: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
        color: 'black',
        marginHorizontal: 5,
    },
    drawerSection: {
        marginTop: 15,
    },
    appVersion: {
        alignSelf: 'center',
        marginVertical: 10,
        fontFamily: FONT_FAMILY
    },
    appVersionText: {
        color: colors.black,
        fontSize: 12,
    },
    subTitle: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontSize: 13,
        marginTop: 10
    },
    labelStyle: {
        fontSize: 14,
        fontFamily: FONT_FAMILY_MEDIUM,

    }
});

