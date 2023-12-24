import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  styles,
  marginPosition,
  fontSize,
  widthValue,
  heightValue,
} from '../../../../../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';


const InputBoxes = ({ borderstyle }) => {

  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  const [showPassword, setShowPassword] = useState(false);
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
    if (input === confirmPassword) {
      setConError('');
    } else {
      setConError("Passwords don't match");
    }
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input);
    if (isConPasswordFocused && input.length >= 4) {
      check(password);
    }
  };

  return (
    <View style={{ width: widthValue(1.15), height: heightValue(3), margin: 5 }}>
      <View style={{ height: heightValue(9), margin: 0, marginBottom: 10 }}>
        <View style={{ height: heightValue(10), margin: 10 }}>
          <Text style={{ fontSize: isPasswordFocused ? 11 : 13, color:darkmode? 'white':'gray' }}>
            CURRENT PASSWORD
          </Text>
          <View
            style={[
              styles.row,
              { borderBottomWidth: 1, width: widthValue(1.3) },
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}
          >
            <TextInput
              style={[
                {
                  height: heightValue(20),
                  width: widthValue(1.6),
                  paddingVertical: 0,
                  paddingLeft: 10,
                },
                fontSize(18),
                styles.fontwhite,
              ]}
              maxLength={12}
              secureTextEntry={!showPassword}
              onFocus={handlePasswordFocus}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={handleShowPassword}>
              <FontAwesome5
                name={showPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={fontSize(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: heightValue(9), margin: 0, marginBottom: 10 }}>
        <View style={{ height: heightValue(10), margin: 10 }}>
          <Text style={{ fontSize: isNewPasswordFocused ? 11 : 13, color:darkmode? 'white':'gray'  }}>
            NEW PASSWORD
          </Text>
          <View
            style={[
              styles.row,
              { borderBottomWidth: 1, width: widthValue(1.3) },
              styles.borderGreen,
              styles.spaceAroundVertical,
            ]}
          >
            <TextInput
              style={[
                {
                  height: heightValue(20),
                  width: widthValue(1.6),
                  paddingVertical: 0,
                  paddingLeft: 10,
                },
                fontSize(18),
                styles.fontwhite,
              ]}
              maxLength={12}
              onChangeText={(input) => {
                handleNewPasswordChange(input);
                check(input);
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
          <View style={marginPosition(10)}>
            {newPasswordError ? (
              <Text style={[fontSize(14), styles.red]}>{newPasswordError}</Text>
            ) : null}
          </View>
        </View>
      </View>
      <View style={{ height: heightValue(9), margin: 0, marginBottom: 10 }}>
        <View style={{ height: heightValue(10), margin: 10 }}>
          <Text style={{ fontSize: isConPasswordFocused ? 11 : 13, color:darkmode? 'white':'gray' }}>
            CONFIRM PASSWORD
          </Text>
          <View
            style={[
              styles.row,
              { borderBottomWidth: 1 },
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
                fontSize(16),
                styles.fontwhite,
              ]}
              maxLength={12}
              secureTextEntry={!showConPassword}
              onFocus={handleConPasswordFocus}
              onBlur={() => {
                setIsConPasswordFocused(false);
                setConError('');
              }}
              onChangeText={handleConfirmPasswordChange}
              value={confirmPassword}
            />
            <TouchableOpacity onPress={handleConShowPassword}>
              <FontAwesome5
                name={showConPassword ? 'eye' : 'eye-slash'}
                color={'grey'}
                style={fontSize(24)}
              />
            </TouchableOpacity>
          </View>
          {conError ? <Text style={styles.red}>{conError}</Text> : null}
        </View>
      </View>
    </View>
  );
};

export default InputBoxes;
