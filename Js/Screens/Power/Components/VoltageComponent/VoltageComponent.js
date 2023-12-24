import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  heightValue,
  styles,
  widthValue,
  radius,
  paddingPosition,
  padding,
  fontSize,
} from '../../../../Utils/Styles';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from 'victory-native';
import {graphData} from '../../../../Constants/Const';
import {normalize} from '../../../../Utils/styles2';
import { useSelector } from 'react-redux';

const VoltageComponent = () => {

  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={[
        darkmode?styles.bgbarback:styles.bgWhite,
        radius(15),
        {width: widthValue(1.12), height: heightValue(7)},
        padding(0, 10, 20),
        styles.spaceBetweenVertical,
        styles.row,
      ]}>
      <View style={[styles.selfStart]}>
        <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(15)]}>
          Peak<Text style={[styles.green]}> Quality</Text>
        </Text>
        <View style={[{width: widthValue(2), height: heightValue(5)}]}>
          <VictoryChart
            width={widthValue(1.7)}
            height={heightValue(14)}
            domainPadding={{x: 100, y: 10}}
            padding={{top: 0, bottom: 0, right: 0, left: 0}}
            style={{
              data: {stroke: '#c43a31'},
              parent: {border: '2px solid #fff'},
            }}>
            <VictoryLine
              data={graphData.PowerData}
              interpolation={'natural'}
              x={'time'}
              y={'voltage'}
              style={{data: {stroke: '#64ad64'}}}
              scale={{y: heightValue(20) / (graphData.PowerData.length - 1)}}
            />
            <VictoryAxis
              tickFormat={() => ''}
              style={{
                axis: {stroke: 'grey'},
              }} />
            
            <VictoryAxis
              dependentAxis
              style={{
                ticks: {stroke: 'grey'},
                tickLabels: {fill: 'transparent'},
                axis: {stroke: 'none'},
                grid: {stroke: 'grey', opacity: 0.4},
                height: 15,
              }}
            />
          </VictoryChart>
        </View>
      </View>
      <View style={[styles.centerHorizontal, styles.spaceBetween]}>
        <View style={[styles.row, styles.allCenter]}>
          <Text style={[darkmode?styles.fontwhite:styles.black]}>12am</Text>
          <Fontawesome5
            name={'chevron-up'}
            style={[styles.green, fontSize(16)]}
          />
        </View>
        <Text style={[styles.green, fontSize(30)]}>0</Text>
        <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(13)]}>Voltage</Text>
      </View>
    </View>
  );
};

export default VoltageComponent;
