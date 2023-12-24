import { View, Text } from 'react-native'
import React from 'react'
import {styles,fontSize, marginPosition} from '../../../Utils/Styles'
import { useSelector } from 'react-redux'


const SettingsHeader = ({settingTitle1,settingTitle2}) => {
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
    <View style={[marginPosition(0,0,20,0)]}>
        <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(18)]}>{settingTitle1}<Text style={[styles.green,fontSize(18)]}>{settingTitle2}</Text></Text>
    </View>
  )
}

export default SettingsHeader