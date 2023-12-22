import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {
    styles,
    paddingPosition,
    padding,
    fontSize,
    marginPosition,
    radius,
    flex,
    screenHeight,
    screenWidth,
    widthValue,
    heightValue,
    heightwidth,
    fonting
} from '../../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ResetPassComp = ({updateButtonColor,onchangeText,onChangeConfirm}) => {
   

    const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [otpInput,setOtpInput] = useState('')

    const handleOtpChange = (userOtp)=>{
        setOtpInput(userOtp)

        const isValid = userOtp.trim() !== '' && userOtp.length >=4;
        updateButtonColor(isValid)

    }


  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [isConPasswordFocused, setIsConPasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [conError, setConError] = useState('');
  const [showConPassword, setShowConPassword] = useState(false);

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleNewPassword = () => {
    setIsNewPasswordFocused(true);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleConShowPassword = () => {
    setShowConPassword(!showConPassword);
  };

  const handleConPasswordFocus = () => {
    setIsConPasswordFocused(true);
  };

  const validatePassword = (enteredPassword) => {
    if (enteredPassword.length < 8) {
      return 'Password must be at least 8 characters';
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(enteredPassword)) {
      return 'Password must contain one Uppercase and Lowercase letter';
    }

    if (!/\d/.test(enteredPassword)) {
      return 'Password must contain at least one Number';
    }

    if (!/[!@#$%^&*()\-_=+{};:<,.>]/.test(enteredPassword)) {
      return 'Password must contain at least one Special character';
    }

    return '';
  };

  const handleNewPasswordChange = (input) => {
    setPassword(input);
    const newPasswordError = validatePassword(input);
    setNewPasswordError(newPasswordError);
  };

  const check = (input) => {
    if (input !== '' && input === confirmPassword) {
      setConError('');
    } else {
      setConError("Passwords don't match");
    }
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input);
  
    // Check for at least 4 characters before validating and showing the error
    if (isConPasswordFocused && input.length >= 4) {
      check(password);
    } else {
      // Reset the error if the condition is not met
      setConError('');
    }
  };
  return (
    <View>
      <View
                        style={[styles.allCenter,
                        // screenHeight(2.3)
                        { height: heightValue(2.5),},
                        
                        ]}>
                        <View
                            style={[
                                styles.bgdarkgreen,
                                {height:50, width:200},
                                radius(0, 130, 0, 0, 130),
                                radius(20),
                            ]}></View>
                        <View
                            style={[
                                styles.bggreen,
                                {height:50, width:250},
                                marginPosition(-35),
                radius(20),
                            ]}></View>
                        <View
                            style={[
                                
                                screenWidth(1.25),
                                marginPosition(-35),
                                styles.bggreyish,
                                radius(30, 30, 30, 30),
                                paddingPosition(0,20,20,0)
                            ]}>
                            <Text style={[fontSize(26), styles.fontwhite, paddingPosition(40, 0, 0, 30)]}>
                                Set <Text style={[fontSize(26), styles.green,{letterSpacing:.5}]}>New Password</Text>
                            </Text>
                            <View style={[{
                                marginLeft: widthValue(9),
                                marginTop: heightValue(30)

                            }]}>
                                <View style={{ height: heightValue(10), margin: 0, marginBottom: 10 }}>
        <View style={{ height: heightValue(10), margin: 10 }}>
          <Text style={[{ fontSize: isNewPasswordFocused ? 11 : 13, },styles.gr]}>
             Password
          </Text>
          <View
            style={[
              styles.row,
              { borderBottomWidth: 1, width: widthValue(2) },
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}
          >
            <TextInput
              style={[
                {
                  paddingVertical: 0,
                  height: heightValue(20),
                  width: widthValue(2.2),
                },
                fontSize(19),
                styles.fontwhite,
              ]}
              maxLength={12}
              onChangeText={(input) => {
                handleNewPasswordChange(input);
                check(input);
                onchangeText(input)
              }}
              secureTextEntry={!showNewPassword}
              onFocus={handleNewPassword}
              onBlur={() => setIsNewPasswordFocused(false)}
            />
            <TouchableOpacity onPress={handleShowNewPassword}>
              <FontAwesome5
                name={showNewPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={fontSize(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: heightValue(9), margin: 0, marginBottom: 10 }}>
        <View style={{ height: heightValue(10), margin: 10 }}>
          <Text style={[styles.gr,{ fontSize: isConPasswordFocused ? 11 : 13, }]}>
            Confirm Password
          </Text>
          <View
            style={[
              styles.row,
              { borderBottomWidth: 1,width:widthValue(2) },
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}
          >
            <TextInput
              style={[
                {
                  paddingVertical: 0,
                  height: heightValue(20),
                  width: widthValue(2.2),
                },
                fontSize(19),
                styles.fontwhite,
              ]}
              maxLength={12}
              secureTextEntry={!showConPassword}
              onFocus={handleConPasswordFocus}
              onBlur={() => {
                setIsConPasswordFocused(false);
                setConError('');
              }}
              onChangeText={(input)=>{
                handleConfirmPasswordChange(input);
                onChangeConfirm(input)
              }
              }
              
            />
            <TouchableOpacity onPress={handleConShowPassword}>
              <FontAwesome5
                name={showConPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={fontSize(24)}
              />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
                        </View>
                    </View >
                            </View>
                            <View style={[marginPosition(20),styles.centerHorizontal]}>
            {newPasswordError ? (
              <Text style={[fontSize(14), styles.red]}>{newPasswordError}</Text>
            ) : null}
            {conError ? <Text style={styles.red}>{conError}</Text> : null}
          </View>

    </View>
  )
}

export default ResetPassComp