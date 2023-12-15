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

const AddAccount = () => {
  return (
    
      <View style={[styles.bgbarback,{width:widthValue(1.13),height:heightValue(2.6)},marginPosition(30, 25, 0, 20),radius(15),paddingPosition(20,20,10,20),styles.spaceBetweenVertical]}>
            <View>
              <SettingsName name1={'List of' } name2={'Accounts handled'}/>
            <View style={[styles.row,styles.spaceAroundVertical,borderWidth(0,0,0,1,0),paddingPosition(0,0,10,0),styles.borderGray]}>
              <Text style={[styles.fontwhite,fontSize(11)]}>Sl No</Text>
              <Text style={[styles.fontwhite,fontSize(11)]}>Name</Text>
              <Text style={[styles.fontwhite,fontSize(11)]}></Text>
              <Text style={[styles.fontwhite,fontSize(11)]}></Text>
              <Text style={[styles.fontwhite,fontSize(11)]}>Consumer ID</Text>
              <Text style={[styles.fontwhite,fontSize(11)]}>Action</Text>
            </View>
            </View>
            <Text style={[styles.green,styles.textCenter,fontSize(10)]}>You can add upto 5 Account Members</Text>
      </View>
  )
}

export default AddAccount