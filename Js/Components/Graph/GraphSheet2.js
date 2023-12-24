import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis, VictoryGroup } from 'victory-native';
import { styles, heightValue, widthValue, fontSize, marginPosition } from '../../Utils/Styles';
import { useSelector } from 'react-redux';

const GraphSheet2 = () => {
    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);

    const { height, width } = Dimensions.get('window')
    return (
        <View style={[styles.allCenter, marginPosition(-30),]}>
            <VictoryChart height={height / 2.3} domainPadding={{ x: 10 }} >
                <VictoryGroup offset={15}
                    colorScale={darkmode?['#3c3c42', '#3c3c42']:['#cfcccc', '#cfcccc']}
                >
                    <VictoryBar x="day"
                        y="bill"
                        cornerRadius={{ top: 4, bottom: 4 }}
                        data={[
                            { day: 'Mon', bill: 10, }, { day: 'Tue', bill: 10 }, { day: 'Wed', bill: 10 }, { day: 'Thu', bill: 10 }, { day: 'Fri', bill: 10 }, { day: 'Sat', bill: 10 }, { day: 'Sun', bill: 10 }
                        ]}
                        barWidth={8}
                    />
                    <VictoryBar x="day"
                        y="bill"

                        cornerRadius={{ top: 4, bottom: 4 }}
                        data={[
                            { day: 'Mon', bill: 10, }, { day: 'Tue', bill: 10 }, { day: 'Wed', bill: 10 }, { day: 'Thu', bill: 10 }, { day: 'Fri', bill: 10 }, { day: 'Sat', bill: 10 }, { day: 'Sun', bill: 10 }
                        ]}
                        barWidth={8}
                    />
                </VictoryGroup>
                <VictoryAxis
                    style={{
                        axis: { stroke: 'transparent' },
                        ticks: { stroke: 'transparent' },
                        tickLabels: {
                            fill:darkmode? 'white':'black', fontSize: 13.5
                        }
                    }}
                />
            </VictoryChart>
            <View style={[{ marginTop: -15 }]}><Text style={[darkmode?styles.fontwhite:styles.black, fontSize(10)]}>(click on chart to see the values)</Text></View>
        </View >
    );
};

export default GraphSheet2;
