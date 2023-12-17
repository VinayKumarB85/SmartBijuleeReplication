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
// import { loginApi } from '../../api/authApi/loginApi';
// import { useDispatch, useSelector } from 'react-redux';

const Login = ({navigation}) => {

  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const dispatch = useDispatch()
  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const otpPage = () => {
    navigation.navigate('OnePass');
  };
  const forgotPage = () => {
    navigation.navigate('Forgot');
  };

  const createPage = () => {
    navigation.navigate('Create');
  };

  const login = async () => {
    const login = await dispatch(loginApi({
        
            "loginID": "string",
            "password": "string",
            "confirmation": "Y",
            "deviceInfo": {
              "deviceID": "string",
              "deviceMake": "string",
              "deviceOS": "string",
              "deviceOSVersion": "string"
          } 
    }));

    console.log("login",login);
  };

  
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
          <View style={[paddingPosition(30), styles.centerHorizontal]}>
            <View
              style={[
                styles.bggreenish,
                {height: heightValue(15), width: widthValue(2.2)},
                radius(20),
              ]}></View>
            <View
              style={[
                styles.bggreen,
                {height: heightValue(15), width: widthValue(1.7)},
                marginPosition(-38),
                radius(20),
              ]}></View>
            <View
              style={[
                styles.bggreyish,
                paddingPosition(0, 0, 25, 0),
                {width: widthValue(1.3)},
                radius(25),
                marginPosition(-38),
              ]}>
              <Text
                style={[
                  fontSize(28),
                  styles.fontwhite,
                  marginPosition(20, 0, 0, 25),
                ]}>
                Log<Text style={[styles.darkGreen]}> In</Text>
              </Text>
              <View
                style={[
                  isCustomerIdFocused
                    ? styles.bglightgreyish
                    : styles.bggreyish,
                  isCustomerIdFocused ? radius(15) : radius(0),
                  {
                    height: heightValue(10),
                  },
                  marginPosition(10, 24, 0, 24),
                ]}>
                <View
                  style={[
                    {
                      height: heightValue(10),
                    },
                    marginPosition(10, 20, 10, 20),
                  ]}>
                  <Text
                    style={[
                      isCustomerIdFocused ? fontSize(10) : fontSize(12),
                      styles.lightGray,
                    ]}>
                    CUSTOMER ID/MOBILE NUMBER
                  </Text>
                  <TextInput
                    style={[
                      {
                        // marginTop: heightValue(0),
                        width: widthValue(1.86),
                        paddingHorizontal: 0,
                        height: heightValue(20),
                        borderBottomWidth: 1,
                        paddingVertical: 0,
                      },
                      fontSize(18),
                      styles.fontwhite,
                      styles.borderGreen,
                    ]}
                    onFocus={handleCustomerFocus}
                    onBlur={() => setIsCustomerIdFocused(false)}></TextInput>
                </View>
              </View>
              <View style={[]}>
                <View
                  style={[
                    isPasswordFocused
                      ? styles.bglightgreyish
                      : styles.bggreyish,
                    isPasswordFocused ? radius(15) : radius(0),
                    {height: heightValue(9)},
                    marginPosition(0, 25, 0, 25),
                  ]}>
                  <View
                    style={[
                      {height: heightValue(12)},
                      marginPosition(10, 25, 0, 20),
                    ]}>
                    <Text
                      style={[
                        isPasswordFocused ? fontSize(10) : fontSize(12),
                        styles.lightGray,
                      ]}>
                      PASSWORD
                    </Text>
                    <View
                      style={[
                        styles.row,
                        {borderBottomWidth: 1},
                        styles.borderGreen,
                      ]}>
                      <TextInput
                        style={[
                          {
                            height: heightValue(20),
                            width: widthValue(2.2),
                          },
                          fontSize(16),
                          styles.fontwhite,
                        ]}
                        maxLength={12}
                        secureTextEntry={!showPassword}
                        onFocus={handlePasswordFocus}
                        onBlur={() => setIsPasswordFocused(false)}></TextInput>
                      <TouchableOpacity onPress={handleShowPassword}>
                        <FontAwesome5
                          name={showPassword ? 'eye' : 'eye-slash'}
                          color={'grey'}
                          style={[
                            styles.positionAbsolute,

                            fontSize(24),
                          ]}></FontAwesome5>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.bggreyish,
              {
                width: widthValue(2.6),

                // height: heightValue(14),
              },
              padding(0, 15, 30),
              marginPosition(40),
              styles.allCenter,
              radius(40),
            ]}
            // onPress={login}
            onPress={otpPage}
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
