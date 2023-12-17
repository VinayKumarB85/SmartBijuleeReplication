// import {
//   Text,
//   View,
//   Image,
//   TextInput,
//   KeyboardAvoidingView,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState,} from 'react';
// import {
//   styles,
//   fontSize,
//   radius,
//   flex,
//   widthValue,
//   heightValue,
//   paddingPosition,
//   marginPosition,
//   padding,
// } from '../../Utils/Styles';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import LoginBox from '../../Components/Login Box/LoginBox';
// // import { loginApi } from '../../api/authApi/loginApi';
// import { useDispatch, useSelector } from 'react-redux';
// import { userVerifyApi } from '../../../Js/api/authApi/loginApi'
// import { loginEndpoint } from '../../Constants/SettingCardInfo/Apiurl';

// const Login = ({navigation}) => {

//   const globalVariable = useSelector((state)=>state)
//   console.log('globalVariable',globalVariable);
//   const userSelector = useSelector((state)=>state.auth.userVerify)
//   console.log(userSelector)
//   const [loginAttempts,setLoginAttempts] = useState(0)
//   const [loginError,setLoginError] = useState('')
//   const [buttonColor,setButtonColor] = useState('#262f40')

//   const checkConditions = (pass)=>{

//     const isConditionSatisfied =typeof pass==='string' && pass.trim() !== '';
//     console.log("isConditionSatisfied:", isConditionSatisfied);
//     setButtonColor(isConditionSatisfied ? '#262f40' : '#64ad64')
//   }

//   const dispatch = useDispatch();
//   // const otpPage = () => {
//   //   navigation.navigate('OnePass');
//   // };
//   const forgotPage = () => {
//     navigation.navigate('Forgot');
//   };

//   const createPage = () => {
//     navigation.navigate('Create');
//   };

//   const login = async () => {
//     const loginresp = await dispatch(userVerifyApi(
//       {
//             "LoginID": "string",
//             "password": "string",
//             "confirmation": "N",
//             "deviceInfo": {
//               "deviceID": "122323",
//               "deviceMake": "android",
//               "deviceOS": "android",
//               "deviceOSVersion": "12.1"
//           } 
//     }
//     ));
//     console.log("login",loginresp);


//     if(loginresp.payload.status === 201){
//       const CustomerDetails = loginresp.payload.data
//       navigation.navigate('OnePass',{
//         data:CustomerDetails
//       })
//       setLoginAttempts(0)
//       setLoginError('')
//       console.log(CustomerDetails);
//     } 
//     // if(loginresp.payload.status === 430){
//     //   setLoginAttempts(loginAttempts + 1)

//     //   if(loginAttempts === 1){
//     //     setLoginError('Error Messege":You have made 1 login failed attempts, Left with 2 Retries')
//     //   } else if(loginAttempts ===2){
//     //     setLoginError('You have made 2 login failed attempts, Left with 1 Retries')
//     //   } else  if(loginAttempts >= 3 ){
//     //     setLoginError('Yor Account is Blocked due to 3 failed Attempts,please try after 24 hours or reset the password for instant login')
//     //   }
//     // }
//   };

//   console.log('hi')
//   return (
//     <KeyboardAvoidingView
//       style={[flex(1)]}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
//       <ScrollView contentContainerStyle={{flexGrow: 1}}>
//         <View
//           style={[
//             styles.bgBlack,
//             flex(1),
//             styles.centerHorizontal,
//             paddingPosition(60),
//           ]}>
//           <View>
//             <Image
//               source={require('../../../assets/LoginLogo2.png')}
//               style={[
//                 {
//                   width: widthValue(2.9),
//                   height: widthValue(2.9),
//                   resizeMode: 'contain',
//                 },
//               ]}
//             />
//           </View>
//           <LoginBox onInputChange={checkConditions} />


//           <View style={[{width:widthValue(1.4)}]}>
//             <Text style={[styles.red,marginPosition(10),styles.textCenter,fontSize(10)]}>{userSelector?.error}</Text>
//           </View>
//           <TouchableOpacity


//             style={[
//               {backgroundColor:buttonColor},
//               {
//                 width: widthValue(2.6),

//                 // height: heightValue(14),
//               },
//               padding(0, 15, 30),
//               marginPosition(40),
//               styles.allCenter,
//               radius(40),
//             ]}
//             onPress={login}
//             // onPress={otpPage}
//             >
//             <Text style={[fontSize(16), styles.fontwhite]}>Send Otp</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[marginPosition(15)]} onPress={forgotPage}>
//             <Text style={[fontSize(16), styles.fontwhite]}>
//               Forgot Password ?
//             </Text>
//           </TouchableOpacity>
//           <View style={[marginPosition(30), styles.row]}>
//             <Text style={[fontSize(16), styles.fontwhite]}>
//               Don't have an account ?
//             </Text>
//             <TouchableOpacity onPress={createPage}>
//               <Text style={[fontSize(16), styles.green]}> Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;


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
import { loginEndpoint } from '../../Constants/SettingCardInfo/Apiurl';

const Login = ({navigation}) => {

  const [loginAttempts,setLoginAttempts] = useState(0)
  const [loginError,setLoginError] = useState('')
  const [buttonColor,setButtonColor] = useState('#262f40')
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [CustomerID,setCustomerID] = useState('')
  const [pass,setPass] = useState('')

  const checkConditions = (pass)=>{

    const isConditionSatisfied =typeof pass==='string' && pass.trim() !== '';
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

  let loginresp;
  const login = async () => {
    try {
      const loginresp = await dispatch(userVerifyApi(
        {
            loginID: CustomerID,
            password: pass,
            confirmation: "N",
            deviceInfo: {
              deviceID: "122323",
              deviceMake: "android",
              deviceOS: "android",
              deviceOSVersion: "12.1"
            } 
      }));
      console.log("login",loginresp);
    } catch (error) {
      console.log("error",error);
    }
    


    if(loginresp.payload.status === 201)
    {
      const CustomerDetails = loginresp.payload.data
      navigation.navigate('OnePass',{
        data:CustomerDetails
      })
      setLoginAttempts(0)
      setLoginError('')
      console.log(CustomerDetails);
    // } if(loginresp.payload.status === 430){
    //   setLoginAttempts(loginAttempts + 1)

    //   if(loginAttempts === 1){
    //     setLoginError('Error Messege":You have made 1 login failed attempts, Left with 2 Retries')
    //   } else if(loginAttempts ===2){
    //     setLoginError('You have made 2 login failed attempts, Left with 1 Retries')
    //   } else  if(loginAttempts >= 3 ){
    //     setLoginError('Yor Account is Blocked due to 3 failed Attempts,please try after 24 hours or reset the password for instant login')
    //   }
    // }
    }
  };

  console.log('hi',CustomerID)
  console.log('password',pass)
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
          <LoginBox onInputChange={checkConditions}  setCustomerID={setCustomerID} CustomerID={CustomerID} setPass={setPass} pass={pass}/>
          <View style={[{width:widthValue(1.4)}]}>
            <Text style={[styles.red,marginPosition(10),styles.textCenter,fontSize(10)]}>{loginError}</Text>
          </View>
          <TouchableOpacity
            style={[
              {backgroundColor:buttonColor},
              {
                width: widthValue(2.6),
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
              <Text style={[fontSize(16), styles.green]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
