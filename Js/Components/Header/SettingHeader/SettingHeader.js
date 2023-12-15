import { View, Text } from 'react-native'
import React from 'react'
import { styles, fontSize, heightValue, lineHeight } from '../../../Utils/Styles'

const SettingHeader = ({ title1, title2, Desc }) => {
    return (
        <View>
            <View style={[styles.row,]}>
                <Text style={[fontSize(26), styles.fontwhite,]}>{title1}</Text>
                <Text style={[fontSize(26), styles.green,]}>{title2}</Text>
            </View>
            <Text style={[fontSize(15), styles.fontwhite, { marginTop: 10 }, lineHeight(20)]}>{Desc}</Text>
        </View>
    )
}

export default SettingHeader
