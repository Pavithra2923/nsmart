import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PROFILE_ROOT } from "../../common/utils/NavigationRoot";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from "../../common/utils/Colors";


export default function HomeScreen({navigation}){

    console.log('navigation :>> ', navigation);
    return(
        <View style={{flex:1,justifyContent:"center",backgroundColor:colors.hexGray}}>
            <Text>
                Home Screen
            </Text>
            

            <TouchableOpacity onPress={()=>navigation.navigate(PROFILE_ROOT)}>
                <Text>Go to ProfileScreen</Text>
            </TouchableOpacity>
        </View>
    )
}