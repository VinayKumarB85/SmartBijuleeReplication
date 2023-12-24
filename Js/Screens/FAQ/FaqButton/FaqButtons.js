import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles, padding, radius, marginPosition, fontSize, widthValue } from '../../../Utils/Styles'
import { useSelector } from 'react-redux'

const FaqButtons = ({ ButtonText, onPress }) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    return (
        <View>
            <TouchableOpacity style={[padding(0, 10, 30),darkmode? styles.bgbarback:styles.bglightBarBack, , radius(20), marginPosition(30, 25, 0,),]} onPress={onPress}>
                <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(16), styles.textCenter]}>{ButtonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FaqButtons