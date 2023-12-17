import {View, Text, SafeAreaView, Image, Alert, ScrollView} from 'react-native';
import React,{useState} from 'react';
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
} from '../../../../Utils/Styles';
import BackButton from '../../Backbutton/BackButton';
import Header2 from '../../../../Components/Header/Header2';
import SettingsName from '../../SettingsName/SettingsName';


const Terms = () => {


  return (
    <SafeAreaView style={[styles.bglightblack, flex(1), padding(0, 20, 30)]}>
      <BackButton />
      <ScrollView style={[marginPosition(10, 25, 0, 20)]}>
        <SettingsName name1={'Terms and '} name2={'condition'} />

        <Text style={[styles.fontwhite,fontSize(16)]}>GENERAL <Text style={[styles.green,fontSize(16)]}>INFORMATION</Text></Text>
        <View>
          <Text style={[styles.fontwhite,fontSize(15),marginPosition(20,0,10,0)]}>The Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other information displayed in this app are for reference purposes only and does not purport to be a legal document.</Text>
          <Text style={[styles.fontwhite,fontSize(15),marginPosition(10,0,10,0)]}>The Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other information displayed in this app are for reference purposes only and does not purport to be a legal document.</Text>
          <Text style={[styles.fontwhite,fontSize(15),marginPosition(10,0,10,0)]}>The Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other information displayed in this app are for reference purposes only and does not purport to be a legal document.</Text>
          <Text style={[styles.fontwhite,fontSize(15),marginPosition(10,0,10,0)]}>The Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other information displayed in this app are for reference purposes only and does not purport to be a legal document The Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for.</Text>
        </View>
        {/* <Header2
          title1={'GENERAL '}
          title2={'}
          Desc={
            'The Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other informatiuon displayed in this app are for reference purposes only and does not purport to be a legal document./nThe Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other informatiuon displayed in this app are for reference purposes only and does not purport to be a legal document./nThe Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other informatiuon displayed in this app are for reference purposes only and does not purport to be a legal document./nThe Smart Bijulee mobile Application of Assam Power Distribution Company Limited (APDCL) has been Developed and deploYed for Consumer having smart meters installed at their Premises .The figure and other informatiuon displayed in this app are for reference purposes only and does not purport to be a legal document. '
          }
          
        /> */}
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default Terms;


