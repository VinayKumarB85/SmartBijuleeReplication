import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles, padding, radius, marginPosition, fontSize, widthValue } from '../../../Utils/Styles'

const FaqButtons = ({ ButtonText, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={[padding(0, 10, 30), styles.bgbarback, , radius(20), marginPosition(30, 25, 0,),]} onPress={onPress}>
                <Text style={[styles.fontwhite, fontSize(16), styles.textCenter]}>{ButtonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FaqButtons