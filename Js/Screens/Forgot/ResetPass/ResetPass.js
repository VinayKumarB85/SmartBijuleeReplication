import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {
  styles,
  padding,
  fontSize,
  radius,
  flex,
  widthValue,
  heightValue,
  marginPosition,
} from '../../../Utils/Styles';
import Buttons from '../../../Components/Buttons';
import OtpBox from '../../OtpScreen/Components/OtpBox';
import {useDispatch,useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import ResetPassComp from './ResetPassComp';
import { resetPasswordApi } from '../../../api/userApi/resetPasswordApi';


const ResetPass = ({navigation}) => {
    const globalVariableResetPassword = useSelector((state)=>state)
    console.log('globalVariableResetPassword',globalVariableResetPassword);
    const [newOtp,setNewOtp] = useState('')
    const [conNewOtp,setConNewOtp] = useState('')
    console.log('otp',newOtp)
    console.log('newotp',conNewOtp)
  const [messege, setMessege] = useState('');
  const [buttonColor, setButtonColor] = useState('#262f40');
  const [loading, setLoading] = useState('Reset');

  const updateButtonColor = isValid => {
    setButtonColor(isValid ? '#64ad64' : '#262f40');
  };

  const dispatch = useDispatch();
/* ------API FETCHING------ */

const resetPassword = async ()=>{
    const resetResp = await dispatch(resetPasswordApi(
        {
            "loginID":globalVariableResetPassword.auth.user.data.CANumber,
            "neW_PASSWORD":newOtp,
            "confirM_NEW_PASSWORD":conNewOtp,
            "mobileNumber":globalVariableResetPassword.auth.user.data.mobilenumber
          }
    ))
    console.log('resetResp',resetResp)

    if(resetResp.payload.status === 200){
        Alert.alert(
            'Congratulations',
            'Your passwqord has been reset succesfully.Please login to your account.',
            [{
                text: 'OK',
                onPress: () => {
                  navigation.navigate('Login');
                  setLoading('Submit')
                  setButtonColor('#262f40')
                },
              },]
        )
    } else {
        setMessege('you didnt change the pasword')
    }
}

useEffect(()=>{
    resetPassword();
},[])

  const loginPage = () => {
    navigation.navigate('Forgot');
  };
  return (
    <KeyboardAvoidingView
      style={[flex(1)]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView
          style={[
            styles.bgBlack,
            styles.centerHorizontal,
            // styles.spaceBetweenVertical,
            flex(1),
            {paddingTop: heightValue(12)},
            // paddingPosition(40, 20, 10, 20)
          ]}>
          <TouchableOpacity onPress={loginPage}>
            <Image
              source={require('../../../../assets/Xmark2.png')}
              style={[
                {
                  height: heightValue(5.5),
                  width: widthValue(5.5),
                  resizeMode: 'contain',
                },
              ]}
            />
          </TouchableOpacity>
          <View style={[marginPosition(20)]}>
            <ResetPassComp  onchangeText={(val)=>setNewOtp(val)} onChangeConfirm={(value)=>setConNewOtp(value)}/>
            
          </View>
          <View style={[{width: widthValue(1.4)}]}>
            <Text
              style={[
                styles.red,
                ,
                styles.textCenter,
                fontSize(14),
                marginPosition(0, 0, 20),
              ]}>
            </Text>
          </View>
          <View style={[styles.spaceBetweenVertical, styles.centerHorizontal]}>
            <View>
              <Buttons
                text={loading}
                onPress={resetPassword}
                style={[
                  {backgroundColor: buttonColor},
                  padding(0, 15, 25),
                  radius(50),
                  {width: widthValue(2.6)},
                  styles.allCenter,
                ]}
                textStyle={[fontSize(18), styles.fontwhite]}
              />
            </View>
          </View>
          <View style={[marginPosition(30), styles.row]}>
            <Text style={[fontSize(17), styles.fontwhite]}>
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={() => console.log('go to restpass')}>
              <Text style={[fontSize(17), styles.green]}> Log in</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPass;
