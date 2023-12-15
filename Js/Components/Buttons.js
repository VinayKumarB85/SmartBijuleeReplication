import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles, paddingPosition, fontSize, position, marginPosition } from '../Utils/Styles'

const Buttons = (props) => {
    const loginPage = () => {
        console.warn('login')
    }
    return (
        <View
            style={props.style}
        >
            <TouchableOpacity onPress={props.onPress}>
                <Text style={props.textStyle}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Buttons
