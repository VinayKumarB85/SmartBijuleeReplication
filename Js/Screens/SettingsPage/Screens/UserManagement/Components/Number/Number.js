import { View, Text } from 'react-native'
import React from 'react'
import { fontSize, heightValue,styles,widthValue,radius} from '../../../../../../Utils/Styles'

const FillDetails = ({number,title}) => {
  return (
        <View style={[styles.centerHorizontal,{gap:10}]}>
        <View style={[{width:widthValue(10),height:widthValue(10)},styles.bggreenish,styles.allCenter,radius(widthValue(5))]}>
            <Text style={[styles.fontwhite,fontSize(16)]}>{number}</Text>
            </View>
            <Text style={[styles.fontwhite,fontSize(11)]}>{title}</Text>
      </View>
  )
}

export default FillDetails