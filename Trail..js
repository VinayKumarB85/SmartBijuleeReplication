import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue } from './Js/Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from './Js/Components/Header/Header'
import Box1 from './Js/Components/Box1/DashBoardComponent'
import Graph from './Js/Components/Graph/Graph'
import DonutChart from './Js/Components/DonutChart'
import DrawerScreenWrapper from './Js/Screens/Drawer Nav/Drawers/DrawerScreenWrapper'

const DashBoard = ({ navigation }) => {

    // const openDrawer = () => {
    //     navigation.toggleDrawer();
    // }

    return (
        // <DrawerScreenWrapper>
        <View style={[flex(1), { width: widthValue(1), paddingTop: 25 }, styles.bglightblack]}>
            <View style={[marginPosition(0, 0, 0, 2)]}>
                <TouchableOpacity
                // onPress={openDrawer}
                >
                    <FontAwesome5
                        name={'bars'}
                        style={[styles.fontwhite, fontSize(24),]}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView >
                <View style={[marginPosition(8, 0, 0, 20)]}>
                    <Header
                        Greeting={'Welcome'}
                        name={'JuliusCeaser'}
                        ConsumerId={'Consumer ID: C000003'}
                    />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[{ width: widthValue(1), }]}>
                    <Box1 consumed={'Last Month Consumption:'} units={'0 Units'} />
                    <Box1 consumed={'Monthly Consumption:'} units={'0 Units'} />
                    <Box1 consumed={'Monthly Forecast:'} units={'0 Units'} />
                </ScrollView>
                <View style={[marginPosition(0, 20, 0, 20)]}>
                    <View style={[marginPosition(15), styles.bgbarback, radius(18), screenHeight(2),]}>
                        <Graph />
                    </View>
                    <View style={[{ height: heightValue(7), paddingHorizontal: widthValue(30), }, styles.allCenter, styles.row, styles.bgbarback, radius(15), styles.spaceEvenly]}>
                        <View style={[]}>
                            <Text style={[styles.fontwhite, fontSize(15)]}>Today's Consumption</Text>
                            <Text style={[styles.green, fontSize(22), styles.textCenter, { marginTop: 1 }]}>0 Units</Text>
                        </View>
                        <DonutChart />
                    </View>
                </View>
            </ScrollView>
        </View>
        // </DrawerScreenWrapper>
    )
}
export default DashBoard