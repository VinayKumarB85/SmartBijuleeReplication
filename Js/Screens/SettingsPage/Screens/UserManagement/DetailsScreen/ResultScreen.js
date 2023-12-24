import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SettingsName from '../../../SettingsName/SettingsName'
import {borderWidth, fontSize, marginPosition, padding, styles, widthValue,heightValue,radius, paddingPosition} from '../../../../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const ResultScreen = () => {

  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
    <View style={[{width:widthValue(1.15),},marginPosition(0,25,0,25),darkmode?styles.bgbarback:styles.bgWhite,padding(0,20,20),radius(15)]}>
      
      <SettingsName name1={'Send the'} name2={'Invitation link'} />
      <View style={[borderWidth(0,1,0,0,0),styles.borderGreen,paddingPosition(20,20,0,20),{height:heightValue(3.5)}]}>
        
        <TextInput maxLength={200} placeholderTextColor={'black'} placeholder='Hey ,the app is fabulous.. Especially the design' multiline={true}  style={[ {height:heightValue(4.5)},padding(0,10,20), fontSize(10),radius(15),darkmode?styles.bgWhite:styles.bgLightGray]} inputStyle={[{ textAlignVertical: 'top' }]} />
      </View>
    </View>
  )
}

export default ResultScreen