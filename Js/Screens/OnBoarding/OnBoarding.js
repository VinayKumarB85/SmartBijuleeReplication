import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
    styles,
    marginPosition,
    spaceBetween,
    paddingPosition,
    fontSize,
    fontWeight,
    lineHeight,
    padding,
    flex,
    screenHeight,
    screenWidth,
    heightwidth,
    heightValue
} from '../../Utils/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const OnBoarding = (props) => {
    return (
        <SafeAreaView
            style={[
                styles.bgBlack,
                flex(1),
                styles.spaceBetweenVertical,
                paddingPosition(40, 30, 20, 45),
            ]}>
            <View style={[screenHeight(3.5), styles.bgBlack, screenWidth(1.3)]}>
                <Text style={[styles.darkGreen, fontSize(85)]}>{props.num}</Text>
                <Text style={[styles.fontwhite, fontSize(40)]}>{props.suptitle}</Text>
                <Text style={[styles.darkGreen, fontSize(35), marginPosition(3)]}>{props.Title}</Text>
            </View>
            <View style={[styles.bgBlack, padding(15), screenHeight(3)]}></View>
            <View style={[heightwidth('26%', '95%')]}>
                <Text
                    style={[
                        styles.fontwhite,
                        fontSize(16),
                        marginPosition(10, 0, 0, 0),
                        lineHeight(23)
                    ]}>
                    {props.desc}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default OnBoarding;
