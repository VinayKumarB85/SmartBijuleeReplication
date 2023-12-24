import { View, Text } from 'react-native'
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
import { useSelector } from 'react-redux';

const LinkBox2 = ({Shortname,FullName,onPress}) => {
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
    <View>
      <View style={[{width:widthValue(2.45),height:heightValue(6.5),gap:8},darkmode?styles.bgbarback:styles.bgWhite,radius(10),padding(0,10,20),styles.spaceAroundVertical]}onPress={onPress}>
                <Text style={[fontSize(15),darkmode?styles.fontwhite:styles.black]}>{Shortname}</Text>
                    <Text style={[fontSize(7),darkmode?styles.fontwhite:styles.black]}>{FullName}</Text>
                </View>
    </View>
  )
}

export default LinkBox2


