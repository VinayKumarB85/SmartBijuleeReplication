
/* ====================APP================== */

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import OnBoarding from './Components/Screens/OnBoarding'
import Bills from './Components/Screens/Bills'
import Events from './Components/Screens/Events'
import Power from './Components/Screens/Power'
import { styles, marginPosition, radius, fontSize, paddingPosition } from './Components/Styles'


export const App = () => {

  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1)
    }
  }

  const loginPage = () => {
    console.log('hi');
  }

  const onIndexChanged = (index) => {
    setCurrentPage(index)
  }

  return (
    <View style={{ flex: 1, ...styles.bgBlack }}>
      <Swiper
        showsButtons={true}
        buttonWrapperStyle={[
          styles.bggreen
        ]}
        dot={
          <View
            style={{ ...styles.bgWhite, width: 10, height: 10, ...radius(25), ...marginPosition(0, 7, 0, 7), zIndex: 999, }}></View>

        }
        activeDot={
          <View
            style={{ ...styles.bggreen, width: 10, height: 10, ...marginPosition(0, 7, 0, 7), ...radius(7) }}
          ></View>
        }
        paginationStyle={{
          bottom: -25,
        }}
        loop={false}
        index={currentPage}
        onIndexChanged={onIndexChanged}>

        <OnBoarding />
        <Bills />
        <Events />
        <Power />
      </Swiper>
      <View style={{ ...styles.flexEnd }}>
        <View
          style={{
            ...styles.row,
            ...styles.spaceBetween,
            ...paddingPosition(0, 30, 30, 30),
            width: '100%',
            backgroundColor: 'transparent'
          }}>
          <TouchableOpacity onPress={loginPage}>
            <Text style={{ ...styles.green, ...fontSize(25) }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextPage}>
            <Text style={{ ...styles.green, ...fontSize(25) }}>
              {currentPage === 3 ? 'Done' : 'Next'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


/* ====================Login================== */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native';

const Login = () => {
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -230}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            paddingTop: 80,
            paddingBottom: 30,
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#000',
          }}>
          <View style={{ height: '25%', alignItems: 'center' }}>
            <Image
              source={require('../assets/LoginLogo2.png')}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View style={{ height: '65%', alignItems: 'center' }}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.container}>
              <Text style={styles.header}>Log <Text style={styles.green}>In</Text></Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <View
                    style={[
                      styles.inputBackground,
                      {
                        backgroundColor: isCustomerIdFocused ? '#394252' : 'transparent',
                        borderRadius: 20,
                      },
                    ]}>
                    <Text style={styles.label}>CONSUMER ID/MOBILE NUMBER</Text>
                    <TextInput
                      style={styles.input}
                      onFocus={handleCustomerFocus}
                      onBlur={() => setIsCustomerIdFocused(false)}
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <View
                    style={[
                      styles.inputBackground,
                      {
                        backgroundColor: isPasswordFocused ? '#394252' : 'transparent',
                        borderRadius: 20,
                      },
                    ]}>
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={!showPassword}
                      onFocus={handlePasswordFocus}
                      onBlur={() => setIsPasswordFocused(false)}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                      <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Send Otp</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account ? <Text style={styles.green}>Sign Up</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    fontSize: 28,
    color: 'white',
  },
  green: {
    color: '#4CAF50',
  },
  inputContainer: {
    marginTop: 30,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputBackground: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    width: '95%',
    borderBottomWidth: 1,
    borderColor: 'green',
    color: 'white',
    fontSize: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#394252',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
  line: {
    width: '60%',
    height: 5,
    backgroundColor: '#394252',
    marginVertical: 5,
  },
});

export default Login;


/* ============Login Changed new=========================== */
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {
  styles,
  paddingPosition,
  padding,
  fontSize,
  marginPosition,
  radius,
  flex,
  heightwidth,
  widthValue
} from '../../Utils/Styles';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Buttons from '../../Components/Buttons';
import Input from '../../Components/Input';
import { create } from 'react-test-renderer'


const Login = ({ navigation }) => {
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };


  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const OtpPage = () => {
    navigation.navigate('Forgot')
  }
  const ForgetPage = () => {
    navigation.navigate('Forgot')
  }

  const ConsumerPage = () => {
    navigation.navigate('Create')
  }
  return (
    <KeyboardAvoidingView
      style={[flex(1)]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -120}>
      <ScrollView contentContainerStyle={[flex(1)]}>
        <View
          style={[
            styles.bgBlack,
            paddingPosition(30, 30, 20, 30),
            styles.centerHorizontal,
            styles.positionRelative,
            flex(1)
          ]}>
          <View
            style={[
              heightwidth('25%', '100%'),
              styles.allCenter,
              flex(1)
            ]}>
            <Image
              source={require('../../../assets/LoginLogo2.png')}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View
            style={[heightwidth('53%', '100%'),
            styles.centerHorizontal,
            marginPosition(10),
            flex(3)]}>
            <View
              style={[
                heightwidth('6%', '60%'),
                styles.bgdarkgreen,
                radius(0, 300, 0, 0, 300),
              ]}></View>
            <View
              style={[
                styles.bggreen,
                heightwidth('6%', '75%'),
                marginPosition(-5, 0, 0, 0),
                radius(0, 300, 0, 0, 300),
              ]}></View>
            <View
              style={[
                heightwidth('88%', '90%'),
                styles.bggreyish,
                marginPosition(-5, 0, 0, 0),
                radius(30, 30, 30, 30),
                padding(0, 10, 20),
              ]}>
              <Text style={[fontSize(30), styles.fontwhite]}>
                Log <Text style={[fontSize(30), styles.green]}>In</Text>
              </Text>

              <View style={[paddingPosition(20, 20, 20, 20)]}>
                <Input handleFocus={handleCustomerFocus}
                  text={'CONSUMER ID/MOBILE NUMBER'}
                />
                <View>
                  <View
                    style={[
                      isPasswordFocused
                        ? styles.bglightgreyish : styles.bggreyish,
                      marginPosition(0, 0, 0, -10),
                      paddingPosition(10, 15, 10, 15),
                      styles.positionRelative,
                      radius(14)]}>
                    <Text style={[isPasswordFocused ? fontSize(14) : fontSize(16), styles.fontwhite]}>
                      PASSWORD
                    </Text>
                    <TextInput
                      style={[
                        widthValue('95%'),
                        { borderBottomWidth: 1 },
                        styles.borderGreen,
                        styles.fontwhite,
                        fontSize(18),
                      ]}
                      secureTextEntry={!showPassword}
                      onFocus={handlePasswordFocus}
                      onBlur={() => setIsPasswordFocused(false)}
                    />
                    <TouchableOpacity onPress={handleShowPassword}>
                      <FontAwesome5
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={20}
                        color={'white'}
                        style={[styles.positionAbsolute,
                        { top: -40, right: 10 }
                        ]}
                      >
                      </FontAwesome5>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View >
          <View
            style={[
              heightwidth('17%', '80%'),
              paddingPosition(0, 0, 15, 0),
              styles.allCenter,
              { gap: 10 },
              flex(1),
            ]}>
            <Buttons text={'Send Otp'}
              onPress={OtpPage} style={[
                styles.bggreyish,
                marginPosition(20),
                paddingPosition(15, 30, 15, 30),
                radius(50),
              ]}
              textStyle={[fontSize(19), styles.fontwhite]} />
            <Buttons
              text={'Forgot password ?'}
              textStyle={[fontSize(20), styles.fontwhite]}
              onPress={ForgetPage} />
          </View>
          <View style={[styles.allCenter, styles.row, heightwidth('10%', '100%'), flex(1)]}>
            <Text style={[styles.fontwhite, fontSize(20)]}>
              Don't have an account ?</Text>
            <TouchableOpacity onPress={ConsumerPage}>
              <Text style={[styles.green, fontSize(20)]}> Sign Up</Text>
            </TouchableOpacity>
          </View >
        </View >
      </ScrollView >
    </KeyboardAvoidingView >
  );
};

export default Login;




================forgot page======================





import {
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {
    styles,
    paddingPosition,
    padding,
    fontSize,
    marginPosition,
    radius,
    flex,
    positionAbsolute,
    screenHeight,
    screenWidth,
} from '../../Utils/Styles';
import { TouchableOpacity } from 'react-native';
import NewAccount from './NewAccount';
import Input from '../../Components/Input';


const Create = ({ navigation }) => {
    const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);

    const handleCustomerFocus = () => {
        setIsCustomerIdFocused(true);
    };

    const loginPage = () => {
        navigation.navigate('Login')
    }

    const newAccountPage = () => {
        navigation.navigate('NewAccount')
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -230}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View
                    style={[
                        styles.bgBlack,
                        flex(1),
                        styles.spaceBetweenVertical,
                        paddingPosition(40, 30, 20, 30),
                        styles.centerHorizontal,
                        styles.positionRelative,
                        positionAbsolute,
                    ]}>
                    <TouchableOpacity onPress={loginPage}
                        style={[
                            screenHeight(5),
                            padding(0, 10, 10),
                            styles.allCenter,
                        ]}>
                        <Image
                            source={require('../../../assets/Xmark2.png')}
                            style={[screenHeight(4.5), screenWidth(4.5), { resizeMode: 'contain' }]}
                        />
                    </TouchableOpacity >
                    <View
                        style={{ width: '100%', height: '65%', ...styles.centerHorizontal }}>
                        <View
                            style={{
                                width: '60%',
                                height: '5%',
                                ...styles.bgdarkgreen,
                                ...radius(0, 300, 0, 0, 300),
                            }}></View>
                        <View
                            style={{
                                width: '80%',
                                height: '5%',
                                ...styles.bggreen,
                                ...marginPosition(-5, 0, 0, 0),
                                ...radius(0, 300, 0, 0, 300),
                            }}></View>
                        <View
                            style={{
                                width: '95%',
                                height: '50%',
                                ...styles.bggreyish,
                                ...marginPosition(-5, 0, 0, 0),
                                ...radius(30, 30, 30, 30),
                                ...padding(0, 20, 20),
                            }}>
                            <Text style={{ fontSize: 28, color: 'white', ...marginPosition(20) }}>
                                CONSUMER
                                <Text style={{ fontSize: 28, ...styles.green }}> ID</Text>
                            </Text>

                            <View style={{ ...paddingPosition(30, 20, 10, 20), ...styles.centerVertical }}>
                                <Input handleFocus={handleCustomerFocus}
                                    text={'CONSUMER ID'} />
                            </View>
                        </View>

                        <View
                            style={{
                                width: '80%',
                                height: '35%',
                                ...styles.allCenter,
                                gap: 10,
                            }}>
                            <TouchableOpacity
                                style={{
                                    ...styles.bggreyish,
                                    ...paddingPosition(15, 30, 15, 30),
                                    borderRadius: 50,

                                }}
                                onPress={newAccountPage}>
                                <Text
                                    style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                <Text style={{ color: 'white', fontSize: 18 }}>
                                    Already have an account ?
                                </Text>
                                <TouchableOpacity onPress={loginPage}><Text style={{ ...styles.green, fontSize: 18 }}> Sign In</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
};

export default Create;

/* =======email validation============== */

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const NewAccount = ({ navigation }) => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailChange = (input) => {
    setEmail(input);
    if (validateEmail(input)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* ... (other parts of your UI) */}
      <View>
        <View
          style={{
            backgroundColor: isEmailFocused ? '#394252' : 'transparent',
            borderRadius: 20,
            // Add other styles as needed
          }}
        >
          <Text style={{ fontSize: isEmailFocused ? 12 : 14, color: 'white' }}>
            Email <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
          </Text>
          <TextInput
            style={{
              width: '95%',
              borderBottomWidth: 1,
              // Add other styles as needed
            }}
            onFocus={handleEmailFocus}
            onBlur={() => setIsEmailFocused(false)}
            onChangeText={handleEmailChange}
            value={email}
          />
          {emailError ? (
            <Text style={{ color: 'red', fontSize: 12 }}>{emailError}</Text>
          ) : null}
        </View>
        {/* ... (other input fields and components) */}
      </View>
      {/* ... (other parts of your UI) */}
    </ScrollView>
  );
};

export default NewAccount;
/*
=========Password validation with matching============= */

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const NewAccount = ({ navigation }) => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const validatePassword = (inputPassword) => {
    const passwordErrors = [];

    // Password should be at least 8 characters long
    if (inputPassword.length < 8) {
      passwordErrors.push('Password must be at least 8 characters long');
    }

    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(inputPassword)) {
      passwordErrors.push('Password must contain at least one uppercase letter');
    }

    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(inputPassword)) {
      passwordErrors.push('Password must contain at least one lowercase letter');
    }

    // Password should contain at least one number
    if (!/\d/.test(inputPassword)) {
      passwordErrors.push('Password must contain at least one number');
    }

    // Password should contain at least one special character
    if (!/[!@#$%^&*()\-_=+{};:<,.>]/.test(inputPassword)) {
      passwordErrors.push('Password must contain at least one special character');
    }

    return passwordErrors;
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordChange = (input) => {
    setPassword(input);
    const passwordErrors = validatePassword(input);
    setErrors(passwordErrors);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input);
    const passwordErrors = validatePassword(password);
    setErrors(passwordErrors);
    if (input !== password) {
      setErrors(prevErrors => [...prevErrors, 'Passwords do not match']);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* ... (other parts of your UI) */}
      <View>
        <View
          style={{
            backgroundColor: isPasswordFocused ? '#394252' : 'transparent',
            borderRadius: 20,
            // Add other styles as needed
          }}
        >
          <Text style={{ fontSize: isPasswordFocused ? 12 : 14, color: 'white' }}>
            Password <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
          </Text>
          <TextInput
            style={{
              width: '95%',
              borderBottomWidth: 1,
              // Add other styles as needed
            }}
            secureTextEntry={true}
            onFocus={handlePasswordFocus}
            onBlur={() => setIsPasswordFocused(false)}
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>

        {/* Display errors below the password field */}
        {errors.length > 0 && (
          <View style={{ marginTop: 10 }}>
            {errors.map((error, index) => (
              <Text key={index} style={{ color: 'red' }}>
                {error}
              </Text>
            ))}
          </View>
        )}

        <View
          style={{
            backgroundColor: isConfirmPasswordFocused ? '#394252' : 'transparent',
            borderRadius: 20,
            // Add other styles as needed
          }}
        >
          <Text style={{ fontSize: isConfirmPasswordFocused ? 12 : 14, color: 'white' }}>
            Confirm Password <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
          </Text>
          <TextInput
            style={{
              width: '95%',
              borderBottomWidth: 1,
              // Add other styles as needed
            }}
            secureTextEntry={true}
            onFocus={handleConfirmPasswordFocus}
            onBlur={() => setIsConfirmPasswordFocused(false)}
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
          />
        </View>
        {/* ... (other input fields and components) */}
      </View>
      {/* ... (other parts of your UI) */}
    </ScrollView>
  );
};

export default NewAccount;


/* ===============empty boxed ================ */

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const NewAccount = ({ navigation }) => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordChange = (input) => {
    setPassword(input);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input);
  };

  const handleSubmit = () => {
    // Validation logic
    if (!password || !confirmPassword) {
      Alert.alert('Fill Required Fields', 'Please fill in all required fields');
      return;
    }

    // Additional validation logic for password matching, etc. can be added here

    // Proceed with submission if all validations pass
    // Your submission code goes here
    // For example, you can call an API or perform other actions on submission
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* ... (other parts of your UI) */}
      <View>
        <View
          style={{
            backgroundColor: isPasswordFocused ? '#394252' : 'transparent',
            borderRadius: 20,
            // Add other styles as needed
          }}
        >
          <Text style={{ fontSize: isPasswordFocused ? 12 : 14, color: 'white' }}>
            Password <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
          </Text>
          <TextInput
            style={{
              width: '95%',
              borderBottomWidth: 1,
              // Add other styles as needed
            }}
            secureTextEntry={true}
            onFocus={handlePasswordFocus}
            onBlur={() => setIsPasswordFocused(false)}
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>

        <View
          style={{
            backgroundColor: isConfirmPasswordFocused ? '#394252' : 'transparent',
            borderRadius: 20,
            // Add other styles as needed
          }}
        >
          <Text style={{ fontSize: isConfirmPasswordFocused ? 12 : 14, color: 'white' }}>
            Confirm Password <Text style={{ color: 'red', marginLeft: 1, marginBottom: -10 }}> *</Text>
          </Text>
          <TextInput
            style={{
              width: '95%',
              borderBottomWidth: 1,
              // Add other styles as needed
            }}
            secureTextEntry={true}
            onFocus={handleConfirmPasswordFocus}
            onBlur={() => setIsConfirmPasswordFocused(false)}
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
          />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>

        {/* ... (other input fields and components) */}
      </View>
      {/* ... (other parts of your UI) */}
    </ScrollView>
  );
};

export default NewAccount;

/* ====================validated form ====================== */

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
  const [mobileNumber, setmobileNumber] = useState('');
  const [fullName, setfullName] = useState('');


  /*   --------EMAIL PART start ---------------  */
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  // email validation
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')


  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  }

  const handleEmailChange = (input) => {
    setEmail(input);
    if (validateEmail(input)) {
      setEmailError('');
    } else {
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
  }

  // =====confirm password========


  const handleConfirmpasswordchange = (input) => {
    setConfirmPassword(input);
    // const passwordErrors = validate
    if (input !== password) {
      setConError("password didn't match")
    } else {
      setConError('');
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
    console.log('hi');
  };

  const ForgetPage = () => {
    navigation.navigate('Forgot');
  };

  const ConsumerPage = () => {
    navigation.navigate('Create');
  };

  /* --------OnSubmit PART Start ---------------   */

  const onSubmit = () => {
    if (!consumer.trim() || !mobileNumber.trim() || !fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Warning', 'Please fill in all the required fields');
      return;
    }
    if (consumer.trim() || mobileNumber.trim() || fullName.trim() || email.trim() || password.trim() || confirmPassword.trim()) {
      Alert.alert('Success', 'Checking your deatils in Database');
      return;
    }

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
            style={[screenHeight(5), screenWidth(5), { resizeMode: 'contain' }]}
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
              marginPosition(-8, 0, 0, 0),
              radius(0, 300, 0, 0, 300),
            ]}></View>
          <View
            style={[
              // screenHeight(1),
              screenWidth(1.2),
              styles.bggreyish,
              marginPosition(-8, 0, 0, 0),
              radius(30, 30, 30, 30),
              padding(0, 20, 20),
            ]}>
            <Text style={{ fontSize: 28, color: 'white' }}>
              {' '}
              Create
              <Text style={{ fontSize: 28, ...styles.green }}> Account</Text>
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
                      width: '95%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),

                    }}
                    keyboardType='numeric'
                    onFocus={handleCustomerFocus}
                    onBlur={() => setIsCustomerIdFocused(false)}
                    value={() => consumer}
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
                      width: '95%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    keyboardType='numeric'
                    onFocus={handlePhoneFocus}
                    onBlur={() => setIsPhoneFocused(false)}
                    value={() => mobileNumber}
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
                      width: '95%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    onFocus={handleFullNameFocus}
                    onBlur={() => setIsFullNameFocused(false)}
                    value={() => fullName}
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
                    style={{
                      width: '95%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    onFocus={handleEmailFocus}
                    onBlur={() => setIsEmailFocused(false)}
                    onChangeText={handleEmailChange}

                  />
                  {emailError ?
                    <Text style={[styles.red]}>{emailError}</Text> : ''}
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
                      width: '95%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    secureTextEntry={!showPassword}
                    onFocus={handlePasswordFocus}
                    onBlur={() => setIsPasswordFocused(false)}
                    onChangeText={handlePasswordChange}
                    value={() => setPassword}
                  />
                  <TouchableOpacity onPress={handleShowPassword}>
                    <FontAwesome5
                      name={showPassword ? 'eye' : 'eye-slash'}
                      color={'white'}
                      style={[styles.positionAbsolute,
                      { top: -40, right: 10 },
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
                      width: '95%',
                      borderBottomWidth: 1,
                      ...styles.borderGreen,
                      ...styles.fontwhite,
                      ...fontSize(20),
                    }}
                    secureTextEntry={!showPassword}
                    onFocus={handleConPasswordFocus}
                    onBlur={() => setIsConPasswordFocused(false)}
                    onChangeText={handleConfirmpasswordchange}
                    value={() => setConfirmPassword}
                  />
                  <TouchableOpacity onPress={handleShowPassword}>
                    <FontAwesome5
                      name={showPassword ? 'eye' : 'eye-slash'}
                      color={'white'}
                      style={[styles.positionAbsolute,
                      { top: -40, right: 10 },
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
            <Text style={{ color: 'white', fontSize: 18 }}>
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={loginPage}>
              <Text style={{ ...styles.green, fontSize: 18, ...marginPosition(0, 0, 0, 10) }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView >
  );
};

export default NewAccount;



==========================================


import React from 'react'
import { useState } from 'react';
import { View,Text,TextInput } from 'react-native'
// import { styles } from '../../../styles/Styles';
import { screenHeight,borderWidth,styles ,screenWidth,radius,marginPosition,heightwidth,fontSize,fontFamily,row,borderColor, bgColor, display, setheight, setheightPASS} from '../../../styles/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Passwordcomponent = ({confpstar}) => {
    let [eyeshow,seteyeshow]=useState(true);
    let [eyeshowcp,seteyeshowcp]=useState(true);

    ///////////////////////////password///////////////////
    let [passwordval,setpasswordval]=useState('');
    let [password,setpassword]=useState(true);
    let [focuspassword,setfocuspassword]=useState(false);
    let [passwordcase,setpasswordcase]=useState(true);
    let [passwordsymbol,setpasswordsymbol]=useState(true);
    let [passwordstar,setpasswordstar]=useState(true);
    let [passlength,setpasslength]=useState('');


    ////////////////////////////confirm password//////////
//  let [confirmpasswordval,setconfirmpasswordval]=useState('');
 let [confirmpassword,setconfirmpassword]=useState(true);
 let [focusconfirmpassword,setfocusconfirmpassword]=useState(false);
 let [check,setcheck]=useState(false)
 let [cval,setcval]=useState('')
//  let [confpstar,setconfptar]=useState(true);
 let [conpasslength,setconpasslength]=useState('');

 let handlepassword=(pass)=>{

    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const uppercaseRegex = /[A-Z]/.test(pass);
    if (pass.length<7) {
        setpassword(false);
        setpasswordstar(false);
      } else {
        setpassword(true);
      }
      if(hasLetter){
        setpasswordcase(true)
      }
      else{
        setpasswordcase(false)
        setpasswordstar(false);

      }
      if(hasNumber && hasSpecialChar){
        setpasswordsymbol(true)

      }
      else{
        setpasswordsymbol(false)
        setpasswordstar(false);


      }
      if(uppercaseRegex){
        setpasswordcase(true)
        setpasswordstar(true);

      }
      else{
        setpasswordcase(false)
        setpasswordstar(false);


      }
  }
  ////////////////
  let handleconfpassword=(cc,pass)=>{
    setcval(cc)
    if(pass===cc){
      if(passwordstar){
        setconfirmpassword(true);
        if(cc.length>1){
        setcheck(true);
        }
      }
      else{
        setconfirmpassword(false)
      }
    }
    else{
        if(cc.length>4){
          setconfirmpassword(false);
          setcheck(false);
        }
    }
  }
  return (
    <View style={[styles.column]}>
          <View style={[setheight(passwordsymbol),setheightPASS(passwordcase),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focuspassword),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>PASSWORD</Text>
            {passwordstar ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput secureTextEntry={eyeshow} keyboardType="default" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,2),borderColor("#39763b"),fontSize(15),styles.white]} onFocus={()=>setfocuspassword(!focuspassword)} onBlur={()=>setfocuspassword(!focuspassword)}




             onChangeText={(val)=>{handlepassword(val)
             setpasswordval(val)
             setpasslength(val)
             handleconfpassword(cval,val)
            }}>





            </TextInput>
                   <FontAwesome5 name={eyeshow ?'eye-slash':'eye'} style={[marginPosition('-12%',0,'5%','84%'),styles.gr,fontSize(20)]} onPress={()=>seteyeshow(!eyeshow)} />
            {
             password ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>enter 8 or more characters</Text>
             }
             {
             passwordsymbol ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>A Number and a symbol</Text>
             }
              {
             passwordcase ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>An Upper and LowerCase Letter</Text>
             }
        </View>
        <View style={[setheight(confirmpassword),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focusconfirmpassword),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>CONFIRM PASSWORD</Text>
            {confirmpassword ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput secureTextEntry={eyeshowcp} keyboardType="default" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,2),borderColor("#39763b"),fontSize(14),styles.white]} onFocus={()=>setfocusconfirmpassword(!focusconfirmpassword)} onBlur={()=>setfocusconfirmpassword(!focusconfirmpassword)}

            onChangeText={(val)=>{
             handleconfpassword(val,passwordval,)
             setconpasslength(val)







            }}></TextInput>
                   <FontAwesome5 name={eyeshowcp ?'eye-slash':'eye'} style={[marginPosition('-12%',0,'5%','84%'),styles.gr,fontSize(20)]} onPress={()=>seteyeshowcp(!eyeshowcp)} />

            {
             confirmpassword ?<Text style={[display('none')]}></Text>
             : <Text style={[marginPosition('2%',0,0,'8%'),fontSize(11),styles.red]}>Password does not match</Text>
             }
             { check ?
                <FontAwesome5 name={'check'} style={[marginPosition('0%',0,'5%','86%'),styles.green,fontSize(17)]}/>:<Text style={[display('none')]} ></Text>
             }
        </View>

    </View>
  )
}

export default Passwordcomponent



// ==========login final =================
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
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
  heightValue
} from '../../Utils/Styles';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Buttons from '../../Components/Buttons';
import Input from '../../Components/Input';


const Login = ({ navigation }) => {
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleCustomerFocus = () => {
      setIsCustomerIdFocused(true);
  };

  const handlePasswordFocus = () => {
      setIsPasswordFocused(true);
  };


  const handleShowPassword = () => {
      setShowPassword(!showPassword)
  }

  const OtpPage = () => {
      navigation.navigate('OnePass')
  }
  const ForgetPage = () => {
      navigation.navigate('Forgot')
  }

  const ConsumerPage = () => {
      navigation.navigate('Create')
  }
  return (
      // <KeyboardAvoidingView
      //     style={[flex(1)]}
      //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      //     keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
      //     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
          style={[
              styles.bgBlack,
              styles.centerHorizontal,
              styles.spaceBetweenVertical,
              flex(1),
              // paddingPosition(40, 20, 10, 20)
          ]}>
          <View
              style={[
                  screenHeight(3),
                  marginPosition(0, 0, 20, 0),
                  paddingPosition(30),
                  styles.bgDarkBlue
              ]}>
              <Image
                  source={require('../../../assets/LoginLogo2.png')}
                  style={[screenHeight(3), screenWidth(3), { resizeMode: 'contain' }, marginPosition(0, 0, 10, 0)]}
              />
          </View>
          <View
              style={[styles.centerHorizontal, styles.bgWhite, screenHeight(3)]}>
              <View
                  style={[
                      screenHeight(35),
                      screenWidth(2.2),
                      styles.bgdarkgreen,
                      radius(0, 300, 0, 0, 300),
                  ]}></View>
              <View
                  style={[
                      styles.bggreen,
                      screenHeight(30),
                      screenWidth(1.8),
                      marginPosition('-3%', 0, 0, 0),
                      radius(0, 300, 0, 0, 300),
                  ]}></View>
              <View
                  style={[
                      screenHeight(3),
                      screenWidth(1.3),
                      styles.bggreyish,
                      marginPosition('-3%'),
                      radius(30, 30, 30, 30),
                      paddingPosition(5, 20, 35, 20),
                  ]}>
                  <Text style={[fontSize(24), styles.fontwhite, padding(0, 10, 13)]}>
                      Log <Text style={[fontSize(24), styles.green]}>In</Text>
                  </Text>

                  <View style={[paddingPosition(0, 10, 0, 20)]}>
                      <Input handleFocus={handleCustomerFocus}
                          text={'CONSUMER ID/MOBILE NUMBER'}
                      />
                      <View>
                          <View
                              style={[
                                  isPasswordFocused
                                      ? styles.bglightgreyish : styles.bggreyish,
                                  marginPosition(0, 0, 0, -15),
                                  paddingPosition(5, 15, 10, 20),
                                  styles.positionRelative,
                                  radius(20)]}>
                              <Text style={[isPasswordFocused ? fontSize(13) : fontSize(14), styles.gr]}>
                                  PASSWORD
                              </Text>
                              <TextInput
                                  style={[
                                      { borderBottomWidth: 1 },
                                      styles.borderGreen,
                                      styles.fontwhite,
                                      fontSize(18),
                                      marginPosition(-10)
                                  ]}
                                  secureTextEntry={!showPassword}
                                  onFocus={handlePasswordFocus}
                                  onBlur={() => setIsPasswordFocused(false)}
                              />
                              <TouchableOpacity onPress={handleShowPassword}>
                                  <FontAwesome5
                                      name={showPassword ? 'eye' : 'eye-slash'}
                                      color={'grey'}
                                      style={[styles.positionAbsolute,
                                      { top: -30, right: 0 },
                                      fontSize(24),
                                      ]}
                                  >
                                  </FontAwesome5>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
              </View>
          </View >
          <View style={[
              styles.spaceBetweenVertical,
              styles.centerHorizontal,
              marginPosition(40),
              styles.bgGray,
              screenHeight(1)
              // { height: heightValue(5), width: widthValue(1) }
          ]}>
              <View style={[marginPosition]}>
                  <Buttons text={'Send Otp'}
                      onPress={OtpPage} style={[
                          styles.bggreyish,
                          padding(0, 12, 30),
                          radius(50),
                          { width: widthValue(2.6) },
                          styles.allCenter
                      ]}
                      textStyle={[fontSize(20), styles.fontwhite]} />
                  <Buttons
                      style={[styles.allCenter]}
                      text={'Forgot password ?'}
                      textStyle={[fontSize(18), styles.fontwhite, marginPosition(10),]}
                      onPress={ForgetPage} />
              </View>

              <View style={[styles.allCenter, styles.row, styles.bgRed, screenHeight(1), screenWidth(1)]}>
                  <Text style={[styles.fontwhite, fontSize(18),]}>
                      Don't have an account ?</Text>
                  <TouchableOpacity onPress={ConsumerPage}>
                      <Text style={[styles.green, fontSize(18)]}> Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </View >
      </View >
      //     </ScrollView >
      // </KeyboardAvoidingView >
  );
};

export default Login;

/* ==========the last pakka final copy============== */


import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
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
} from '../../Utils/Styles';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Buttons from '../../Components/Buttons';
import Input from '../../Components/Input';
import Password from '../../Components/Password';


const Login = ({ navigation }) => {



  const handleCustomerFocus = () => {
      setIsCustomerIdFocused(true);
  };

  const handlePasswordFocus = () => {
      setIsPasswordFocused(true);
  };


  const handleShowPassword = () => {
      setShowPassword(!showPassword)
  }

  const OtpPage = () => {
      navigation.navigate('OnePass')
  }
  const ForgetPage = () => {
      navigation.navigate('Forgot')
  }

  const ConsumerPage = () => {
      navigation.navigate('Create')
  }
  return (
      <KeyboardAvoidingView
          style={[flex(1)]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -230}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View
                  style={[
                      styles.bgBlack,
                      styles.allCenter,
                      flex(1),
                  ]}>
                  <View style={[styles.centerHorizontal, { width: widthValue(1), justifyContent: 'flex-end' }]}>
                      <View>
                          <Image
                              source={require('../../../assets/LoginLogo2.png')}
                              style={{ height: heightValue(5), width: widthValue(3), resizeMode: 'contain' }}
                          />
                      </View>
                  </View>
                  <View style={[{ alignItems: 'center', justifyContent: 'flex-end' }, { height: heightValue(2.4), width: widthValue(1), }]}>
                      <View
                          style={[
                              styles.bgdarkgreen,
                              { height: heightValue(60), width: widthValue(2.5) },
                              radius(0, 130, 0, 0, 130),
                              { alignItems: 'flex-start' }
                          ]}></View>
                      <View
                          style={[
                              styles.bggreen,
                              { height: heightValue(60), width: widthValue(1.8) },
                              // screenHeight(30),
                              // screenWidth(1.8),
                              radius(0, 80, 0, 0, 80),

                          ]}></View>
                      <View
                          style={[
                              screenWidth(1.3),
                              styles.bggreyish,
                              radius(25),
                              padding(0, 0, 20),
                              { paddingRight: widthValue(20) }
                          ]}>
                          <Text style={[fontSize(26), styles.fontwhite, { paddingLeft: widthValue(20), paddingTop: heightValue(30) }]}>
                              Log <Text style={[fontSize(26), styles.green]}>In</Text>
                          </Text>
                          <View style={[{
                              marginLeft: widthValue(25),
                              paddingBottom: heightValue(20),
                              paddingTop: heightValue(50)
                          },]}>
                              <Input text={'CUSTOMER ID/MOBILE NUMBER'} />
                              <Password />
                          </View>
                      </View>
                  </View >
                  <View style={[
                      styles.spaceBetweenVertical,
                      styles.centerHorizontal,
                      { marginTop: heightValue(19) }
                      // screenHeight(1)
                      // { height: heightValue(5), width: widthValue(1) }
                  ]}>
                      <View>
                          <Buttons text={'Send Otp'}
                              onPress={OtpPage} style={[
                                  styles.bggreyish,
                                  padding(0, 12, 10),
                                  radius(50),
                                  styles.allCenter
                              ]}
                              textStyle={[fontSize(22), styles.fontwhite]} />
                          <Buttons
                              style={[styles.allCenter]}
                              text={'Forgot password ?'}
                              textStyle={[fontSize(18),
                              { marginTop: heightValue(70) }, styles.fontwhite,]}
                              onPress={ForgetPage} />
                      </View>

                      <View style={[styles.allCenter, styles.row, { marginTop: heightValue(22) },]}>
                          <Text style={[styles.fontwhite, fontSize(18),]}>
                              Don't have an account ?</Text>
                          <TouchableOpacity onPress={ConsumerPage}>
                              <Text style={[styles.green, fontSize(18),]}> Sign Up</Text>
                          </TouchableOpacity>
                      </View>
                  </View >
              </View >
          </ScrollView >
      </KeyboardAvoidingView >
  );
};

export default Login;

// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { styles, flex, widthValue, heightValue } from '../../Utils/Styles'


// const Login = () => {
//     return (
//         <View style={[flex(1), styles.bgBlack, styles.spaceEvenly]}>
//             <View style={[{ width: widthValue(1), height: heightValue(2.5), }, styles.bgRed]}>
//                 <View>
//                     <Image source={require('../../../assets/LoginLogo2.png')} style={[{ width: widthValue(2.5), height: heightValue(2.5), resizeMode: 'contain' }]} />
//                 </View>
//             </View>
//             <View style={[{ width: widthValue(1), height: heightValue(2), }, styles.bgWhite]}>
//                 <Text style={{ color: 'white' }}>box</Text>
//             </View>
//             <View style={[{ width: widthValue(1), height: heightValue(4), }, styles.bggreen]}>
//                 <Text style={{ color: 'white' }}>buttons</Text>
//             </View>
//         </View>
//     )
// }

// export default Login

// =================drawer navigation with menu list=====================import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';

// Your Comparison and History components
const Comparison = () => <Text>Comparison Screen</Text>;
const History = () => <Text>History Screen</Text>;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ConsumptionStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name='Comparison' component={Comparison} />
    <Stack.Screen name='History' component={History} />
  </Stack.Navigator>
);

const CustomDrawerContent = (props) => {
  const [showSubItems, setShowSubItems] = useState(false);

  const toggleSubItems = () => {
    setShowSubItems(!showSubItems);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label='Consumption'
        onPress={toggleSubItems}
      />
      {showSubItems && (
        <>
          <DrawerItem
            label='Comparison'
            onPress={() => props.navigation.navigate('Comparison')}
          />
          <DrawerItem
            label='History'
            onPress={() => props.navigation.navigate('History')}
          />
        </>
      )}
    </DrawerContentScrollView>
  );
};

const DrawerApp = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Dashboard' component={() => <Text>Dashboard Screen</Text>} />
      {/* Nested drawer options */}
      <Drawer.Screen name='Consumption' component={ConsumptionStack} />
    </Drawer.Navigator>
  );
};

export default DrawerApp;

Certainly! The code provided implements conditional rendering within the drawer content of a navigation drawer using React Navigation.

Here's a breakdown of the code:

1. **Setting Up Components:**
   - There are three main components: `Comparison`, `History`, and `ConsumptionStack`.
   - `Comparison` and `History` components represent screens.
   - `ConsumptionStack` is a stack navigator containing 'Comparison' and 'History'.

2. **Drawer Content Customization:**
   - `CustomDrawerContent` is a custom component that provides the content for the drawer navigation.
   - It uses `DrawerContentScrollView` and `DrawerItemList` to render the default drawer items.
   - There's a `showSubItems` state variable created using the `useState` hook to toggle the display of 'Comparison' and 'History' screens.

3. **Toggle Logic for Sub Items:**
   - `toggleSubItems` is a function that toggles the `showSubItems` state variable.
   - This function is called when the 'Consumption' drawer item is pressed (`onPress={toggleSubItems}`).

4. **Conditional Rendering of Sub Items:**
   - Within `CustomDrawerContent`, there's a conditional rendering block (`{showSubItems && (...)}`) that renders 'Comparison' and 'History' screens only when `showSubItems` is `true`.
   - The `DrawerItem` components for 'Comparison' and 'History' are displayed conditionally based on the state of `showSubItems`.

5. **Drawer Navigator Setup:**
   - `DrawerApp` is the main component that configures the drawer navigator.
   - It uses `Drawer.Navigator` to set up the navigation drawer and specifies `CustomDrawerContent` as the custom drawer content.

6. **Overall Behavior:**
   - Initially, the drawer shows the default items.
   - When you click on the 'Consumption' item, it toggles the display of 'Comparison' and 'History' items within the drawer based on the state (`showSubItems`) using conditional rendering.

This setup allows you to control the visibility of 'Comparison' and 'History' screens in the drawer content by clicking on the 'Consumption' item, providing a toggle-like behavior for displaying sub-items within the navigation drawer. Adjust the code and styles to fit your application's requirements.






import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Js/Screens/OnBoarding/Home';
import Login from './Js/Screens/Login/Login'
import OnePass from './Js/Screens/Login/OnePass'
import Forgot from './Js/Screens/Login/Forgot'
import Create from './Js/Screens/Login/Create'
import NewAccount from './Js/Screens/Login/NewAccount'
import Splash from './Js/Screens/Logo/Splash';
import Box from './Js/Components/Box'
import DashBoard from './Js/Screens/DashBoard/DashBoard';
import Input from './Js/Components/Input';
import Password from './Js/Components/Password';
import Box1 from './Js/Components/Box1/Box1';
import GraphButtons from './Js/Components/Graph/GraphButtons';
import ButtonsBar from './Js/Components/Graph/ButtonsBar';
import Graph from './Js/Components/Graph/Graph';
import Graphsheet from './Js/Components/Graph/Graphsheet';
import Login3 from './Js/Screens/Login/Login3';
import GraphSheet2 from './Js/Components/Graph/GraphSheet2';
import DonutChart from './Js/Components/DonutChart';
import DrawerApp from './Js/Screens/Drawer Nav/DrawerApp';
import { View } from 'react-native'
import StackNavigator from './Js/Screens/StackNav/Stack';
import Comparison from './Js/Screens/Drawer Nav/Consumption/Comparison';
import History from './Js/Screens/Drawer Nav/Consumption/History';
import { widthValue } from '../../Utils/Styles';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import SettingsPage from './SettingsPage/SettingsPage'
import EventAnalysis from './EventAnalysis/EventAnalysis';
import Power from './Power/Power';
import MDI from './MDI/MDI';
import Billing from './Billing/Billing';
import EnergyTips from './EnergyTips/EnergyTips';
import FAQ from './FAQ/FAQ';
import Notification from './Notification/Notification';
import CustomerEngagement from './CustomerEngagement/CustomerEngagement';
import Rating from './Rating/Rating';
import Feedback from './Feedback/Feedback';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name={'Splash'}
        component={Splash} />
      <Stack.Screen
        name={'Home'}
        component={Home} />
      <Stack.Screen
        name={'Login'}
        component={Login} />
      <Stack.Screen
        name={'OnePass'}
        component={OnePass} />
      <Stack.Screen
        name={'Forgot'}
        component={Forgot} />
      <Stack.Screen
        name={'Create'}
        component={Create} />
      <Stack.Screen
        name={'NewAccount'}
        component={NewAccount} />
      <Stack.Screen
        name={'DashBoard'}
        component={DashBoard} />
    </Stack.Navigator>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='DashBoard'
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
        drawerContentStyle: {
          backgroundColor: '#282f42',
          color: 'white',
        },
        drawerType: 'slide',
        drawerLabelStyle: {
          color: 'white', // Set label text color to white
        },
      }}>
      <Drawer.Screen name='StackNavigator' component={AppStackNavigator} />
      <Drawer.Screen name='DashBoard' component={DashBoard} />
      {/* <Drawer.Screen name='Consumption' component={ConsumptionStack} /> */}
      <Drawer.Screen name='Comparison' component={Comparison} />
      <Drawer.Screen name='History' component={History} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <DrawerNavigator />
  )
}
export default App;


// {/* // <NewAccount />
// <Splash />
// <Login />
// <Create />
// <Box />
// <OnePass />
// <Forgot />
// <Practice />
// <Input />
// <Password />
// <DashBoard />
// <DonutChart />
// <Box1 />
// <Graph />
// <GraphButtons />
// <ButtonsBar />
// <GraphSheet2 />
// <NavigationContainer>
//   <DrawerApp />
// </NavigationContainer>





============final drawer===================

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import DashBoard from '../DashBoard/DashBoard';
import Comparison from './Consumption/Comparison';
import History from './Consumption/History';
import { heightValue, widthValue, styles, fontSize, flex, heightwidth } from '../../Utils/Styles';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import SettingsPage from './SettingsPage/SettingsPage'
import EventAnalysis from './EventAnalysis/EventAnalysis';
import Power from './Power/Power';
import MDI from './MDI/MDI';
import Billing from './Billing/Billing';
import EnergyTips from './EnergyTips/EnergyTips';
import FAQ from './FAQ/FAQ';
import Notification from './Notification/Notification';
import CustomerEngagement from './CustomerEngagement/CustomerEngagement';
import Rating from './Rating/Rating';
import Feedback from './Feedback/Feedback';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import UsefulLinks from './Links/UsefulLinks';

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
    return (
        <Drawer.Navigator
            // initialRouteName='DashBoard'
            drawerContent={(props) => {
                return (
                    <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
                        <View>
                            <View style={[{ height: widthValue(2), marginTop: heightValue(15) }, styles.centerHorizontal,]}>
                                <Image source={require('../../../assets/LoginLogo2.png')} style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]} />
                                <Text style={[fontSize(16), styles.fontwhite, { marginTop: 20 }]}>JuliusCeaser</Text>
                                <Text style={[fontSize(15), styles.fontwhite,]}>Consumer ID : C000003</Text>
                            </View>
                        </View>
                        <DrawerContentScrollView showsVerticalScrollIndicator={false}
                            style={[{
                                // height: heightValue(1.1),
                                marginTop: 20,
                            }]}
                        >
                            <DrawerItemList  {...props} />
                        </DrawerContentScrollView>

                    </SafeAreaView>
                )
            }}
            // screenOptions={{
            //     headerShown: false,
            //     drawerStatusBarAnimation: 'slide',
            //     drawerStyle: {
            //         width: widthValue(1.6),
            //         backgroundColor: '#282f42',
            //         ...styles.selfStart,
            //         paddingBottom: heightValue(12)

            //     },
            //     drawerContentStyle: {
            //         backgroundColor: '#282f42',
            //         color: 'white',
            //     },
            //     sceneContainerStyle: {
            //         backgroundColor: '#282f42',
            //     },
            //     drawerType: 'slide',
            //     drawerActiveBackgroundColor: '#282f42',
            //     drawerInactiveBackgroundColor: 'white',
            //     drawerActiveTintColor: '#282f42',
            //     drawerInactiveTintColor: 'red',
            //     overlayColor: 'transparent',

            // }
            // }
            screenOptions={{
                headerShown: false,
                drawerStatusBarAnimation: 'slide',
                drawerStyle: {
                    width: widthValue(1.6),
                    backgroundColor: '#282f42',
                    paddingBottom: heightValue(12)
                },
                drawerContentStyle: {
                    backgroundColor: '#282f42',
                    color: 'white',
                },
                sceneContainerStyle: {
                    backgroundColor: '#282f42',
                },
                drawerType: 'slide',
                drawerActiveBackgroundColor: '#282f42',

                drawerActiveTintColor: '#282f42',
                drawerInactiveTintColor: 'transparent',
                overlayColor: 'transparent',
                drawerItemStyle: {
                    borderTopWidth: .8,
                    borderColor: 'grey',
                },
                drawerLabelStyle: {
                    color: 'white',
                    width: 260,
                    borderTopColor: 'white',
                    borderColor: 'grey',
                    padding: 0
                }
            }}

        >
            < Drawer.Screen
                name="DashBoard"
                component={DashBoard}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), borderColor: 'grey', width: 360, }}>
                            <Icon name="home" size={20} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Dashboard</Text>
                        </View>
                    ),
                }}
            />
            {/* <Drawer.Screen name='Consumption' component={ConsumptionStack} /> */}
            < Drawer.Screen name='Comparison' component={Comparison}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), width: 360, }}>
                            <FontAwesome5 name="percent" size={15} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16, }}>Comparision</Text>
                        </View>
                    ),

                }}




            />
            <Drawer.Screen name='History' component={History}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), width: 360, }}>
                            <FontAwesome5 name="clock" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>History</Text>
                        </View>
                    ),

                }}
            />
            <Drawer.Screen name='Billing' component={Billing}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                            <FontAwesome5 name="credit-card" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Billing</Text>
                        </View>
                    ),

                }}

            />
            <Drawer.Screen name='MDI' component={MDI}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                            <FontAwesome5 name="circle-exclamation" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>MDI</Text>
                        </View>
                    ),

                }}
            />
            <Drawer.Screen name='Power' component={Power}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40) }}>
                            <FontAwesome5 name="square-check" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Power Quality</Text>
                        </View>
                    ),

                }}
            />
            <Drawer.Screen name='Event Analysis' component={EventAnalysis}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                            <FontAwesome5 name="calendar" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Event Analysis</Text>
                        </View>
                    ),

                }}
            />
            <Drawer.Screen name='Energy' component={EnergyTips}
                options={{
                    drawerLabel: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                            <FontAwesome5 name="bolt" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Energy Tips</Text>
                        </View>
                    ),

                }} />
            <Drawer.Screen name='FAQ' component={FAQ} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                        <FontAwesome5 name="file" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                        <Text style={{ color: 'white', fontSize: 16 }}>FAQ</Text>
                    </View>
                ),

            }} />
            <Drawer.Screen name='Notification' component={Notification} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                        <FontAwesome5 name="bell" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                        <Text style={{ color: 'white', fontSize: 16 }}>Notification</Text>
                    </View>
                ),

            }} />
            <Drawer.Screen name='Settings' component={SettingsPage} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40) }}>
                        <FontAwesome5 name="gear" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                        <Text style={{ color: 'white', fontSize: 16 }}>Settings</Text>
                    </View>
                ),

            }} />
            <Drawer.Screen name='CustomerEngagement' component={CustomerEngagement} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: widthValue(16) }}>Customer Engagement</Text>
                    </View>
                ),

            }} />
            <Drawer.Screen name='Rating' component={Rating} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40), }}>
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: widthValue(20) }}>Rate Our App</Text>
                    </View>
                ),

            }} />
            <Drawer.Screen name='Feedback' component={Feedback} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40) }}>

                        <Text style={{ color: 'white', fontSize: 16, marginLeft: widthValue(20) }}>Send Feedback</Text>
                    </View>
                ),

            }} />
            <Drawer.Screen name='UsefulLinks' component={UsefulLinks} options={{
                drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthValue(40) }}>
                        <MaterialIcon name="grid_view" size={18} color={'white'} style={{ marginRight: widthValue(20) }} />
                        <Text style={{ color: 'white', fontSize: 16 }}>Useful Links</Text>
                    </View>
                ),
            }}
            />
        </Drawer.Navigator >
    );
};

export default DrawerApp;



/* =======dashboard=================== */
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, radius, screenHeight, styles, widthValue } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from '../../Components/Header/Header'
import Box1 from '../../Components/Box1/Box1'
import Graph from '../../Components/Graph/Graph'
import DonutChart from '../../Components/DonutChart'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'

const DashBoard = ({ navigation }) => {

    const openDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <DrawerScreenWrapper>
            <View style={[flex(1), { width: widthValue(1), paddingTop: 25 }, styles.bglightblack]}>
                <View style={[{ marginLeft: 25 }]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={[{ marginLeft: 25, marginTop: 8 }]}>
                        <Header
                            Greeting={'Welcome'}
                            name={'JuliusCeaser'}
                            ConsumerId={'Consumer ID: C000003'}
                        />
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[{ width: widthValue(1), paddingLeft: widthValue(20), marginRight: widthValue(20) }]}>
                        <Box1 consumed={'Last Month Consumption:'} units={'0 Units'} />
                        <Box1 consumed={'Monthly Consumption:'} units={'0 Units'} />
                        <Box1 consumed={'Monthly Forecast:'} units={'0 Units'} />
                    </ScrollView>
                    <View style={[{ marginTop: heightValue(60) }, styles.bgbarback, radius(18), screenHeight(2), { marginLeft: widthValue(20), marginRight: widthValue(20), }]}>
                        <Graph />
                    </View>
                    <View style={[{ height: heightValue(7), paddingHorizontal: widthValue(30), marginTop: heightValue(45), marginBottom: heightValue(20) }, styles.allCenter, styles.row, styles.bgbarback, radius(15), { marginLeft: widthValue(20), marginRight: widthValue(20), }, styles.spaceEvenly]}>
                        <View style={[{ marginRight: 30, marginLeft: widthValue(8) }]}>
                            <Text style={[styles.fontwhite, fontSize(15)]}>Today's Consumption</Text>
                            <Text style={[styles.green, fontSize(22), styles.textCenter, { marginTop: 1 }]}>0 Units</Text>
                        </View>
                        <DonutChart />
                    </View>
                </ScrollView>
            </View>
        </DrawerScreenWrapper>
    )
}
export default DashBoard

// ==============reduced drawer app using map function working code===================================

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { heightValue, widthValue, styles, fontSize, flex, heightwidth, marginPosition } from '../../Utils/Styles';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import drawerItems from '../../Constants/DrawerItems'

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
                        <View>
                            <View style={[{ height: widthValue(2), marginTop: heightValue(15) }, styles.centerHorizontal,]}>
                                <Image source={require('../../../assets/LoginLogo2.png')} style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]} />
                                <Text style={[fontSize(16), styles.fontwhite, { marginTop: 20 }]}>JuliusCeaser</Text>
                                <Text style={[fontSize(15), styles.fontwhite,]}>Consumer ID : C000003</Text>
                            </View>
                        </View>
                        <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}
                            style={[{
                                // height: heightValue(1.1),
                                marginTop: 20,
                            }]}
                        >
                            {drawerItems.map((item, index) => {
                                return (
                                    <DrawerItem
                                        key={index}
                                        label={item.name}
                                        icon={() => (
                                            <FontAwesome5 name={item.icon} style={[fontSize(18), styles.fontwhite, marginPosition(0, 0, 0, 20)]} />
                                        )}
                                        onPress={() => props.navigation.navigate(item.component)}
                                        style={{
                                            borderTopColor: 'grey',
                                            borderTopWidth: 1,

                                        }}
                                        labelStyle={
                                            {
                                                color: 'white',
                                                fontSize: 13,
                                            }
                                        }
                                    />
                                )
                            })}
                        </DrawerContentScrollView>
                    </SafeAreaView>
                )
            }}
            screenOptions={{
                headerShown: false,
                drawerStatusBarAnimation: 'slide',
                drawerStyle: {
                    width: widthValue(1.6),
                    backgroundColor: '#282f42',
                    paddingBottom: heightValue(12)
                },
                drawerContentStyle: {
                    backgroundColor: '#282f42',
                    color: 'white',
                },
                sceneContainerStyle: {
                    backgroundColor: '#282f42',
                },
                drawerType: 'slide',
                drawerActiveBackgroundColor: '#282f42',
                drawerActiveTintColor: '#282f42',
                drawerInactiveTintColor: 'transparent',
                overlayColor: 'transparent',
                drawerItemStyle: {
                    borderTopWidth: .8,
                    borderColor: 'grey',
                },
            }}

        >
            {drawerItems.map((item, index) => (
                <Drawer.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                // options={{
                //     drawerLabelStyle: {
                //         color: 'white',
                //         width: 260,
                //         borderTopColor: 'white',
                //         borderColor: 'grey',
                //         padding: 0
                //     }
                // }}
                />
            ))}
        </Drawer.Navigator >
    );
};

export default DrawerApp;



/*
===========comparison working code================
 */



import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, lineHeight, radius, screenHeight, styles, widthValue } from '../../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from '../../../Components/Header/Header'
import Box1 from '../../../Components/Box1/Box1'
import Box2 from '../../../Components/Box1/Box2'
import Graph from '../../../Components/Graph/Graph'
import DrawerScreenWrapper from '../Drawers/DrawerScreenWrapper'
import Header2 from '../../../Components/Header/Header2'
import { VictoryBar } from 'victory-native'
import GraphSheet2 from '../../../Components/Graph/GraphSheet2'
import MonthlyBox from '../../../Components/Box1/MonthlyBox'

const Comparison = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer();
    }
    return (
        <DrawerScreenWrapper>
            <View style={[flex(1), { width: widthValue(1), paddingTop: heightValue(30) }, styles.bglightblack]}>
                <View style={[{ marginLeft: widthValue(20), marginRight: widthValue(20), }]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={[{ marginLeft: widthValue(30), marginRight: widthValue(20), }]}>
                        <Header2
                            title1={'Unit'}
                            title2={' Comparison'}
                            Desc={'Compare your daily, weekly & monthly consumption to keep a tab on electricity usage'} />
                    </View>
                    <View style={[{ width: widthValue(1.1), marginLeft: widthValue(20), marginRight: widthValue(20) }, styles.row]}>
                        <Box2 text1={'Today'} text2={'[Inprogress]'} />
                        <Box2 text3={'Yesterday'} />
                    </View>
                    <View style={[{ marginTop: heightValue(60) }, styles.bgbarback, radius(18), screenHeight(1.85), { marginLeft: widthValue(20), marginRight: widthValue(20), paddingHorizontal: widthValue(20), paddingTop: heightValue(35) }]}>
                        <View style={[styles.row, { paddingLeft: 10 }]}>
                            <Text style={[styles.fontwhite, fontSize(20)]}>Weekly</Text>
                            <Text style={[styles.green, fontSize(20)]}> Comparison</Text>
                        </View>
                        <GraphSheet2 />
                        <View style={[styles.row, styles.spaceAroundVertical, { marginTop: 10 }]}>
                            <Text style={[styles.fontwhite, fontSize(10)]}>Last week Consumption (Units)</Text>
                            <Text style={[styles.green, fontSize(10)]}>Current week Consumption (Units)</Text>
                        </View>
                    </View>
                    <MonthlyBox />
                </ScrollView>
            </View>
        </DrawerScreenWrapper>
    )
}
export default Comparison


/* ======================FAQ BUTTON WITH HIDE AND SHOW FUNCTIONALITY================================ */

import { View, Text, TouchableOpacity, TouchableWithoutFeedbackComponent } from 'react-native';
import React, { useState } from 'react';
import {
    fontSize,
    styles,
    padding,
    widthValue,
    marginPosition,
    radius
} from '../../../Utils/Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FaqDetailsButton = () => {

    const [showDetails, setShowDetails] = useState(false)

    const handleDetails = () => [
        setShowDetails(!showDetails)
    ]

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.bgbarback,
                    padding(0, 10, 20),
                    { width: widthValue(1.1) },
                    marginPosition(10, 20, 0, 20),
                    radius(0, 15, 0, 0, 15)
                ]}
                onPress={handleDetails}>
                <View style={[styles.row, styles.spaceBetweenVertical, styles.centerHorizontal]}>
                    <Text style={[styles.fontwhite, fontSize(15)]}>
                        {showDetails ? 'Click me for Details' : 'Click me for Details'}
                    </Text>

                    <FontAwesome5 name={showDetails ? 'chevron-down' : 'chevron-up'} style={[styles.gr]} />
                </View>
            </TouchableOpacity >
            {showDetails && (
                <View
                    style={[
                        styles.bgbarback,
                        padding(0, 10, 20),
                        { width: widthValue(1.1) },
                        marginPosition(0, 20, 10, 20),
                        radius(0, 0, 15, 15, 0),
                    ]}>
                    <Text style={[styles.gr]}>this is the details for the click me hahahaha !this is the details for the click mthis is the details for the click mthis is the details for the click mthis is the details for the click m</Text>
                </View>

            )}
        </View>
    );
};

export default FaqDetailsButton;

=====change display==============

import React, { useState } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import BackButton from '../CommonComp/BackButton'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import SettingsHeader from '../CommonComp/SettingsHeader'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import ListofMembers from '../CommonComp/ListofMembers'
import Logincards from '../../../Loginpage/CommonCards/Logincards'

const Manage = () => {
    const [showconsumerpage,setconsumerpage]=useState(false)
    const Consumernav=(a)=>{
           setconsumerpage(a)
    }
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal,]}>
        <View style={[{width:widthValue(1.1),height:heightValue(12)}]} >
               <BackButton/>
              <SettingsHeader name={'Manage'} heading={'Multiple Accounts'} details={"Add here your different accounts linked with your same mobile number"}/>
        </View>
            <View style={[{width:widthValue(1.1),height:heightValue(1.4)},styles.allCenter,marginPosition(30)]}>
              {showconsumerpage ? <Logincards showconsumer={true} name={'Consumer'} secondname={'Number'} heightval={true}/> :  <ListofMembers Goto={Consumernav}/>}
              {showconsumerpage ? <>
               <View style={[styles.bgdashblue,radius(30),{height:heightValue(18),width:widthValue(3.2)},styles.allCenter,marginPosition(20)]}>
                <TouchableOpacity>
                    <Text style={[styles.white]}>Generate OTP</Text>
                </TouchableOpacity>
               </View>
               </> : null}
           </View>
    </View>
  )
}

export default Manage

Deen Dayal Upadhyaya Gram Jyoti Yogana

/* ===== drawerApp with logout modal========== */

import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { heightValue, widthValue, styles, fontSize, flex, marginPosition, padding, borderWidth,radius, paddingPosition } from '../../Utils/Styles';
import drawerItems from '../../Constants/DrawerItems';
import Comparison from '../Consumption/Comparison/Comparison';
import Logout from '../LogOut/Logout';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showDropDown,setShowDropDown] = useState(false);

  const navigation = useNavigation();
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
            <View>
              <View style={[{ height: widthValue(2) }, marginPosition(40), styles.centerHorizontal]}>
                <Image source={require('../../../assets/LoginLogo2.png')} style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]} />
                <Text style={[fontSize(17), styles.fontwhite, { marginTop: 20 }]}>JuliusCeaser</Text>
                <Text style={[fontSize(15), styles.fontwhite]}>Consumer ID : C000003</Text>
              </View>
            </View>
            <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props} style={[{ marginTop: 0, marginBottom: 50 }]}>
              {drawerItems.map((item, index) => (
                <DrawerItem
                  key={index}
                  label={item.label}
                  icon={() => (
                    <FontAwesome5 name={item.icon} style={[fontSize(16), styles.fontwhite, marginPosition(0, 0, 0, 20)]} />
                  )}
                  onPress={() => {
                    if( item.children){
                        setShowDropDown(!showDropDown)
                    }
                     else if (item.name === 'LogOut') {
                      openModal();
                    } else {
                      props.navigation.navigate(item.component);
                    }
                  }}
                  style={{
                    borderTopColor: 'grey',
                    borderTopWidth: 1,
                  }}
                  labelStyle={{
                    color: 'white',
                    fontSize: 13,
                  }}
                />
              ))}
            </DrawerContentScrollView>
            {/* Modal */}
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal} style={[{ alignItems:'center',justifyContent:'center'}]}>
              <SafeAreaView style={[styles.bgWhite,paddingPosition(20,20,40,20),radius(0,15,0,0,15), { position:'absolute',bottom:0, width:widthValue(1)}]}>
                <View style={[{gap:20}]}>
                <Text style={[fontSize(18), styles.gr]}>Alert</Text>
                <Text style={[fontSize(13), styles.gr]}>Are you sure you want to logout ?</Text>
                </View>
                <View style={[styles.row,styles.centerHorizontal,styles.spaceBetweenVertical,marginPosition(20,0,0,0)]}>
                <TouchableOpacity onPress={closeModal} style={[padding(0,18,70),borderWidth(1),radius(10),styles.allCenter]}>
                  <Text style={styles.gr}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Login')
                  closeModal();
                }} style={[styles.bglightgreen,padding(0,20,70),radius(10),styles.allCenter]}>
                  <Text style={styles.fontwhite}>Yes</Text>
                </TouchableOpacity>

                </View>
              </SafeAreaView>
            </Modal>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
        swipeEnabled: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: widthValue(1.6),
          backgroundColor: '#282f42',
        },
        drawerContentStyle: {
          backgroundColor: '#282f42',
          color: 'white',
        },
        sceneContainerStyle: {
          backgroundColor: '#282f42',
        },
        drawerType: 'slide',
        drawerActiveBackgroundColor: '#282f42',
        drawerActiveTintColor: '#282f42',
        drawerInactiveTintColor: 'transparent',
        overlayColor: 'transparent',
        drawerItemStyle: {
          borderTopWidth: 0.8,
          borderColor: 'grey',
        },
      }}
    >
      {drawerItems.map((item, index) => (
        <Drawer.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerApp;





import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ButtonsBar from './ButtonsBar'
import Swiper from 'react-native-swiper'
import Graphsheet from './Graphsheet'
import GraphSheet2 from './GraphSheet2'
import { flex, heightValue, widthValue, styles, radius, fontSize, marginPosition, screenHeight, screenWidth, padding } from '../../Utils/Styles'
import { graphData } from '../../Constants/Const'
import GraphButtons from './GraphButtons'
import HistoryGraph from './HistoryGraph'
import CalendarPage from '../../Screens/Consumption/History/CalendarPage/CalendarPage'
import HistoryBox from '../../Screens/Consumption/HistoryBox'

const HistoryMainGraph = ({currentPage,setCurrentPage}) => {
    const [showText,setShowText] = useState(false)

    const onIndexChanged = (index) => {
        setCurrentPage(index)
    }
    return (
        <View>
            <View
                style={[{ width: widthValue(1.1), }, screenHeight(2),]}
            >
                {/* <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1.1), }, styles.bgbarback, radius(12)]}>
                    <GraphButtons btnText={'Custom'}
                        onPress={CustomPage}
                        btnStyle={[radius(12),
                        padding(0, 8, 17),
                        currentPage === 0 ? styles.bggreen : styles.bgbarback]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                        
                    />
                    <GraphButtons btnText={'Today'}
                        onPress={todayGraph}
                        btnStyle={[radius(12), padding(0, 8, 17), currentPage === 1 ? styles.bggreen : styles.bgbarback]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                    <GraphButtons btnText={'Week'}
                        onPress={weekGraph}
                        btnStyle={[radius(12), padding(0, 8, 17), currentPage === 2 ? styles.bggreen : styles.bgbarback]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                    <GraphButtons btnText={'Month'}
                        onPress={monthGraph}
                        btnStyle={[radius(12), padding(0, 8, 17), currentPage === 3 ? styles.bggreen : styles.bgbarback]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                </View> */}
                <Swiper loop={false}
                    showsPagination={false}
                    index={currentPage}
                    onIndexChanged={onIndexChanged}
                    style={[{ marginTop: -20 }]}
                >
                    <HistoryGraph data={graphData.todayData} xValue={'time'} yValue={'bill'} />
                    <HistoryGraph data={graphData.weekData} xValue={'day'} yValue={'bill'} />
                    <HistoryGraph data={graphData.monthData} xValue={'month'} yValue={'bill'} />
                </Swiper >
            </View >

            {showText && currentPage === 0 ? null : 
            <View style={[styles.allCenter, { marginTop: 2 }]}>
                <Text style={[styles.green, fontSize(14)]}>X-axis Months and y-axis Consumption</Text>
                <Text style={[styles.fontwhite, fontSize(12)]}>(Click on Charts to see the value)</Text> 
            </View>
              }
        </View>
    )
}
export default HistoryMainGraph

import {  Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, lineHeight, paddingPosition, radius, screenHeight, styles, padding, widthValue, marginPosition } from '../../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DrawerScreenWrapper from '../../Drawer Nav/Drawers/DrawerScreenWrapper'
import Header2 from '../../../Components/Header/Header2'
import HistoryMainGraph from '../../../Components/Graph/HIstoryMainGraph'
import HistoryBox from '../HistoryBox'
import HistoryBox2 from '../HistoryBox2'
import GraphButtons from '../../../Components/Graph/GraphButtons'
import CalendarPage from './CalendarPage/CalendarPage'

const History = ({ navigation }) => {
    const [currentPage,setCurrentPage] = useState(0)
    const openDrawer = () => {
        navigation.toggleDrawer(); 
    }
    // const handleclose=(a)=>{
    //     setclose(a)
    // }
    const CustomPage = () => {
        setCurrentPage(0)
        // setHideConsumptionBox(true)
        // close(true)
        // setShowText(true)
        // console.log('hi')
    }
    const todayGraph = () => {
        setCurrentPage(1)
        // close(false)

    }
    const weekGraph = () => {
        setCurrentPage(2)
        // close(false)

    }
    const monthGraph = () => {
        setCurrentPage(3)
        // close(false)

    }
    
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), }, paddingPosition(30), styles.bglightblack]}>
                <View style={[marginPosition(30, 0, 0, 25)]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={[marginPosition(10, 20, 0, 15)]}>
                        <Header2
                            title2={'Historic Electricity Consumption'}
                            Desc={'Historic consumption details on your finger tips '} />
                    </View>
                    <View style={[{ width: widthValue(1) }, radius(18), screenHeight(1.6),
                    marginPosition(0, 20),
                    padding(0, 30, 20)
                    ]}>
                        <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1.1), }, styles.bgbarback, radius(12)]}>
                    <GraphButtons btnText={'Custom'}
                        onPress={CustomPage}
                        btnStyle={[radius(12),
                        padding(0, 8, 17),
                       ]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                    <GraphButtons btnText={'Today'}
                        onPress={todayGraph}
                        btnStyle={[radius(12), padding(0, 8, 17), 
                            ]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                    <GraphButtons btnText={'Week'}
                        onPress={weekGraph}
                        btnStyle={[radius(12), padding(0, 8, 17), ]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                    <GraphButtons btnText={'Month'}
                        onPress={monthGraph}
                        btnStyle={[radius(12), padding(0, 8, 17),]}
                        fontStyle={[fontSize(18), styles.fontwhite,]}
                    />
                </View>
                <CalendarPage />
                        <HistoryMainGraph />
                    </View>
                     <View>
                        <HistoryBox  text1={'Total'} text2={' Consumption'}/>
                        <HistoryBox2   text1={'Average'} text2={' Consumption'}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    )
}
export default History





