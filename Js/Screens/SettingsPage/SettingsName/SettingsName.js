import { View, Text } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition } from '../../../Utils/Styles'
import { useSelector } from 'react-redux'

const SettingsName = ({name1,name2,details,details2}) => {
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
      <View>
        <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(16)]}>{name1}<Text style={[styles.green,fontSize(16)]}> {name2}</Text></Text>
        <Text style={[styles.gray,marginPosition(4),fontSize(16)]}>{details}</Text>
        <Text style={[darkmode?styles.fontwhite:styles.black,marginPosition(4),fontSize(14),marginPosition(-10)]}>{details2}</Text>
    </View>
  
  )
}

export default SettingsName