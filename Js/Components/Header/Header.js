import { View, Text } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, styles, widthValue } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Header = ({ Greeting, name, ConsumerId }) => {
    return (
        <View style={[{ alignItems: 'flex-start', gap: 5 }]}>
            <Text style={[fontSize(18), styles.fontwhite,]}>{Greeting}</Text>
            <Text style={[fontSize(20), styles.green,]}>{name}</Text>
            <Text style={[fontSize(14.5), styles.fontwhite,]}>{ConsumerId}</Text>
        </View >
    )
}

export default Header
