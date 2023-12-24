import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    flex,
    fontSize,
    heightValue,
    lineHeight,
    marginPosition,
    paddingPosition,
    radius,
    screenHeight,
    styles,
    widthValue,
} from '../../Utils/Styles';
import { VictoryBar } from 'victory-native';
import { useSelector } from 'react-redux';


const ComparisonComp = ({ text1, text2, text3, navigation }) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
console.log('darkmodeeeee',darkmode);


    const consumption = [{ consume: 1, total: 10 }];



    const { height, width } = Dimensions.get('window')
    return (
        <View
            style={[
                {
                    height: heightValue(8),
                    width: widthValue(2.35),
                },
                marginPosition(15, 7, 0, 0),
                paddingPosition(10, 15, 10, 15),
                radius(10),
                darkmode?styles.bgbarback: styles.bgWhite,
                styles.spaceBetweenVertical,
            ]}>
            <View style={[styles.row, styles.allCenter]}>
                <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(20)]}>{text1}</Text>
                <Text style={[darkmode?styles.fontwhite:styles.gray, fontSize(11), { marginLeft: 5 }]}>
                    {text2}
                </Text>
                <Text style={[styles.green, fontSize(20)]}>{text3}</Text>
            </View>

            <View style={[marginPosition(10)]}>
                <View style={[styles.row, styles.spaceBetweenVertical]}>
                    <Text style={[darkmode?styles.fontwhite:styles.gray, fontSize(10)]}>Consumption</Text>
                    <Text style={[darkmode?styles.fontwhite:styles.gray, fontSize(10)]}>Units</Text>
                </View>
                <View style={[styles.allCenter]}>
                    <VictoryBar
                        horizontal
                        data={consumption}
                        x="consume"
                        y="total"
                        width={widthValue(1.6)}
                        height={heightValue(30)}
                        style={{ data: { fill:darkmode? '#3c3c42':'#cfcccc' } }}
                        barWidth={heightValue(80)}
                        cornerRadius={{ top: 5, bottom: 5 }}></VictoryBar>
                </View>
            </View>
        </View>
    );
};

export default ComparisonComp;
