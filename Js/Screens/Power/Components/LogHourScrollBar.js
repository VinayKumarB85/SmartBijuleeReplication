import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, lineHeight, radius, screenHeight, styles, widthValue, padding, marginPosition, paddingPosition, borderWidth } from '../../../Utils/Styles'


const LogHourScrollBar = () => {
  return (
    <ScrollView style={[{height:heightValue(3.5)}]} showsVerticalScrollIndicator={false}>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View><View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    <View style={[borderWidth(0,0,0,1),styles.borderGray,paddingPosition(15,0,10,0)]}>
    <Text style={[fontSize(12),styles.gray]}>3pm</Text>
    </View>
    
</ScrollView>
  )
}

export default LogHourScrollBar