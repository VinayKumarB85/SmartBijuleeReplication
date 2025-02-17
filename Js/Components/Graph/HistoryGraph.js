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
import { useSelector } from 'react-redux';

const HistoryGraph = ({ data, xValue, yValue }) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);

    const { height, width } = Dimensions.get('window')
    const fixedBarHeight = 15;
    return (
        <View style={[styles.allCenter, marginPosition(25)]}>
            {/* <VictoryChart domainPadding={{ x: width / 10 }} height={height / 2.1}> */}
            <VictoryChart height={height / 2.1} domainPadding={{ x: width / 10 }}>
                {/* Black Bar */}
                <VictoryBar
                    data={data.map(d => ({ x: d[xValue], y: fixedBarHeight }))}
                    style={{ data: { fill:darkmode? '#3c3c42':'#cfcccc' } }}
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
                        axisLabel: { fontSize: fontSize(15), padding: 25,fill: darkmode?'white':'black' }, // Change color of x-axis label
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fontSize: fontSize(12), fill: darkmode?'white':'black' } // Change color of x-axis tick labels
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label=""
                    style={{
                        axisLabel: { fontSize: fontSize(12), padding: 30,  fill: darkmode?'white':'#64ad64' }, // Change color of y-axis label
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fontSize: fontSize(10),  fill: darkmode?'white':'#64ad64' } // Change color of y-axis tick labels
                    }}
                />
            </VictoryChart>

        </View >
    );
};

export default HistoryGraph;
