import {View, Text} from 'react-native';
import React from 'react';
import {styles,padding,fontSize,marginPosition,paddingPosition,borderWidth,flex} from '../../../Utils/Styles'
import { useSelector } from 'react-redux';

const VoltageHour = () => {

  const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
  return (
    <View
      style={[
        styles.row,
        styles.spaceBetweenVertical,
        borderWidth(0, 0, 0, 1, 0),
        styles.borderGray,
        padding(0, 10),
      ]}>
      <View style={[flex(4), styles.row, styles.spaceBetweenVertical]}>
        <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(14)]}>Log Hour</Text>
        <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(14)]}>Voltage</Text>
        <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(14)]}>Freq</Text>
      </View>
      <View style={[flex(2), styles.flexEnd]}>
        <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(14)]}>MD</Text>
      </View>
    </View>
  );
};

export default VoltageHour;
