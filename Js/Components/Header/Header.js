import { View, Text } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, styles, widthValue } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'




const Header = ({ Greeting, name, ConsumerId }) => {
    const darkmode=useSelector((state)=>state.system.darkMode);
console.log('darkmodeeeee',darkmode);
    return (
        <View style={[{ alignItems: 'flex-start', gap: 5 }]}>
            <Text style={[fontSize(18),darkmode?styles.fontwhite:styles.black,]}>{Greeting}</Text>
            <Text style={[fontSize(20), styles.green,]}>{name}</Text>
            <Text style={[fontSize(14.5),darkmode?styles.fontwhite:styles.black,]}>{ConsumerId}</Text>
        </View >
    )
}

export default Header
