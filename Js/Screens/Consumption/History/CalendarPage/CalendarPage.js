import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles, widthValue, fontSize, marginPosition, padding, radius, flex } from '../../../../Utils/Styles';
import { useSelector } from 'react-redux';

const CalendarPage = () => {
  const darkmode = useSelector((state) => state.system.darkMode);
  console.log('darkmodeeeee', darkmode);

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const calendarRef = useRef(null);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const handleDateChange = (date) => {
    if (date) {
      const isWithinRange = date <= new Date() && date >= sevenDaysAgo;
      let formattedStartDate = '';
      let formattedEndDate = '';

      formattedStartDate = date.toISOString().split('T')[0];
      console.log('Selected Start Date:', formattedStartDate);
      setSelectedStartDate(formattedStartDate);

      const next7Days = new Date(date);
      next7Days.setDate(next7Days.getDate() + 7);
      formattedEndDate = next7Days.toISOString().split('T')[0];
      if (isWithinRange) {
        // Calculate the next 7 days
        
        console.log('End Date:', formattedEndDate);
        setSelectedEndDate(formattedEndDate);
      } else {
        console.log('Selected Date is not within range.');
        setSelectedEndDate(formattedEndDate);
      }

      setShowCalendar(false);
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
    <View style={[marginPosition(10, 20, 10, 20)]}>
      <View>
        <View style={[marginPosition(10, 0, 10, 0), styles.row]}>
          <Text style={[darkmode ? styles.fontwhite : styles.black, fontSize(16.5)]}>Start</Text>
          <Text style={[styles.green, fontSize(16.5)]}> Date</Text>
        </View>
        {showCalendar ? (
          <View style={[styles.allCenter, styles.row]}>
            <View style={[{ height: 250, backgroundColor:darkmode?"#29292e": "#ffffff", width: widthValue(10) }, styles.allCenter, padding(0, 0, 0, 20)]}>
              <FontAwesome5 name='calendar' style={[darkmode?styles.white:styles.black, fontSize(20)]} />
            </View>
            <View style={[{ height: 250, backgroundColor:darkmode?"#29292e": "#ffffff", width: widthValue(1.2) }, padding(10, 0, 10, 0)]}>
              <CalendarPicker
                ref={calendarRef}
                textStyle={{
                  color:darkmode? 'white':'black',
                  fontSize: 9,
                }}
                maxDate={sevenDaysAgo}
                width={300}
                customDayHeaderStyles={customDayHeaderStyles}
                onDateChange={handleDateChange}
              />
            </View>
            {selectedStartDate ? (
              <View style={[flex(1), styles.allCenter, darkmode ? styles.bgGray : styles.bgWhite]}>
                <Text style={[styles.fontwhite, fontSize(16), { marginTop: 20 }]}> Selected Start Date: {selectedStartDate}</Text>
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
              darkmode ? styles.bgbarback : styles.bgWhite,
              marginPosition(0, 0, 10, 0),
            ]}
          >
            <FontAwesome5
              name="calendar"
              size={18}
              color={darkmode ? 'white' : 'black'}
              style={{ marginRight: widthValue(20) }}
            />
            <Text style={[darkmode ? styles.fontwhite : styles.black, fontSize(18)]}>
              {selectedStartDate ? `Start Date: ${selectedStartDate}` : 'Start Date'}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={[{ color: '#ff000098' }, fontSize(14), styles.textCenter]}>
          Note: Please select the Start Date prior to 7 days
        </Text>

        <View style={[styles.row, marginPosition(10)]}>
          <Text style={[darkmode ? styles.fontwhite : styles.black, fontSize(16.5)]}>End</Text>
          <Text style={[styles.green, fontSize(16.5)]}> Date</Text>
        </View>

        <TouchableOpacity
          style={[
            {
              paddingHorizontal: 30,
              paddingVertical: 10,
            },
            radius(10),
            styles.row,
            darkmode ? styles.bgbarback : styles.bgWhite,
            marginPosition(20, 0, 10, 0),
          ]}
        >
          <FontAwesome5
            name="calendar"
            size={18}
            color={darkmode ? 'white' : 'black'}
            style={{ marginRight: widthValue(20) }}
          />
          <Text style={[darkmode ? styles.fontwhite : styles.black, fontSize(18)]}>
            {selectedEndDate ? `End Date: ${selectedEndDate}` : 'End Date'}
          </Text>
        </TouchableOpacity>

        <View style={[styles.centerHorizontal]}>
          <TouchableOpacity
            style={[
              {
                paddingHorizontal: 30,
                paddingVertical: 10,
                width: widthValue(3)
              },
              radius(30),
              styles.allCenter,
              styles.row,
              styles.bggreen,
              marginPosition(20, 0, 10, 0),
            ]}><Text style={[styles.fontwhite, fontSize(18)]} >Submit</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CalendarPage;
