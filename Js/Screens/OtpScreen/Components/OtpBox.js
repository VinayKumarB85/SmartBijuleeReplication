import { View, Text,TextInput } from 'react-native'
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

const OtpBox = ({customerNumber,updateButtonColor,onChangeOtp}) => {
    // console.log(route.params.data.MobileNumber)

    const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [otpInput,setOtpInput] = useState('')

    const handleOtpChange = (userOtp)=>{
        setOtpInput(userOtp)

        const isValid = userOtp.trim() !== '' && userOtp.length >=4;
        updateButtonColor(isValid)

    }

    const transformMobileNumber = (number) => {
        const hiddenPart = 'X'.repeat(number.length - 2);
        const visiblePart = number.slice(-2);
        return hiddenPart + visiblePart;
      };
    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
    };

  return (
    <View>
      <View
                        style={[styles.allCenter,
                        // screenHeight(2.3)
                        { height: heightValue(2.2),},
                        
                        ]}>
                        <View
                            style={[
                                styles.bgdarkgreen,
                                {height:50, width:185},
                                radius(0, 130, 0, 0, 130),
                                radius(20),
                            ]}></View>
                        <View
                            style={[
                                styles.bggreen,
                                {height:50, width:230},
                                marginPosition(-35),
                radius(20),
                            ]}></View>
                        <View
                            style={[
                                
                                screenWidth(1.3),
                                marginPosition(-35),
                                styles.bggreyish,
                                radius(30, 30, 30, 30),
                                { paddingBottom: heightValue(19), paddingRight: widthValue(20) }
                            ]}>
                            <Text style={[fontSize(26), styles.fontwhite, paddingPosition(20, 0, 0, 30)]}>
                                Enter <Text style={[fontSize(26), styles.green]}>OTP</Text>
                            </Text>
                            <View style={[{
                                marginLeft: widthValue(18),
                                marginTop: heightValue(30)

                            }]}>
                                <View
                                    style={[
                                        isCustomerIdFocused
                                            ? styles.bglightgreyish : styles.bggreyish,
                                        paddingPosition(5, 15, 10, 20),
                                        styles.positionRelative,
                                        radius(20)]}>
                                    <Text style={[ styles.gr]}>
                                        MOBILE NUMBER
                                    </Text>
                                    <TextInput
                                    value={transformMobileNumber(customerNumber)}
                                        style={[
                                            { borderBottomWidth: 1, },
                                            styles.borderGreen,
                                            // styles.fontwhite,
                                            fontSize(22),
                                            styles.white,
                                            { padding: 0, paddingTop: 10 }
                                        ]}
                                    />
                                </View>
                                <View
                                    style={[
                                        isPasswordFocused
                                            ? styles.bglightgreyish : styles.bggreyish,
                                        paddingPosition(15, 15, 15, 20),
                                        styles.positionRelative,
                                        radius(15)]}>
                                    <Text style={[isPasswordFocused ? fontSize(11.5) : fontSize(13.5), styles.gr,]}>
                                        OTP                               </Text>
                                    <TextInput
                                        style={[
                                            { borderBottomWidth: 1 },
                                            styles.borderGreen,
                                            styles.fontwhite,
                                            fontSize(22),
                                            { padding: 0, paddingTop: heightValue(80) }
                                        ]}
                                        onChangeText={onChangeOtp}
                                        onFocus={handlePasswordFocus}
                                        onBlur={() => setIsPasswordFocused(false)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View >
    </View>
  )
}

export default OtpBox