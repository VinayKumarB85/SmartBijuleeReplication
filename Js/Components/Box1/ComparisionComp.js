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

const Box2 = ({ text1, text2, text3, navigation }) => {
    const consumption = [{ consume: 1, total: 10 }];

    const { height, width } = Dimensions.get('window')
    return (
        <View
            style={[
                {
                    height: heightValue(9),
                    width: widthValue(2.35),
                },
                marginPosition(15, 7, 0, 0),
                paddingPosition(10, 15, 10, 15),
                radius(10),
                styles.bgbarback,
                styles.spaceBetweenVertical,
            ]}>
            <View style={[styles.row, styles.allCenter]}>
                <Text style={[styles.fontwhite, fontSize(20)]}>{text1}</Text>
                <Text style={[styles.fontwhite, fontSize(11), { marginLeft: 5 }]}>
                    {text2}
                </Text>
                <Text style={[styles.green, fontSize(20)]}>{text3}</Text>
            </View>

            <View style={[marginPosition(10)]}>
                <View style={[styles.row, styles.spaceBetweenVertical]}>
                    <Text style={[styles.fontwhite, fontSize(12)]}>Consumption</Text>
                    <Text style={[styles.fontwhite, fontSize(12)]}>units</Text>
                </View>
                <View style={[styles.allCenter]}>
                    <VictoryBar
                        horizontal
                        data={consumption}
                        x="consume"
                        y="total"
                        width={widthValue(1.6)}
                        height={heightValue(30)}
                        style={{ data: { fill: '#3c3c42' } }}
                        barWidth={heightValue(80)}
                        cornerRadius={{ top: 5, bottom: 5 }}></VictoryBar>
                </View>
            </View>
        </View>
    );
};

export default Box2;
