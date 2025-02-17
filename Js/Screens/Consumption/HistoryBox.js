import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    flex,
    fontSize,
    heightValue,
    lineHeight,
    radius,
    screenHeight,
    styles,
    widthValue,
    padding,
    marginPosition,
    paddingPosition
} from '../../Utils/Styles'
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux';


const HistoryBox = ({ text1, text2 }) => {
    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);

    const { height, width } = Dimensions.get('window')
    const consumption = [
        { consume: 1, total: 2 },
        { consume: 2, total: 3 },
        { consume: 3, total: 4 },
        { consume: 4, total: 5 },
        { consume: 5, total: 2 },
        { consume: 6, total: 3 },
        { consume: 7, total: 2 },
        { consume: 8, total: 4 },
        { consume: 9, total: 3 },
        { consume: 10, total: 5 },
    ];
    return (
        <View
            style={[{
                height: heightValue(7),
                width: widthValue(1.1),
            },
            marginPosition(20, 20, 0, 0),
            radius(15),
            darkmode?styles.bgbarback:styles.bgWhite,
            styles.row,
            styles.allCenter
            ]}>
            <View style={[{width: widthValue(1.5),},styles.flexStart]}> 
                <View style={[styles.row]}>
                    <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(21)]}>{text1}</Text>
                    <Text style={[styles.green, fontSize(21)]}>{text2}</Text>
                </View>
                    <View>
                        <VictoryChart
                            width={width/1.5}
                            height={height / 13}
                            domainPadding={{ x: 40,}}
                            padding={{top:10,right:20,bottom:5,left:0}}
                        >
                            <VictoryBar
                                data={consumption.map((item) => ({
                                    ...item, fill: item.consume % 2 === 0 ? '#ada7a8' :'#64ad64',
                                }))}
                                x="consume"
                                y="total"
                                style={{
                                    data: {
                                        fill: ({ datum }) => datum.fill,
                                    },
                                }}
                                barWidth={widthValue(25)}
                                cornerRadius={{ top: 8 }}
                            />
                            <VictoryAxis
                                style={{
                                    axis: { stroke: 'transparent' },
                                    ticks: { stroke: 'transparent' },
                                    tickLabels: { fill: 'transparent' },

                                }}
                            />
                        </VictoryChart>
                    </View>
              </View>
              <View style={[styles.centerHorizontal, styles.spaceBetween,]}>
                <Fontawesome5 name={'chevron-up'} style={[styles.green, fontSize(18)]} />
                <Text style={[styles.green, fontSize(30),]}>0</Text>
                <Text style={[darkmode?styles.green:styles.black, fontSize(16),]}>Units</Text>
            </View>
        </View>
    );
};
export default HistoryBox;


