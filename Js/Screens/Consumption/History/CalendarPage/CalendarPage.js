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


