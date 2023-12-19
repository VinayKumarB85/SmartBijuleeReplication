import { View, Text,SafeAreaView, Image, Alert } from 'react-native'
import React, { useEffect, useState, } from 'react'
import {styles,flex, padding,marginPosition, widthValue, heightValue,radius, borderWidth, paddingPosition, fontSize} from '../../../../Utils/Styles'
import BackButton from '../../Backbutton/BackButton'
import Infobar from './Components/Infobar/Infobar'
import { TouchableWithoutFeedback } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useDispatch,useSelector } from 'react-redux'
import { personalInfoApi } from '../../../../api/userApi/personalInfoApi'

const PersonalInfo = () => {

  const [details,setDetails]= useState('')
  const [selectedImage,setSelectedImage] = useState(null)
  const [show,setshow]=useState(false)
  const ImageSelect = () => {
    Alert.alert('Select Image', 'Choose an Option to update image.', [
      { text: 'CANCEL' },
      { text: 'SELECT FROM GALLERY', onPress: ()=>{
  
        let options={
          storageOptions:{
            path:'image',
          },
        };
        launchImageLibrary(options,response => {
          setSelectedImage(response.assets[0].uri);
          console.log(response.assets[0].uri);
          setshow(true)
        })
      } },
      { text: 'TAKE PHOTO', onPress: ()=>{
  
        let options={
          storageOptions:{
            path:'image',
          },
        };
        launchCamera(options,response => {
          setSelectedImage(response.assets[0].uri);
          console.log(response.assets[0].uri);
          setshow(true)
        })
      } }
    ]);
  };


const globalVariablePersonalInfo = useSelector((state)=>state)
console.log('globalVariablePersonalInfo',globalVariablePersonalInfo);
const loginId = globalVariablePersonalInfo.auth.user.data.CANumber;
  const dispatch = useDispatch();

  const personalInfo = async ()=>{
    const personalInfoResp = await dispatch(personalInfoApi(
      {
        "loginID": loginId,
      }
    ))
    console.log('personalInfoResp',personalInfoResp)
    setDetails(personalInfoResp.payload.data);
    console.log('details',details)
    
    console.log('mobileNum',personalInfoResp.payload.data.contactNumber)
  }

  useEffect(()=>{
    personalInfo();
  },[])
  console.log('load',details.contactNumber)
  return (
    <SafeAreaView style={[styles.bglightblack,flex(1),]}>
      <BackButton />
      <View style={[marginPosition(25,25,20,25),{width:widthValue(1.12),height:heightValue(1.3),gap:20},]}>
     
      <View style={[styles.bgbarback,{width:widthValue(1.12),height:heightValue(4.7),},radius(20),styles.centerHorizontal,styles.positionRelative]}>
        <View style={[marginPosition(-40),styles.centerHorizontal]}>
          <TouchableWithoutFeedback onPress={ImageSelect} style={[{width:widthValue(3),height:widthValue(3)},radius(widthValue(1.5),styles.bgWhite)]} >
            {show? 
          <Image source={{uri:selectedImage}} style={[{width:widthValue(3),height:widthValue(3)},radius(widthValue(1.5)),]}/> 
          : <Image source={require('../../../../../assets/LoginLogo2.png')} style={[{width:widthValue(3),height:widthValue(3)}]} />}
          </TouchableWithoutFeedback>
          <View style={[styles.centerHorizontal,marginPosition(5)]}>
            <Text style={[styles.fontwhite,fontSize(15)]}>{details.fullName}</Text>
            <Text style={[styles.green,fontSize(11)]}>{`Consumer ID:${details.loginID}`}</Text>
          </View>
        </View>
    </View>
    <View  style={[styles.bggreenish,{width:widthValue(9),height:widthValue(9)},radius(widthValue(4.5)),styles.allCenter,styles.positionAbsolute,{top:-50,zIndex:99,left:widthValue(2)}]}>
        
        <TouchableWithoutFeedback onPress={ImageSelect}><FontAwesome5 name='camera' style={[fontSize(15),styles.fontwhite]} /></TouchableWithoutFeedback>
      </View >
    <View style={[styles.bgbarback,{width:widthValue(1.12),},radius(20),padding(0,20,30)]}>
        <Infobar headingText={'Sanctioned Load'} detail={details.sanctionedLoad}/>
        <Infobar headingText={'Service date'} detail={details.serviceDate}/>
        <Infobar headingText={'Meter Seial Number'} detail={details.msn}/>
        <Infobar headingText={'Contact Number'} detail={details.contactNumber}/>
        <Infobar headingText={'Email Id'}/>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default PersonalInfo