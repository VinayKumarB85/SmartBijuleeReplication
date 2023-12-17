import { View, Text } from 'react-native'
import React from 'react'
import {styles,flex, padding,marginPosition, widthValue, heightValue,radius, borderWidth, paddingPosition, fontSize} from '../../../../../../Utils/Styles'


const Infobar = ({headingText,detail}) => {
  return (
    <View style={[styles.column,{gap:10},borderWidth(0,0,0,1,0),styles.borderGray,paddingPosition(0,0,10,0),marginPosition(0,0,20,0)]}>
          <Text style={[styles.fontwhite,fontSize(13),{fontWeight:'600'}]}>{headingText}</Text>
          <Text style={[styles.green,fontSize(13)]}>{detail}</Text>
        </View>
  )
}

export default Infobar