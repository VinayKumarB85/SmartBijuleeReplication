import { View, Text,SafeAreaView, Image, Alert } from 'react-native'
import React from 'react'
import {styles,flex, padding,marginPosition, widthValue, heightValue,radius, borderWidth, paddingPosition, fontSize} from '../../../../Utils/Styles'
import BackButton from '../../Backbutton/BackButton'
import Infobar from './Components/Infobar/Infobar'
import { TouchableWithoutFeedback } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PersonalInfo = () => {

  const choosePhoto =  async ()=>{
    const galleryResult = await launchImageLibrary({mediaType:'photo',quality:1});
    console.log(galleryResult)
  }
  
  const takePhoto = async ()=>{
    const cameraResult = await launchCamera({mediaType:'photo',quality:1});
    console.log(cameraResult)
  }
  const ImageSelect = ()=>{
    Alert.alert('Select Image','Choose an Option to update image.',[
      {text:'CANCEL'},
      {text:'SELECT FROM GALEERY',onPress:choosePhoto},
      {text:'TAKE PHOTO',onPress:takePhoto}
    ])
  }
  return (
    <SafeAreaView style={[styles.bglightblack,flex(1),padding(0,20,30)]}>
      <BackButton />
      <View style={[marginPosition(15,25,20,25),{width:widthValue(1.12),height:heightValue(1.3),gap:20}]}>
    <View style={[styles.bgbarback,{width:widthValue(1.12),height:heightValue(4.7),},radius(20),styles.centerHorizontal]}>
        <View style={[marginPosition(-40),styles.centerHorizontal]}>
          <TouchableWithoutFeedback onPress={ImageSelect}>
          <Image source={require('../../../../../assets/LoginLogo2.png')} style={[{width:widthValue(3),height:widthValue(3)}]}/></TouchableWithoutFeedback>
          <View style={[styles.centerHorizontal,marginPosition(5)]}>
            <Text style={[styles.fontwhite,fontSize(16)]}>JuliusCeaser</Text>
            <Text style={[styles.green,fontSize(12)]}>Consumer ID:C000003</Text>
          </View>
        </View>
    </View>
    <View style={[styles.bgbarback,,{width:widthValue(1.12),},radius(20),padding(0,20,30)]}>
        <Infobar headingText={'Sanctioned Load'} detail={1}/>
        <Infobar headingText={'Service date'} detail={'7/12/2023'}/>
        <Infobar headingText={'Meter Seial Number'} detail={'METER_D1_000003'}/>
        <Infobar headingText={'Contact Number'} detail={940737562}/>
        <Infobar headingText={'Email Id'}/>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default PersonalInfo