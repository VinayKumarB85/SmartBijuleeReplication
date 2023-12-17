import { View, Text } from 'react-native';
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
    marginPosition,
    paddingPosition
} from '../../Utils/Styles';
import { VictoryBar, VictoryChart } from 'victory-native';

const MonthlyBox = () => {
    const consumption = [{ consume: 1, total: 10 }];
    let unit = '<0 units'
    return (
        <View
            style={[
                {
                    height: heightValue(5.5),
                    width: widthValue(1.1),
                },
                marginPosition(15, 10, 80, 20),
                paddingPosition(15, 10, 10, 25),
                radius(15),
                styles.bgbarback,
            ]}>
            <View style={[styles.row]}>
                <Text style={[styles.fontwhite, fontSize(20)]}>Monthly</Text>
                <Text style={[styles.green, fontSize(20)]}> Comparison</Text>
            </View>
            <View>
                <View>
                    <View style={[marginPosition(10)]}>
                        <Text style={[styles.fontwhite, fontSize(12)]}>November</Text>
                        <View style={[styles.row, styles.centerHorizontal, marginPosition(-5, 0, 0, -50)]}>
                            <VictoryBar
                                horizontal
                                data={consumption}
                                x="consume"
                                y="total"
                                width={widthValue(1.3)}
                                height={heightValue(20)}
                                style={{ data: { fill: '#3c3c42', } }}
                                barWidth={heightValue(80)}
                                cornerRadius={{ top: 8, bottom: 8 }} />
                            <Text style={[styles.green, fontSize(14), marginPosition(0, 0, 0, -35)]}>{unit}</Text>
                        </View>
                    </View>
                    <View style={[marginPosition(-10)]}>
                        <Text style={[styles.fontwhite, fontSize(12)]}>October</Text>
                        <View style={[
                            marginPosition(-5, 0, 0, -50),
                            styles.row, styles.centerHorizontal]}>
                            <VictoryBar
                                horizontal
                                data={consumption}
                                x="consume"
                                y="total"
                                width={widthValue(1.3)}
                                height={heightValue(20)}
                                style={{ data: { fill: '#3c3c42', } }}
                                barWidth={heightValue(80)}
                                cornerRadius={{ top: 8, bottom: 8 }} />
                            <Text style={[styles.gr, fontSize(14), marginPosition(0, 0, 0, -35)]}>0 units</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MonthlyBox;
