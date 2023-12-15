import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  styles,
  paddingPosition,
  padding,
  radius,
  marginPosition,
  fontSize,
  screenWidth,
  screenHeight,
  flex,
  widthValue,
  heightValue,
} from '../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Password = ({borderstyle}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewpassword,setShowNewPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [isConPasswordFocused, setIsConPasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [conError, setConError] = useState('');
  const [showConPassword, setshowConPassword] = useState(false);

  /* --------PASSWORD PART START ---------------   */
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowNewPassword = ()=>{
    setShowNewPassword(!showNewpassword)
  }
  const handleConShowPassword = () => {
    setshowConPassword(!showConPassword);
  };
  const handleConPasswordFocus = () => {
    setIsConPasswordFocused(true);
  };
  // ==============password validation============
  const validatePassword = Enteredpassword => {
    const passwordErrorsList = [];

    // <-----length----------->
    if (Enteredpassword.length < 8) {
      passwordErrorsList.push('Password Must be at least 8 characters');
    }

    // <-----CAPITAL/UPPERCASE and small/lowercase LETTER----------->
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(Enteredpassword)) {
      passwordErrorsList.push(
        'Password must conatin one Uppercase and Lowercase letter',
      );
    }

    // <-----NUMBER----------->
    if (!/\d/.test(Enteredpassword)) {
      passwordErrorsList.push('Password must conatin atleast one Number');
    }

    // <-----SPECIAL CHARACTER----------->

    if (!/[!@#$%^&*()\-_=+{};:<,.>]/.test(Enteredpassword)) {
      passwordErrorsList.push(
        'Password must conatin atleast one Special character',
      );
    }
    return passwordErrorsList;
  };

  const handleNewPasswordChange = input => {
    setPassword(input);
    const passwordErrorsList = validatePassword(input);
    setNewPasswordError(passwordErrorsList);
    // setConError(input !== confirmPassword ? "Passwords don't match" : '');
  };

  // =====confirm password========

  const check = input => {
    if (input === confirmPassword) {
      setConError('');
    }
    if (input.length < 5) {
      setConError('');
    }
    if (!input.length > 4 == confirmPassword) {
      setConError('password did not match ');
    } else {
      setConError('');
    }
  };

  const handleConfirmpasswordchange = input => {
    setConfirmPassword(input);
    // const passwordErrors = validate
    if (input.length < 4) {
      setConError('');
    } else {
      setConError("password didn't match");
    }
  };

  return (
    <View
      style={[ {width: widthValue(1.1), height: heightValue(2.3)},marginPosition(40,25,20),]}>
      {/* <View
        style={[
          {borderstyle},
          {height: heightValue(9),}, 
          marginPosition(0,0,10,0)
        ]}>
        <View
          style={[{height: heightValue(10)}, marginPosition(10, 25, 0, 20)]}>
          <Text
            style={{
              fontSize: isPasswordFocused ? 12 : 14,
              color: 'white',
            }}>
            CURRENT PASSWORD
            <Text style={{color: 'red', marginLeft: 1, marginBottom: -10}}>
            </Text>
          </Text>
          <View
            style={[
              styles.row,
              {borderBottomWidth: 1,width:widthValue(1.3)},
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}>
            <TextInput
              style={[
                {
                  height: heightValue(20),
                  width: widthValue(1.6),
                  paddingVertical:0,
                  paddingLeft:10,
                },
                fontSize(18),
                styles.fontwhite,
              ]}
              maxLength={12}
              secureTextEntry={!showPassword}
              onFocus={handlePasswordFocus}
              onBlur={() => setIsPasswordFocused(false)}
             ></TextInput>
            <TouchableOpacity onPress={handleShowPassword}>
              <FontAwesome5
                name={showPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={[ fontSize(24)]}></FontAwesome5>
            </TouchableOpacity>
          </View>
        </View>
        </View> */}

        










      <View
        style={[
          {borderstyle},
          {height: heightValue(9)},
          marginPosition(0,0,10,0)
        ]}>
        <View
          style={[{height: heightValue(10)}, marginPosition(10, 25, 0, 20)]}>
          <Text
            style={{
              fontSize: isNewPasswordFocused ? 12 : 14,
              color: 'white',
            }}>
            NEW PASSWORD
            <Text style={{color: 'red', marginLeft: 1, marginBottom: -10}}>
            </Text>
          </Text>
          <View
            style={[
              styles.row,
              {borderBottomWidth: 1},
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}>
            <TextInput
              style={[
                {
                  paddingVertical: 0,
                  height: heightValue(20),
                  width: widthValue(2.2),
                },
                fontSize(16),
                styles.fontwhite,
              ]}
              maxLength={12}
              secureTextEntry={!showPassword}
              onFocus={handlePasswordFocus}
              onBlur={() => setIsNewPasswordFocused(false)} 
              onChangeText={(input) => {
                handleNewPasswordChange(input)
                check(input)
              }}
              value={() => password}
              ></TextInput>
            <TouchableOpacity onPress={handleShowNewPassword}>
              <FontAwesome5
                name={showPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={[styles.positionAbsolute, fontSize(24)]}></FontAwesome5>
            </TouchableOpacity>
          </View>
          {newPasswordError.length > 0 && (
        <View style={[marginPosition(10)]}>
          {newPasswordError.map((Error, index) => (
            <Text key={index} style={[fontSize(10), styles.red]}>
              {Error}
            </Text>
          ))}
        </View>
      )}
        </View>
        </View>
      <View
        style={[
          {borderstyle},
          {height: heightValue(9)},
          marginPosition(0,0,10,0)
        ]}>
        <View
          style={[{height: heightValue(10)}, marginPosition(10, 25, 0, 20)]}>
          <Text
            style={{
              fontSize: isConPasswordFocused ? 12 : 14,
              color: 'white',
            }}>
            CONFIRM PASSWORD
            <Text style={{color: 'red', marginLeft: 1, marginBottom: -10}}>
            </Text>
          </Text>
          <View
            style={[
              styles.row,
              {borderBottomWidth: 1},
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}>
            <TextInput
              style={[
                {
                  padding: 0,
                  paddingVertical: 0,
                  height: heightValue(20),
                  width: widthValue(2.2),
                },
                fontSize(16),
                styles.fontwhite,
              ]}
              maxLength={12}
              secureTextEntry={!showConPassword}
              onFocus={handleConPasswordFocus}
              onBlur={() => setIsConPasswordFocused(false)}
              onChangeText={input => {
                handleConfirmpasswordchange(input);
                // check(input)
              }}
              value={() => setConfirmPassword}></TextInput>
            <TouchableOpacity onPress={handleConShowPassword}>
              <FontAwesome5
                name={showConPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={[styles.positionAbsolute, fontSize(24)]}></FontAwesome5>
            </TouchableOpacity>
          </View>
          {conError ? <Text style={[styles.red]}>{conError}</Text> : ''}
        </View>
        </View>
        
    </View>
  );
};

export default Password;
