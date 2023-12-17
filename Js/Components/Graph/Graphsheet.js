import { View, Text, Dimensions } from 'react-native';
import React, { useState,useEffect } from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
    VictoryTooltip,
    VictoryAxis
} from 'victory-native';
import { widthValue, styles, heightValue, fontSize, screenHeight, marginPosition } from '../../Utils/Styles';

const Graphsheet = ({ data, xValue, yValue }) => {

    const [number,setNumber] = useState(data);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setNumber(prevData=> prevData.map(item => ({
            month: item.month,
            earnings: Math.floor(Math.random() * 100),
          })));
          
        }, 5000);
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [number]);
    
    const fixedBarHeight = 15;
    const { height, width } = Dimensions.get('window')
    return (
        <View style={[styles.centerHorizontal, marginPosition(-35)]}>
            {/* <VictoryChart domainPadding={{ x: width / 10 }, y = { height / 2.4}}> */}
            <VictoryChart domainPadding={{ x: width / 15 }} height={height / 2.3}>
            <VictoryBar
                    data={data.map(d => ({ x: d[xValue], y: fixedBarHeight }))}
                    style={{ data: { fill: '#3c3c42' } }}
                    barWidth={widthValue(28)}
                    cornerRadius={{ top: 6 }}
                />
                <VictoryBar
                    labelComponent={<VictoryTooltip></VictoryTooltip>}
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
                    }
                    
                    }
                    barWidth={widthValue(28)}
                    cornerRadius={{ top: 9, bottom: 8 }}
                />
                <VictoryAxis
                    style={{
                        axis: { stroke: 'transparent' },
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fill: 'white', fontSize: 12 },
                    }}></VictoryAxis>
            </VictoryChart>
        </View >
    );
};

export default Graphsheet;
