import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {
  styles,
  fontSize,
  radius,
  flex,
  widthValue,
  heightValue,
  paddingPosition,
  marginPosition,
  padding,
} from '../../Utils/Styles';
import LoginBox from '../../Components/Login Box/LoginBox';
import {useDispatch, useSelector} from 'react-redux';
import {userVerifyApi} from '../../../Js/api/authApi/loginApi';
import DeviceInfo from 'react-native-device-info';
import LottieView from 'lottie-react-native';

const Login = ({navigation}) => {
  const globalVariable = useSelector(state => state);
  console.log('globalVariable', globalVariable);
  const userSelector = useSelector(state => state.auth.userVerify);
  console.log(userSelector);
  const [buttonColor, setButtonColor] = useState('#262f40');
  const [CustomerID, setCustomerID] = useState('');
  const [pass, setPass] = useState('');
  console.log('customerid', CustomerID);
  console.log('password', pass);
  const [loader,setLoader] = useState('Send Otp')

  const checkConditions = pass => {
    const isConditionSatisfied =typeof pass === 'string' && pass.trim() !== '';
    console.log('isConditionSatisfied:', isConditionSatisfied);
    setButtonColor(isConditionSatisfied ?'#64ad64':'#262f40');
  };

  const dispatch = useDispatch();
  // const otpPage = () => {
  //   navigation.navigate('OnePass');
  // };
  const forgotPage = () => {
    navigation.navigate('Forgot');
    // console.warn('hi hello')
  };

  const createPage = () => {
    navigation.navigate('Create');
  };


  const login = async () => {
    setLoader(
      <View style={[styles.row,styles.centerHorizontal]}>
      <Text style={[styles.fontwhite,fontSize(16)]}>Loading</Text>
      <LottieView source={require('../../../loader2.json')} style={[styles.fontwhite,{height:30,width:30}]} autoPlay loop/>
      </View>
    )
    const deviceID = await DeviceInfo.getUniqueId();
    const deviceMake = await DeviceInfo.getManufacturer();
    const deviceOS = await DeviceInfo.getSystemName();
    const deviceOSVersion = await DeviceInfo.getSystemVersion();
    const loginresp = await dispatch(
      userVerifyApi({
        LoginID: CustomerID,
        password: pass,
        confirmation: 'N',
        deviceInfo: {
          deviceID: deviceID,
          deviceMake: deviceMake,
          deviceOS: deviceOS,
          deviceOSVersion: deviceOSVersion,
        },
      }),
    );
    console.log('loginResponse', loginresp);
    console.log('deviceInfo', deviceID, deviceMake, deviceOS, deviceOSVersion);

    const CustomerDetails = loginresp.payload.data.MobileNumber;
    const loginId = loginresp.meta.arg.LoginID;

    if (loginresp.payload.status === 201) {
      navigation.navigate('OnePass', {
        data: CustomerDetails,
        Id: loginId,
      });
      setLoginError('');
      setLoader('Sent Otp')
      setButtonColor('#262f40')
      console.log(CustomerDetails);
      console.log('loginId', loginId);
    }
      const confirmResp = await dispatch(
        userVerifyApi({
          LoginID: CustomerID,
          password: pass,
          confirmation: 'Y',
          deviceInfo: {
            deviceID: deviceID,
            deviceMake: deviceMake,
            deviceOS: deviceOS,
            deviceOSVersion: deviceOSVersion,
          },
        }),
      );
      console.log('confirmRespone', confirmResp);
       const CMobileNum = confirmResp.payload.data.MobileNumber;
      const  CLoginId =  confirmResp.meta.arg.LoginID;
      console.log('phone:',CMobileNum)
      console.log('id:',CLoginId)
    const deviceError = loginresp.payload.data.ErrorDescription;
    if (deviceError === 'Login device is different') {
      Alert.alert(
        'Login device is different',
        'Do you want to login on this device and logout from all other devices?',
        [
          {
            text: 'CANCEL',
          },
          {
            text: 'CONFIRM',
            onPress: () => {
              navigation.navigate('OnePass',{
                data: CMobileNum,
                Id: CLoginId,
                
              });
              setLoader('Sent Otp')
              setButtonColor('#262f40')
            },
          },
        ],
      );
    }
  };


  console.log('LoginPage');
  return (
    <KeyboardAvoidingView
      style={[flex(1)]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            styles.bgBlack,
            flex(1),
            styles.centerHorizontal,
            paddingPosition(60),
          ]}>
          <View>
            <Image
              source={require('../../../assets/LoginLogo2.png')}
              style={[
                {
                  width: widthValue(2.9),
                  height: widthValue(2.9),
                  resizeMode: 'contain',
                },
              ]}
            />
          </View>
          <LoginBox
            onChangeText={text => setCustomerID(text)}
            onChangepass={val => {setPass(val),checkConditions(val)}}
          />

          <View style={[{width: widthValue(1.4)}]}>
            <Text
              style={[
                styles.red,
                marginPosition(10),
                styles.textCenter,
                fontSize(10),
              ]}>
              {userSelector?.error}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              {backgroundColor: buttonColor},
              {
                width: widthValue(2.6),
              },
              padding(0, 15, 30),
              marginPosition(20),
              styles.allCenter,
              radius(40),
            ]}
            onPress={login}
            // onPress={otpPage}
          >
            <Text style={[fontSize(17), styles.fontwhite]}>{loader}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[marginPosition(15)]} onPress={forgotPage}>
            <Text style={[fontSize(17), styles.fontwhite]}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View style={[marginPosition(20), styles.row]}>
            <Text style={[fontSize(17), styles.fontwhite]}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={createPage}>
              <Text style={[fontSize(17), styles.green]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
