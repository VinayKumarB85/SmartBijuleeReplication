import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState,} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LoginBox from '../../Components/Login Box/LoginBox';
// import { loginApi } from '../../api/authApi/loginApi';
import { useDispatch, useSelector } from 'react-redux';
import { userVerifyApi } from '../../../Js/api/authApi/loginApi'
import { loginEndpoint } from '../../Constants/Apiurl';

const Login = ({navigation}) => {

  const globalVariable = useSelector((state)=>state)
  console.log('globalVariable',globalVariable);
  const userSelector = useSelector((state)=>state.auth.userVerify)
  console.log(userSelector)
  const [loginAttempts,setLoginAttempts] = useState(0)
  const [loginError,setLoginError] = useState('')
  const [buttonColor,setButtonColor] = useState('#262f40');
  const [CustomerID,setCustomerID]=useState('');
  const [pass,setPass]=useState('');
 console.log('customerid',CustomerID);
 console.log('password',pass);
  const checkConditions = (pass)=>{

    const isConditionSatisfied = typeof pass==='string' && pass.trim() !== '';
    console.log("isConditionSatisfied:", isConditionSatisfied);
    setButtonColor(isConditionSatisfied ? '#262f40' : '#64ad64')
  }

  const dispatch = useDispatch();
  // const otpPage = () => {
  //   navigation.navigate('OnePass');
  // };
  const forgotPage = () => {
    navigation.navigate('Forgot');
  };

  const createPage = () => {
    navigation.navigate('Create');
  };

  const login = async () => {
    const loginresp = await dispatch(userVerifyApi(
      {
            "LoginID": CustomerID,
            "password": pass,
            "confirmation": "N",
            "deviceInfo": {
              "deviceID": "122323",
              "deviceMake": "android",
              "deviceOS": "android",
              "deviceOSVersion": "12.1"
          } 
    }
    ));
    console.log("login",loginresp);


    if(loginresp.payload.status === 201){
      const CustomerDetails = loginresp.payload.data
      const loginId = loginresp.meta.arg.LoginID;
      navigation.navigate('OnePass',{
        data:CustomerDetails,
        Id:loginId,
      })
      setLoginError('')
      console.log(CustomerDetails,);
      console.log('loginId',loginId);
    } 
  };

  console.log('hi')
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
          <LoginBox onInputChange={checkConditions} onChangeText={(text)=>setCustomerID(text)} onChangepass={(val)=>setPass(val)}/>


          <View style={[{width:widthValue(1.4)}]}>
            <Text style={[styles.red,marginPosition(10),styles.textCenter,fontSize(10)]}>{userSelector?.error}</Text>
          </View>
          <TouchableOpacity


            style={[
              {backgroundColor:buttonColor},
              {
                width: widthValue(2.6),

                // height: heightValue(14),
              },
              padding(0, 15, 30),
              marginPosition(40),
              styles.allCenter,
              radius(40),
            ]}
            onPress={login}
            // onPress={otpPage}
            >
            <Text style={[fontSize(16), styles.fontwhite]}>Send Otp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[marginPosition(15)]} onPress={forgotPage}>
            <Text style={[fontSize(16), styles.fontwhite]}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View style={[marginPosition(30), styles.row]}>
            <Text style={[fontSize(16), styles.fontwhite]}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={createPage}>
              <Text style={[fontSize(16), styles.green]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;


