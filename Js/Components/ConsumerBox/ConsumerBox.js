import {View, Text, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  styles,
  flex,
  padding,
  marginPosition,
  widthValue,
  heightValue,
  radius,
  borderWidth,
  paddingPosition,
  fontSize,
} from '../../Utils/Styles';

const ConsumerBox = ({onChangeText,consumerId,setConsumerId,buttonColor}) => {
  const [isCustomerIdFocused, setIsCustomerIdFocused] = useState(false);

  // const checkId = ()=>{

  //   const InputText = consumerId.trim();
  //   if(InputText === ''){
  //     setButtonColor(styles.bggreyish)
  //     console.log('hi')
  //   } else {
  //     setButtonColor(styles.bggreen)
  //   }
  // }
  // checkId()
  const handleCustomerFocus = () => {
    setIsCustomerIdFocused(true);
  };
  return (
    <SafeAreaView>
      <View style={[paddingPosition(30), styles.centerHorizontal]}>
        <View
          style={[
            styles.bggreenish,
            {height: 50, width: widthValue(2.2)},
            radius(20),
          ]}></View>
        <View
          style={[
            styles.bggreen,
            {height: 50, width: widthValue(1.7)},
            marginPosition(-38),
            radius(20),
          ]}></View>
        <View
          style={[
            styles.bggreyish,
            paddingPosition(0, 0, 25, 0),
            {width: widthValue(1.3)},
            radius(25),
            marginPosition(-38),
          ]}>
          <Text
            style={[
              fontSize(22),
              styles.fontwhite,
              marginPosition(20, 0, 0, 25),
            ]}>
            Consumer<Text style={[styles.darkGreen]}> Number</Text>
          </Text>
          <View
            style={[
              isCustomerIdFocused ? styles.bglightgreyish : styles.bggreyish,
              isCustomerIdFocused ? radius(15) : radius(0),
              marginPosition(40, 24, 0, 24),
            ]}>
            <View
              style={[
                {
                  height: heightValue(10),
                },
                marginPosition(10, 20, 10, 20),
              ]}>
              <Text
                style={[
                  isCustomerIdFocused ? fontSize(10) : fontSize(12),
                  styles.lightGray,
                ]}>
                CUSTOMER NUMBER
              </Text>
              <TextInput
                style={[
                  {
                    width: widthValue(1.86),
                    paddingHorizontal: 0,
                    height: heightValue(20),
                    borderBottomWidth: 1,
                    paddingVertical: 0,
                  },
                  fontSize(18),
                  styles.fontwhite,
                  styles.borderGreen,
                ]}
                onChangeText={onChangeText}
                onFocus={handleCustomerFocus}
                onBlur={() => setIsCustomerIdFocused(false)}></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.centerHorizontal,marginPosition(40)]}>
      <TouchableOpacity style={[buttonColor,{width:widthValue(2.5)},styles.allCenter,padding(0,10,20),radius(30)]}>
        <Text style={[styles.fontwhite,fontSize(15)]}>Generate OTP</Text>
        
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConsumerBox;
