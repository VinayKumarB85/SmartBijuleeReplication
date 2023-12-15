import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import {
  styles,
  paddingPosition,
  padding,
  radius,
  marginPosition,
  fontSize,
  screenWidth,
  screenHeight,
  flex
} from '../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const NewAccount = ({ navigation }) => {
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isConPasswordFocused, setIsConPasswordFocused] = useState(false);
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [conError, setConError] = useState('');
  const [consumer, setConsumer] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [showConPassword, setshowConPassword] = useState(false)


  /*   --------EMAIL PART start ---------------  */
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  // email validation
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')


  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const capitalLetter = /[A-Z]/;
    return emailRegex.test(inputEmail) && !capitalLetter.test(inputEmail);
  }

  const handleEmailChange = (input) => {
    setEmail(input);
    if (validateEmail(input)) {
      setEmailError('');
    }
    else {
      setEmailError('Please enter a valid Email address')
    }
  };
  /* --------EMAIL PART END ---------------   */


  /* --------PASSWORD PART START ---------------   */
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleConShowPassword = () => {
    setshowConPassword(!showConPassword)
  }
  // ==============password validation============
  const validatePassword = (Enteredpassword) => {
    const passwordErrorsList = [];

    // <-----length----------->
    if (Enteredpassword.length < 8) {
      passwordErrorsList.push('Password Must be at least 8 characters');
    }

    // <-----CAPITAL/UPPERCASE and small/lowercase LETTER----------->
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(Enteredpassword)) {
      passwordErrorsList.push('Password must conatin one Uppercase and Lowercase letter')
    }

    // <-----NUMBER----------->
    if (!/\d/.test(Enteredpassword)) {
      passwordErrorsList.push('Password must conatin atleast one Number')
    }

    // <-----SPECIAL CHARACTER----------->

    if (!/[!@#$%^&*()\-_=+{};:<,.>]/.test(Enteredpassword)) {
      passwordErrorsList.push('Password must conatin atleast one Special character')
    }
    return passwordErrorsList;
  }


  const handlePasswordChange = (input) => {
    setPassword(input);
    const passwordErrorsList = validatePassword(input);
    setPasswordError(passwordErrorsList);
    // setConError(input !== confirmPassword ? "Passwords don't match" : '');
  }

  // =====confirm password========

  const check = (input) => {
    if (input === confirmPassword) {
      setConError('')
    }
    if (input.length < 5) {
      setConError('')
    } if (!input.length > 4 == confirmPassword) {
      setConError('password did not match ')
    }
    else {
      setConError('')
    }
  }

  const handleConfirmpasswordchange = (input) => {
    setConfirmPassword(input);
    // const passwordErrors = validate
    if (input.length < 4) {
      setConError("")
    } else {
      setConError("password didn't match");
    }
  }

  /* --------PASSWORD PART end ---------------   */

  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };

  const handleConPasswordFocus = () => {
    setIsConPasswordFocused(true);
  };
  const handlePhoneFocus = () => {
    setIsPhoneFocused(true);
  };
  const handleFullNameFocus = () => {
    setIsFullNameFocused(true);
  };


  const loginPage = () => {
    navigation.navigate('Login')
  };

  const ForgetPage = () => {
    navigation.navigate('Forgot');
  };

  const ConsumerPage = () => {
    navigation.navigate('Create');
  };

  /* --------OnSubmit PART Start ---------------   */


  const onSubmit = () => {
    if (!consumer.trim()) {
      Alert.alert('Warning', 'Please enter your Consumer ID')
      return;
    }
    if (!mobileNumber.trim()) {
      Alert.alert('Warning', 'Please enter your Mobile Number')
      return;
    }
    if (!fullName.trim()) {
      Alert.alert('Warning', 'Please enter your FullName ')
      return;
    }
    if (!email.trim()) {
      Alert.alert('Warning', 'Please enter your Email Address ')
      return;
    }
    if (!password.trim()) {
      Alert.alert('Warning', 'Please enter your Password')
      return;
    }
    if (!confirmPassword.trim()) {
      Alert.alert('Warning', 'Please confirm your Password')
      return;
    }

    Alert.alert('Success', 'Checking your details')
  }
  /* --------OnSubmit PART End ---------------   */
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          styles.bgBlack,
          { flexGrow: 1 },
          styles.spaceBetweenVertical,
          paddingPosition(50, 30, 20, 30),
        ]}>

        <TouchableOpacity onPress={ConsumerPage}
          style={[
            screenHeight(10),
            padding(0, 10, 10),
            styles.allCenter,
          ]}>
          <Image
            source={require('../../../assets/Xmark2.png')}
            style={[screenHeight(5.5), screenWidth(5.5), { resizeMode: 'contain' }]}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.centerHorizontal,
            marginPosition(40)
          ]}>
          <View
            style={[
              screenHeight(30),
              screenWidth(1.8),
              styles.bgdarkgreen,
              radius(0, 300, 0, 0, 300),
            ]}></View>
          <View
            style={[
              screenHeight(30),
              screenWidth(1.5),
              styles.bggreen,
              marginPosition(-12, 0, 0, 0),
              radius(0, 300, 0, 0, 300),
            ]}></View>
          <View
            style={[
              // screenHeight(1),
              screenWidth(1.2),
              styles.bggreyish,
              marginPosition(-13, 0, 0, 0),
              radius(30, 30, 30, 30),
              padding(0, 20, 20),
            ]}>
            <Text style={{ fontSize: 28, color: 'white' }}>
              {' '}
              Create
              <Text style={[fontSize(28), styles.green]}> Account</Text>
            </Text>
            <View style={{ ...paddingPosition(30, 20, 10, 20) }}>
              <View>
                <View
                  style={{
                    backgroundColor: isCustomerIdFocused
                      ? '#394252'
                      : 'transparent',
                    borderRadius: 20,
                    ...(isCustomerIdFocused
                      ? marginPosition(0, 0, 0, -10)
                      : {}),
                    ...(isCustomerIdFocused
                      ? padding(10, 10, 15, 10)
                      : padding(0)),
                  }}>
                  <Text
                    style={{
                      fontSize: isCustomerIdFocused ? 12 : 14,
                      color: 'white',
                    }}>
                    CONSUMER ID
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),

                    }}
                    keyboardType='numeric'
                    onFocus={handleCustomerFocus}
                    onBlur={() => setIsCustomerIdFocused(false)}
                    onChangeText={(consumerId) => setConsumer(consumerId)}
                    maxLength={10}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: isPhoneFocused
                      ? '#394252'
                      : 'transparent',
                    borderRadius: 20,
                    ...(isPhoneFocused
                      ? marginPosition(20, 0, 0, -10)
                      : marginPosition(20, 0, 0, 0)),
                    ...(isPhoneFocused
                      ? padding(10, 10, 15, 10)
                      : padding(0)),
                  }}>
                  <Text
                    style={{
                      fontSize: isPhoneFocused ? 12 : 14,
                      color: 'white',
                    }}>
                    MOBILE NUMBER
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    keyboardType='numeric'
                    onFocus={handlePhoneFocus}
                    onBlur={() => setIsPhoneFocused(false)}
                    onChangeText={(number) => setMobileNumber(number.replace(/[^0-9]/g, ''))}
                    maxLength={10}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: isFullNameFocused
                      ? '#394252'
                      : 'transparent',
                    borderRadius: 20,
                    ...(isFullNameFocused
                      ? marginPosition(20, 0, 0, -10)
                      : marginPosition(20)),
                    ...(isFullNameFocused
                      ? padding(10, 10, 15, 10)
                      : padding(0)),
                  }}>
                  <Text
                    style={{
                      fontSize: isFullNameFocused ? 12 : 14,
                      color: 'white',
                    }}>
                    FULLNAME <Text style={{ color: 'red', marginLeft: 2, marginBottom: -10 }}> *</Text>
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    onFocus={handleFullNameFocus}
                    onBlur={() => setIsFullNameFocused(false)}
                    onChangeText={(name) => setFullName(name)}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: isEmailFocused
                      ? '#394252'
                      : 'transparent',
                    borderRadius: 20,
                    ...(isEmailFocused
                      ? marginPosition(20, 0, 0, -10)
                      : marginPosition(20)),
                    ...(isEmailFocused
                      ? padding(10, 10, 15, 10)
                      : padding(0)),
                  }}>
                  <Text
                    style={{
                      fontSize: isEmailFocused ? 14 : 16,
                      color: 'white',
                    }}>
                    Email  <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
                  </Text>
                  <TextInput
                    style={[
                      { borderBottomWidth: 1 },
                      styles.borderGreen,
                      styles.fontwhite,
                      fontSize(20),
                    ]}
                    // keyboardType='email-address'
                    autoCapitalize='none'
                    onFocus={handleEmailFocus}
                    onBlur={() => setIsEmailFocused(false)}
                    onChangeText={handleEmailChange}
                    value={() => email}

                  />
                  {emailError ?
                    <Text style={[styles.red, fontSize(10), marginPosition(5)]}>{emailError}</Text> : ''}
                </View>
                <View
                  style={{
                    backgroundColor: isPasswordFocused
                      ? '#394252'
                      : 'transparent',
                    borderRadius: 20,
                    ...(isPasswordFocused
                      ? marginPosition(15, 0, 0, -10)
                      : marginPosition(20)),
                    ...(isPasswordFocused
                      ? padding(10, 10, 15, 10)
                      : padding(0)),
                  }}>
                  <Text
                    style={{
                      fontSize: isPasswordFocused ? 12 : 14,
                      color: 'white',
                    }}>
                    PASSWORD <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    secureTextEntry={!showPassword}
                    onFocus={handlePasswordFocus}
                    onBlur={() => setIsPasswordFocused(false)}
                    onChangeText={(input) => {
                      handlePasswordChange(input)
                      check(input)
                    }}
                    value={() => password}
                  />
                  <TouchableOpacity onPress={handleShowPassword}>
                    <FontAwesome5
                      name={showPassword ? 'eye' : 'eye-slash'}
                      color={'white'}
                      style={[styles.positionAbsolute,
                      { top: -30, right: 0 },
                      fontSize(22),
                      ]}
                    >
                    </FontAwesome5>
                  </TouchableOpacity>
                  {/* ==displaying errors== */}
                  {passwordError.length > 0 && (
                    <View style={[marginPosition(10)]}>
                      {passwordError.map((Error, index) => (
                        <Text key={index} style={[fontSize(10), styles.red]}>{Error}</Text>
                      )
                      )}
                    </View>
                  )}
                </View>
                <View
                  style={{
                    backgroundColor: isConPasswordFocused
                      ? '#394252'
                      : 'transparent',
                    borderRadius: 20,
                    ...(isConPasswordFocused
                      ? marginPosition(15, 0, 0, -10)
                      : marginPosition(20)),
                    ...(isConPasswordFocused
                      ? padding(10, 10, 15, 10)
                      : padding(0)),
                  }}>
                  <Text
                    style={{
                      fontSize: isConPasswordFocused ? 12 : 14,
                      color: 'white',
                    }}>
                    CONFIRM PASSWORD <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    secureTextEntry={!showConPassword}
                    onFocus={handleConPasswordFocus}
                    onBlur={() => setIsConPasswordFocused(false)}
                    onChangeText={(input) => {
                      handleConfirmpasswordchange(input)
                      // check(input)
                    }}
                    value={() => setConfirmPassword}
                  />
                  <TouchableOpacity onPress={handleConShowPassword}>
                    <FontAwesome5
                      name={showConPassword ? 'eye' : 'eye-slash'}
                      color={'white'}
                      style={[styles.positionAbsolute,
                      { top: -30, right: 0 },
                      fontSize(22),
                      ]}
                    >
                    </FontAwesome5>
                  </TouchableOpacity>
                  {conError ?
                    <Text style={[styles.red]}>{conError}</Text> : ''}
                </View>
              </View>
            </View>
          </View>
          <View
            style={
              [styles.allCenter,
              marginPosition(10, 0, 0, 10),
              screenHeight(8)]
            }>
            <TouchableOpacity
              style={[
                styles.bggreyish,
                padding(0, 15, 40),
                radius(40),
              ]}
              onPress={onSubmit}>
              <Text
                style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.allCenter, styles.row, screenHeight(25)]}>
            <Text style={[fontSize(17), styles.fontwhite]}>
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={loginPage}>
              <Text style={[styles.green, fontSize(17), marginPosition(0, 0, 0, 10)]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView >
  );
};

export default NewAccount;


{/* <TextInput
  style={{
    width: '100%',
    borderBottomWidth: 1,
    ...styles.borderGreen,
    ...styles.fontwhite,
    ...fontSize(20),
  }}
  secureTextEntry={!showPassword}
  onFocus={handlePasswordFocus}
  onBlur={() => setIsPasswordFocused(false)}
  onChangeText={(text) => {
    setPassword(text);
    handlePasswordChange(text);
    handleConfirmpasswordchange(confirmPassword, text);
  }}
  value={password}
/>

<TextInput
  style={{
    width: '100%',
    borderBottomWidth: 1,
    ...styles.borderGreen,
    ...styles.fontwhite,
    ...fontSize(20),
  }}
  secureTextEntry={!showConPassword}
  onFocus={handleConPasswordFocus}
  onBlur={() => setIsConPasswordFocused(false)}
  onChangeText={(text) => {
    setConfirmPassword(text);
    handleConfirmpasswordchange(text, password);
  }}
  value={confirmPassword}
/> */}

