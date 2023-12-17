import { View, Text } from 'react-native'
import React from 'react'
import { styles, fontSize, heightValue, lineHeight } from '../../Utils/Styles'

const Header2 = ({ title1, title2, Desc }) => {
    return (

        <View>
            <View style={[styles.row,]}>
                <Text style={[fontSize(22), styles.fontwhite,]}>{title1}</Text>
                <Text style={[fontSize(22), styles.green,]}>{title2}</Text>
            </View>
            <Text style={[fontSize(12), styles.fontwhite, { marginTop: 10 }, lineHeight(20)]}>{Desc}</Text>
        </View>
    )
}

export default Header2
