import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryTooltip,
    VictoryAxis
} from 'victory-native';
import { widthValue, styles, heightValue, fontSize, screenHeight, marginPosition } from '../../Utils/Styles';

const HistoryGraph = ({ data, xValue, yValue }) => {

    const { height, width } = Dimensions.get('window')
    const fixedBarHeight = 15;
    return (
        <View style={[styles.allCenter, marginPosition(25)]}>
            {/* <VictoryChart domainPadding={{ x: width / 10 }} height={height / 2.1}> */}
            <VictoryChart height={height / 2.1} domainPadding={{ x: width / 10 }}>
                {/* Black Bar */}
                <VictoryBar
                    data={data.map(d => ({ x: d[xValue], y: fixedBarHeight }))}
                    style={{ data: { fill: '#3c3c42' } }}
                    barWidth={widthValue(28)}
                    cornerRadius={{ top: 6 }}
                />
                {/* Green Bar */}
                <VictoryBar
                    data={data}
                    x={xValue}
                    y={yValue}
                    style={{
                        data: {
                            fill: '#64ad64',
                            width: widthValue(28),
                            height: ({ datum }) => (datum[yValue] / fixedBarHeight) * fixedBarHeight,
                            cornerRadius: { top: 3 }
                        }
                    }}
                />
                <VictoryAxis
                    label=""
                    style={{
                        axisLabel: { fontSize: fontSize(15), padding: 25, fill: 'white' }, // Change color of x-axis label
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fontSize: fontSize(12), fill: 'white' } // Change color of x-axis tick labels
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label=""
                    style={{
                        axisLabel: { fontSize: fontSize(12), padding: 30, fill: 'white' }, // Change color of y-axis label
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fontSize: fontSize(10), fill: 'white' } // Change color of y-axis tick labels
                    }}
                />
            </VictoryChart>

        </View >
    );
};

export default HistoryGraph;
