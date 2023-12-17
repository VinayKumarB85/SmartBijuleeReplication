import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, radius, styles, widthValue } from '../../Utils/Styles'

const GraphButtons = ({ btnStyle, fontStyle, onPress, btnText,}) => {
    return (
        <View>
            <TouchableOpacity style={btnStyle} onPress={onPress}>
                <Text style={fontStyle}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GraphButtons