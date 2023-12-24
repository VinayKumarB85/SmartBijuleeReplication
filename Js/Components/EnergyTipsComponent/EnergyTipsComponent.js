import { View, Text } from 'react-native'
import React from 'react'
import { borderWidth, flex, fontSize, marginPosition, paddingPosition, styles, padding, lineHeight, widthValue } from '../../Utils/Styles'
import { useSelector } from 'react-redux'
const EnergyTipsComponent = ({ tipName, tipDesc }) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    return (
        <View style={[darkmode?styles.bglightblack:styles.bgWhite, borderWidth(0, 2, 0, 0, 0), styles.borderGray, padding(0, 15), { width: widthValue(1.15) }]}>
            <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(14)]}>{tipName}</Text>
            <Text style={[styles.gr, fontSize(13.5), marginPosition(10), lineHeight(18)]}>{tipDesc}</Text>
        </View>
    )
}

export default EnergyTipsComponent