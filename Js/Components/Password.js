import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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
} from '../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Password = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true)
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <View
            style={[styles.positionRelative,
            isPasswordFocused ? styles.bglightgreyish : styles.bggreyish,
            isPasswordFocused ? paddingPosition(15, 20, 10, 15) : paddingPosition(15, 20, 10, 15),
            isPasswordFocused ? radius(20) : radius(0),]}>
            <Text style={[isPasswordFocused ? fontSize(13) : fontSize(14), styles.gr, { marginTop: heightValue(-70) }]}>
                PASSWORD
            </Text>
            <TextInput
                style={[
                    { borderBottomWidth: 1 },
                    styles.borderGreen,
                    styles.fontwhite,
                    fontSize(20),
                    { padding: 0, paddingTop: heightValue(100) }
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
                    { top: -40, right: 0 },
                    fontSize(24),
                    ]}
                >
                </FontAwesome5>
            </TouchableOpacity>
        </View>
    )
}

export default Password