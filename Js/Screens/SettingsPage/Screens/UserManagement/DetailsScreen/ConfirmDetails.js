import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import SettingsName from '../../../SettingsName/SettingsName'
import {borderWidth, fontSize, marginPosition, padding, styles, widthValue,heightValue,radius} from '../../../../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FillDetails from '../Components/Number/Number'
import { useSelector } from 'react-redux'


const ConfirmDetails = ({name,number,dropdownvalue}) => {
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  // 
  const [onchangeText,setOnChangeText] = useState('')
  return (
    <View>
    <View style={[{width:widthValue(1.15),},marginPosition(0,25,0,25),darkmode?styles.bgbarback:styles.bgWhite,padding(0,20,20),radius(15)]}>
      <SettingsName name1={'Confirm the'} name2={'Details'} />
      <View style={[styles.borderGreen,borderWidth(0,0,0,1,0),marginPosition(0,0,5,0)]}> 
        <Text style={[styles.gr,padding(0,10,0)]}>Name</Text>
        <View style={[styles.row,styles.spaceBetweenVertical]}>
        <Text style={[styles.green,padding(0,8,0),fontSize(15)]}>{name}</Text>
        <View style={[styles.bggreen,{width:widthValue(15),height:widthValue(15)},radius(widthValue(9)),styles.allCenter]}>
            <FontAwesome5 name='check' style={[styles.fontwhite]} /></View>
        </View>
      </View>
      <View style={[styles.borderGreen,borderWidth(0,0,0,1,0),marginPosition(0,0,5,0)]}> 
        <Text style={[styles.gr,padding(0,10,0)]}>Contact Number</Text>
        <View style={[styles.row,styles.spaceBetweenVertical]}>
        <Text style={[styles.green,padding(0,8,0),fontSize(15)]}>{number}</Text>
        <View style={[styles.bggreen,{width:widthValue(15),height:widthValue(15)},radius(widthValue(9)),styles.allCenter]}>
            <FontAwesome5 name='check' style={[styles.fontwhite]} /></View>
        </View>
      </View>
      <View style={[styles.borderGreen,borderWidth(0,0,0,1,0),marginPosition(0,0,5,0)]}> 
        <Text style={[styles.gr,padding(0,10,0)]}>Relation</Text>
        <View style={[styles.row,styles.spaceBetweenVertical]}>
        <Text style={[styles.green,padding(0,8,0),fontSize(15)]}>{dropdownvalue}</Text>
        <View style={[styles.bggreen,{width:widthValue(15),height:widthValue(15)},radius(widthValue(9)),styles.allCenter]}>
            <FontAwesome5 name='check' style={[styles.fontwhite]}/></View>
        </View>
        </View>
    </View>
    </View>
  )
}

export default ConfirmDetails