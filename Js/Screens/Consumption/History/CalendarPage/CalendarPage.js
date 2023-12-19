import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles, widthValue, fontSize, marginPosition, padding, radius, flex } from '../../../../Utils/Styles';

const CalendarPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const calendarRef = useRef(null);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const handleDateChange = (date) => {
    if (date) {
      const isWithinRange = date <= new Date() && date >= sevenDaysAgo;
      let formattedDate = '';

      if (isWithinRange) {
        formattedDate = date.toISOString().split('T')[0];
        console.log('Selected Date:', formattedDate);
        setSelectedStartDate(formattedDate);
        
        // Calculate the next 7 days
        const next7Days = new Date(date);
        next7Days.setDate(next7Days.getDate() + 7);
        const formattedEndDate = next7Days.toISOString().split('T')[0];
        console.log('End Date:', formattedEndDate);
        setSelectedEndDate(formattedEndDate);
      } else {
        console.log('Selected Date is not within range.');
        setSelectedStartDate('');
        setSelectedEndDate('');
      }

      setShowCalendar(false);
      onClose(formattedDate); // Close the calendar
    }
  };

  const customDayHeaderStyles = (date, selected, today, marking) => {
    const isWithinRange = date <= new Date() && date >= sevenDaysAgo;

    if (isWithinRange) {
      return selected ? styles.selectedDay : styles.selectableDay;
    } else {
      return styles.nonSelectableDay;
    }
  };

  return (
    <View style={[marginPosition(10, 20, 10, 15)]}>
      <View>
        <View style={[marginPosition(10,0,10,0),styles.row]}>
        <Text style={[styles.red,fontSize(1)]}> Start</Text><Text style={[styles.green,fontSize(16)]}>Date</Text></View>
        {showCalendar ? (
          <View style={[styles.allCenter, styles.row]}>
            <View style={[{ height: 250, backgroundColor: "#29292e", width: widthValue(10) }, styles.allCenter, padding(0, 0, 0, 20)]}>
              <FontAwesome5 name='calendar' style={[styles.white, fontSize(20)]} />
            </View>
            <View style={[{ height: 250, backgroundColor: "#29292e", width: widthValue(1.2) }, padding(10, 0, 10, 0)]}>
              <CalendarPicker
                ref={calendarRef}
                textStyle={{
                  color: 'white',
                  fontSize: 9,
                }}
                maxDate={sevenDaysAgo}
                width={300}
                customDayHeaderStyles={customDayHeaderStyles}
                onDateChange={handleDateChange}
              />
            </View>
            {selectedStartDate ? (
              <View style={[flex(1), styles.allCenter, styles.bgGray]}>
                <Text style={[styles.fontwhite, fontSize(16), { marginTop: 20 }]}> Selected Date: {selectedStartDate}</Text>
              </View>
            ) : null}
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setShowCalendar(true)}
            style={[
              {
                paddingHorizontal: 30,
                paddingVertical: 10,
              },
              radius(10),
              styles.row,
              styles.bgbarback,
              marginPosition(0, 0, 10, 0),
            ]}
          >
            <FontAwesome5
              name="calendar"
              size={18}
              color={'white'}
              style={{ marginRight: widthValue(20) }}
            />
            <Text style={[styles.fontwhite, fontSize(18)]}>
              {selectedStartDate ? `Start Date: ${selectedStartDate}` : 'Start Date'}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={[{ color: '#ff000098' }, fontSize(14), styles.textCenter]}>
          Note: Please select the Start Date prior to 7 days
        </Text>

        <TouchableOpacity
          style={[
            {
              paddingHorizontal: 30,
              paddingVertical: 10,
            },
            radius(10),
            styles.row,
            styles.bgbarback,
            marginPosition(20, 0, 10, 0),
          ]}
        >
          <FontAwesome5
            name="calendar"
            size={18}
            color={'white'}
            style={{ marginRight: widthValue(20) }}
          />
          <Text style={[styles.fontwhite, fontSize(18)]}>
            {selectedEndDate ? `End Date: ${selectedEndDate}` : 'End Date'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.centerHorizontal]}>
      <TouchableOpacity
          style={[
            {
              paddingHorizontal: 30,
              paddingVertical: 10,
              width:widthValue(3)
            },
            radius(30),
            styles.allCenter,
            styles.row,
            styles.bggreen,
            marginPosition(20, 0, 10, 0),
          ]}
        ><Text style={[styles.fontwhite,fontSize(18)]} >Submit</Text></TouchableOpacity>
        </View>
    </View>
  );
};

export default CalendarPage;
