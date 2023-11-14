import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

export default function Load(props) {
    return (
        <View>
            <Spinner
                visible={props.visible}
                textContent={props.textContent}
                />
        </View>
    )
}
