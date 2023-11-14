import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../utils/Colors'


export default function Header(props) {
    console.log('props.screen :>> ', props.screen);

    // const title = props.route.params && props.route.params.title ? props.route.params.title : props.route.name

    return (
   <View >
    <Text>{props.screen}</Text>
   </View>

     
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: '3%',
        paddingHorizontal: '3%',
    },
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        width: '65%',
        alignItems: 'center',
    },
    shareicon: {
        alignItems: 'center',
        width: '10%'
    },
    logoContainer: {
        // marginLeft:20,
        alignItems: 'flex-end',
        width: '10%',
    },
    title: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center'
    },
    flowLogo: {
        width: 150,
        height: 40
    },
    logo: {
        width: 35,
        height: 35
    }
})