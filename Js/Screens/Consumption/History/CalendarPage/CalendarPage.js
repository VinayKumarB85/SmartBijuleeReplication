import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
    fontSize,
    heightValue,
    styles,
    widthValue,
    radius,
    flex,
    marginPosition,
    padding,
    paddingPosition
} from '../../../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CalendarPicker from 'react-native-calendar-picker';



const CalendarPage = () => {
    const [showCalendar,setShowCalendar] = useState(false)
    const openCalendar = () => {
        setShowCalendar(!showCalendar)
    }

    const customDayHeaderStyles = (date, selected, today, marking) => {
        // const isWithinRangeDate = isWithinRange(date);
        return {
          dayOfWeekStyles: {
            color: 'white',
            fontSize: 14,
          },
        };
      };
    return (
        <View style={[marginPosition(0, 20, 0, 15),{width:widthValue(1.1)}]}>
            <Text style={[styles.fontwhite, fontSize(20), { marginTop: 30 }]}>
                Start <Text style={[styles.green, fontSize(20)]}>Date</Text>
            </Text>
            <TouchableOpacity
                onPress={openCalendar}
                style={[
                    {
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                    },
                    radius(10),
                    styles.row,
                    styles.bgbarback,marginPosition(10,0,10,0)
                ]}>
                <FontAwesome5
                    name="calendar"
                    size={18}
                    color={'white'}
                    style={{ marginRight: widthValue(20) }}
                />
                <Text style={[styles.fontwhite, fontSize(18),]}>Start Date</Text>
            </TouchableOpacity>

            {showCalendar && (
                <View style={[ { width: widthValue(1.1), backgroundColor:'#29292e' },radius(10),styles.row,styles.centerHorizontal,paddingPosition(10,0,10,20),,styles.spaceBetweenVertical]}>
                    <View>
                        <FontAwesome5 name='calendar' style={[styles.fontwhite,fontSize(15),]} />
                    </View>
                    <View style={[marginPosition(0,0,5,10),]}>
                    <CalendarPicker
                    textStyle={{
                        color:'white',
                        fontSize:10,
                        
                    }}
                       width={280}
                    // height={220}
                    
                    customDayHeaderStyles={customDayHeaderStyles}
                   
                    />
                    </View>
                </View>
            )}














            <TouchableOpacity
                // onPress={openCalendar}
                style={[
                    {
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        marginTop: 20,
                    },
                    radius(10),
                    styles.row,
                    styles.bgbarback
                ]}>
                <FontAwesome5
                    name="calendar"
                    size={18}
                    color={'white'}
                    style={{ marginRight: widthValue(20) }}
                />
                <Text style={[styles.fontwhite, fontSize(18)]}>End Date</Text>
            </TouchableOpacity>
        </View >
    );
};

export default CalendarPage;


const login = async () => {
    const loginresp = await dispatch(userVerifyApi({
      "LoginID": CustomerID,
      "password": pass,
      "confirmation": "N",
      "deviceInfo": {
        "deviceID": "122323",
        "deviceMake": "android",
        "deviceOS": "android",
        "deviceOSVersion": "12.1"
      }
    }));
    console.log("login", loginresp);
  
    if (loginresp.payload.status === 201) {
      const CustomerDetails = loginresp.payload.data;
      const loginId = loginresp.meta.arg.LoginID;
  
      navigation.navigate('OnePass', {
        data: CustomerDetails,
        Id: loginId,
      });
  
      setLoginError('');
  
      const deviceError = loginresp.payload.data.ErrorDescription;
      if (deviceError === "Login device is different") {
        Alert.alert(
          "Login device is different",
          "Do you want to login on this device and logout from all other devices?",
          [
            {
              text: 'CANCEL',
            },
            {
              text: 'CONFIRM',
              onPress: () => {
                // Call the updateConfirmation function here
                updateConfirmation();
              },
            },
          ]
        );
      }
    }
  };
  
  const updateConfirmation = async () => {
    // Make another API call to update confirmation to 'Y'
    const updateConfirmationResp = await dispatch(userVerifyApi({
      "LoginID": CustomerID,
      "password": pass,
      "confirmation": "Y",
      "deviceInfo": {
        "deviceID": "122323",
        "deviceMake": "android",
        "deviceOS": "android",
        "deviceOSVersion": "12.1"
      }
    }));
  
    console.log("updateConfirmationResp", updateConfirmationResp);
  
    // Check the response and handle accordingly
    if (updateConfirmationResp.payload.status === 200) {
      console.log("Confirmation updated successfully");
    } else {
      console.error("Failed to update confirmation");
    }
  };
  

  // const confirmResp = await dispatch(
      //   userVerifyApi({
      //     LoginID: CustomerID,
      //     password: pass,
      //     confirmation: 'Y',
      //     deviceInfo: {
      //       deviceID: deviceID,
      //       deviceMake: deviceMake,
      //       deviceOS: deviceOS,
      //       deviceOSVersion: deviceOSVersion,
      //     },
      //   }),
      // );
      // console.log('confirmRespone', confirmResp);
      // const CMobileNum = confirmResp.payload.data.MobileNumber;
      // const  CLoginId =  confirmResp.meta.arg.LoginID;
      // console.log('phone:',CMobileNum)
      // console.log('id:',CLoginId)