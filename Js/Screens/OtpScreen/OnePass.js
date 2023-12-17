import {
    Text,
    View,
    Image,
TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import {
    styles,
    padding,
    fontSize,
    radius,
    flex,
    widthValue,
    heightValue,
    marginPosition
} from '../../Utils/Styles';
import Buttons from '../../Components/Buttons';
import OtpBox from './Components/OtpBox';
import { otpVerifyApi } from '../../api/authApi';
import { useDispatch } from 'react-redux';


const OnePass = ({ navigation,route }) => {
    // console.log(route.params.data.MobileNumber)
    const [customerNumber,setCustomerNumber] = useState(route.params.data.MobileNumber)

    const [otpError,setOtpError] = useState('')
    const [buttonColor,setButtonColor] = useState('#262f40')

    const  updateButtonColor = (isValid)=>{
       setButtonColor(isValid?'#64ad64':'#262f40')
    }

    const dispatch = useDispatch();

    const OtpPage = async  ()=>{

        const otpResp = await dispatch(otpVerifyApi(
            {
                "LoginID": "C000003",
                "otp": 1111,
                "smsTypeID": 2
              }
        ))

        console.log(otpResp)

       /*  ----navigate to drawerApp----- */
        if(otpResp.payload.status === 200){
            navigation.navigate('DrawerApp')
        } else {
                setOtpError('Invalid OTP')
        }
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
                <SafeAreaView
                    style={[
                        styles.bgBlack,
                        styles.centerHorizontal,
                        // styles.spaceBetweenVertical,
                        flex(1),
                        { paddingTop: heightValue(12) }
                        // paddingPosition(40, 20, 10, 20)
                    ]}>
                    <TouchableOpacity onPress={loginPage}>
                        <Image
                            source={require('../../../assets/Xmark2.png')}
                            style={[{ height: heightValue(5.5), width: widthValue(5.5), resizeMode: 'contain' }]}
                        />
                    </TouchableOpacity>   
                    <OtpBox customerNumber={customerNumber} updateButtonColor={updateButtonColor}/> 
                    
                    

                    <View style={[{width:widthValue(1.4)}]}>
            <Text style={[styles.red,,styles.textCenter,fontSize(14),marginPosition(0,0,20)]}>{otpError}</Text>
          </View>
                    <View style={[
                        styles.spaceBetweenVertical,
                        styles.centerHorizontal,
                    ]}>
                        <View>
                            <Buttons text={'Sign In'}

                                // onPress={dashBoardpage} 
                                onPress={OtpPage}
                                style={[
                                    {backgroundColor:buttonColor},
                                    padding(0, 12, 30),
                                    radius(50),
                                    { width: widthValue(2.6) },
                                    styles.allCenter
                                ]}
                                textStyle={[fontSize(22), styles.fontwhite]} />
                        </View>
                    </View >
                </SafeAreaView >
            </ScrollView >
        </KeyboardAvoidingView >
    );
};

export default OnePass;







