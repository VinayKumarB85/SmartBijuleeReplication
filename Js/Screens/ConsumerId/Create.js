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
import NewAccount from '../NewAccount/NewAccount';


const Login = ({ navigation }) => {
    const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const handleCustomerFocus = () => {
        setIsCustomerIdFocused(true);
    };

    const newAccountPage = () => {
        navigation.navigate('NewAccount')
    }
    const loginPage = () => {
        navigation.navigate('Login')
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
                        styles.centerHorizontal,
                        // styles.spaceBetweenVertical,
                        flex(1),
                        // paddingPosition(40, 20, 10, 20)
                    ]}>
                    <TouchableOpacity onPress={loginPage} style={[{ marginTop: heightValue(15) }]}>
                        <Image
                            source={require('../../../assets/Xmark2.png')}
                            style={[{ height: widthValue(5.5), width: widthValue(5.5), resizeMode: 'contain' }]}
                        />
                    </TouchableOpacity >
                    <View style={[{ marginTop: heightValue(5.3) }, styles.centerHorizontal]}>
                        <View style={[styles.bggreenish, { height: heightValue(15), width: widthValue(2.2) }, radius(20)]}>
                        </View>
                        <View style={[styles.bggreen, { height: heightValue(15), width: widthValue(1.7), marginTop: heightValue(-22) }, radius(20)]}></View>
                        <View style={[styles.bggreyish, { paddingBottom: heightValue(25), width: widthValue(1.3), marginTop: heightValue(-22.2) }, radius(25)]}>
                            <Text style={[fontSize(28), styles.fontwhite, { marginTop: heightValue(40), marginLeft: widthValue(11) }]}>Consumer <Text style={[styles.darkGreen]}>ID</Text></Text>
                            <View style={[isCustomerIdFocused ? styles.bglightgreyish : styles.bggreyish,
                            isCustomerIdFocused ? radius(15) : radius(0), { height: heightValue(9), marginTop: heightValue(25), marginHorizontal: widthValue(15), }]}>
                                <View style={[{ height: heightValue(10), marginVertical: heightValue(70), marginHorizontal: widthValue(20) }]}>
                                    <Text style={[
                                        isCustomerIdFocused ? fontSize(12.8) :
                                            fontSize(14.8),
                                        styles.lightGray]}>CONSUMER ID</Text>
                                    <TextInput
                                        style={[{
                                            // marginTop: heightValue(0), 
                                            width: widthValue(1.86),
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
                    </View>
                    <View style={[
                        styles.spaceBetweenVertical,
                        styles.centerHorizontal,
                        { marginTop: heightValue(19) }
                        // screenHeight(1)
                        // { height: heightValue(5), width: widthValue(1) }
                    ]}>
                        <View>
                            <Buttons text={'Next'}
                                onPress={newAccountPage} style={[
                                    styles.bggreyish,
                                    padding(0, 12, 30),
                                    radius(50),
                                    { width: widthValue(2.6) },
                                    styles.allCenter
                                ]}
                                textStyle={[fontSize(22), styles.fontwhite]} />
                        </View>

                        <View style={[styles.allCenter, styles.row, { marginTop: heightValue(30) },]}>
                            <Text style={[styles.fontwhite, fontSize(18),]}>
                                Already have an account ?</Text>
                            <TouchableOpacity onPress={newAccountPage}>
                                <Text style={[styles.green, fontSize(18),]}> Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View >
            </ScrollView >
        </KeyboardAvoidingView >
    );
};

export default Login;



