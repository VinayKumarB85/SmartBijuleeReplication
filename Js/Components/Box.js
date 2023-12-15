import {
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
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
    heightValue,
    widthValue,
    heightwidth
} from '../Utils/Styles'
import Input from './Input/Input'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Buttons from '../Components/Buttons';

const Box = (props) => {

    const [isFocused, setIsFocused] = useState(false)
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

    const handleFocus = () => {
        setIsFocused(true);
    }
    return (
        <View
            style={[styles.centerHorizontal, marginPosition(30)]}>
            <View
                style={[
                    { height: heightValue(35), width: widthValue(2.4) },
                    styles.bgdarkgreen,
                    radius(0, 300, 0, 0, 300),
                ]}></View>
            <View
                style={[
                    styles.bggreen,
                    { height: heightValue(30), width: widthValue(1.8) },
                    marginPosition(-10, 0, 0, 0),
                    radius(0, 300, 0, 0, 300),
                ]}></View>
            <View
                style={[
                    { width: widthValue(1.33), }
                    , styles.bggreyish,
                    marginPosition(-10),
                    radius(30, 30, 30, 30),
                    paddingPosition(5, 20, 35, 20),
                ]}>
                <Text style={[fontSize(24), styles.fontwhite, padding(0, 10, 13), marginPosition(10)]}>
                    {props.text1} <Text style={[fontSize(24), styles.green]}>{props.text2}</Text>
                </Text>

                <View style={[paddingPosition(10, 10, 0, 20)]}>
                    <Input text={'CONSUMER ID'} />
                </View>
            </View>
        </View >
    )
}

export default Box