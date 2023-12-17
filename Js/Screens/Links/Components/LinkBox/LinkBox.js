import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    flex,
    fontSize,
    heightValue,
    lineHeight,
    radius,
    screenHeight,
    styles,
    widthValue,
    marginPosition,
    padding,
    paddingPosition,
} from '../../../../Utils/Styles';

const LinkBox = ({Shortname,FullName,onPress}) => {
  return (
    <View>
      <TouchableOpacity style={[{width:widthValue(2.45),height:heightValue(8),gap:8},styles.bgbarback,radius(10),padding(0,10,20),styles.spaceAroundVertical]} onPress={onPress}>
                <Text style={[fontSize(15),styles.fontwhite]}>{Shortname}</Text>
                    <Text style={[fontSize(7),styles.fontwhite]}>{FullName}</Text>
                </TouchableOpacity>
    </View>
  )
}

export default LinkBox


