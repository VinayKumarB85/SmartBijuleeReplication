import { View, Text } from 'react-native'
import React from 'react'
import { borderWidth, flex, fontSize, marginPosition, paddingPosition, styles, padding, lineHeight, widthValue } from '../../Utils/Styles'

const EnergyTipsComponent = ({ tipName, tipDesc }) => {
    return (
        <View style={[styles.bglightblack, borderWidth(0, 2, 0, 0, 0), styles.borderGray, padding(0, 15), { width: widthValue(1.15) }]}>
            <Text style={[styles.fontwhite, fontSize(14)]}>{tipName}</Text>
            <Text style={[styles.gray, fontSize(13), marginPosition(10), lineHeight(18)]}>{tipDesc}</Text>
        </View>
    )
}

export default EnergyTipsComponent