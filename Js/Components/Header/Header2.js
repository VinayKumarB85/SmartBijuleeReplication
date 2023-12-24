import { View, Text } from 'react-native'
import React from 'react'
import { styles, fontSize, heightValue, lineHeight } from '../../Utils/Styles'
import { useSelector } from 'react-redux'

const Header2 = ({ title1, title2, Desc }) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
console.log('darkmodeeeee',darkmode);

    return (

        <View>
            <View style={[styles.row,]}>
                <Text style={[fontSize(21),darkmode? styles.fontwhite:styles.black,]}>{title1}</Text>
                <Text style={[fontSize(21), styles.green,]}>{title2}</Text>
            </View>
            <Text style={[fontSize(15),darkmode? styles.fontwhite:styles.black, { marginTop: 10 }, lineHeight(20)]}>{Desc}</Text>
        </View>
    )
}

export default Header2
