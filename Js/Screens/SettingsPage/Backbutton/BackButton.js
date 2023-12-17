import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {fontSize, marginPosition, styles} from '../../../Utils/Styles'
import { useNavigation } from '@react-navigation/native'


const BackButton = () => {

        const navigation = useNavigation();

        const handleBack = ()=>{
            if(navigation){
                navigation.navigate('SettingsPage')
            }
        }
  return (
    <TouchableOpacity  style={[styles.row,styles.centerHorizontal]}onPress={handleBack}>
            <FontAwesome5 name='chevron-left' style={[styles.fontwhite,marginPosition(20,10,10,30),fontSize(15)]}/>
      <Text style={[styles.fontwhite,marginPosition(20,10,10,0),fontSize(15)]}>Back</Text>
    </TouchableOpacity>
  )
}

export default BackButton