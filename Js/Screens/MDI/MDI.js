import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, lineHeight, radius, screenHeight, styles, widthValue, padding, marginPosition, paddingPosition, borderWidth, borderColor } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'
import Header2 from '../../Components/Header/Header2'
import HistoryBox from '../Consumption/HistoryBox'
import Graphsheet from '../../Components/Graph/Graphsheet'
import { graphData } from '../../Constants/Const'


const MDI = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer();
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), },  styles.bglightblack,]}>
                <View style={[marginPosition(20, 0, 0, 25)]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={[marginPosition(10, 20, 0, 15)]}>
                        <Header2
                            title1={'Maximum'}
                            title2={' Demand'}
                            Desc={'Are you surpassing your santioned demand?'} />
                    </View>
                    <View style={[marginPosition(0,20,0,20)]}>
                        <HistoryBox text1={'Sanctioned'} text2={' Load'} />
                    </View>
                    <View style={[marginPosition(15, 20, 0, 20), styles.bgbarback, radius(18), screenHeight(1.85), padding(0, 20, 10)
                    ]}>
                        <View style={[styles.row, paddingPosition(0, 0, 20, 10)]}>
                            <Text style={[styles.fontwhite, fontSize(22)]}>Monthly</Text>
                            <Text style={[styles.green, fontSize(22)]}> Max Demand</Text>
                        </View>
                        <Graphsheet data={graphData.monthData} xValue={'month'} yValue={'bill'} />
                        <View style={[styles.centerHorizontal, { gap: 5 }]}>
                            <Text style={[styles.fontwhite, fontSize(11)]}>(Click on the chart to see the value) </Text>
                            <Text style={[styles.green, fontSize(14),]}>Monthly Maximum Demand Indicator</Text>
                        </View>
                    </View>
                    <View style={[styles.centerHorizontal, marginPosition(15,),]}>
                        <TouchableOpacity style={[{ width: widthValue(1.6) }, styles.centerHorizontal, styles.bggreen, paddingPosition(5, 0, 5, 0), radius(30)]}>
                            <Text style={[styles.fontwhite, fontSize(9.5)]}>(Click here to view Current Month's MDI Chart)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[marginPosition(20, 20, 30, 20), styles.bgbarback, radius(18), screenHeight(5.8), padding(0, 20, 10)]}>
                        <View style={[styles.row, paddingPosition(0, 0, 15, 10)]}>
                            <Text style={[styles.fontwhite, fontSize(20)]}>Recorded </Text>
                            <Text style={[styles.green, fontSize(20)]}>Spike MD</Text>
                        </View>
                        <View style={[styles.row, styles.spaceBetweenVertical, marginPosition(0, 20, 10, 20), paddingPosition(0, 0, 10, 0), borderWidth(0, 0, 0, .8, 0), styles.borderGray]}>
                            <Text style={[styles.fontwhite, fontSize(15)]}>Log Date</Text>
                            <Text style={[styles.fontwhite, fontSize(15)]}>P-MD</Text>
                            <Text style={[styles.fontwhite, fontSize(15)]}>A-MD</Text>
                            <Text style={[styles.fontwhite, fontSize(15)]}>voltage</Text>
                        </View>
                        <View style={[styles.centerHorizontal]}>
                            <Text style={[fontSize(12), styles.green]}>A-MD-Assigned MD, P-MD-Peak MD</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </DrawerScreenWrapper >
    )
}
export default MDI
