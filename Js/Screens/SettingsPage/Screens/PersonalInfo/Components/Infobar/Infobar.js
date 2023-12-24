import { View, Text } from 'react-native'
import React from 'react'
import {styles,flex, padding,marginPosition, widthValue, heightValue,radius, borderWidth, paddingPosition, fontSize} from '../../../../../../Utils/Styles'
import { useSelector } from 'react-redux'

const Infobar = ({headingText,detail}) => {

  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
    <View style={[styles.column,{gap:10},borderWidth(0,0,0,1,0),styles.borderGray,paddingPosition(0,0,10,0),marginPosition(0,0,20,0)]}>
          <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(16),]}>{headingText}</Text>
          <Text style={[styles.green,fontSize(16)]}>{detail}</Text>
        </View>
  )
}

export default Infobar