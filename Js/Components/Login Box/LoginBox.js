import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
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

const LoginBox = ({onInputChange,setCustomerID,CustomerID,pass,setPass, onChangeText, onChangepass}) => {

  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleInputChanges = ()=>{
    onInputChange(setCustomerID,setPass)
  }

  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View style={[paddingPosition(30), styles.centerHorizontal]}>
            <View
              style={[
                styles.bggreenish,
                {height:50, width:180},
                radius(20),
              ]}></View>
            <View
              style={[
                styles.bggreen,
                {height:50, width:245},
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
                    value={CustomerID}
                    onChangeText={onChangeText}
                 
                    onFocus={handleCustomerFocus}
                    onBlur={() => setIsCustomerIdFocused(false)}></TextInput>
                </View>
              </View>
              <View>
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
                        value={pass}
                        maxLength={12}
                        secureTextEntry={!showPassword}
                        onChangeText={onChangepass}
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
    </View>
  )
}

export default LoginBox