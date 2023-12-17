import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, styles, widthValue, radius, paddingPosition, marginPosition } from '../../Utils/Styles'
import { VictoryBar, VictoryChart } from 'victory-native'

const Box1 = ({ consumed, units }) => {

    const { width, height } = Dimensions.get('window')
    const consumption = [
        { consume: 1, total: 10 }
    ]
    return (
        <View style={[{ height: heightValue(9), width: widthValue(1.15) }, marginPosition(0, 25, 0, 0),

        // paddingPosition(10, 20, 5, 20),


        radius(15), styles.bgbarback, styles.spaceAroundVertical]}>
            <View style={[styles.row, styles.spaceBetweenVertical, paddingPosition(15, 25, 0, 25)]}>
                <Text style={[styles.fontwhite, fontSize(15)]}>{consumed}</Text>
                <Text style={[styles.fontwhite, fontSize(15)]}>{units}</Text>
            </View>
            <View style={[styles.allCenter]}>
                <VictoryBar horizontal data={consumption} x='consume' y='total'
                    width={widthValue(1)} height={height / 15}
                    style={{ data: { fill: '#3c3c42', } }} barWidth={14} cornerRadius={{ top: 8, bottom: 8 }}></VictoryBar>

            </View>
        </View >
    )
}

export default Box1