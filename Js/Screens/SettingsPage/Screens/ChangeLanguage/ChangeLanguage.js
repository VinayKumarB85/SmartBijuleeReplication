import {View, Text, SafeAreaView, Image, Alert, TouchableOpacity} from 'react-native';
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
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ChangeLanguage = () => {

  return (
    <SafeAreaView style={[styles.bglightblack, flex(1),]}>
      <BackButton />
      <View style={[marginPosition(10, 25, 0, 20)]}>
        <Header2
          title1={'Chnage'}
          title2={' Language'}
          Desc={
            'Select between your regional language Assamese and ENglish to view the App'
          }
        />

        <View style={[styles.allCenter,{height:heightValue(2),width:widthValue(1.1),gap:30}]}>
        <TouchableOpacity>
          <View style={[{width:widthValue(2),height:heightValue(7)},radius(20),styles.bgWhite,styles.centerHorizontal,styles.spaceEvenly]}>
            <Text style={[styles.gray,fontSize(18)]}>Selected Language</Text>
            <View style={[styles.row,styles.centerHorizontal,{gap:20,}]}>
            <Text style={[styles.gray,fontSize(18)]}>English</Text>
            <View style={[styles.bggreen,{width:widthValue(15),height:widthValue(15)},radius(widthValue(9)),styles.allCenter]}>
            <FontAwesome5 name='check' style={[styles.fontwhite]} /></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[{width:widthValue(2.2),height:heightValue(8)},radius(20),styles.bggreen,styles.centerHorizontal,styles.spaceEvenly]}>
            <Text style={[styles.white,fontSize(18)]}>Select Language</Text>
            <View style={[styles.row,styles.centerHorizontal,{gap:20,}]}>
            <Text style={[styles.white,fontSize(20)]}>অসমীয়া </Text>
            </View>
          </View>
        </TouchableOpacity>
        </View>

        
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;


