import { View, Text } from 'react-native'
import React from 'react'
import {styles,fontSize, marginPosition} from '../../../Utils/Styles'

const SettingsHeader = ({settingTitle1,settingTitle2}) => {
  return (
    <View style={[marginPosition(0,0,10,0)]}>
        <Text style={[styles.fontwhite,fontSize(16)]}>{settingTitle1}<Text style={[styles.green,fontSize(16)]}>{settingTitle2}</Text></Text>
    </View>
  )
}

export default SettingsHeader