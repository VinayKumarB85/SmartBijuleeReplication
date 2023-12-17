import { View, Text } from 'react-native'
import React from 'react'
import { fontSize, heightValue,styles,widthValue,radius, borderColor, borderWidth,marginPosition} from '../../../../../Utils/Styles'
import Number from '../Components/Number/Number'
import InputBox from '../Components/InputBox/InputBox'


const FillDetails = () => {
  return (
    <View>
        <View style={[styles.row,styles.centerHorizontal,styles.selfStart,{width:widthValue(1.8)},marginPosition(20,0,0,20)]}>
            <Number number={'01'} title={'FILL DETAILS'}/>
            <View><Text style={[styles.green,marginPosition(-30)]}>___  ___ ___ </Text></View>
            <Number number={'02'} title={'ANALYSIS'}/>
            <View><Text style={[styles.green,marginPosition(-30)]}>___  ___ ___</Text></View>
            <Number number={'03'} title={'RESULTS'}/>
      </View>
      </View>
    )
}


export default FillDetails