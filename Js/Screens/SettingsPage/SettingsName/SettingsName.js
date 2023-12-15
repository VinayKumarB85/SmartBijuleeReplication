import { View, Text } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition } from '../../../Utils/Styles'


const SettingsName = ({name1,name2,details,details2}) => {
  return (
      <View>
        <Text style={[styles.fontwhite,fontSize(14)]}>{name1}<Text style={[styles.green,fontSize(14)]}> {name2}</Text></Text>
        <Text style={[styles.gray,marginPosition(4),fontSize(13)]}>{details}</Text>
        <Text style={[styles.fontwhite,marginPosition(4),fontSize(12),marginPosition(-10)]}>{details2}</Text>
    </View>
  
  )
}

export default SettingsName