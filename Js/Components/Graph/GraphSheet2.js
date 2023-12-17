import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis, VictoryGroup } from 'victory-native';
import { styles, heightValue, widthValue, fontSize, marginPosition } from '../../Utils/Styles';

const GraphSheet2 = () => {

    const { height, width } = Dimensions.get('window')
    return (
        <View style={[styles.allCenter, marginPosition(-30),]}>
            <VictoryChart height={height / 2.3} domainPadding={{ x: 10 }} >
                <VictoryGroup offset={15}
                    colorScale={['#3c3c42', '#3c3c42']}
                >
                    <VictoryBar x="day"
                        y="bill"
                        cornerRadius={{ top: 6, bottom: 6 }}
                        data={[
                            { day: 'Mon', bill: 10, }, { day: 'Tue', bill: 10 }, { day: 'Wed', bill: 10 }, { day: 'Thu', bill: 10 }, { day: 'Fri', bill: 10 }, { day: 'Sat', bill: 10 }, { day: 'Sun', bill: 10 }
                        ]}
                        barWidth={10}
                    />
                    <VictoryBar x="day"
                        y="bill"

                        cornerRadius={{ top: 6, bottom: 6 }}
                        data={[
                            { day: 'Mon', bill: 10, }, { day: 'Tue', bill: 10 }, { day: 'Wed', bill: 10 }, { day: 'Thu', bill: 10 }, { day: 'Fri', bill: 10 }, { day: 'Sat', bill: 10 }, { day: 'Sun', bill: 10 }
                        ]}
                        barWidth={10}
                    />
                </VictoryGroup>
                <VictoryAxis
                    style={{
                        axis: { stroke: 'transparent' },
                        ticks: { stroke: 'transparent' },
                        tickLabels: {
                            fill: 'white', fontSize: 13.5
                        }
                    }}
                />
            </VictoryChart>
            <View style={[{ marginTop: -15 }]}><Text style={[styles.fontwhite, fontSize(12)]}>(click on chart to see the values)</Text></View>
        </View >
    );
};

export default GraphSheet2;
