import { View, Text } from 'react-native'
import React from 'react'
import {
    styles,
    flex,
    padding,
    marginPosition,
    widthValue,
    heightValue,
    radius,
    borderWidth,
    paddingPosition,
    fontSize,
  } from '../../Utils/Styles';
  import SettingsName from '../../Screens/SettingsPage/SettingsName/SettingsName';
import { useSelector } from 'react-redux';

const AddAccount = () => {
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
    
      <View style={[darkmode?styles.bgbarback:styles.bgWhite,{width:widthValue(1.13),height:heightValue(2.6)},marginPosition(30, 25, 0, 20),radius(15),paddingPosition(20,20,10,20),styles.spaceBetweenVertical]}>
            <View>
              <SettingsName name1={'List of' } name2={'Accounts handled'}/>
            <View style={[styles.row,styles.spaceAroundVertical,borderWidth(0,0,0,1,0),paddingPosition(0,0,10,0),styles.borderGray]}>
              <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(12)]}>Sl No</Text>
              <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(12)]}>Name</Text>
              <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(12)]}></Text>
              <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(12)]}></Text>
              <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(12)]}>Consumer ID</Text>
              <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(12)]}>Action</Text>
            </View>
            </View>
            <Text style={[styles.green,styles.textCenter,fontSize(10)]}>You can add upto 5 Account Members</Text>
      </View>
  )
}

export default AddAccount