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
import Input from '../../Components/Input/Input';


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
    const loginPage = () => {
        navigation.navigate('Login')
    }


    return (
        <KeyboardAvoidingView
            style={[flex(1)]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View
                    style={[
                        styles.bgBlack,
                        styles.centerHorizontal,
                        // styles.spaceEvenly,
                        flex(1),
                    ]}>
                    <TouchableOpacity onPress={loginPage} style={[
                        marginPosition(55)
                    ]}>
                        <Image
                            source={require('../../../assets/Xmark2.png')}
                            style={[{ height: widthValue(5.5), width: widthValue(5.5), resizeMode: 'contain' }]}
                        />
                    </TouchableOpacity>
                    <View
                        style={[styles.allCenter,
                        { marginTop: heightValue(12), width: widthValue(1.3) }
                        ]}>
                        <View style={[styles.bggreenish, { height: heightValue(15), width: widthValue(2.2), }, marginPosition(40), radius(20)]}>
                        </View>
                        <View style={[styles.bggreen, {
                            height: heightValue(15), width: widthValue(1.7),
                        }, radius(20), marginPosition(-35)]}></View>
                        <View
                            style={[
                                { width: widthValue(1.3), },
                                styles.bggreyish,
                                radius(20),
                                marginPosition(-35),
                                paddingPosition(0, 0, 50, 0)
                            ]}>
                            <Text style={[fontSize(26), styles.fontwhite, paddingPosition(20, 0, 0, 30),
                            marginPosition(18)

                            ]}>
                                Forgot <Text style={[fontSize(26), styles.green]}>Password</Text>
                            </Text>

                            <View style={[{
                                marginHorizontal: widthValue(15), marginTop: heightValue(30)
                            }, styles.allCenter, isCustomerIdFocused ? styles.bglightgreyish : styles.bggreyish, isCustomerIdFocused ? radius(20) : radius(0)]}>
                                <View style={[{ height: heightValue(6), width: 180, }, styles.centerVertical,]}>
                                    <Text style={[
                                        isCustomerIdFocused ? fontSize(12.8) :
                                            fontSize(14.8),
                                        styles.lightGray]}>CUSTOMER ID</Text>
                                    <TextInput
                                        style={[{
                                            paddingHorizontal: 0, height: heightValue(20),
                                            borderBottomWidth: 1,
                                            paddingVertical: 0,
                                        }, fontSize(23), styles.fontwhite, styles.borderGreen]}
                                        onFocus={handleCustomerFocus}
                                        onBlur={() => setIsCustomerIdFocused(false)}
                                    ></TextInput>
                                </View>
                            </View>
                        </View>
                    </View >
                    <View style={[
                        styles.spaceBetweenVertical,
                        styles.centerHorizontal,
                        { marginTop: heightValue(12) }
                        // screenHeight(1)
                        // { height: heightValue(5), width: widthValue(1) }
                    ]}>
                        <View>
                            <Buttons text={'Submit'}
                                onPress={OtpPage} style={[
                                    styles.bggreyish,
                                    padding(0, 15, 28),
                                    radius(50),
                                    styles.allCenter
                                ]}
                                textStyle={[fontSize(22), styles.fontwhite]} />
                        </View>
                    </View >
                    <View style={[styles.allCenter, styles.row, { marginTop: heightValue(22) }]}>
                        <Text style={[styles.fontwhite, fontSize(18),]}>
                            Already have an account ?</Text>
                        <TouchableOpacity onPress={ConsumerPage}>
                            <Text style={[styles.green, fontSize(18),]}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ScrollView >
        </KeyboardAvoidingView >
    );
};

export default Login;







