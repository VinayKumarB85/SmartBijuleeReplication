import {
  Text,
  View,
  Image,
TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  styles,
  padding,
  fontSize,
  radius,
  flex,
  widthValue,
  heightValue,
  marginPosition
} from '../../../Utils/Styles';
import Buttons from '../../../Components/Buttons';
import { useDispatch,useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import ResetOtpBox from './ResetOtpBox';
import { otpVerifyApi } from '../../../api/authApi/loginApi';

const ResetOtp = ({ navigation,route}) => {
  const [customerNumber,setCustomerNumber] = useState(route.params.data)
  const [otpError,setOtpError] = useState('')
  const [buttonColor,setButtonColor] = useState('#262f40')
  const [enteredOtp,setEnteredOtp] = useState('')
  const [loading,setLoading] = useState('Sign In')

  const  updateButtonColor = (isValid)=>{
     setButtonColor(isValid?'#64ad64':'#262f40')
  }
  const dispatch = useDispatch();
  const globalVariableOtp = useSelector((state)=>state)
  console.log('globalVariableOtp',globalVariableOtp);


  const OtpPage = async  ()=>{

      setLoading(
          <View style={[styles.row,styles.centerHorizontal]}>
          <Text style={[styles.fontwhite,fontSize(16)]}>Loading</Text>
          <LottieView source={require('../../../../assets/loader.json')} style={[styles.fontwhite,{height:30,width:30}]} autoPlay loop/>
          </View>
        )
       
      const otpResp = await dispatch(otpVerifyApi(
          {
              "LoginID":globalVariableOtp.auth.user.data.CANumber,
              "otp": enteredOtp,
              "smsTypeID": 2
            }
      ))
      console.log(otpResp)
             let loader=otpResp.meta.requestStatus
      console.log('pending/fullfill',loader)

     /*  ----navigate to drawerApp----- */
      if(otpResp.payload.status === 200){
          navigation.navigate('ResetPass')
      } else {
              setOtpError('Invalid OTP')
      }
  }

  const loginPage = () => {
      navigation.navigate('Login')
  }
  return (
      <KeyboardAvoidingView
          style={[flex(1)]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <SafeAreaView
                  style={[
                      styles.bgBlack,
                      styles.centerHorizontal,
                      // styles.spaceBetweenVertical,
                      flex(1),
                      { paddingTop: heightValue(12) }
                      // paddingPosition(40, 20, 10, 20)
                  ]}>
                  <TouchableOpacity onPress={loginPage}>
                      <Image
                          source={require('../../../../assets/Xmark2.png')}
                          style={[{ height: heightValue(5.5), width: widthValue(5.5), resizeMode: 'contain' }]}
                      />
                  </TouchableOpacity>   
                  <ResetOtpBox customerNumber={customerNumber} updateButtonColor={updateButtonColor} onChangeOtp={(otp)=>{setEnteredOtp(otp),updateButtonColor(otp)}}/> 
                  
                  <View style={[{width:widthValue(1.4)}]}>
          <Text style={[styles.red,,styles.textCenter,fontSize(14),marginPosition(0,0,20)]}>{otpError}</Text>
        </View>
                  <View style={[
                      styles.spaceBetweenVertical,
                      styles.centerHorizontal,
                  ]}>
                      <View>
                          <Buttons text={loading}
                              onPress={OtpPage}
                              style={[
                                  {backgroundColor:buttonColor},
                                  padding(0, 15, 25),
                                  radius(50),
                                  { width: widthValue(2.6) },
                                  styles.allCenter
                              ]}
                              textStyle={[fontSize(18), styles.fontwhite]} />
                      </View>
                  </View >
              </SafeAreaView >
          </ScrollView >
      </KeyboardAvoidingView >
  );
};

export default ResetOtp;







