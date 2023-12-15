
import React from 'react';
import { View } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import Svg, { Circle } from 'react-native-svg';
import { styles, fontSize, heightValue, widthValue } from '../Utils/Styles';

const DonutChart = () => {
    const data = [{ x: 1, y: '100%' }];

    const chartSize = widthValue(5); // Size of the chart container
    const innerRadius = chartSize * 0.35; // Adjust inner radius for donut chart
    const labelRadius = chartSize * 0.35; // Adjust label radius for space between pie and label

    return (
        <View style={[styles.allCenter,]}>
            <Svg width={chartSize} height={chartSize}>
                {/* Background circle */}
                <Circle
                    cx={chartSize / 2}
                    cy={chartSize / 2}
                    r={chartSize * 0.475} // Adjusted background circle radius
                    fill="#64ad64"
                />
                {/* VictoryPie */}
                <VictoryPie
                    standalone={false}
                    colorScale={[ '#29292e',]}
                    width={chartSize}
                    height={chartSize}
                    data={data}
                    innerRadius={innerRadius}
                    labelRadius={labelRadius}
                    style={{ labels: { fontSize: 20, fill: 'transparent' } }}
                />
                {/* VictoryLabel */}
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fill: 'white', fontWeight: 'bold', backgroundColor: 'transparent' }}
                    x={chartSize / 2}
                    y={chartSize / 2}
                    text="30%"
                />
            </Svg>
        </View>
    );
};

export default DonutChart;

