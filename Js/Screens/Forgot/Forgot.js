import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  styles,
  paddingPosition,
  padding,
  fontSize,
  marginPosition,
  radius,
  flex,
  widthValue,
  heightValue,
} from '../../Utils/Styles';
import {TouchableOpacity} from 'react-native';
import Buttons from '../../Components/Buttons';
import { useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';


const Forgot = ({navigation}) => {
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);
  const [consumerId,setConsumerId] = useState('')
  const [buttonColor,setButtonColor]= useState()
  const [loader,setLoader] = useState('Submit')

  const checkConditions = (consumerId) => {
    const isConditionSatisfied = typeof consumerId === 'string' && consumerId.trim() !== '';
    console.log('isConditionSatisfied:', isConditionSatisfied);
    setButtonColor(isConditionSatisfied ?'#64ad64':'#262f40');
  };
  let globalVariableForgot = useSelector((state)=>state)
console.log('globalVariableForgot',globalVariableForgot);
const loginId = globalVariableForgot.auth.user.data.CANumber;
console.log('loginId',loginId)

  

  console.log('consumerId',consumerId)

  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };
  
  const loginPage = () => {
    navigation.navigate('Login');
  };

  const resetOtpScreen =()=>{
    setLoader(
      <View style={[styles.row,styles.centerHorizontal]}>
      <Text style={[styles.fontwhite,fontSize(16)]}>Loading</Text>
      <LottieView source={require('../../../loader2.json')} style={[styles.fontwhite,{height:30,width:30}]} autoPlay loop/>
      </View>
    )
    if(consumerId === loginId )
    {
      navigation.navigate('ResetOtp',{
        data:globalVariableForgot.auth.user.data.mobilenumber,
        id:globalVariableForgot.auth.user.data.CANumber
      })
     
    }
  }
  return (
    <KeyboardAvoidingView
      style={[flex(1)]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={[
              styles.bgBlack,
              styles.centerHorizontal,
              flex(1),
            ]}>
            <TouchableOpacity onPress={loginPage} style={[marginPosition(55)]}>
              <Image
                source={require('../../../assets/Xmark2.png')}
                style={[
                  {
                    height: widthValue(5.5),
                    width: widthValue(5.5),
                    resizeMode: 'contain',
                  },
                ]}
              />
            </TouchableOpacity>
      
            <View
              style={[
                styles.allCenter,
                {marginTop: heightValue(12), width: widthValue(1.3)},
              ]}>
              <View
                style={[
                  styles.bggreenish,
                  {height: 40, width: widthValue(2.2)},
                  marginPosition(40),
                  radius(20),
                ]}></View>
              <View
                style={[
                  styles.bggreen,
                  {
                    height: 40,
                    width: widthValue(1.7),
                  },
                  radius(20),
                  marginPosition(-25),
                ]}></View>
              <View
                style={[
                  {width: widthValue(1.3)},
                  styles.bggreyish,
                  radius(20),
                  marginPosition(-25),
                  paddingPosition(0, 0, 50, 0),
                ]}>
                <Text
                  style={[
                    fontSize(26),
                    styles.fontwhite,
                    paddingPosition(20, 0, 0, 30),
                    marginPosition(18),
                  ]}>
                  Forgot{' '}
                  <Text style={[fontSize(26), styles.green]}>Password</Text>
                </Text>

            <View
                  style={[
                    {
                      marginHorizontal: widthValue(20),
                      marginVertical: heightValue(30),
                    },
                    styles.allCenter,
                    isCustomerIdFocused
                      ? styles.bglightgreyish
                      : styles.bggreyish,
                    isCustomerIdFocused ? radius(20) : radius(0),
                  ]}>
                  <View
                    style={[
                      {height: heightValue(10), width: 210},
                      styles.centerVertical,
                    ]}>
                    <Text
                      style={[
                        isCustomerIdFocused ? fontSize(12) : fontSize(13),
                        styles.lightGray,
                      ]}>
                      CUSTOMER ID
                    </Text>
                    <TextInput
                      style={[
                        {
                          paddingHorizontal: 0,
                          height: heightValue(20),
                          borderBottomWidth: 1,
                          paddingVertical: 0,
                        },
                        fontSize(23),
                        styles.fontwhite,
                        styles.borderGreen,
                      ]}
                      value={consumerId}
                      onChangeText={(value)=>
                       { checkConditions(value)
                        setConsumerId(value)}}
                      onFocus={handleCustomerFocus}
                      onBlur={() => setIsCustomerIdFocused(false)}></TextInput>
                  </View>
                </View>
              </View>
            </View> 
            <View
              style={[
                styles.spaceBetweenVertical,
                styles.centerHorizontal,
                {marginTop: heightValue(12)},
              ]}>
              <View>
                <Buttons
                  text={loader}
                  onPress={resetOtpScreen}
                  style={[
                    styles.bggreyish,
                    padding(0, 15, 30),
                    radius(50),
                    styles.allCenter,
                  ]}
                  textStyle={[fontSize(18), styles.fontwhite]}
                />
              </View>
            </View>
            <View
              style={[
                styles.allCenter,
                styles.row,
                {marginTop: heightValue(22)},
              ]}>
              <Text style={[styles.fontwhite, fontSize(18)]}>
                Already have an account ?
              </Text>
              <TouchableOpacity onPress={loginPage}>
                <Text style={[styles.green, fontSize(18)]}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Forgot;
