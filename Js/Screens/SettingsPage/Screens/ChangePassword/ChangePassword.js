import { View, Text,SafeAreaView, Image, Alert,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import {styles,flex, padding,marginPosition, widthValue, heightValue,radius, borderWidth, paddingPosition, fontSize} from '../../../../Utils/Styles'
import BackButton from '../../Backbutton/BackButton'
import { TouchableWithoutFeedback } from 'react-native'
import Header2 from '../../../../Components/Header/Header2'
import SettingsName from '../../SettingsName/SettingsName'
import Password from '../../../../Components/Password/Password'
import { TouchableOpacity } from 'react-native'
import InputBoxes from './Components/InputBox/InputBoxes'
const ChangePassword = () => {
  return (
    <KeyboardAvoidingView
      style={[flex(1)]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -300 : 0}>
    <SafeAreaView style={[styles.bglightblack,flex(1),]}>
      <BackButton />
      <View style={[marginPosition(40,25,20,25),{width:widthValue(1.12),height:heightValue(1.3),gap:20}]}>
    <View style={[styles.bgbarback,{width:widthValue(1.12),height:heightValue(4.7),},radius(20),styles.centerHorizontal]}>
        <View style={[marginPosition(-40),styles.centerHorizontal]}>
          <Image source={require('../../../../../assets/LoginLogo2.png')} style={[{width:widthValue(3),height:widthValue(3)}]}/>
          <View style={[styles.centerHorizontal,marginPosition(5)]}>
            <Text style={[styles.fontwhite,fontSize(16)]}>JuliusCeaser</Text>
            <Text style={[styles.green,fontSize(12)]}>Consumer ID:C000003</Text>
          </View>
        </View>
    </View>
      <View>
        <Text style={[styles.fontwhite,fontSize(18)]}>Reset<Text style={[styles.green,fontSize(18)]}> Password</Text></Text>
        <Text style={[styles.fontwhite,marginPosition(4),fontSize(13),marginPosition(10)]}>Please Change your password every three mponths for your account safety and security</Text>
    </View>
    <InputBoxes />
    <View style={[styles.centerHorizontal]}>
      <TouchableOpacity style={[styles.bggreyish,padding(0,10,20),{width:widthValue(3)},styles.allCenter,radius(30)]}>
      <Text style={[styles.fontwhite,fontSize(15)]}>Submit</Text>
      </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default ChangePassword